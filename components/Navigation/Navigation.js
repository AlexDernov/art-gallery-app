import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";


const NavList = styled.ul`
margin: 0;
font-family: var(--font-imperial); 
padding: 0;
color: var(--primary-color);
background-color: rgba(0, 0, 0, .8);
height: 60px;
width: 100%;
list-style-type: none;
display: flex;
align-content: space-between;
justify-content: space-around;
font-size: 2.5em;
position: fixed;
bottom: 0;`;


const NavLink = styled(Link)`
text-decoration: none;
color: var(--primary-color);
&: hover {
  font-size: 1.2em;}

&: target {
  color: red;
  font-size: 1.2em;
}`;
/* font-size: 1.2em;
  text-shadow: 2px 2px 4px #000000; */
export default function Navigation(){
return (<nav>
<NavList>
  <li >
    <NavLink id="Spotlight" href="/">Spotlight</NavLink>
  </li>
  <li >
    <NavLink id="Art" href="/art-pieces">Art Pieces</NavLink>
  </li>
  <li >
    <NavLink id="Favorites" href="/favorites">Favorites</NavLink>
  </li>
</NavList>
</nav>);
}