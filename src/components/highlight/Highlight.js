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
				<IconItem Icon={IoMdBook} title={"12 módulos"} />
				<IconItem Icon={BiFilm} title={"+3,5 horas"} />
				<StyledButton>Mas información</StyledButton>
			</InfoBox>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	margin-bottom: 40px;
`;

const InfoBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
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
`;
