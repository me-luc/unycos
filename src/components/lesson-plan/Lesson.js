import styled from "styled-components";

export default function Lesson({ number, title, description }) {
	return (
		<StyledItem>
			<h1>
				{number < 10 && "0"}
				{number + 1}
			</h1>
			<div className="info">
				<Title>{title}</Title>
				<Description>{description}</Description>
			</div>
		</StyledItem>
	);
}

const StyledItem = styled.li`
	display: flex;
	width: 860px;
	margin-top: 30px;

	h1 {
		font-family: "Lato";
		font-style: normal;
		font-weight: 400;
		font-size: 36px;
		line-height: 40px;
		text-align: right;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: #858479;
		margin-right: 15px;
		margin-left: 40px;
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
`;
const Description = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #858479;
`;
