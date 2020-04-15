'use strict';

var darkMode = null;

chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.get('darkMode', function(data) {
        if (data.darkMode == undefined) {
            chrome.storage.sync.set({darkMode: true}, function() {
                darkMode = true;
                console.log("First time set!");
            });
        } else {
            darkMode = data.darkMode;
        }
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'web.whatsapp.com'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});