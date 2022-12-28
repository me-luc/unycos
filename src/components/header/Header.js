import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo-unycos.png";
import DropdownMenu from "./DropdownMenu";
import Menu from "./Menu";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav>
			<StyledHeader>
				<figure>
					<img src={logo} alt="Company logo" />
				</figure>
				<Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			</StyledHeader>
			<DropdownMenu
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
			/>
		</nav>
	);
}

const StyledHeader = styled.header`
	width: 100vw;
	height: 40px;
	filter: drop-shadow(0px 2px 8px #000000);
	background-color: #000;

	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding-left: 50%;
	padding-right: 140px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
`;
