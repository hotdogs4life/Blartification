chrome.tabs.onUpdated.addListener(executeBlartification);

function executeBlartification(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete") {
        chrome.tabs.executeScript(
            tabId,
            {
                js: 'blartify();'
            }
        );
    };
}