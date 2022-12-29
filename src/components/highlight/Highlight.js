import IconItem from "./IconItem";
import ImagePoster from "./ImagePoster";
import { IoMdBook } from "react-icons/io";
import { BiFilm } from "react-icons/bi";
import styled from "styled-components";

export default function Highlight() {
	return (
		<StyledSection>
			<ImagePoster />
			<InfoBox>
				<StyledButton mobile>Mas información</StyledButton>
				<IconItem Icon={IoMdBook} title={"12 módulos"} />
				<IconItem Icon={BiFilm} title={"+3,5 horas"} />
				<StyledButton desktop>Mas información</StyledButton>
			</InfoBox>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	width: 100vw;
	margin-bottom: 40px;
`;

const InfoBox = styled.div`
	width: 100vw;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media (max-width: 605px) {
		flex-direction: column;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
	}
`;

const StyledButton = styled.button`
	width: 368px;
	height: 48px;
	background: #c5af19;
	border-radius: 4px;
	border: none;
	cursor: pointer;

	color: #fff;
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	letter-spacing: 1px;
	text-transform: uppercase;

	${({ mobile }) => mobile && "display: none;"}

	@media (max-width: 605px) {
		margin-bottom: 20px;

		${({ mobile }) =>
			mobile &&
			`
		display: block;
		width: 90%;`}
		${({ desktop }) => desktop && "display: none; "}
	}
`;
