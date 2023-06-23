import { useState, useEffect } from "react";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    async function getArtPieces() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("Data", data);
        setArtPieces(data);
      } catch (error) {
        console.log(error);
      }
    }
    getArtPieces();
  }, []);
  if (!artPieces.length){
    return null
  }

  function randomArt() {
    const random = Math.floor(Math.random() * artPieces.length);
    return random;
  }
  return (
    <div>
      
      <Spotlight
        image={artPieces[randomArt()].imageSource}
        artist={artPieces[randomArt()].artist}
      />
      <ArtPieces pieces={artPieces} />
    </div>
  );
}
