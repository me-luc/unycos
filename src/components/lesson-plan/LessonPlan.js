import styled from "styled-components";
import Lesson from "./Lesson";
import { content } from "../../constants/data";

export default function LessonPlan() {
	return (
		<Page>
			<BlushStyle>
				<StyledButton>VER TODOS</StyledButton>
			</BlushStyle>
			{content.map((item, index) => {
				return (
					<>
						{index !== 0 && index !== content.length && <Line />}
						<Lesson
							title={item.title}
							description={item.description}
							number={index}
							key={index}
						/>
					</>
				);
			})}
		</Page>
	);
}

const Page = styled.ul`
	width: 945px;
	height: 805px;
	background-color: #f6f4ef;
	border-radius: 4px;
	position: relative;

	margin-bottom: 45px;
`;

const BlushStyle = styled.div`
	width: 100%;
	height: 125px;
	position: absolute;
	bottom: 0;
	left: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background: linear-gradient(
		360deg,
		#f6f4ef 38.89%,
		rgba(246, 244, 239, 0.5) 100%
	);
`;

const StyledButton = styled.button`
	width: 180px;
	height: 40px;
	border: 2px solid #1d1a05;
	border-radius: 4px;
	background-color: #f6f4ef;
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #1d1a05;
	cursor: pointer;
`;

const Line = styled.div`
	width: 880px;
	height: 1px;
	background-color: #d8d7ce;
	margin: 20px 20px;
`;
