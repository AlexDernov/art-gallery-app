import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Form from "./Form";
import List from "./List";
import FavoriteButton from "./FavoriteButton";


const Back = styled(Link)`
margin: 0;
font-family: var(--font-imperial); 
padding: 0;
color: var(--primary-color);
height: 60px;
width: 100%;
list-style-type: none;
display: flex;
position: fixed;
left: 20px
top: 0px;
font-size: 3em;`;

const ImgBox = styled.div`
  margin 20px;
  display:grid;
  align-content: center;
  justify-content: center;
  text-align: center;
  place-items: center;
  
`;

const Main = styled.main`
list-style-type: none;
text-align: center;
display: grid;
place-items: center;`;

const Info = styled.ul`
  list-style-type: none;
  text-align: center;
  display: grid;
  place-items: center;
`;
const StyledImage = styled(Image)`
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  colors,
  onToggleLiked,
  isLiked,
onAddComment,
comments
}) {
 

   

  /* function handleDeleteComment(id) {
    setComments(
      comments.filter((comment) => (comment.id === id ? false : true))
    );
  }  */
  const Div = styled.div`
  display: flex;
  flex-wrap: column nowrap;
  position: relativ;
  width: 100%;
  max-width: 400px;
  box-shadow: 10px 10px 20px 10px ${colors[1]}, -10px -10px 20px 10px ${colors[0]};`;

  console.log("Slug", slug);
  return (
    <Main>
      <Back href="/art-pieces">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div>All Art Pieces</div>
      </Back>
      <ImgBox>
        <h1>{title}</h1>
        <FavoriteButton onToggleLiked={onToggleLiked} slug={slug} isLiked={isLiked}/>
        <Div>
        <StyledImage src={image} width={407} height={620} alt="Bild" /* aria-labelledby={slug} */ />
        </Div>
      </ImgBox>
      <Info>
        <li>
          <strong>{artist}</strong>
        </li>
        <li>{year}</li>
        <li>
          <i>{genre}</i>
        </li>
      </Info>

      <List comments={comments} slug={slug} /* onDeleteComment={handleDeleteComment} */ />
      <Form onAddComment={(newComment)=>onAddComment(slug, newComment)} />
    </Main>
  );
}
