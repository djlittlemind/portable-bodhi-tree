
// set color of sample button to match color stored in chrome.storage
var sampleBox = document.getElementById("sampleColor");

chrome.storage.sync.get('color', function(data) {
    sampleBox.style.backgroundColor = data.color;
    }
);


var allButtons = document.querySelectorAll(".color_button");

for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', changeCurrentColor, false);
}


function changeCurrentColor() {
    var selectedButton = document.getElementById(this.id);
    var windowStyle = window.getComputedStyle(selectedButton);
    var sBStyle = windowStyle.getPropertyValue('background-color');

    // set color of sample button to match color of button that was clicked
    var sample = document.getElementById("sampleColor");
    sample.style.backgroundColor = sBStyle;

    chrome.storage.sync.set({color: sBStyle});

    //update current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
                {code:
                        'chrome.storage.sync.get("color", function(data) {document.body.style.backgroundColor = data.color;' +
                        'document.getElementById("ptifrmcontent").style.borderStyle = "solid";' +
                        'document.getElementById("ptifrmcontent").style.borderColor = data.color;});'
                }
            );
    });

}

