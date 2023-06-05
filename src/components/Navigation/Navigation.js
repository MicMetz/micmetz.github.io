import MainNavLinks from "@/components/Navigation/MainNavLinks.js";
import SearchBarAndResults from "@/components/Search/SearchBarAndResults.js";
import Link from 'next/link'
import React from 'react'
import { TiChartPie } from 'react-icons/ti'
import { RightHandSide, StyledNavbar } from './NavigationStyles.js'



const Navigation = () => (
  <StyledNavbar
	initial = {{ opacity: 0 }}
	animate = {{ opacity: 1 }}
	transition = {{ duration: 1, delay: 0.1 }}
  >
	<Link href = "/" >
	  <a aria-label = "Home" style = {{ display: 'flex', alignItems: 'center', color: 'rgba(0, 0, 0, 0.75)' }} >
		<TiChartPie size = "3em" />
		<span className = "" >Michael Metzger</span >
	  </a >
	</Link >
	<RightHandSide >
	  <SearchBarAndResults />
	  <MainNavLinks />
	</RightHandSide >
  </StyledNavbar >
)

export default Navigation;



/*
 *
 <Link href = "/" >
 <NavLink style = {{ display: 'flex', alignItems: 'center', color: 'rgba(0, 0, 0, 0.75)' }} >
 <TiChartPie size = "3em" />
 <span >Michael Metzger</span >
 </NavLink >
 </Link >
 <li >
 <Link href = "/Project" >
 <NavLink style = {{ paddingLeft: '15rem' }} >Projects</NavLink >
 </Link >
 </li >
 <li >
 {/* <Link href = "/About"  redirect = {true} redirectPath = "./" >
 <Link href = "/About" >
 <NavLink >About</NavLink >
 </Link >
 </li >
 <li >
 <Link href = "/Gallery" >
 <NavLink >Gallery</NavLink >
 </Link >
 </li >
 <li >
 <Link href = "/theHook" >
 <NavLink >The Hook</NavLink >
 </Link >
 </li >
 <SocialIcons href = "https://github.com/MicMetz" >
 <AiFillGithub size = "3em" />
 </SocialIcons >
 <SocialIcons href = "https://www.linkedin.com/in/michael-metzjer/" >
 <AiFillLinkedin size = "3em" />
 </SocialIcons >
 <SocialIcons href = "https://bsky.app/" >
 <AiFillTwitterSquare size = "3em" />
 </SocialIcons >
 */
