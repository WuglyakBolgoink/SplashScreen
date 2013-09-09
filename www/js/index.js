var start =  false;


// Wait for device API libraries to load
    document.addEventListener("deviceready", onDeviceReady, false);
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);

function onPause(){
	console.log("device Pause");
}

function onResume(){
	console.log("device resume");
}

// device APIs are available
function onDeviceReady() {
	setTimeout(function() {
		navigator.splashscreen.hide();
	},3000);

	console.log('device ready');
        var parentElement = document.getElementById("deviceready");
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
}



//$(function(){
//	window.console.log("drin");
////	alert("s");
//});

//function onDeviceReady() {
//
//setTimeout(function() {
//// interval timer each 1 second
//var i = 1,
//tik = setInterval(function() {
//		console.log('tik',i);
//		i++;
//}, 1000);
//		//close Splash
//        navigator.splashscreen.hide();
//		console.log('close splash');
//		// remove timer
//		window.clearInterval(tik);
//		start = true;
//}, 5000);
//
//	console.log('Received Event: device READY');
//	console.log('show splash 5 sek');
//
//
//	if (start) {
//        var parentElement = document.getElementById("deviceready");
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//	} else {
//		navigator.splashscreen.show();
//	}
//}



