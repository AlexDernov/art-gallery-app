import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Form from "../Form/Form";
import List from "../List/List";
import FavoriteButton from "../FavoriteButton/FavoriteButton";


const Back = styled(Link)`
text-decoration: none;
margin: 0;
font-family: var(--font-imperial); 
padding: 0;
color: var(--primary-color);
height: 60px;
width: 100%;
font-size: 2em;
list-style-type: none;
display: flex;
position:fixed;
top: 20px;
left: 25px;
&: hover {
  font-size: 2.2em;;
}
`;


/* align-content: center;
justify-content: center; */
/* display: flex;
position: fixed;
left: 20px
top: 0px; */

  
  const ImgBox = styled.div`
  margin 10px;
  display:grid;
  align-content: center;
  justify-content: center;
  text-align: center;
  place-items: center;
  
`;

const Main = styled.main`
margin: 0;
list-style-type: none;
text-align: center;
display: grid;
place-items: center;`;


const Info = styled.ul`
margin: 0;
  list-style-type: none;
  text-align: center;
  display: grid;
  place-items: center;
`;
const StyledImage = styled(Image)`
padding: o;
margin: 0;
display: flex;
position:relativ;
align-content: center;
justify-content:center;
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
 
const H1 = styled.h1`
margin: 0;`;

  const Div = styled.div`
  margin: 7px 0 20px 0;
  padding: 10px;
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
        <H1>{title}</H1>
        <FavoriteButton onToggleLiked={onToggleLiked} slug={slug} isLiked={isLiked}/>
        <Div>
        <StyledImage src={image} width={370} height={583} alt="Bild" /* aria-labelledby={slug} */ />
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
