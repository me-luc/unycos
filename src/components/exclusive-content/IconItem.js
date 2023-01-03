import styled from "styled-components";

export default function IconItem({ Icon, text }) {
	return (
		<Item>
			<Icon className="react-icons" />
			<Text>{text}</Text>
		</Item>
	);
}

const Item = styled.div`
	width: 170px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.react-icons {
		font-size: 44px;
	}
`;

const Text = styled.h4`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #ffffff;
	margin-top: 10px;

	@media (max-width: 605px) {
		font-size: 14px;
		line-height: 16px;
		text-transform: none;
		color: #ffffff;
	}
`;
