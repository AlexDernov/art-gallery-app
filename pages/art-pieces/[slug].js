import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPiecesDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = pieces.find((piece) => piece.slug === slug);
  console.log(artPiece);
  const { imageSource, name, artist, year, genre, slug: index } = artPiece;
  return (
    <ArtPieceDetails
      image={imageSource}
      title={name}
      artist={artist}
      year={year}
      genre={genre}
      slug={index}
    />
  );
}
