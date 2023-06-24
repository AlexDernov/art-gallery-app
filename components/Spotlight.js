import styled from "styled-components";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

const StyledImage = styled(Image)`
position: static;`;

const Div = styled.div`
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
  
`;

export default function Spotlight({ image, artist }) {
  return (
    <ImgBox>
    <Div>
      <StyledImage src={image} width={367} height={580} alt={artist} />
      <FavoriteButton />
      </Div>
      <p>
        <strong>{artist}</strong>
      </p>
    </ImgBox>
  );
}
