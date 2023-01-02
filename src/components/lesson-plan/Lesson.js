import styled from "styled-components";
import { MdKeyboardArrowRight as ArrowIcon } from "react-icons/md";

export default function Lesson({ number, title, description, highlight }) {
	return (
		<StyledItem highlight={highlight}>
			<StyledNumber>
				{number < 10 && "0"}
				{number + 1}
			</StyledNumber>
			<div className="info">
				<Title>
					{title} <ArrowIcon className="react-icons" />
				</Title>
				<Description desktop>{description}</Description>
			</div>
		</StyledItem>
	);
}

const StyledItem = styled.li`
	display: flex;
	width: 860px;
	margin-top: 30px;

	@media (max-width: 605px) {
		width: 100%;
		${({ highlight }) => !highlight && "display: none;"}
	}
`;

const StyledNumber = styled.h1`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 40px;
	text-align: right;
	letter-spacing: 2px;
	color: #858479;
	margin-right: 15px;
	margin-left: 40px;

	@media (max-width: 605px) {
		font-size: 20px;
		font-weight: 500;
		line-height: 20px;
		color: #d8d7ce;
	}
`;

const Title = styled.h3`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 28px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #000000;
	margin-bottom: 15px;

	.react-icons {
		color: #fff;
		font-size: 20px;
		font-weight: 700;
		cursor: pointer;
	}

	@media (max-width: 605px) {
		font-size: 14px;
		line-height: 16px;
		color: #858479;
		text-transform: capitalize;

		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
const Description = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #858479;

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
	}
`;
