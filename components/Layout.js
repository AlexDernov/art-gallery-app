import styled from "styled-components";

import Navigation from "./Navigation/Navigation";
/* import Image from "next/image"; */

const StyledLayout = styled.div`
  margin: 60px 0 0 0;
  padding:top 20px;
  background-image: url(/images/Art_gallery.png);
  background-color: var(--primary-color-back);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top center;
  background-attachment: fixed;
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  
`;
/* const ImgBox = styled.div`
margin:0;
`; */
const Pages = styled.div`
paddingTop: 30px;
`;
const Header = styled.header`
    margin: 0;
    font-family: var(--font-imperial); 
    padding: 10px;
    color: var(--primary-color);
    background-color: rgba(0, 0, 0, .8);
    height: 80px;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 3em;
    position: fixed;
    top: 0;
   
    
`;


export default function Layout({ children }) {
  return (
    <StyledLayout>
     <Header>Art Gallery</Header>
      <Pages>{children}</Pages>
      
      <Navigation />
    </StyledLayout>
  );
}
