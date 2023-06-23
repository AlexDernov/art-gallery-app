import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPiecesDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = pieces.find((piece) => piece.slug === slug);
  console.log(artPiece);
  const { image, title, artist, year, genre, slug: index } = artPiece;
  return (
    <ArtPieceDetails
      image={image}
      title={title}
      artist={artist}
      year={year}
      genre={genre}
      slug={index}
    />
  );
}
