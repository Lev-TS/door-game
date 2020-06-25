const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const startButton = document.getElementById('start');
const currentStreak = document.getElementById('current')
const bestStreak = document.getElementById('best')
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let currentlyPlaying = true;
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentStreakCount = 0;
let bestStreakCount = 0;

function randomChoreDoorGenerator () {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
      openDoor1 = spaceDoorPath;
      openDoor2 = botDoorPath;
      openDoor3 = beachDoorPath;
  } else if (choreDoor === 2) {
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = botDoorPath;
  };
};

function playDoor (door) {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        currentStreakCount++;
        if (currentStreakCount > bestStreakCount) {
            bestStreakCount = currentStreakCount;
        };
        gameOver('win')
    } else if (isBot(door) === true) {
        currentStreakCount = 0;
        gameOver('lost');
    };
};

function isClicked (door) {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true
    };
};

function isBot (door) {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    };
};

doorImage1.onclick = function () {
    if (!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
    playDoor(doorImage1);
    };
};


doorImage2.onclick = function () {
    if (!isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
    playDoor(doorImage2);
    };
};


doorImage3.onclick = function () {
    if (!isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
    playDoor(doorImage3);
    };
};

startButton.onclick = function () {
    if (!currentlyPlaying) {
        startRound()
    };
}

function streak () {
 
};

function startRound () {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = 'Good luck!';
    randomChoreDoorGenerator();
};

function gameOver (status) {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else if (status === 'lost') {
        startButton.innerHTML = 'Game Over! Play again?';
    };
    currentlyPlaying = false;
    currentStreak.innerHTML = currentStreakCount;
    bestStreak.innerHTML = bestStreakCount;
};

startRound ()

