import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { TiChartPie } from "react-icons/ti";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './NavigationStyles';




const path = [
  { uid: 21, name: "Home", path: "/" },
  // {uid: 21, name: "Journal", path: "/journal", redirect: true, redirectPath: "./"},
  { uid: 22, name: "About", path: "/About" },
  { uid: 23, name: "Projects", path: "/Projects" },
  { uid: 24, name: "Gallery", path: "/Gallery" },
  { uid: 25, name: "Cartesian", path: "/Cartesian" },
  { uid: 26, name: "Contact", path: "/About/contact" },
  { uid: 27, name: "Resume", path: "/Resume" },
];



const Navigation = () => (
  <Container >
    <Div1 >
      <Link href = "/" >
        <a style = {{ display: 'flex', alignItems: 'center', color: "rgba(0, 0, 0, 0.75);" }} >
          <TiChartPie size = "3rem" /> <span >Michael Metzjer</span >
        </a >
      </Link >
    </Div1 >
    <Div2 >
      <li >
        <Link href = "/Project/" >
          <NavLink style = {{ paddingLeft: "15rem" }} >Projects</NavLink >
        </Link >
      </li >
      <li >
        <Link href = "/About" >
          <NavLink >About</NavLink >
        </Link >
      </li >
      <li >
        {/* <Link> */}
        <NavLink >
          <a href = "https://micmetz.github.io/resume/#/" _target = "blank" >
            Resume
          </a >
        </NavLink >
        {/* </Link > */}
      </li >
      <li >
        <Link href = "/Cartesian" >
          <NavLink >Cartesian</NavLink >
        </Link >
      </li >
      <li >
        <Link href = "/Gallery" >
          <NavLink >Gallery</NavLink >
        </Link >
      </li >
    </Div2 >
    <Div3 >
      <SocialIcons href = "https://github.com/MicMetz" >
        <AiFillGithub size = "3rem" />
      </SocialIcons >
      <SocialIcons href = "https://www.linkedin.com/in/michael-metzjer/" >
        <AiFillLinkedin size = "3rem" />
      </SocialIcons >
      <SocialIcons href = "https://bsky.app/" >
        <AiFillTwitterSquare size = "3rem" />
      </SocialIcons >
    </Div3 >
  </Container >
);

export default Navigation;
