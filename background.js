  chrome.runtime.onInstalled.addListener(function() {

      chrome.storage.sync.set({color: '#E8CC78'});

        chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
          chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                  pageUrl: {hostContains: 'mcckc.edu'},
                }),
            ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
          }]);
        });
  });