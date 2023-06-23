import styled from "styled-components";
import Image from "next/image";

const ImgBox = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
`;

export default function Spotlight({ image, artist }) {
  return (
    <ImgBox>
      <Image src={image} width={427} height={640} alt={artist} />
        <p><strong>{artist}</strong></p>
    </ImgBox>
  );
}
