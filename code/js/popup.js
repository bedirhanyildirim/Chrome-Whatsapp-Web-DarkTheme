'use strict';

let changeMode = document.getElementById('checkbox1');
var darkModeValue = null;

//chrome.storage.sync.get('color', function(data) {
//    changeColor.style.backgroundColor = data.color;
//    changeColor.setAttribute('value', data.color);
//});

chrome.storage.sync.get('darkMode', function(data) {
    if (data.darkMode == undefined) {
        chrome.storage.sync.set({darkMode: true}, function() {
            darkModeValue = true;
        });
    }
});

/*changeMode.onchange = function(el) {
    darkModeValue = el.target.checked;
    console.log(darkModeValue);
    chrome.storage.sync.set({darkMode: darkModeValue});
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: `var link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.type = 'text/css'; 
                    link.href = '../css/content.css';
                    document.getElementsByTagName('HEAD')[0].appendChild(link);`} 
        );
    });
}*/


/*changeMode.onclick = function(element) {
    var mode = changeMode.checked;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        mode = changeMode.checked;
        chrome.tabs.executeScript(
            tabs[0].id,
            //{code: 'document.body.style.backgroundColor = "' + color + '";'}
            //{code: 'document.getElementById("app").firstChild.style.backgroundColor = "#1e1e1e"'}
            //{code: `console.log("hi :)");`}
            {code: 'console.log("'+mode+'")'}
        );
    });
};*/