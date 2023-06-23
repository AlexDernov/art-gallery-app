import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
list-style-type: none;
text-align: center;
display: grid;
place-items: center;
`;
export default function ArtPieces({ pieces }) {
  return (
    <List>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            name={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
          />
        </li>
      ))}
    </List>
  );
}
