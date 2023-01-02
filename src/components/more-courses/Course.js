import styled from "styled-components";

export default function Course({ tutor, title, img, desktop }) {
	return (
		<StyledItem desktop={desktop}>
			<ShadeStyle>
				<h4>{tutor}</h4>
				<p>
					enseña <span>{title}</span>
				</p>
			</ShadeStyle>
			<StyledImg src={img} alt={tutor} />
		</StyledItem>
	);
}

const StyledItem = styled.li`
	width: 370px;
	height: 190px;
	position: relative;
	background-color: aliceblue;
	overflow: hidden;
	margin: 15px;

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
		width: 100%;
		margin: 15px 0 15px 0;
	}
`;

const StyledImg = styled.img`
	width: 100%;
	min-width: 370px;
	object-fit: contain;

	@media (max-width: 605px) {
		object-fit: cover;
		object-position: center;
	}
`;

const ShadeStyle = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0;
	left: 0;

	display: flex;
	flex-direction: column;
	justify-content: end;
	box-sizing: border-box;
	padding: 20px;

	font-family: "Lato";
	font-style: normal;
	font-weight: 400;

	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 51.04%,
		rgba(0, 0, 0, 0.9) 100%
	);

	h4 {
		font-size: 20px;
		line-height: 24px;
		display: flex;
		align-items: center;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: #ffffff;
	}

	p {
		font-size: 16px;
		line-height: 20px;
		text-transform: uppercase;
		color: #858479;
	}

	span {
		color: #d8d7ce;
	}
`;
