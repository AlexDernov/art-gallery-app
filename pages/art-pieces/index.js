import ArtPieces from "../../components/ArtPieces";
import Head from "next/head.js";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: column nowrap;
  position: relativ;
  width: 100%;
  max-width: 400px;
`;

const ImgBox = styled.div`
  margin 20px;
  display:grid;
  text-align: center;
  place-items: center;
  
`;

export default function ArtPiecesPage({
  pieces,
  artPiecesInfo,
  onToggleLiked
}) {
  console.log(pieces);

  return (
    <>
      <Head>
        <title>Art Gallery - Spotlight</title>
      </Head>
      <ImgBox>
        <Div>
          <ArtPieces
            pieces={pieces}
            artPiecesInfo={artPiecesInfo}
            onToggleLiked={onToggleLiked}

          />
        </Div>
      </ImgBox>
    </>
  );
}
