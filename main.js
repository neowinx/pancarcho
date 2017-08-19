'use strict';
const config = require('./config');
const chalk = require('chalk');
const robot = require("robotjs");

console.log(config.hook);

if(config.hook === 'iohook') {
  const ioHook = require('iohook');  
  
  ioHook.on("mousemove", event => {
    console.log(event);
  });

  ioHook.on("keydown", event => {
    console.log(event);
    if(event.keycode === 68) {
      autoClick();
    }
  });

  ioHook.start();
}

if(config.hook === 'gkm') {
  const gkm = require("gkm");
  gkm.events.on('key.pressed', function(data) {
    //console.log(this.event + ' ' + data);
    if(this.event + ' ' + data === 'key.pressed F10') {
      tpBase();
    }
    if(this.event + ' ' + data === 'key.pressed NumPad 0') {
      moleMode();
    }
  });

  gkm.events.on('mouse.pressed', function(data) {
    //console.log(this.event + ' ' + data);
    if(this.event + ' ' + data === 'mouse.pressed 4') {
      autoClick();
    }
    if(this.event + ' ' + data === 'mouse.pressed 5') {
      autoRun();
    }
  });
}

let toggleClick = true;

function autoClick() {
  if(toggleClick) {
    robot.mouseToggle('down'); 
    toggleClick = !toggleClick;
    console.log(`${chalk.yellow('Auto Click')} ${chalk.green('started')}`);
  } else {
    robot.mouseToggle('up'); 
    toggleClick = !toggleClick;
    console.log(`${chalk.yellow('Auto Click')} ${chalk.red('stoped')}`);
  }
}

let toggleRun = true;

function autoRun() {
  if(toggleRun) {
    robot.keyToggle('w', 'down');
    robot.keyToggle('shift', 'down'); 
    toggleRun = !toggleRun;
    console.log(`${chalk.yellow('Auto Run')} ${chalk.green('started')}`);
  } else {
    robot.keyToggle('w', 'up');
    robot.keyToggle('shift', 'up'); 
    toggleRun = !toggleRun;
    console.log(`${chalk.yellow('Auto Run')} ${chalk.red('stoped')}`);
  }
}

let moleToggle = true;
let advanceInterval;
function moleMode() {
  if(moleToggle ) {
    robot.mouseToggle('down'); 
    advanceInterval = setInterval(function(){
      robot.setKeyboardDelay(300);
      robot.keyToggle('w', 'down');
      robot.keyToggle('w', 'up');
    }, 1000);
    moleToggle = !moleToggle;
    console.log(`${chalk.yellow('Mole mode')} ${chalk.green('started')}`);
  } else {
    clearInterval(advanceInterval);
    robot.mouseToggle('up'); 
    moleToggle = !moleToggle;
    console.log(`${chalk.yellow('Mole mode')} ${chalk.red('stoped')}`);
  }
}

function tpBase() {
  console.log(`Teleporting to base ${chalk.yellow(config.base.x)} ${chalk.yellow(config.base.z)}`);
  robot.setKeyboardDelay(800);
  robot.keyTap('f1');
  robot.typeString(`tp ${config.base.x} ${config.base.z}`);
  robot.keyTap('enter');
  robot.keyTap('f1');
}

console.log('Pancarcho started.');
console.log(`${chalk.yellow('Mouse 4')} -> Auto Click`);
console.log(`${chalk.yellow('Mouse 5')} -> Auto Run`);
console.log(`${chalk.yellow('F10')} -> Teleport to base`);
console.log(`${chalk.yellow('NumPad 0')} -> Mole mode\n`);