import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import UserProfile from "./components/UserProfile";

function App() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Form />} />
				<Route
					path="/profile/:accountNumber/:selectedBank"
					element={<UserProfile />}
				/>
			</Routes>
		</main>
	);
}

export default App;
