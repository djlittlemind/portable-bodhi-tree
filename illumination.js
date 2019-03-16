function illumination() {

	// var color = chrome.storage.sync.get('color');

	chrome.storage.sync.get('color', function(data) {
		document.body.style.backgroundColor = data.color;



		// document.body.style.backgroundColor = color;

		//database id text
		if (!!document.getElementsByClassName("greeting")){
			var greetingClass = document.getElementsByClassName("greeting");
			greetingClass[0].style.color = '#BC2095';
		}

		//image in upper left
		if (!!document.getElementById("pthdr2logoswan")){
			var imageUrl = chrome.runtime.getURL('images/tree_logo.png');
			document.getElementById("pthdr2logoswan").style.backgroundImage = 'url("' + imageUrl + '")';
			document.getElementById("pthdr2logoswan").style.backgroundRepeat = "no-repeat";
		}

		//frame border
		if (!!document.getElementById("ptifrmcontent")) {
			document.getElementById("ptifrmcontent").style.borderStyle = "solid";
			document.getElementById("ptifrmcontent").style.borderColor = data.color;

		}
	});
}

illumination();
