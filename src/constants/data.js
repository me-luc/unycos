import commentAna from "../assets/comment-ana.png";
import marcusImg from "../assets/course-sport.png";
import ismaelImg from "../assets/course-man.png";
import lewisImg from "../assets/course-makeup.png";

export const comments = [
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
		commentText: "Profundizar en el entrenamiento y proceso de enseñanza",
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

export const courses = [
	{
		title: "piragüismo",
		tutor: "Marcus Cooper",
		img: marcusImg,
	},
	{
		title: "DESARROLLO PERSONAL",
		tutor: "ISMAEL CALA",
		img: ismaelImg,
	},
	{
		title: "MAQUILLAJE",
		tutor: "LEWIS AMARANTE",
		img: lewisImg,
	},
];

export const content = [
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

export const relatedArticles = [
	{
		comment: "Consejos para nadadores principiantes",
		date: "22.06.2019",
	},
	{
		comment:
			"Recomendaciones para lograr que un niño venza el miedo al agua",
		date: "22.06.2019",
	},
	{
		comment: "¿Nadar es un buen método para adelgazar?",
		date: "22.06.2019",
	},
	{
		comment: "Consejos para mejorar la técnica del estilo crol",
		date: "22.06.2019",
	},
];
