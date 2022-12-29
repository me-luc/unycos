import styled from "styled-components";
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Menu({ isMenuOpen, setIsMenuOpen, className }) {
	const { auth, setAuth, userName } = useContext(UserContext);
	if (auth) {
		return (
			<OptionsBox>
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
			</OptionsBox>
		);
	} else {
		return (
			<OptionsBox>
				<Option>CURSOS</Option>
				<Option onClick={() => setAuth(true)}>REGISTER</Option>
				<Option onClick={() => setAuth(true)}>LOG IN</Option>
			</OptionsBox>
		);
	}
}

const OptionsBox = styled.nav`
	display: flex;

	.react-icons {
		cursor: pointer;
	}
`;

const Option = styled.li`
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	color: #858479;
	cursor: pointer;
	margin-right: 10px;
	list-style-type: none;

	:hover {
		color: #c5af19;
	}

	span {
		color: #fff;
	}
`;
