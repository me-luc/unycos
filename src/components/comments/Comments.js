import styled from "styled-components";
import Comment from "./Comment";
import commentAna from "../../assets/comment-ana.png";

export default function Comments() {
	const comments = [
		{
			author: "Samuel Vidal Hernández",
			time: "2 meses",
			commentText:
				"Ha sido un curso muy gratificante,en el que he podido aprender muchas cosas gracias a los grandes ponentes que han colaborado y aportado sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica todo lo aprendido. Estoy muy orgulloso.",
			reply: null,
		},
		{
			author: "Francisco José Sacedo",
			time: "3 meses",
			commentText:
				"Seguir creciendo como profesional es necesario pero si lo haces junto a tus ídolos se convierte en un placer. Gracias por esta experiencia y espero poder comentarlo en persona con sus protagonistas muy pronto.",
			reply: {
				author: "Equipo Unycos",
				time: "3 meses",
				comment:
					"Este texto es una simulación de una contestación del equipo o del profesor directamente. El texto tendrá un aspecto diferenciado, y también tendrá un destaque mayor.",
			},
		},
		{
			author: "Ana Milena Gómez",
			time: "3 meses",
			commentText:
				"Profundizar en el entrenamiento y proceso de enseñanza",
			profileImg: commentAna,
			reply: {
				author: "Mireia Belmonte",
				time: "3 meses",
				comment:
					"Hola, Ana! Continúa a practicar y seguro que mejorarás más y más tu desempeño! Un abrazo!",
				job: "Profesor",
			},
		},
	];

	return (
		<StyledCommentsList>
			{comments.map((comment) => (
				<Comment comment={comment} />
			))}
		</StyledCommentsList>
	);
}

const StyledCommentsList = styled.ul`
	width: 755px;
`;
