chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getTabUrl") {
    console.log(message);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const tabUrl = tab ? tab.url : "";
      console.log(tabUrl);
      sendResponse({ tabUrl });
    });
    return true;
  }
});
