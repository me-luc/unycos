import styled from "styled-components";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import logo from "../../assets/logo-unycos.png";
import ContactUs from "./ContactUs";

export default function Footer() {
	return (
		<StyledFooter>
			<LogoImage desktop />
			<CentralItem>
				<Title mobile>únete a la comunidad</Title>
				<Icons />
				<Line desktop />

				<AboutCompany desktop />
			</CentralItem>

			<ContactUs mobile />

			<CustomDiv>
				<LogoImage mobile />
				<CurencyOptions />
			</CustomDiv>

			<AboutCompany mobile />
		</StyledFooter>
	);
}

function Icons() {
	return (
		<IconsBox>
			<FiFacebook className="react-icons" />
			<FiInstagram className="react-icons" />
			<FiTwitter className="react-icons" />
			<FiYoutube className="react-icons" />
		</IconsBox>
	);
}

function CurencyOptions() {
	return (
		<CurrencyOptions>
			<Option isSelected={true} clickable={true}>
				USD ($)
			</Option>
			<Option> / </Option>
			<Option clickable={true}> EUR (€)</Option>
		</CurrencyOptions>
	);
}

function LogoImage({ desktop, mobile }) {
	return (
		<StyledImage desktop={desktop} mobile={mobile}>
			<img src={logo} alt="Company logo" />
		</StyledImage>
	);
}

function AboutCompany({ desktop, mobile }) {
	return (
		<AboutCompanyOptions desktop={desktop} mobile={mobile}>
			<p>Terminos y condiciones</p>
			<p>Política de privacidad</p>
			<p>Aviso legal</p>
		</AboutCompanyOptions>
	);
}

const StyledFooter = styled.footer`
	width: 100vw;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-bottom: 25px;

	@media (max-width: 605px) {
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		padding: 10px;
	}
`;

const StyledImage = styled.figure`
	height: 100%;
	display: flex;
	align-items: flex-end;
	${({ mobile }) => mobile && "display: none;"}

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
		${({ mobile }) => mobile && "display: block;"}
	}
`;

const Title = styled.h3`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 20px;
	text-align: center;
	text-transform: uppercase;
	color: #ffffff;
	margin-bottom: 15px;
	${({ mobile }) => mobile && "display: none;"}

	@media (max-width: 605px) {
		${({ mobile }) => mobile && "display: block;"}
	}
`;

const IconsBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
	box-sizing: border-box;
	padding: 0 140px;

	.react-icons {
		font-size: 25px;
		cursor: pointer;
	}
`;

const CentralItem = styled.div`
	width: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Line = styled.div`
	height: 2px;
	width: 100%;
	background-color: #858479;

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
	}
`;

const AboutCompanyOptions = styled.div`
	margin-top: 15px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	box-sizing: border-box;

	${({ mobile }) => mobile && "display: none;"}

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
		${({ mobile }) =>
			mobile &&
			`display: block;
			width: 100%;
			display: flex;
			justify-content: space-around;
		`}
		

		P {
			width: fit-content;
			font-size: 8px;
			line-height: 10px;
			text-transform: uppercase;
		}
	}

	p {
		width: auto;
		cursor: pointer;
		font-family: "Lato";
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: #858479;
	}
`;

const CurrencyOptions = styled.div`
	display: flex;
	height: 100%;
	align-items: flex-end;
`;

const Option = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	color: ${({ isSelected }) => (isSelected ? "#fff" : "#858479")};
	${({ clickable }) => clickable && "cursor: pointer;"}
`;

const CustomDiv = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 605px) {
		width: 100%;
	}
`;
