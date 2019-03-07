  chrome.runtime.onInstalled.addListener(function() {

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
        	new chrome.declarativeContent.PageStateMatcher({
        	  pageUrl: {pathContains: 'code'},
        	}),
        	new chrome.declarativeContent.PageStateMatcher({
        	  pageUrl: {hostContains: 'mcckc.edu'},
        	}),
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });