import styled from "styled-components";
import Image from "next/image";

const ImgBox = styled.div`
margin 20px;
  text-align: center;
  display: grid;
  place-items: center;
`;

export default function Spotlight({ image, artist }) {
  return (
    <ImgBox>
      <Image src={image} width={367} height={580} alt={artist} />
        <p><strong>{artist}</strong></p>
    </ImgBox>
  );
}
