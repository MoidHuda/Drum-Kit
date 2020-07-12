var buttonList = document.querySelectorAll(".drum");

function Channel(audio_uri) {
    this.audio_uri = audio_uri;
    this.resource = new Audio(audio_uri);
}

Channel.prototype.play = function() {
    // Try refreshing the resource altogether
    this.resource.play();
}

function Switcher(audio_uri, num) {
    this.channels = [];
    this.num = num;
    this.index = 0;

    for (var i = 0; i < num; i++) {
        this.channels.push(new Channel(audio_uri));
    }
}

Switcher.prototype.play = function() {
    this.channels[this.index++].play();
    this.index = this.index < this.num ? this.index : 0;
}

class Sound {
	// var self = {};

    constructor() {
        this.sfx_switcher_tom1 = new Switcher('sounds/tom-1.mp3', 10);
        this.sfx_switcher_tom2 = new Switcher('sounds/tom-2.mp3', 10);
        this.sfx_switcher_tom3 = new Switcher('sounds/tom-3.mp3', 10);
        this.sfx_switcher_tom4 = new Switcher('sounds/tom-4.mp3', 10);
        this.sfx_switcher_snare = new Switcher('sounds/snare.mp3', 10);
        this.sfx_switcher_crash = new Switcher('sounds/crash.mp3', 10);
        this.sfx_switcher_bass = new Switcher('sounds/kick-bass.mp3', 10);
    }
	playtom1() {
		this.sfx_switcher_tom1.play();
	}
	playtom2() {
		this.sfx_switcher_tom2.play();
	}
	playtom3() {
		this.sfx_switcher_tom3.play();
	}
	playtom4() {
		this.sfx_switcher_tom4.play();
	}
	playsnare() {
		this.sfx_switcher_snare.play();
	}
	playbass() {
		this.sfx_switcher_bass.play();
	}
	playcrash() {
		this.sfx_switcher_crash.play();
	}
};
// var tom1 = new Audio("sounds/tom-1.mp3")
// var tom2 = new Audio("sounds/tom-2.mp3")
// var tom3 = new Audio("sounds/tom-3.mp3")
// var tom4 = new Audio("sounds/tom-4.mp3")
// var snare = new Audio("sounds/snare.mp3")
// var crash = new Audio("sounds/crash.mp3")
// var kick = new Audio("sounds/kick-bass.mp3")
var myInstruments = new Sound()

function makeSound(key) {
    switch (key) {
        case "w":
            myInstruments.playtom1();
            break;
        case "a":
            myInstruments.playtom2();
        break;
        case "s":
            myInstruments.playtom3();
            break;
        case "d":
            myInstruments.playtom4();
            break;
        case "j":
            myInstruments.playsnare();
            break;
        case "k":
            myInstruments.playcrash();
            break;
        case "l":
            myInstruments.playbass();
            break;
    
        default:
            break;
    }
}

function buttonAnimation (key) {
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100)
}

for (var i = 0; i<buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});