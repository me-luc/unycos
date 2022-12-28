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
`;

const Title = styled.h2`
	color: #fff;
	margin-left: 15px;
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 24px;
	text-transform: uppercase;
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
