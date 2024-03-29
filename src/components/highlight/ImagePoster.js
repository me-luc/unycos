import styled from "styled-components";
import imgHighlight from "../../assets/highlight.png";
import imgMobile from "../../assets/mobile-highlight.png";

export default function ImagePoster() {
	return (
		<StyledImgBox>
			<div className="style">
				<h1>MIREIA BELMONTE</h1>
				<p>
					enseña <span>natación</span>
				</p>
			</div>
			<img className="desktop" src={imgHighlight} alt="highlight " />
			<img className="mobile" src={imgMobile} alt="highlight " />
		</StyledImgBox>
	);
}

const StyledImgBox = styled.figure`
	margin-bottom: 50px;
	width: 100vw;
	height: 480px;
	/* min-width: 1130px; */
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

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
		width: 100vw;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.style {
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: center;

		width: 100vw;
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
	}

	.mobile {
		display: none;
	}

	@media (max-width: 605px) {
		h1 {
			font-size: 28px;
		}
		p {
			font-size: 20px;
		}
		.mobile {
			display: block;
		}
		.desktop {
			display: none;
		}
	}
`;
