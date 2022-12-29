import styled from "styled-components";
import logo from "../../assets/logo-mobile.png";
import {
	TbBellRinging as BellIcon,
	TbBell as NoNotificationBell,
	TbBrandWhatsapp as WhatsAppIcon,
} from "react-icons/tb";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function MenuMobile({ closeMobileMenu, notifications }) {
	const { userName } = useContext(UserContext);
	const options = [
		"Panel de Control",
		"MIS cursos",
		"Perfil",
		"AJUSTES",
		"Todos los cursos",
	];

	return (
		<StyledMenu>
			<CloseArea onClick={closeMobileMenu} />

			<Content>
				<img src={logo} alt="company logo" />

				<UserBox>
					<h3>
						Hola, <span>{userName}</span>
					</h3>

					{notifications > 0 ? (
						<BellIcon className="react-icons" />
					) : (
						<NoNotificationBell />
					)}
				</UserBox>

				<Line />

				<MenuItems />
				<Line color="#c5af19" />

				<Contact>
					<Message>Contáctanos por whatsapp</Message>

					<PhoneNumber>
						<WhatsAppIcon
							className="react-icons"
							fontSize={"20px"}
						/>{" "}
						+34 653 46 73 60
					</PhoneNumber>
				</Contact>

				<Line color="#c5af19" />

				<LogOut>Cerrar sesión</LogOut>
			</Content>
		</StyledMenu>
	);

	function MenuItems() {
		return options.map((option) => <StyledItem>{option}</StyledItem>);
	}
}

const StyledMenu = styled.menu`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #fff;
	display: flex;

	.react-icons {
		cursor: pointer;
		color: #858479;
	}
`;

const CloseArea = styled.div`
	width: 80px;
	height: 100vh;
	background-color: #000;
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	background-color: #fff;
	box-sizing: border-box;
	margin: 25px 15px;
`;

const StyledItem = styled.li`
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 16px;
	text-transform: uppercase;
	color: #858479;
	list-style-type: none;
	cursor: pointer;
	margin: 30px 0;

	:hover {
		color: #c5af19;
	}
`;

const UserBox = styled.div`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
	color: #858479;
	margin-top: 30px;

	span {
		color: #000;
	}
`;

const Line = styled.hr`
	width: 98%;
	height: 1px;
	background: ${({ color }) => (color ? color : "#d8d7ce")};
	border: none;
	margin: 30px 0;
`;

const Contact = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	.react-icons {
		margin-right: 15px;
	}
`;

const LogOut = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: #858479;
	cursor: pointer;
`;

const PhoneNumber = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #858479;

	display: flex;
	align-items: center;
	margin: 15px 0;
	cursor: pointer;
`;

const Message = styled.h4`
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	display: block;
	text-transform: uppercase;
	color: #1d1a05;
	flex-basis: 100%;
`;
