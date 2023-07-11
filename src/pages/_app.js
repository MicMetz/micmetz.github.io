import { AnimatePresence }              from 'framer-motion';
import { DefaultSeo }                   from 'next-seo';
import { GoogleAnalytics }              from 'nextjs-google-analytics';
import React, { createContext, useRef } from 'react';
import Footer                           from '../components/Layouts/Footer.js';
import { Navigation }                   from '../components/Navigation/Navigation.js';
// import * as gtag                                   from '../tools/gtag.js';
import '../styles/tailwind.css';
import Theme                            from '../themes/theme.js';




export const PageContext = createContext( {} );

export default function App( { Component, pageProps, router } ) {
  const navigationRef = useRef( null );


  // log page props, but only in browser, not in node
  if ( typeof window !== 'undefined' ) {
    console.log( { pageProps } );
  }

  if ( router.pathname === '/ogImage' ) {
    return (
      <>
        <Theme >
          <Component Component key = {router.route} {...pageProps} />
        </Theme >
      </>
    );
  }

  // Log client-side route changes to Google Analytics
  /*
   useEffect( () => {
   const handleRouteChange = ( url ) => {
   gtag.pageview( url );
   };
   router.events.on( 'routeChangeComplete', handleRouteChange );
   return () => {
   router.events.off( 'routeChangeComplete', handleRouteChange );
   };
   }, [ router.events ] );
   */


  return (
    <>
      <PageContext.Provider value = {pageProps} >
        <Theme >
          <DefaultSeo
            title = "Michael Metzger's digital garden"
            description = "Michael's digital garden of visual essays"
            openGraph = {{
              type     : 'website',
              locale   : 'en',
              url      : 'https://micmetz.github.io',
              site_name: 'Michael Metzger'
            }}
          />
          <GoogleAnalytics trackPageViews />

          {/* <container > */}
            <AnimatePresence mode = 'wait' initial = {true} >
              <Navigation ref = {navigationRef} />
              <Component Component key = {router.route} {...pageProps} />
            </AnimatePresence >
          {/* </container > */}

          <Footer />
        </Theme >
      </PageContext.Provider >
    </>
  );
}




