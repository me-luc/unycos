import styled from "styled-components";
import UserContext from "./context/UserContext";
import { useState } from "react";
import * as Component from "./components/index";

export default function App() {
	const [auth, setAuth] = useState(false);
	const userName = "Mary";

	return (
		<UserContext.Provider value={{ auth, setAuth, userName }}>
			<StyledPage>
				<Component.Header />
				<Component.Highlight />
				<Component.Slider />
				<Component.LessonPlan />
				<Component.MoreCourses />
				<Component.Form />
				<Component.Comments />
				<Component.RelatedArticles />
				<Component.ReadMore />
				<Component.Footer />
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
	align-items: center;
	flex-direction: column;
	overflow-y: scroll;

	@media (max-width: 450px) {
	}
`;
