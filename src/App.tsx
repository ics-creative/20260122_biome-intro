import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Click Me!</h1>
			<button
				type="button"
				className="tree"
				onClick={() => {
					setCount(count + 1);
				}}
			>
				🌲
			</button>
			<div className="count">count is {count}</div>
		</>
	);
}

export default App;
