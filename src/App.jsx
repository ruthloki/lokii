import { useState } from "react";
import "./App.css";

function App() {
  const [text,setText]= useState("");
  const [results, setResults] = useState([]);
  console.log(results)
  return <>
  <div class="loki">
  <h1>** WELCOME TO THE SPATANS** </h1>
  <input type="text" placeholder="Enter to search" onChange={(e) => setText(e,EventTarget.value)} />
  <button 
    onClick={() => {
      fetch("/api/search?text=" + text)
      .then((response) => {
        response
        .json()
        .then((results) => setResults(results))
        .catch((error) => console.error("Failed to search!", error));
      })
      .catch((error) => console.error("Failed to search", error));
    }}
    >
      Search
    </button>
    </div>

    <ul>
        {
          results.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank">
                {item.title}
                {item.url}
              </a>
            </li>
          ))
          
        }
      </ul>


    
  </>
};

export default App;