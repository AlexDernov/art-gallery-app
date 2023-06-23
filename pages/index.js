import Spotlight from "../components/Spotlight";

export default function SpotlightPage({pieces}) {
  

  function randomArt() {
    const random = Math.floor(Math.random() * pieces.length);
    return random;
  }
  return (
    <div>
      <Spotlight
        image={pieces[randomArt()].imageSource}
        artist={pieces[randomArt()].artist}
      />
    </div>
  );
}
