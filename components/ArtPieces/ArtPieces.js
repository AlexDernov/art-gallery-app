import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";


const List = styled.ul`
list-style-type: none;

`;

/* text-align: center;
display: grid;
place-items: center; */
export default function ArtPieces({ pieces, artPiecesInfo, onToggleLiked }) {
  console.log("Pieces", pieces);
  return (
    <List>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
          colors={piece.colors}
            name={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            onToggleLiked={() => onToggleLiked(piece.slug)}
            isLiked={artPiecesInfo.find((pieceI) => pieceI.slug === piece.slug)
              ?.isLiked}
          />
        </li>
      ))}
    </List>
  );
}
