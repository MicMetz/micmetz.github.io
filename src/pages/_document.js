import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from "react";
import { ServerStyleSheet } from 'styled-components'



export default class MyDocument extends Document {

		static async getInitialProps( ctx ) {
				// SSR support for styled-components
				const sheet = new ServerStyleSheet();
				const originalRenderPage = ctx.renderPage;

				try {
						ctx.renderPage = () =>
								originalRenderPage( {
										// eslint-disable-next-line react/display-name
										enhanceApp: ( App ) => ( props ) =>
												sheet.collectStyles( <App {...props} /> ),
								} );

						const initialProps = await Document.getInitialProps( ctx );
						return {
								...initialProps,
								styles: (
										<>
												{initialProps.styles}
												{sheet.getStyleElement()}
										</>
								),
						};
				} finally {
						sheet.seal();
				}
		}


		render() {
				return (
						<Html lang = "en" >
								<Head >
										<link rel = "manifest" href = "/static/manifest.json" />
										<link rel = "preconnect" href = "https://fonts.googleapis.com" />
										<link rel = "preconnect" href = "https://fonts.gstatic.com" crossOrigin = "true" />

										<link href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
																rel = "stylesheet" />
										<link href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel = "stylesheet" />

										<link rel = "icon" href = "/icons/logo-hook-white.svg" type = "image/svg" />
										<meta name = "apple-mobile-web-app-title" content = "The Hook" />
										<link rel = "apple-touch-icon"
																type = "image/png" sizes = "152x152" href = "/icons/logo-hook.svg" />
										<meta name = "msapplication-TileImage" content = "/icons/logo-hook.svg" />
								</Head >

								<body >
										<Main />
										<NextScript />
								</body >
						</Html >
				);
		}
}
