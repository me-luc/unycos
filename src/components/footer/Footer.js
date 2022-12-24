import styled from "styled-components";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import logo from "../../assets/logo-unycos.png";

export default function Footer() {
	return (
		<StyledFooter>
			<figure>
				<img src={logo} alt="Company logo" />
			</figure>

			<CentralItem>
				<Icons>
					<FiFacebook className="react-icons" />
					<FiInstagram className="react-icons" />
					<FiTwitter className="react-icons" />
					<FiYoutube className="react-icons" />
				</Icons>

				<Line />

				<Options>
					<p>Terminos y condiciones</p>
					<p>Política de privacidad</p>
					<p>Aviso legal</p>
				</Options>
			</CentralItem>

			<MoneyOption>
				<Option isSelected={true} clickable={true}>
					USD ($){" "}
				</Option>
				<Option> / </Option>
				<Option clickable={true}> EUR (€)</Option>
			</MoneyOption>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	width: 100vw;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	figure {
		height: 100%;
		display: flex;
		align-items: flex-end;
	}
`;

const Icons = styled.div`
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
`;

const Options = styled.div`
	margin-top: 15px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	box-sizing: border-box;

	p {
		cursor: pointer;
		font-family: "Lato";
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: #858479;
	}
`;

const MoneyOption = styled.div`
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
