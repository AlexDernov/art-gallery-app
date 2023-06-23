import Image from "next/image";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./List";
import Link from "next/link";
import Form from "./Form";

const Info = styled.ul`
  list-style-type: none;
  text-align: center;
  display: grid;
  place-items: center;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
}) {
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  function handleAddComment(newComment) {
    setComments([...comments, { id: uid(), ...newComment }]);
  }

  function handleDeleteComment(id) {
    setComments(
      comments.filter((comment) => (comment.id === id ? false : true))
    );
  }
  console.log("Slug", slug);
  return (
    <div>
   <Link href="/art-pieces">
     <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div>All Art Pieces</div>
      </Link>
      <section>
        <h1>{title}</h1>
        <Image src={image} width={407} height={620} aria-labelledby={slug} />
      </section>
      <Info>
        <li>
          <strong>{artist}</strong>
        </li>
        <li>{year}</li>
        <li>
          <i>{genre}</i>
        </li>
      </Info>
      <List comments={comments} onDeleteComment={handleDeleteComment} />
      <Form onAddComment={handleAddComment} />
    </div>
  );
}
