chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getTabUrl") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const tabUrl = tab.url;
      chrome.runtime.sendMessage({ action: "sendTabUrl", tabUrl });
    });
  }
});
