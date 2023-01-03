import styled from "styled-components";
import IconItem from "./IconItem";
import { FiBook as BookIcon } from "react-icons/fi";
import { TbView360 as View360Icon } from "react-icons/tb";
import { MdOutlineLibraryAddCheck as TestsIcon } from "react-icons/md";
import { HiPencilAlt as TasksIcon } from "react-icons/hi";

export default function ExclusiveContent() {
	return (
		<StyledSection>
			<Title>CONTENIDO EXCLUSIVO</Title>

			<IconsBox>
				<IconItem Icon={BookIcon} text="E-books" />
				<IconItem Icon={View360Icon} text="360º Videos" />
				<IconItem Icon={TestsIcon} text="Tests" />
				<IconItem Icon={TasksIcon} text="Tareas" />
			</IconsBox>

			<StyledButton>Mas información</StyledButton>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 605px) {
		width: 100vw;
	}
`;

const IconsBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	@media (max-width: 605px) {
		width: 100%;
		justify-content: space-evenly;
	}
`;

const Title = styled.h2`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 28px;
	line-height: 32px;
	text-align: center;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #d8d7ce;

	margin-bottom: 20px;

	@media (max-width: 605px) {
		display: none;
	}
`;

const StyledButton = styled.button`
	width: 380px;
	height: 50px;
	background: #c5af19;
	border-radius: 4px;
	border: none;

	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #ffffff;

	display: flex;
	justify-content: center;

	@media (max-width: 605px) {
		display: none;
	}
`;
