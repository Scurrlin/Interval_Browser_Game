let questions = [];
let answers = [];
let questionIndex = 0;
let correctAnswers = 0;
let questionCount = 10;
let beginTime = "";
let lastId;


let playInterval = function( id ){
   if(lastId){
    document.getElementById(lastId).pause();
   }
   document.getElementById(id).play();
   lastId = id
}

let generateTest = function(){
    show("questionArea");
    hide("startButton");
    show("message", "&nbsp");
    questions = [];
    answers = [];
    questionIndex = 0;
    correctAnswers = 0;

    for( let question = 0; question < questionCount; question++ )
    {
      let interval = getRandomInterval();
      questions[question] = interval.code + getRandomIndex();
      answers[question] = interval;
    }

    beginTime = Date.now();
    nextQuestion();
}

let nextQuestion = function()
{
  show("questionIndex", "Step " + ( questionIndex + 1 ) + " of " + questionCount );
  playInterval( questions[questionIndex] );
}

let confirmAnswer = function()
{
  evaluateAnswer();
  questionIndex++;
  if( questionIndex < questionCount )
  {
    nextQuestion();
  }
  else
  {
    finishGame();
  }
}

let evaluateAnswer = function() {

  let id = document.getElementById("answer").value;
  let interval = getInterval( id );
  if( interval.code === answers[questionIndex].code)
  {
    correctAnswers++;
    show("message", "&nbsp");
  }
  else
  {
    show("message", "Nay! The correct answer was: " + answers[questionIndex].name );
  }
}

let finishGame = function()
{
  show("startButton");
  hide("questionArea");
  let highScoreMessage = "You didn't beat your high score. ";
  let delta = Date.now() - beginTime;
  let completionSeconds = Math.floor(delta / 1000);
  if( saveHighScore( completionSeconds ) )
  {
    highScoreMessage = "New high score! ";
  }

  show( "message", highScoreMessage + "You got " + correctAnswers +
    " out of " + questionCount + " correct in " + completionSeconds + " seconds." );
}

let saveHighScore = function( completionSeconds )
{
  let highScore = false;
  let score = localStorage.getItem('score');
  let time = localStorage.getItem('time');
  if( correctAnswers > score || ( correctAnswers >= score && completionSeconds < time ) )
  {
    localStorage.setItem('score', correctAnswers);
    localStorage.setItem('time', completionSeconds);
    highScore = true;
  }
  return highScore;
}


let replayInterval = function()
{
  playInterval( questions[questionIndex] );
}

let getRandomInterval = function()
{
  let interval = getRandomInteger( 0, 12 );
  return getInterval( interval );
}

let show = function( id, value )
{
  let element = document.getElementById(id);
  element.style.display = "";
  if( value !== undefined )
  {
    element.innerHTML = value;
  }
}

let hide = function( id )
{
  document.getElementById(id).style.display = "none";
}

let getInterval = function( id )
{
  startId = id
  id = id + "";
  let interval = { code: "Msecond", name: "Major Second" }
  switch( id )
  {
    case "0":
      interval = { code: "Msecond", name: "Major Second" };
      break;
    case "1":
      interval = { code: "msecond", name: "Minor Second"};
      break;
    case "2":
      interval = { code: "Mthird", name: "Major Third" };
      break;
    case "3":
      interval = { code: "mthird", name: "Minor Third"};
      break;
    case "4":
      interval = { code: "fourth", name: "Perfect Fourth" };
      break;
    case "5":
      interval = { code: "tritone", name: "Tritone" };
      break;
    case "6":
      interval = { code: "fifth", name: "Perfect Fifth" };
      break;
    case "7":
      interval = { code: "Msixth", name: "Major Sixth" };
      break;
    case "8":
      interval = { code: "msixth", name: "Minor Sixth" };
      break;
    case "9":
      interval = { code: "Mseventh", name: "Major Seventh" };
      break;
    case "10":
      interval = { code: "mseventh", name: "Minor Seventh" };
      break;
    case "11":
      interval = { code: "octave", name: "Octave" };
      break;
    default:
        
    }

    return interval;
}

let getRandomIndex = function()
{
	return getRandomInteger( 0, 2 );
}

let getRandomInteger = function( min, max )
{
	return Math.floor( Math.random() * ( max - min ) ) + min;
}
