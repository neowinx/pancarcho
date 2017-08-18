'use strict';
const ioHook = require('iohook');
const robot = require("robotjs");

let toggleClick = true;
 
ioHook.on("mousemove", event => {
  console.log(event);
});

ioHook.on("keydown", event => {
  console.log(event);
  if(event.keycode === 68) {
    if(toggleClick) {
     robot.mouseToggle('down'); 
     toggleClick = !toggleClick
    } else {
     robot.mouseToggle('up'); 
     toggleClick = !toggleClick
    }
  }
});

ioHook.start();
