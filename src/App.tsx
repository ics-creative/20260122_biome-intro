import { useState } from "react";
import { useEffect } from "react";  // biome checkによってuseStateとまとめられる
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const message = "Click Me!";

	const unusedObject = {
		"keyA": "valueA",
		"π": 3.14,  // Prettierではダブルクウォートが外れないが、Biomeでは外れる
	};

  return (
    <>
      <h1>{message}</h1><button
        type="button"
        className="tree"
        onClick={() => {setCount((prev) => prev + 1);;}}
      >
        🌲
      </button>
                    <div className="count">count is {count}</div>
    </>
  );
}

export default App;