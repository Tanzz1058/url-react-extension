import "./App.css";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [url, setUrl] = useState("");
  const getUrl = async () => {
    const [tab] = await chrome.tabs.query({
      queryInfo: { active: true, currentWindow: true },
    });
    setUrl(tab.url);
  };

  useEffect(() => {
    const handleMessage = (message) => {
      if (message.action === "sendTabUrl") {
        setUrl(message.tabUrl);
      }
    };

    chrome.runtime.onMessage.addListener(handleMessage);

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);

  return (
    <div className="App">
      <input type="text" value={url} readOnly={true} className="urlInput" />
    </div>
  );
}

export default App;
