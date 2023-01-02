import styled from "styled-components";
import Course from "./Course";
import { courses } from "../../constants/data";

export default function MoreCourses() {
	return (
		<StyledSection>
			<Title>MÁS CURSOS</Title>
			<CourseList>
				{courses.map((course, index) => (
					<Course
						title={course.title}
						tutor={course.tutor}
						img={course.img}
						key={index}
						desktop={index > 1}
					/>
				))}
			</CourseList>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	margin-bottom: 40px;

	@media (max-width: 605px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0;
	}
`;

const CourseList = styled.ul`
	list-style-type: none;
	display: flex;

	@media (max-width: 605px) {
		flex-direction: column;
		box-sizing: border-box;
		padding: 10px 50px;
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
	margin-bottom: 10px;
`;
