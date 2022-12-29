import { DATA_URL } from "../../constants/URL";
import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { BallTriangle } from "react-loader-spinner";

export default function Slider() {
	const [spolight, setSpolight] = React.useState(null);
	const [trio, setTrio] = React.useState(null);

	const headers = {
		headers: {
			"x-mejor-key": "unycos",
		},
	};

	React.useEffect(() => {
		axios
			.get(DATA_URL, headers)
			.then((answer) => {
				let data = answer.data.spotlights;
				setSpolight(data[0]);

				function updateTrio() {
					let newArr = [...data];
					newArr.shift();
					setTrio([...newArr]);
				}
				updateTrio();
			})
			.catch((answer) => console.log(answer));
	}, []);

	//starting slider
	useEffect(() => {
		if (!trio || !spolight) return;

		const interval = setInterval(() => {
			let newArr = [...trio];
			newArr.shift();
			newArr.push(spolight);

			setTrio(newArr);
			setSpolight(trio[0]);
		}, 4000);
		return () => clearInterval(interval);
	}, [spolight]);

	return (
		<StyledSlider>
			<ImageBox>
				{spolight ? (
					<img src={spolight.image} />
				) : (
					<BallTriangle
						height={100}
						width={100}
						radius={5}
						color="#C5AF19"
						ariaLabel="ball-triangle-loading"
						wrapperClass={{}}
						wrapperStyle=""
						visible={true}
					/>
				)}
			</ImageBox>
			<SpolightSide>
				{!trio ? (
					<div>
						<BallTriangle
							height={100}
							width={100}
							radius={5}
							color="#C5AF19"
							ariaLabel="ball-triangle-loading"
							wrapperClass={{}}
							wrapperStyle=""
							visible={true}
						/>
					</div>
				) : (
					<>
						<SpolightTitle>{spolight.title}</SpolightTitle>
						<SpolightDescription>
							{spolight.description}
						</SpolightDescription>
						<Articles>
							{trio.map((slide, index) => {
								if (slide._id !== spolight._id)
									return (
										<Article index={index} key={slide._id}>
											<img
												src={slide.image}
												alt={slide.title}
											/>
											<p>{slide.title}</p>
										</Article>
									);
							})}
						</Articles>
					</>
				)}
			</SpolightSide>
		</StyledSlider>
	);
}

const StyledSlider = styled.section`
	width: 1135px;
	height: 320px;
	background: #fbfaf7;
	border-radius: 4px;
	display: flex;
	margin-bottom: 45px;
`;

const ImageBox = styled.figure`
	width: 560px;
	height: 100%;
	background-color: #858479;
	object-fit: contain;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	img {
		width: 100%;
		z-index: 0;
	}
`;

const SpolightSide = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	padding: 40px;
`;
const Articles = styled.ul`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const Article = styled.li`
	width: 150px;
	cursor: pointer;
	${({ index }) => index > 0 && "opacity: 0.5;"}

	:hover {
		opacity: 1;
	}
	img {
		width: 100%;
		height: 80px;
		object-fit: cover;
		background: #1d1a05;
	}
	p {
		font-family: "Lato";
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		line-height: 16px;
		text-align: center;
		text-transform: uppercase;
		color: #1d1a05;
	}
`;

const SpolightTitle = styled.h2`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 28px;
	line-height: 32px;
	letter-spacing: 2px;
	text-transform: uppercase;

	display: flex;
	width: 100%;
	justify-content: left;
	text-align: left;
	color: #1d1a05;
	margin-bottom: 10px;
`;

const SpolightDescription = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #858479;
	margin-bottom: 30px;
`;
