import Image from "next/image";
import styled from "styled-components";


const Button = styled.button`
  width: 50px;
  height: 50px;
  background: transparent;
  border-style: none;
  color: var(--primary-color);
  
`;
/* position: absolute;
  right: 1rem;
  top: 1.5rem; */
export default function FavoriteButton({ isLiked, onToggleFavorite }) {
  return (
    
      <Button isLiked={isLiked} onClick={onToggleFavorite}>
        <Image
          src="/images/heart.svg"
          width={50}
          height={50}
          alt="" /* color=`${isLiked ? red: black}` */
        />
      </Button>
    
  );
}
