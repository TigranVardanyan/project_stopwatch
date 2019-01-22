'use strict';


var time = 0;
var sec = 0;
var min = 0;
var hour = 0;
var timer = 0;
var timeSec = document.getElementById('sec');
var timeMin = document.getElementById('min');
var timeHour = document.getElementById('hour');
var pos = 0;
var timerId;

function start() {
	document.getElementById("go").style.pointerEvents = 'none';
	var timeStart = Math.round((new Date()).getTime()/1000);
	timerId = setInterval(function() {
		var timeNow = Math.round((new Date()).getTime()/1000);
		time = timeNow - timeStart;
		sec = time % 60;
		min = ((time - time % 60) / 60) % 60;
		hour = ((time - time % 3600) / 3600 );
		// console.log(sec+" "+min+" "+hour);
		if (sec < 10) {
			timeSec.innerHTML = "0"+sec;
		} else {
			timeSec.innerHTML = sec;
		}
		if (min < 10) {
			timeMin.innerHTML = "0"+min;
		}else {
		timeMin.innerHTML = min;
		}
		if(hour < 10) {
			timeHour.innerHTML = "0"+hour;
		} else {
			timeHour.innerHTML = hour;
		}
	} , 1000);
}

function reset() {
	document.getElementById("go").style.pointerEvents = 'auto';
	setTimeout(function() {
		clearInterval(timerId);
	});
	time = 0;
	sec = "--";
	timeSec.innerHTML = sec;
	timeMin.innerHTML = sec;
	timeHour.innerHTML = sec;
}

