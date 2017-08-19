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
  // Listen to all key events (pressed, released, typed)
  gkm.events.on('key.*', function(data) {
      console.log(this.event + ' ' + data);
      if(this.event + ' ' + data === 'key.pressed F10') {
        autoClick();
      }
  });

  // Listen to all mouse events (click, pressed, released, moved, dragged)
  // gkm.events.on('mouse.*', function(data) {
  //   console.log(this.event + ' ' + data);
  // });
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