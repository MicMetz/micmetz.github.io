import Footer from "@/components/Footer/Footer.js";
import Navigation from "@/components/Navigation/Navigation.js";
import React from "react";
import Theme from '../themes/theme.js';



export default function App( { Component, pageProps, router } ) {

		return (
				<>
						<Theme >
								<container >
										<Navigation />
										<Component Component key = {router.route} {...pageProps} />
										<Footer />
								</container >
						</Theme >
				</>
		);
}

