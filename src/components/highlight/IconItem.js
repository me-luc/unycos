import styled from "styled-components";

export default function IconItem({ Icon, title }) {
	return (
		<IconContainer>
			<Circle>
				<Icon className="react-icons" />
			</Circle>
			<Title>{title}</Title>
		</IconContainer>
	);
}

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 605px) {
		flex-direction: column;
		margin: 20px;
	}
`;

const Title = styled.h2`
	color: #fff;
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 24px;
	text-transform: uppercase;
	margin-left: 15px;

	@media (max-width: 605px) {
		margin-left: 0;
		margin-top: 20px;
	}
`;

const Circle = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border: 4px solid #d8d7ce;
	color: #d8d7ce;

	display: flex;
	justify-content: center;
	align-items: center;

	.react-icons {
		font-size: 40px;
		cursor: pointer;
	}
`;
