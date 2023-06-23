import Image from "next/image";
import Link from "next/link";

/* const ArtLink = styled(Link)`
text-decoration: none;
color: var(--primary-color);`; */

export default function ArtPiecePreview({ name, image, artist, slug }) {
  console.log(name);
    return (
    <figure>
       <Link href={`/art-pieces/${slug}`}> <Image
          src={image}
          width ={407}
          height={620}
          aria-labelledby={slug}
        />
        <p><i>"{name}"</i> by <strong>{artist}</strong></p></Link>
      <hr className="divider" role="none" />
    </figure>
  );
}
