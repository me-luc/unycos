import styled from "styled-components";
import { BiLike } from "react-icons/bi";
import { HiOutlineCheckCircle as CheckCircle } from "react-icons/hi";

export default function Comment({
	comment: { author, time, commentText, profileImg, reply },
}) {
	return (
		<StyledItem>
			<ImageBox desktop>
				{profileImg ? (
					<img src={profileImg} alt={author} />
				) : (
					getInitial(author)
				)}
			</ImageBox>

			<ContentBox>
				<AuthorBox desktop>
					{author}
					<span>
						<BiLike className="react-icons" /> hace {time}
					</span>
				</AuthorBox>
				<CommentText>{commentText}</CommentText>
				<AuthorMobile>{author}</AuthorMobile>

				{reply && (
					<>
						<Line desktop />
						<ReplyBox desktop>{reply.comment}</ReplyBox>
						<ReplyAuthorBox desktop>
							<CheckCircle className="react-icons" />
							{reply.author}
							<span>
								{reply.job && `• ${reply.job}`}
								<span className="time"> - hace 3 meses</span>
							</span>
						</ReplyAuthorBox>
					</>
				)}
			</ContentBox>
		</StyledItem>
	);

	function getInitial(name) {
		let nameArr = name.split(" ");

		return nameArr.length === 1 ? name[0] : nameArr[0][0] + nameArr[1][0];
	}
}

const StyledItem = styled.li`
	display: flex;
	margin: 25px 0;

	@media (max-width: 605px) {
		background-color: #fff;
		width: 280px;
		height: 155px;
		border-radius: 5px;
		margin: 0 7px;
		box-sizing: border-box;
		padding: 8px;
	}

	.react-icons {
		margin-right: 5px;
	}
`;

const ImageBox = styled.figure`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background: #858479;

	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 28px;
	line-height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #000000;

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
	}
`;

const CommentText = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #d8d7ce;

	@media (max-width: 605px) {
		font-family: "Lato";
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: #333333;
	}
`;

const AuthorBox = styled.h3`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #d8d7ce;
	display: flex;
	align-items: center;
	margin-bottom: 15px;

	span {
		line-height: 28px;
		color: #858479;
		display: flex;
		align-items: center;
		margin-left: 15px;
	}

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
	}
`;
const ReplyBox = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #858479;

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
	}
`;

const ContentBox = styled.div`
	margin-left: 20px;
	width: 670px;

	@media (max-width: 605px) {
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

const ReplyAuthorBox = styled.h3`
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	color: #f2ecc9;
	display: flex;
	align-items: center;
	margin: 5px 0;

	span {
		font-family: "Lato";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 20px;
		color: #c5af19;
		margin-left: 5px;
		display: flex;
		align-items: center;
	}
	.time {
		color: #858479;
	}
	.react-icons {
		color: #c5af19;
		font-size: 20px;
	}

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
	}
`;

const Line = styled.div`
	width: 100%;
	height: 1px;
	background: #858479;
	margin: 15px 0;

	@media (max-width: 605px) {
		${({ desktop }) => desktop && "display: none;"}
	}
`;

const AuthorMobile = styled.h4`
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	text-align: right;
	text-transform: uppercase;
	color: #000000;

	display: none;
	@media (max-width: 605px) {
		display: block;
	}
`;
