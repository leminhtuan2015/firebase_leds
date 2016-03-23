//npm install --savedev johnny-five
//npm install firebase --save

var Five = require("johnny-five");
var Firebase = require("firebase");

var board = new Five.Board();
var fb = new Firebase("https://leds.firebaseio.com/");

// hardware objects with states
var led1, led2, led3;
var on = 1, off = 0;  // 0: off, 1: on

// reset firebase data
fb.update({'led1': off, 'led2': off, 'led3': off});

board.on("ready", function () {
    led1 = new Five.Led(7);
    led2 = new Five.Led(9);
    led3 = new Five.Led(10);

    led1.stop().off();
    led2.stop().off();
    led3.stop().off();

    listenEvent();

});

var listenEvent = function () {
    fb.child('led1').on('value', function (snapshot) {
        changeLed(led1, snapshot.val(), 'led1');
    });

    fb.child('led2').on('value', function (snapshot) {
        changeLed(led2, snapshot.val(), 'led2');
    });

    fb.child('led3').on('value', function (snapshot) {
        changeLed(led3, snapshot.val(), 'led3');
    });
};

var changeLed = function(led, value, ledName){
    switch (value){
        case 0:
            led.stop().off();
            console.log(ledName + " off");
            break;
        default :
            led.on();
            console.log(ledName + " on");
            break;
    }
};