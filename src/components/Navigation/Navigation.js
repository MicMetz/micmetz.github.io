import Link                                       from 'next/link'
import React, { forwardRef, useEffect, useState } from 'react'
import MainNavLinks                               from "./MainNavLinks.js";
import MobileMenu                                 from "./MobileMenu.js";
import { RightHandSide, StyledNavbar }            from './NavigationStyles.js'




export const Navigation = forwardRef( ( props, ref ) => {
  const [ searchState, setSearchState ]     = useState( { query: {} } );
  const [ searchResults, setSearchResults ] = useState( [] );
  const [ isMobileMenuOpen, setMobileMenu ] = useState( false );
  const [ selection, setSelection ]         = useState( "/" );


  /*
   useImperativeHandle( ref, () => ({
   setSearchState,
   setSearchResults
   })  );
   */

  /*
   useEffect( () => {
   // If there is no search query, return early and reset the results
   if ( !searchState.query ) {
   setSearchResults( [] );
   return;
   }

   // Otherwise, search for results
   const search = async () => {
   try {
   const res = await fetch(
   `/api/search?q=${searchState.query}`
   );

   const searchResults = await res.json();
   setSearchResults( searchResults );
   } catch (error) {
   console.error( error );
   }
   };
   search();
   }, [ searchState.query ] );
   */


  return (
    <StyledNavbar
      ref = {ref}
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      transition = {{ duration: 1, delay: 0.1 }}
    >
      <Link href = "/" >
        <a aria-label = "Home" style = {{ display: 'flex', alignItems: 'center', color: 'rgba(0, 0, 0, 0.75)', marginLeft: '1rem', fontSize: "1.4rem" }} >
          <img src = "/icons/logo-hook.svg" width = "24" height = "20" xmlns = "http://www.w3.org/2000/svg" />
          <span className = "" >Michael Metzger</span >
        </a >
      </Link >
      <RightHandSide >
        {/* <SearchBarAndResults searchResults = {[]} searchState = {{ query: {} }}/> */}
        <MainNavLinks />
      </RightHandSide >
      <MobileMenu />
    </StyledNavbar >
  );
} )



