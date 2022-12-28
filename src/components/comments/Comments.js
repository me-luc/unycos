import styled from "styled-components";
import Comment from "./Comment";
import { comments } from "../../constants/data";

export default function Comments() {
	return (
		<StyledCommentsList>
			{comments.map((comment) => (
				<Comment comment={comment} />
			))}
		</StyledCommentsList>
	);
}

const StyledCommentsList = styled.ul`
	width: 755px;
`;
