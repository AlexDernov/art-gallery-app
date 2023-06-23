import ArtPieces from "../../components/ArtPieces";


export default function ArtPiecesPage({pieces}) {
    console.log(pieces);
  
  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
