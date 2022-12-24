import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../context/UserContext";
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function Menu({ isMenuOpen, setIsMenuOpen }) {
	const { auth, setAuth, userName } = useContext(UserContext);
	if (auth) {
		return (
			<OptionsMenu>
				<Option>CURSOS</Option>
				<Option onClick={() => setAuth(true)}>
					HOLA, <span>{userName.toUpperCase()}</span>
				</Option>
				{isMenuOpen ? (
					<MdOutlineKeyboardArrowUp
						className="react-icons"
						isMenuOpen={isMenuOpen}
						onClick={() => setIsMenuOpen(false)}
					/>
				) : (
					<MdOutlineKeyboardArrowDown
						className="react-icons"
						isMenuOpen={isMenuOpen}
						onClick={() => setIsMenuOpen(true)}
					/>
				)}
			</OptionsMenu>
		);
	} else {
		return (
			<OptionsMenu>
				<Option>CURSOS</Option>
				<Option onClick={() => setAuth(true)}>REGISTER</Option>
				<Option onClick={() => setAuth(true)}>LOG IN</Option>
			</OptionsMenu>
		);
	}
}

const OptionsMenu = styled.nav`
	display: flex;

	.react-icons {
		cursor: pointer;
	}
`;

const Option = styled.ul`
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	color: #858479;
	cursor: pointer;
	margin-right: 10px;

	:hover {
		color: #c5af19;
	}

	span {
		color: #fff;
	}
`;
