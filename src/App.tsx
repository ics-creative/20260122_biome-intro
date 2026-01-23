import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const message = "Click Me!";

  return (
    <><h1>{message}</h1><button type="button" className="tree"
                    onClick={() => {setCount((prev) => prev + 1);;}}
      >
        🌲
      </button>
              <div className="count">count is {count}</div>
    </>
  );
}

export default App;
