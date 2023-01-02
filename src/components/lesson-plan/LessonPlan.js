import styled from "styled-components";
import Lesson from "./Lesson";
import { content } from "../../constants/data";

export default function LessonPlan() {
	return (
		<StyledSection>
			<Title desktop>LESSON PLAN</Title>
			<Title mobile>DESTAQUES del curso</Title>

			<LessonPage>
				<BlushStyle desktop>
					<StyledButton>VER TODOS</StyledButton>
				</BlushStyle>

				{content.map((item, index) => {
					return (
						<>
							{index !== 0 && index !== content.length && (
								<Line highlight={[0, 2, 4].includes(index)} />
							)}
							<Lesson
								title={item.title}
								description={item.description}
								number={index}
								key={index}
								highlight={[0, 2, 4].includes(index)}
							/>
						</>
					);
				})}
			</LessonPage>
		</StyledSection>
	);
}

function Lessons() {}

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LessonPage = styled.ul`
	width: 945px;
	height: 805px;
	background-color: #f6f4ef;
	border-radius: 4px;
	position: relative;

	margin-bottom: 45px;

	@media (max-width: 605px) {
		width: 100vw;
		height: auto;
		background: none;
	}
`;

const Title = styled.h2`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 28px;
	line-height: 32px;
	text-align: center;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #d8d7ce;
	margin-top: 25px;
	margin-bottom: 15px;

	${({ mobile }) => mobile && "display: none;"}

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
		${({ mobile }) => mobile && "display: block;"}
	}
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

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
	}
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

const Line = styled.hr`
	width: 880px;
	height: 1px;
	background-color: #d8d7ce;
	margin: 20px 20px;
	border: none;

	@media (max-width: 605px) {
		margin: 5px;
		background-color: #1d1a05;
		${({ highlight }) => !highlight && "display: none;"}
	}
`;
