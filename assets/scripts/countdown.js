// TODO
// [x] disable game when timer is not going
// [x] Hide start button after click
// [x] Show results and retry button when round is over
// [ ] Countdown at start (3..2..1..)
// [x] have total count in score
// [x] show highest score

let selectTime = document.querySelector('.countdown-time');
var timerDisplay = document.querySelector('.timer');
var buttons = document.querySelectorAll('#buttons .btn');
var willFade = document.querySelectorAll('.will-fade');
var timerValue = selectTime.value;
var attempts = 0;
var scoreList = [];
var points = 0;

// Random number generator
let randomGenerator = (num) => {
  return Math.floor(Math.random() * num);
};

// Create random number to become target value
let problem = () => {
  let arr = [],
      ran1 = randomGenerator(100),
      ran2 = randomGenerator(100);

  arr[0] = ran1;
  arr[1] = ran2;

  return arr;
};

// Shuffle values
let shuffle = (arr) => {
  for (let i = arr.length-1; i >=0; i--) {
      let randomIndex = Math.floor(Math.random()*(i+1));
      let itemAtIndex = arr[randomIndex];

      arr[randomIndex] = arr[i];
      arr[i] = itemAtIndex;
  }
  return arr;
};

//Set game and play logic
initilizeGame = () => {
  let sum,
      arr,
      btn,
      shuffled;

  let setGame = () => {
    let button1 = document.querySelector('.button1'),
        button2 = document.querySelector('.button2'),
        button3 = document.querySelector('.button3'),
        button4 = document.querySelector('.button4');
    arr = problem();

    // Get the target value
    arr.reduce((total, num) => {
      sum = total + num;
    });

    // Set the target value
    document.querySelector('.problem').innerHTML = sum;

    // Get Button Values
    btn = [arr, problem(), problem(), problem()];
    shuffled = shuffle(btn);

    // Set Button Values | todo: loop these
    button1.innerHTML = `${shuffled[0][0]} + ${shuffled[0][1]}`;
    button1.dataset.total = `${shuffled[0][0] + shuffled[0][1]}`;

    button2.innerHTML = `${shuffled[1][0]} + ${shuffled[1][1]}`;
    button2.dataset.total = `${shuffled[1][0] + shuffled[1][1]}`;

    button3.innerHTML = `${shuffled[2][0]} + ${shuffled[2][1]}`;
    button3.dataset.total = `${shuffled[2][0] + shuffled[2][1]}`;

    button4.innerHTML = `${shuffled[3][0]} + ${shuffled[3][1]}`;
    button4.dataset.total = `${shuffled[3][0] + shuffled[3][1]}`;
  };

  // Initialize Game
  setGame();

  [].forEach.call(buttons, function(btn) {
    btn.addEventListener('click', function(){
      let choice = +this.dataset.total,
          answer = arr.reduce((a, b) => a + b, 0);
          attempts++;

      if (choice === answer) {
        setGame();
        points++;
      } else {
        setGame();
      }
      setPoints();
    });
  });
}

// Get selected duration
timerDisplay.innerHTML = timerValue;
selectTime.addEventListener('change', function() {
  timerValue = this.value;
  timerDisplay.innerHTML = timerValue;
})

// Game timer. Buttons are disabled after
gameTimer = (time) => {
  timerDisplay.innerHTML = time;

  if (time > 0) {
    setTimeout(function () {
      time--;
      gameTimer(time);
    }, 1000);
  } else {
    let scoreContainer = document.querySelector('.highest-score-container');
    let replaySelect = document.querySelector('.replay-select');

    // Show highest score
    scoreList.push(points);
    document.querySelector('.highest-score').innerHTML = Math.max.apply(Math, scoreList);
    scoreContainer.style.display = 'block';

    // Diable buttons
    [].forEach.call(buttons, function(btn) {
      btn.disabled = true;
    });

    // Fade out text
    [].forEach.call(willFade, function(el) {
      el.style.opacity = .25;
    });

    // Show replay modal
    document.querySelector('.replay-modal').style.display = 'block';
    document.querySelector('.replay-btn').addEventListener('click', function() {
      resetGame();
    })

    // Set timerValue
    replaySelect.value = timerValue;
    replaySelect.addEventListener('change', function() {
      timerValue = this.value;
      timerDisplay.innerHTML = timerValue;
    })
  }
};

// Start game modal
document.querySelector('.start-countdown').addEventListener('click', function() {
  document.querySelector('.countdown-modal').style.display = 'none';
  initilizeGame();
  gameTimer(timerValue);
})

setPoints = () => {
  return document.querySelector('.score').innerHTML = `${points} / ${attempts}`;
}

// Reset game
resetGame = () => {
  attempts = 0;
  points = 0;

  // set points
  setPoints();

  // Enable Buttons
  [].forEach.call(buttons, function(btn) {
    btn.disabled = false;
  });

  // Fade in text
  [].forEach.call(willFade, function(el) {
    el.style.opacity = 1;
  });

  // hide reset modal
  document.querySelector('.replay-modal').style.display = 'none';
  let replaySelect = document.querySelector('.replay-select');
  replaySelect.value = timerValue;

  // start game
  gameTimer(timerValue)
}
