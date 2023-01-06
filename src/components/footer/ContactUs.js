import styled from "styled-components";
import { ImWhatsapp as WhatsAppIcon } from "react-icons/im";

export default function ContactUs() {
	return (
		<StyledSection>
			<Title>¿Dudas? Contáctanos por whatsapp</Title>
			<StyledButton>
				{" "}
				<WhatsAppIcon className="react-icons" />
				+34 653 46 73 60
			</StyledButton>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 40px;

	display: none;

	@media (max-width: 605px) {
		display: block;
	}
`;

const Title = styled.h4`
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	text-align: center;
	text-transform: uppercase;
	color: #ffffff;
	margin-top: 25px;
	margin-bottom: 20px;
`;

const StyledButton = styled.button`
	width: 180px;
	height: 40px;
	border: 2px solid #d8d7ce;
	border-radius: 4px;
	background: none;
	cursor: pointer;

	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #d8d7ce;

	.react-icons {
		margin-right: 5px;
	}
`;
