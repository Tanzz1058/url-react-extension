chrome.runtime.sendMessage({ action: "getTabUrl" });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "sendTabUrl") {
    const tabUrl = message.tabUrl;
    sendResponse({ success: true });
  }
});
