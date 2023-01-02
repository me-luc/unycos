import styled from "styled-components";
import Comment from "./Comment";
import { comments } from "../../constants/data";

export default function Comments() {
	return (
		<>
			<TitlePage>Comentarios de los estudiantes</TitlePage>
			<TitleMobile>Comentários de Usuários</TitleMobile>
			<StyledCommentsList>
				{comments.map((comment) => (
					<Comment comment={comment} />
				))}
			</StyledCommentsList>
		</>
	);
}

const StyledCommentsList = styled.ul`
	width: 755px;

	@media (max-width: 605px) {
		width: 100%;
		display: flex;
		overflow-x: scroll;
	}
`;

const TitlePage = styled.h2`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 28px;
	line-height: 32px;
	text-align: center;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #d8d7ce;
	margin-top: 50px;
	margin-bottom: 15px;

	@media (max-width: 605px) {
		display: none;
	}
`;

const TitleMobile = styled.h3`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 20px;
	text-align: center;
	text-transform: uppercase;
	color: #ffffff;

	margin-top: 40px;
	margin-bottom: 10px;

	display: none;

	@media (max-width: 605px) {
		display: block;
	}
`;
