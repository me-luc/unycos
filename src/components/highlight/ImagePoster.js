import styled from "styled-components";
import imgHighlight from "../../assets/highlight.png";

export default function ImagePoster() {
	return (
		<StyledImgBox>
			<div className="style">
				<h1>MIREIA BELMONTE</h1>
				<p>
					enseña <span>natación</span>
				</p>
			</div>
			<img src={imgHighlight} alt="highlight " />
		</StyledImgBox>
	);
}

const StyledImgBox = styled.figure`
	margin-bottom: 50px;
	width: 1135px;
	height: 480px;
	position: relative;

	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	text-transform: uppercase;

	h1 {
		font-size: 36px;
		line-height: 40px;
		letter-spacing: 2px;
		color: #ffffff;
	}

	p {
		font-size: 28px;
		line-height: 32px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: #858479;
	}

	span {
		color: #d8d7ce;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.style {
		display: flex;
		justify-content: center;
		flex-direction: column;
		justify-content: end;
		align-items: center;

		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: radial-gradient(
				48.06% 82.5% at 51.94% 45%,
				rgba(0, 0, 0, 0) 46.8%,
				#000000 100%
			),
			linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 26.74%);
		/* z-index: 1; */
	}
`;
