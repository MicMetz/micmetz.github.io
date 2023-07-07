import { AnimatePresence }              from 'framer-motion';
import { DefaultSeo }                   from 'next-seo';
import { useRouter }                    from 'next/router';
import { GoogleAnalytics }              from 'nextjs-google-analytics';
import React, { createContext, useRef } from 'react';
import Footer                           from '../components/Layouts/Footer.js';
import { Navigation }                   from '../components/Navigation/Navigation.js';
import Theme                            from '../themes/theme.js';
// import * as gtag                                   from '../tools/gtag.js';




export const PageContext = createContext( {} );

export default function App( { Component, pageProps } ) {
  const router        = useRouter();
  const navigationRef = useRef( null );


  // log page props, but only in browser, not in node
  if ( typeof window !== 'undefined' ) {
    console.log( { pageProps } );
  }

  if ( router.pathname === '/ogImage' ) {
    return (
      <>
        <Theme />
        <Component {...pageProps} />
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
    <PageContext.Provider value = {pageProps} >
      <GoogleAnalytics trackPageViews />
      <container >
        <Theme >
          <DefaultSeo
            title = "Michael Metzger's digital garden"
            description = "Michael's digital garden of visual essays"
            openGraph = {{
              type     : 'website',
              locale   : 'en',
              url      : 'https://www.micmetz.com/',
              site_name: 'Michael Metzger'
            }}
          />
          <AnimatePresence mode = 'wait' initial = {true} >
            <Navigation ref = {navigationRef} />
            <Component Component key = {router.route} {...pageProps} />
          </AnimatePresence >
          <Footer />
        </Theme >
      </container >
    </PageContext.Provider >
  );
}




