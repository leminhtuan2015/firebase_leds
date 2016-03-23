//npm install firebase --save
var Firebase = require("firebase");
var fb = new Firebase("https://leds.firebaseio.com/");
fb.set({led1: 1, led2: 1, led3: 1})
fb.update({led1: 0})