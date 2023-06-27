import styled from "styled-components";

const Box = styled.ul`
margin: 0;
  list-style-type: none;
  text-align: center;
  display: grid;
  place-items: center;
`;
export default function List({ comments, /* onDeleteComments, */ slug }) {
  const artComment = comments.find((comment)=> comment.slug === slug)
  return (
    <>
      <h1>Comments:</h1>
      <Box>
        {artComment && artComment.comments?.map((comment) => (
          <li key={comment.id}>
            <p>{comment.date}</p>
            <p>{comment.comment}</p>
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
