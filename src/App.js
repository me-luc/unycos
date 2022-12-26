import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UserContext from "./context/UserContext";

import { useState } from "react";
import Slider from "./components/slider/Slider";
import Highlight from "./components/highlight/Highlight";
import LessonPlan from "./components/lesson-plan/LessonPlan";

export default function App() {
	const [auth, setAuth] = useState(false);
	const userName = "Mary";

	return (
		<UserContext.Provider value={{ auth, setAuth, userName }}>
			<StyledPage>
				<Header />
				<Highlight />
				{/* <Slider /> */}
				<LessonPlan />
				<Footer />
			</StyledPage>
		</UserContext.Provider>
	);
}

const StyledPage = styled.div`
	background-color: #000;
	color: #fff;
	width: 100vw;
	height: auto;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;
	overflow-y: scroll;

	@media (max-width: 450px) {
	}
`;
