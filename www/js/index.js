var start =  false,
	Log = console;


// Wait for device API libraries to load
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
}

function onPause(){
	console.log("device Pause");
}

function onResume(){
	console.log("device resume");
}

// device APIs are available
function onDeviceReady() {
	//waiting 3 second and do it on background
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



$(document).ready(function(){
	console.log(">console");
	window.console.log(">win.console");
	LOG.log(">LOG");
});