import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import React, { useRef } from 'react';
import Footer from '../components/Layouts/Footer.js';
import { Navigation } from '../components/Navigation/Navigation.js';
import Theme from '../themes/theme.js';




export default function App( { Component, pageProps, router } ) {
  const navigationRef = useRef( null );


  if ( router.pathname === '/ogImage' ) {
    return (
      <>
        <Theme />
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
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
    </>
  );
}




