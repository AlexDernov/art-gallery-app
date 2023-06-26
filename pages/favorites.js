import ArtPieces from "../components/ArtPieces";
import Head from "next/head.js";


export default function ArtPiecesPage({pieces,  artPiecesInfo,
  onToggleLiked}) {
    console.log(pieces);
  
    const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isLiked
    )
  );
  return (
    <div>
       <Head>
        <title>Art Gallery - Favorites</title>
      </Head>
      <ArtPieces pieces={favorites} 
        onToggleLiked={onToggleLiked}
        artPiecesInfo={artPiecesInfo}/>
    </div>
  );
}
