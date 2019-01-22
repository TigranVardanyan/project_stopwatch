var sec=0, min=0, hour=0;


// while(true) {
// 	if(sec<60) {
// 		setTimeout(sec++, 10000);
// 	}
// 	else{
// 		setTimeout(min++, 10000);
// 		sec = 0;
// 	}
// 	console.log(sec)
// }
function stopwatch() {
	if(sec<59) {
		sec++;
		document.getElementById('sec').innerHTML = "";
		if(sec<10) {
			document.getElementById('sec').innerHTML += "0"+sec;
		}
		else {
			document.getElementById('sec').innerHTML += sec;
		}
	}
	else if(min<59) {
		min++;
		sec = 0;
		document.getElementById('sec').innerHTML = "";
		document.getElementById('sec').innerHTML += "0"+sec;
		document.getElementById("min").innerHTML = "";
		if(min<10) {
			document.getElementById('min').innerHTML += "0"+min;
		}
		else {
			document.getElementById('min').innerHTML += min;
		}
	}
	else {
		hour++;
		min = 0;
		sec = 0;
		document.getElementById('sec').innerHTML = "";
		document.getElementById('sec').innerHTML += "0"+sec;
		document.getElementById('min').innerHTML = "";
		document.getElementById('min').innerHTML += "0"+min;
		document.getElementById('hour').innerHTML = "";
		document.getElementById('hour').innerHTML += "0"+hour;	
	}
}

function stop() {

}

function stopWatch() {
	setInterval(stopwatch , 1000)
}


// var timerID = setInterval(stopwatch , 1000);


