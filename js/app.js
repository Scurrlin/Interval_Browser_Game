//https://mitchum.blog/games/ear-trainer/
//^Pulled much of the basic framework  and functionality from the blog/accompanying git found in the website above

//I expanded the number of intervals from 5 to 12 and recorded my own intervals in Pro Tools which are stored in a local
//"Intervals" directory. At present, the mp3 files play each interval twice, but I plan to bounce new mp3 files that
//only play them once. This will not take long as the midi has already been tracked.

//The length of the current mp3 files presents an issue in that if you submit an answer in the drop down menu
//before the first mp3 is done playing, the next interval will begin over the top of the first one.
//An alternative solution to the one outlined above would be writing a function to stop the first interval once an
//answer is submitted; will explore this today before attempting to bounce new mp3 files.

let questions = [];
let answers = [];
let questionIndex = 0;
let correctAnswers = 0;
let questionCount = 10;

let playInterval = function( id )
{
    document.getElementById(id).play();
}

let generateTest = function()
{
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

let evaluateAnswer = function()
{
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
}

//Need to provide "win condition" function and "King's Approval" response based on ('score' >= 5)

let replayInterval = function()
{
    playInterval( questions[questionIndex] );
}

let getRandomInterval = function()
{
    let interval = getRandomInteger( 0, 9 );
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
    id = id + "";
    let interval = { code: "Msecond", name: "Major Second" }
    switch( id )
    {
      case "0":
        interval = { code: "Msecond", name: "Major Second" };
        break;
      case "1":
        interval = { code: "msecond", name: "Minor Second"}
        break;
      case "2":
        interval = { code: "Mthird", name: "Major Third" };
        break;
      case "3":
        interval = { code: "mthird", name: "Minor Third"}
        break;
      case "4":
        interval = { code: "fourth", name: "Perfect Fourth" }
        break;
      case "5":
        interval = { code: "tritone", name: "Tritone" }
        break;
      case "6":
        interval = { code: "fifth", name: "Perfect Fifth" }
        break;
      case "7":
        interval = { code: "Msixth", name: "Major Sixth" };
        break;
      case "8":
        interval = { code: "msixth", name: "Minor Sixth"}
        break;
      case "9":
        interval = { code: "Mseventh", name: "Major Seventh" }
        break;
      case "10":
        interval = { code: "mseventh", name: "Minor Seventh" }
        break;
      case "11":
        interval = { code: "octave", name: "Octave" }
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
