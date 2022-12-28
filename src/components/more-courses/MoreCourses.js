import styled from "styled-components";
import Course from "./Course";
import { courses } from "../../constants/data";

export default function MoreCourses() {
	return (
		<StyledSection>
			<Title>MÁS CURSOS</Title>
			<ul className="items">
				{courses.map((course, index) => (
					<Course
						title={course.title}
						tutor={course.tutor}
						img={course.img}
						key={index}
					/>
				))}
			</ul>
		</StyledSection>
	);
}

const StyledSection = styled.section`
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
