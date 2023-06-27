import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";
import Head from "next/head.js";

export default function ArtPiecesDetailsPage({
  pieces,
  artPiecesInfo,
  onToggleLiked,
  onAddComment,
  comments
}) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = pieces.find((piece) => piece.slug === slug);
  console.log(artPiece);
  const {
    imageSource,
    name,
    artist,
    year,
    genre,
    slug: index,
    colors,
  } = artPiece;
  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <ArtPieceDetails
        colors={colors}
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
        slug={index}
        onToggleLiked={() => onToggleLiked(index)}
        artPiecesInfo={artPiecesInfo}
        isLiked={artPiecesInfo.find((pieceI) => pieceI.slug === index)?.isLiked}
        onAddComment={onAddComment}
        comments={comments}
      />
    </>
  );
}
