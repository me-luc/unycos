import styled from "styled-components";
import { relatedArticles } from "../../constants/data";

export default function RelatedArticles() {
	return (
		<StyledSection>
			<PageTitle>ARTÍCULOS RELACIONADOS</PageTitle>
			<ArticleList>
				{relatedArticles.map((article) => (
					<Article content={article} />
				))}
			</ArticleList>

			<StyledButton>leer más en nuestro blog</StyledButton>
		</StyledSection>
	);
}

function Article({ content: { title, date } }) {
	return (
		<ArticleItem>
			<ArticleTitle>{title}</ArticleTitle>
			<Date>{date}</Date>
			<Line />
		</ArticleItem>
	);
}

const StyledSection = styled.section`
	margin: 35px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 605px) {
		width: 100%;
		box-sizing: border-box;
		padding: 5px;
	}
`;

const ArticleList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	width: 760px;
	margin-bottom: 25px;

	@media (max-width: 605px) {
		width: 100%;
	}
`;

const ArticleItem = styled.li`
	width: 370px;
	@media (max-width: 605px) {
		width: 100%;
	}
`;

const ArticleTitle = styled.h2`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	display: flex;
	align-items: flex-end;
	text-transform: uppercase;
	color: #d8d7ce;
`;

const PageTitle = styled.h2`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 28px;
	line-height: 32px;
	text-align: center;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #d8d7ce;
	margin-bottom: 25px;
`;

const Line = styled.hr`
	width: 100%;
	height: 1px;
	border: none;
	background: #1d1a05;
`;

const Date = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 13px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: #858479;
`;

const StyledButton = styled.button`
	width: 370px;
	height: 40px;
	border: 2px solid #f1f1f1;
	background: none;
	border-radius: 4px;

	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #f1f1f1;

	@media (max-width: 605px) {
		width: 240px;
	}
`;
