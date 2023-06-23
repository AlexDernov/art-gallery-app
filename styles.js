import { createGlobalStyle } from "styled-components";
import { Imperial_Script } from "next/font/google";

const imperialScript = Imperial_Script({ weight: "400", subsets: ["latin"] });


export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
:root{
  --primary-color: white;
  --primary-color-back: black;

  --font-imperial: ${imperialScript.style.fontFamily}; 
}
  body {
    margin: 0;
    padding:0;
    font-family: system-ui;
    padding: 2rem;
    color: var(--primary-color);
    background-color: var(--primary-color-back);
  
  }
  
`;
