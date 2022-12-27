import styled from "styled-components";
import Course from "./Course";
import marcusImg from "../../assets/course-sport.png";
import ismaelImg from "../../assets/course-man.png";
import lewisImg from "../../assets/course-makeup.png";

export default function MoreCourses() {
	const courses = [
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

	return (
		<Page>
			<Title>MÁS CURSOS</Title>
			<div className="items">
				{courses.map((course, index) => (
					<Course
						title={course.title}
						tutor={course.tutor}
						img={course.img}
						key={index}
					/>
				))}
			</div>
		</Page>
	);
}

const Page = styled.section`
	.items {
		list-style-type: none;
		display: flex;
	}
	margin-bottom: 40px;
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
	margin-bottom: 10px;
`;
