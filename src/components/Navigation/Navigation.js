import { NavLink } from "@/components/links/LinkStyledComponents.js";
import MainNavLinks from "@/components/Navigation/MainNavLinks.js";
import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { TiChartPie } from 'react-icons/ti'
import { RightHandSide, SocialIcons, StyledNavbar } from './NavigationStyles.js'



// const path = [
// 		{ uid: 21, name: 'Home', path: '/' },
// 		// {uid: 21, name: "Journal", path: "/journal", redirect: true, redirectPath: "./"},
// 		{ uid: 22, name: 'About', path: '/About' },
// 		{ uid: 23, name: 'Projects', path: '/Projects' },
// 		{ uid: 24, name: 'Gallery', path: '/Gallery' },
// 		{ uid: 25, name: 'Cartesian', path: '/Cartesian' },
// 		{ uid: 26, name: 'Contact', path: '/Contact' },
// 		{ uid: 27, name: 'Resume', path: '/Resume' },
// ]

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
								{/* <span className = "visually-hidden" >Michael Metzger</span > */}
						</a >
				</Link >
				<RightHandSide >
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
