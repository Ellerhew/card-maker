import "./app.css";
import Loginbox from "./components/loginbox";

function App() {
	const onClick = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
	};

	return (
		<>
			<Loginbox />
		</>
	);
}

export default App;
