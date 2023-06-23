import Image from "next/image";

export default function ArtPiecePreview({ name, image, artist, slug }) {
  console.log(name);
    return (
    <figure>
        <Image
          src={image}
          width ={427}
          height={640}
          aria-labelledby={slug}
        />
        <p><i>"{name}"</i> by <strong>{artist}</strong></p>
      <hr className="divider" role="none" />
    </figure>
  );
}
