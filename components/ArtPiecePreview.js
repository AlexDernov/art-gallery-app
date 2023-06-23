import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

const StyledFView = styled.figure`
  margin: 0;
`;

const ArtLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  &: hover {
    transform: scale(1.3);
  }
`;

export default function ArtPiecePreview({ name, image, artist, slug }) {
  console.log(name);
  return (
    <StyledFView>
      <ArtLink href={`/art-pieces/${slug}`}>
        {" "}
        <FavoriteButton />
        <Image src={image} width={407} height={620} aria-labelledby={slug} />
        <p>
          <i>"{name}"</i> by <strong>{artist}</strong>
        </p>
      </ArtLink>
      <hr className="divider" role="none" />
    </StyledFView>
  );
}
