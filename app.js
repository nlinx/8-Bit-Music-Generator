angular.module("main", ["d3"])

.controller("sound", function($scope, data) {
  $scope.notesData = ["C0", "C#0", "Db0", "D0", "D#0",
  "Eb0", "E0", "F0", "F#0", "Gb0", "G0",
  "G#0", "Ab0", "A0", "A#0", "Bb0", "B0",
  "C1", "C#1", "Db1", "D1", "D#1", "Eb1",
  "E1", "F1", "F#1", "Gb1", "G1", "G#1",
  "Ab1", "A1", "A#1", "Bb1", "B1", "C2",
  "C#2", "Db2", "D2", "D#2", "Eb2", "E2",
  "F2", "F#2", "Gb2", "G2", "G#2", "Ab2",
  "A2", "A#2", "Bb2", "B2", "C3", "C#3",
  "Db3", "D3", "D#3", "Eb3", "E3", "F3",
  "F#3", "Gb3", "G3", "G#3", "Ab3", "A3",
  "A#3", "Bb3", "B3", "C4", "C#4", "Db4",
  "D4", "D#4", "Eb4", "E4", "F4", "F#4",
  "Gb4", "G4", "G#4", "Ab4", "A4", "A#4",
  "Bb4", "B4", "C5", "C#5", "Db5", "D5",
  "D#5", "Eb5", "E5", "F5", "F#5", "Gb5",
  "G5", "G#5", "Ab5", "A5", "A#5", "Bb5",
  "B5", "C6", "C#6", "Db6", "D6", "D#6",
  "Eb6", "E6", "F6", "F#6", "Gb6", "G6",
  "G#6", "Ab6", "A6", "A#6", "Bb6", "B6",
  "C7", "C#7", "Db7", "D7", "D#7", "Eb7",
  "E7", "F7", "F#7", "Gb7", "G7", "G#7",
  "Ab7", "A7", "A#7", "Bb7", "B7", "C8"
  ];
  angular.extend($scope, data);
})

.directive('d3orbs', ['d3Service', function(d3Service) {
  return {
    restrict: 'EA',
    link: function(scope, element, attrs) {
      d3Service.d3().then(function(d3) {
        d3.select(element[0]).selectAll("div")
        .data([scope.notes]).enter()
        .append("div")
        .style({
          'height': "" + Math.sqrt(window.outerHeight * (window.outerWidth - 19) / 137) - 14 + "px",
          'width': "" + Math.sqrt(window.outerHeight * (window.outerWidth - 19) / 137) - 14 + "px",
          'background-color': 'black',
          'display': "inline-block"
        })
      });
    }};
  }])

.factory("data", function() {
  var notes = {
    'C0':16.35,'C#0':17.32,'Db0':17.32,'D0':18.35,'D#0':19.45,
    'Eb0':19.45,'E0':20.60,'F0':21.83,'F#0':23.12,'Gb0':23.12,
    'G0':24.50,'G#0':25.96,'Ab0':25.96,'A0':27.50,'A#0':29.14,
    'Bb0':29.14,'B0':30.87,'C1':32.70,'C#1':34.65,'Db1':34.65,
    'D1':36.71,'D#1':38.89,'Eb1':38.89,'E1':41.20,'F1':43.65,
    'F#1':46.25,'Gb1':46.25,'G1':49.00,'G#1':51.91,'Ab1':51.91,
    'A1':55.00,'A#1':58.27,'Bb1':58.27,'B1':61.74,'C2':65.41,
    'C#2':69.30,'Db2':69.30,'D2':73.42,'D#2':77.78,'Eb2':77.78,
    'E2':82.41,'F2':87.31,'F#2':92.50,'Gb2':92.50,'G2':98.00,
    'G#2':103.83,'Ab2':103.83,'A2':110.00,'A#2':116.54,'Bb2':116.54
    ,'B2':123.47,'C3':130.81,'C#3':138.59,'Db3':138.59,'D3':146.83,
    'D#3':155.56,'Eb3':155.56,'E3':164.81,'F3':174.61,'F#3':185.00,
    'Gb3':185.00,'G3':196.00,'G#3':207.65,'Ab3':207.65,'A3':220.00,
    'A#3':233.08,'Bb3':233.08,'B3':246.94,'C4':261.63,'C#4':277.18,
    'Db4':277.18,'D4':293.66,'D#4':311.13,'Eb4':311.13,'E4':329.63,
    'F4':349.23,'F#4':369.99,'Gb4':369.99,'G4':392.00,'G#4':415.30,
    'Ab4':415.30,'A4':440.00,'A#4':466.16,'Bb4':466.16,'B4':493.88,
    'C5':523.25,'C#5':554.37,'Db5':554.37,'D5':587.33,'D#5':622.25,
    'Eb5':622.25,'E5':659.26,'F5':698.46,'F#5':739.99,'Gb5':739.99,
    'G5':783.99,'G#5':830.61,'Ab5':830.61,'A5':880.00,'A#5':932.33,
    'Bb5':932.33,'B5':987.77,'C6':1046.50,'C#6':1108.73,
    'Db6':1108.73,'D6':1174.66,'D#6':1244.51,'Eb6':1244.51,
    'E6':1318.51,'F6':1396.91,'F#6':1479.98,'Gb6':1479.98,
    'G6':1567.98,'G#6':1661.22,'Ab6':1661.22,'A6':1760.00,
    'A#6':1864.66,'Bb6':1864.66,'B6':1975.53,'C7':2093.00,
    'C#7':2217.46,'Db7':2217.46,'D7':2349.32,'D#7':2489.02,
    'Eb7':2489.02,'E7':2637.02,'F7':2793.83,'F#7':2959.96,
    'Gb7':2959.96,'G7':3135.96,'G#7':3322.44,'Ab7':3322.44,
    'A7':3520.00,'A#7':3729.31,'Bb7':3729.31,'B7':3951.07,
    'C8':4186.01
  };
  var context = new AudioContext();
  var oscillator = context.createOscillator();
  oscillator.type = "square";
  oscillator.start(0);
  var gain = context.createGain();
  gain.gain.value = 0;

  var startNote = function() {
    console.log("hi")
    // get d3 data; d3 data will be the note values
    // var noteFrequency = this.notes[data]
    // this.oscillator.frequency.value = noteFrequency;
    // this.gain.gain.value = 1;
    // var frq = notes[e.currentTarget.id];
    // if (frq) {
    //   oscillator.frequency.setValueAtTime(frq, context.currentTime);
    //   volume.gain.value = 1;
    // }
  }
  var stopNote = function() {
    this.gain.gain.value = 0;
  }

  return {
    notes: notes,
    context: context,
    oscillator: oscillator,
    gain: gain,
    startNote: startNote,
    stopNote: stopNote
  }
})