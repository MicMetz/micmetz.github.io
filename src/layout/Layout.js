import React from 'react'

import Footer from '../components/Footer/Footer'
import Navigation from '../components/Header/Navigation.js'
import { Container } from './LayoutStyles'




export const Layout = ( { children } ) => {
	return (
		<Container >
			<Navigation />
			<main >{children}</main >
			<Footer />
		</Container >
	)
}
