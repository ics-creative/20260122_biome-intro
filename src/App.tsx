import { useState } from "react";
import { useEffect } from "react"; // biome checkでまとめられる
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const message = "Click Me!";

  const unusedObject = {
    "A": "アルファベットのA",
    "𐊠": "カリア文字のA", // Biomeでは引用符が外れる
  };

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
