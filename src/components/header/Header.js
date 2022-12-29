import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo-unycos.png";
import DropdownMenu from "./DropdownMenu";
import Menu from "./Menu";
import { ImMenu as MobileMenuIcon } from "react-icons/im";
import MenuMobile from "./MenuMobile";

export default function Header() {
	const options = ["PANEL DE CONTROL", "TUS CURSOS", "PERFIL", "CUENTA"];
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<StyledHeader>
			<div className="elements">
				<img src={logo} alt="Company logo" />

				<div className="desktop">
					<Menu
						setIsMenuOpen={setIsMenuOpen}
						isMenuOpen={isMenuOpen}
					/>
				</div>

				<MobileMenuIcon
					className="react-icons mobile"
					onClick={openMobileMenu}
				/>

				{isMobileMenuOpen && (
					<MenuMobile
						notifications={3}
						options={options}
						closeMobileMenu={closeMobileMenu}
					/>
				)}
			</div>
			<DropdownMenu options={options} isMenuOpen={isMenuOpen} setIsMe />
		</StyledHeader>
	);

	function openMobileMenu() {
		setIsMobileMenuOpen(true);
	}
	function closeMobileMenu() {
		setIsMobileMenuOpen(false);
	}
}

const StyledHeader = styled.header`
	width: 100vw;
	height: 40px;
	filter: drop-shadow(0px 2px 8px #000000);
	background-color: #000;

	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	padding-left: 48%;
	padding-right: 5%;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;

	.elements {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}

	.react-icons {
		color: #858479;
		cursor: pointer;
	}
	.mobile {
		display: none;
	}

	@media (max-width: 850px) {
		padding-left: 40%;

		.mobile {
			display: block;
		}

		.desktop {
			display: none;
		}
	}
`;
