import axios from "axios";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UserContext from "./context/UserContext";
import DATA_URL from "./constants/URL.js";
import { useState } from "react";

export default function App() {
	// const request = axios
	// 	.get(URL, {
	// 		headers: {
	// 			"x-mejor-key": "unycos",
	// 		},
	// 	})
	// 	.then((answer) => console.log(answer))
	// 	.catch((answer) => console.log(answer));

	const [auth, setAuth] = useState(false);
	const userName = "Mary";

	return (
		<UserContext.Provider value={{ auth, setAuth, userName }}>
			<StyledPage>
				<Header />
				<Footer />
			</StyledPage>
		</UserContext.Provider>
	);
}

const StyledPage = styled.div`
	background-color: #000;
	color: #fff;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (max-width: 450px) {
	}
`;
