import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

const StyledFView = styled.figure`
  margin: 0;
  display:grid;
  text-align: center;
  place-items: center;
`;

const ArtLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  &: hover {
    transform: scale(1.01);
  }
  
`;
/* const Div = styled.div` 
display: grid;
place-items: center;
flex-wrap: column nowrap;
position: relativ;
width: 100%;
max-width: 400px;
box-shadow: 10px 10px 20px 10px ${colors[1]}, -10px -10px 20px 10px ${colors[0]};`; */

/* const Div = styled.div`
display: flex;
flex-wrap: column nowrap;
position: relativ;
width: 100%;
max-width: 400px;`;

const ImgBox = styled.div`
  margin 20px;
  display:grid;
  text-align: center;
  place-items: center;
  
`; */

export default function ArtPiecePreview({ name, image, artist, slug, onToggleLiked, isLiked, colors }) {
  console.log(name);
  return (
    <StyledFView>
      <FavoriteButton onToggleLiked={onToggleLiked} slug={slug} isLiked={isLiked}/>
      <ArtLink href={`/art-pieces/${slug}`}>
        {" "}
        
        <Image src={image} width={407} height={620} aria-labelledby={slug} />
        <p>
          <i>"{name}"</i> by <strong>{artist}</strong>
        </p>
        <hr className="divider" role="none" />
      </ArtLink>
      
    </StyledFView>
  );
}
