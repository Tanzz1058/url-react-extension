/*global chrome*/
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const handleMessage = (message) => {
    console.log(message);
    chrome.runtime.sendMessage({ action: "getTabUrl" }, (response) => {
      console.log(response);
      const { tabUrl } = response;
      setUrl(tabUrl);
    });
  };
  useEffect(() => {
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
