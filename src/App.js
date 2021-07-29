import React from "react";
import "./App.css";
import { Cat } from "./components/Cat";
import { Todos } from "./components/Todos";

function App() {
	return (
		<section className="main" >
			<Cat/>
			<Todos/>
		</section>
	);
}
export default App;
