import Spotlight from "../components/Spotlight/Spotlight";
import Head from "next/head.js";

export default function SpotlightPage({ pieces, artPiecesInfo, onToggleLiked }) {
  function randomArt() {
    const random = Math.floor(Math.random() * pieces.length);
    return random;
  }
  const index = randomArt();
  return (
    <div>
       <Head>
        <title>Art Gallery - Spotlight</title>
      </Head>
      <Spotlight
      slug={pieces[index].slug}
        image={pieces[index].imageSource}
        artist={pieces[index].artist}
        colors={pieces[index].colors}
        isLiked={
          artPiecesInfo.find((piece) => piece.slug === pieces[index].slug)
            ?.isLiked
        }
        onToggleLiked={() => onToggleLiked(pieces[index].slug)}
      />
    </div>
  );
}
