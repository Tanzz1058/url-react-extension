/*global chrome*/
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0 && tabs[0].url !== "chrome://newtab/") {
        setUrl(tabs[0].url);
      } else {
        setUrl("");
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Current URL:</h1>
      <input value={url} readOnly />
    </div>
  );
}

export default App;
