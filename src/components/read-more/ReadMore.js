import styled from "styled-components";
import imgPoster from "../../assets/read-more-img.png";

export default function ReadMore() {
	return (
		<Poster>
			<Title>APRENDE CON LOS MEJORES</Title>
			<Message>
				Detrás de cada éxito, hay una história. conoce en nuestro blog.
			</Message>
			<StyledButton>leer más en nuestro blog</StyledButton>
		</Poster>
	);
}

const Poster = styled.section`
	width: 100vw;
	height: 345px;
	background-image: url(${imgPoster});
	background-repeat: no-repeat;
	background-size: cover;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin-bottom: 45px;
`;

const Title = styled.h2`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 32px;
	line-height: 38px;
	text-transform: uppercase;
	color: #ffffff;
`;

const Message = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 29px;
	text-transform: uppercase;
	color: #ffffff;
`;

const StyledButton = styled.button`
	background: none;
	border: 2px solid #f1f1f1;
	border-radius: 4px;
	width: 370px;
	height: 50px;

	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	display: flex;
	align-items: center;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #f1f1f1;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
