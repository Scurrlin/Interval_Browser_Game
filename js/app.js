const Intervals = {
    'Piano': [
      { note: 'C',  octave: 3, file: 'TBD_Sample.mp3' },
      { note: 'C#',  octave: 3, file: 'TBD_Sample.mp3'},
      { note: 'D',  octave: 3, file: 'TBD_Sample.mp3' },
      { note: 'D#',  octave: 3, file: 'TBD_Sample.mp3' },
      { note: 'E',  octave: 3, file: 'TBD_Sample.mp3' },
      { note: 'F',  octave: 3, file: 'TBD_Sample.mp3' },
      { note: 'F#',  octave: 3, file: 'TBD_Sample.mp3' },
      { note: 'G',  octave: 3, file: 'TBD_Sample.mp3' },
      { note: 'G#',  octave: 3, file: 'TBD_Sample.mp3' },
      { note: 'A',  octave: 3, file: 'TBD_Sample.mp3' },
      { note: 'A#',  octave: 3, file: 'TBD_Sample.mp3' },
      { note: 'B',  octave: 3, file: 'TBD_Sample.mp3' }
      { note: 'C',  octave: 4, file: 'TBD_Sample.mp3' },
      { note: 'C#',  octave: 4, file: 'TBD_Sample.mp3'},
      { note: 'D',  octave: 4, file: 'TBD_Sample.mp3' },
      { note: 'D#',  octave: 4, file: 'TBD_Sample.mp3' },
      { note: 'E',  octave: 4, file: 'TBD_Sample.mp3' },
      { note: 'F',  octave: 4, file: 'TBD_Sample.mp3' },
      { note: 'F#',  octave: 4, file: 'TBD_Sample.mp3' },
      { note: 'G',  octave: 4, file: 'TBD_Sample.mp3' },
      { note: 'G#',  octave: 4, file: 'TBD_Sample.mp3' },
      { note: 'A',  octave: 4, file: 'TBD_Sample.mp3' },
      { note: 'A#',  octave: 4, file: 'TBD_Sample.mp3' },
      { note: 'B',  octave: 4, file: 'TBD_Sample.mp3' }
      { note: 'C',  octave: 5, file: 'TBD_Sample.mp3' },
    ]
  };


  //https://github.com/teropa/musicforairports.js/blob/master/src/musicforairports.js

// const items = [1, 2, 3, 4, 5];
// cost newItems = [];

// for (let i = 0; i < 3; i++) {
//   let idx = Math.floor(Math.random() * items.length);
//   newItems.push(items[idx]);
//   items.splice(idx, 1);
// }

// console.log(newItems);

// function alertMe {
//   alert('play note for certain duration')
// }
// const timerId = setInterval(alertMe, 5000, parameter1, parameter2)

// clearInterval(timerId)

//https://www.youtube.com/watch?v=GhePFBkdNYk

//possible reference code

// const synth = new Tone.Synth().toMaster();

// const music = [{"time": 0, "note": "A4", "duration": "16n"},
//          ......
//          {"time": 23.5, "note": "A4", "duration": "8n"},
//          {"time": 24, "note": "G4", "duration": "4n"}];

// function playMusic(){
//     let part = new Tone.Part(function(time, note){
//         //the notes given as the second element in the array
//         //will be passed in as the second argument
//         console.log(note);
//         synth.triggerAttackRelease(note.note, note.duration, time);
//     }, music).start(0);

//     Tone.Transport.start();
// }
