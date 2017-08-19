'use strict';
const config = require('./config');
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
    if(this.event + ' ' + data === 'key.pressed Numpad 0') {
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
    toggleClick = !toggleClick
  } else {
    robot.mouseToggle('up'); 
    toggleClick = !toggleClick
  }
}

let toggleRun = true;

function autoRun() {
  if(toggleRun) {
    robot.keyToggle('w', 'down');
    robot.keyToggle('shift', 'down'); 
    toggleRun = !toggleRun
  } else {
    robot.keyToggle('w', 'up');
    robot.keyToggle('shift', 'up'); 
    toggleRun = !toggleRun
  }
}

let moleMode = true;
let advanceInterval;
function moleMode() {
  if(moleMode) {
    robot.mouseToggle('down'); 
    advanceInterval = setInterval(function(){
      robot.setKeyboardDelay(300);
      robot.keyToggle('w', 'down');
      robot.keyToggle('w', 'up');
    }, 1000);
  } else {
    clearInterval(advanceInterval);
    robot.mouseToggle('up'); 
  }
}

function tpBase() {
  robot.setKeyboardDelay(800);
  robot.keyTap('f1');
  robot.typeString(`tp ${config.base.x} ${config.base.z}`);
  robot.keyTap('enter');
  robot.keyTap('f1');
}


