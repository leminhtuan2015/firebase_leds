//npm install --savedev johnny-five
//npm install firebase --save

var Firebase = require("firebase");
var fb = new Firebase("https://leds.firebaseio.com/");


var listenEvent = function () {
    fb.child('led1').on('value', function (snapshot) {
        changeLed(snapshot.val(), 'led1');
    });

    fb.child('led2').on('value', function (snapshot) {
        changeLed(snapshot.val(), 'led2');
    });

    fb.child('led3').on('value', function (snapshot) {
        changeLed(snapshot.val(), 'led3');
    });
};

var changeLed = function(value, ledName){
    switch (value){
        case 0:
            console.log(ledName + " off");
            break;
        default :
            console.log(ledName + " on");
            break;
    }
};

listenEvent();