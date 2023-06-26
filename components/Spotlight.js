import styled from "styled-components";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";





const ImgBox = styled.div`
  margin 20px;
  display:grid;
  align-content: center;
  justify-content: center;
  text-align: center;
  place-items: center;
  
`;

export default function Spotlight({
  image,
  artist,
  onToggleLiked,
  slug,
  isLiked,
  colors
}) {
const Div = styled.div`
  display: flex;
  flex-wrap: column nowrap;
  position: relativ;
  width: 100%;
  max-width: 400px;
  box-shadow: 10px 10px 20px 10px ${colors[1]}, -10px -10px 20px 10px ${colors[0]};
`;
const StyledImage = styled(Image)`
  
`;
/* position: static; */
  return (
    <ImgBox>
      <FavoriteButton
        onToggleLiked={onToggleLiked}
        slug={slug}
        isLiked={isLiked}
      />
      <Div>
        <StyledImage src={image} width={367} height={580} alt={artist} />
      </Div>
      <p>
        <strong>{artist}</strong>
      </p>
    </ImgBox>
  );
}
