import styled from "styled-components";
import { SlideInDown } from "react-animations";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

export default function DropdownMenu({ isMenuOpen, setIsMenuOpen }) {
	const options = ["PANEL DE CONTROL", "TUS CURSOS", "PERFIL", "CUENTA"];
	const [selectedItem, setSelectedItem] = useState("");
	const { setAuth } = useContext(UserContext);

	return (
		<StyledMenu
			isMenuOpen={isMenuOpen}
			className={isMenuOpen ? "fade-in" : "fade-out"}>
			{options.map((item) => (
				<Option
					selected={item === selectedItem}
					onClick={() => {
						setSelectedItem(item);
						setIsMenuOpen(false);
					}}>
					{item}
				</Option>
			))}

			<Line />
			<Option
				onClick={() => {
					setAuth(false);
					setIsMenuOpen(false);
				}}>
				CERRAR SESIÓN
			</Option>
		</StyledMenu>
	);
}

const StyledMenu = styled.nav`
	width: 250px;
	background-color: #fff;
	color: #858479;
	display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
	flex-direction: column;
	justify-content: right;
	text-align: right;
	border-radius: 5px;

	position: fixed;
	right: 140px;
	top: 35px;
	z-index: 0;
`;

const Option = styled.ul`
	margin: 15px 30px 15px 0;
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	cursor: pointer;
	${({ selected }) => selected && "color: #c5af19;"}

	:hover {
		color: #c5af19;
	}

	:first-child {
		margin-top: 40px;
	}
`;

const Line = styled.div`
	height: 2px;
	width: 100%;
	background-color: #f2ecc9;
`;
