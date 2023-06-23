import styled from "styled-components";

const Box = styled.ul`
  list-style-type: none;
  text-align: center;
  display: grid;
  place-items: center;
`;
export default function List({ comments, onDeleteComments }) {
  return (
    <>
      <h1>Comments:</h1>
      <Box>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.comment}
         {/*    <button
              type="button"
              aria-label="delete comment"
              onClick={() => onDeleteComments(comment.id)}
            >
              ✕
            </button> */}
          </li>
        ))}
      </Box>
    </>
  );
}
