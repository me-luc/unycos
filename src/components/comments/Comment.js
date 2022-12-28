import styled from "styled-components";
import { BiLike } from "react-icons/bi";
import { HiOutlineCheckCircle as CheckCircle } from "react-icons/hi";

export default function Comment({
	comment: { author, time, commentText, profileImg, reply },
}) {
	return (
		<StyledItem>
			<ImageBox>
				{profileImg ? (
					<img src={profileImg} alt={author} />
				) : (
					getInitial(author)
				)}
			</ImageBox>

			<div className="content">
				<AuthorBox>
					{author}
					<span>
						<BiLike className="react-icons" /> hace {time}
					</span>
				</AuthorBox>
				<CommentText>{commentText}</CommentText>

				{reply && (
					<>
						<Line />
						<ReplyBox>{reply.comment}</ReplyBox>
						<ReplyAuthorBox>
							<CheckCircle className="react-icons" />
							{reply.author}
							<span>
								{reply.job && `• ${reply.job}`}
								<span className="time"> - hace 3 meses</span>
							</span>
						</ReplyAuthorBox>
					</>
				)}
			</div>
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

	.content {
		margin-left: 20px;
		width: 670px;
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
`;

const CommentText = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #d8d7ce;
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
`;
const ReplyBox = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #858479;
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
`;

const Line = styled.div`
	width: 100%;
	height: 1px;
	background: #858479;
	margin: 15px 0;
`;
