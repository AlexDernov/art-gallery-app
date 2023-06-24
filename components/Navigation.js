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
font-size: 3em;
position: fixed;
bottom: 0;`;


const NavLink = styled(Link)`
text-decoration: none;
color: var(--primary-color);
&: hover {
  transform: scale(1.3);
}`;

export default function Navigation(){
return (<nav>
<NavList>
  <li>
    <NavLink href="/">Spotlight</NavLink>
  </li>
  <li>
    <NavLink href="/art-pieces">Art Pieces</NavLink>
  </li>
  <li >
    <NavLink href="/Favorites">Favorites</NavLink>
  </li>
</NavList>
</nav>);
}