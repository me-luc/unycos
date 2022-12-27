import styled from "styled-components";
import Lesson from "./Lesson";

export default function LessonPlan() {
	const content = [
		{
			title: "Presentación",
			description:
				"Mireia, nuestra campeona, te da la bienvenida al curso que te llevará a la cima de la natación. Conocerás su técnica, su entrenamiento y muchas cosas más de la mano de un equipo de profesionales de fama internacional.",
		},

		{
			title: "NATACIÓN: ASPECTOS GENERALES",
			description:
				"Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.",
		},
		{
			title: "BASES BIOMECÁNICAS DE LA NATACIÓN,",
			description:
				"Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.",
		},
		{
			title: "ESTILOS DE NATACIÓN",
			description:
				"Una perfecta ejecución de estos estilos, unida al control y a la resistencia, te permitirá convertirte en un nadador interdisciplinar. Mireia y su equipo te enseñarán las claves y los secretos para dominarlos todos desde cero.",
		},
		{
			title: "VIRAJES Y SALTOS",
			description:
				"El manejo de los saltos y virajes mejorará considerablemente tu rendimiento y tu técnica de natación. Los profesionales de fama internacional que asisten a Mireia te enseñan a perfeccionar esta técnica.",
		},
	];
	return (
		<Page>
			<BlushStyle>
				<StyledButton>VER TODOS</StyledButton>
			</BlushStyle>
			{content.map((item, index) => {
				return (
					<>
						{index !== 0 && index !== content.length && <Line />}
						<Lesson
							title={item.title}
							description={item.description}
							number={index}
							key={index}
						/>
					</>
				);
			})}
		</Page>
	);
}

const Page = styled.ul`
	width: 945px;
	height: 805px;
	background-color: #f6f4ef;
	border-radius: 4px;
	position: relative;

	margin-bottom: 45px;
`;

const BlushStyle = styled.div`
	width: 100%;
	height: 125px;
	position: absolute;
	bottom: 0;
	left: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background: linear-gradient(
		360deg,
		#f6f4ef 38.89%,
		rgba(246, 244, 239, 0.5) 100%
	);
`;

const StyledButton = styled.button`
	width: 180px;
	height: 40px;
	border: 2px solid #1d1a05;
	border-radius: 4px;
	background-color: #f6f4ef;
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #1d1a05;
	cursor: pointer;
`;

const Line = styled.div`
	width: 880px;
	height: 1px;
	background-color: #d8d7ce;
	margin: 20px 20px;
`;
