import Link                            from 'next/link';
import React, { forwardRef, useState } from 'react';
import MainNavLinks                    from './MainNavLinks.js';
import MobileMenu                      from './MobileMenu.js';
import { RightHandSide, StyledNavbar } from './NavigationStyles.js';




export const Navigation = forwardRef( ( props, ref ) => {
  const [ isMobileMenuOpen, setMobileMenu ] = useState( false );
  // const [ searchState, setSearchState ]     = useState( { query: {} } );
  // const [ searchResults, setSearchResults ] = useState( [] );
  // const [ selection, setSelection ]         = useState( '/' );


  return (
    <StyledNavbar
      ref = {ref}
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      transition = {{ duration: 1, delay: 0.1 }}
    >
      <Link href = '/' >
        <a aria-label = 'Home' style = {{ display: 'flex', alignItems: 'center', color: 'rgba(0, 0, 0, 0.75)', marginLeft: '1rem', fontSize: '1.4rem' }} >
          <img src = '/icons/logo-hook.svg' width = '24' height = '24' xmlns = 'http://www.w3.org/2000/svg' />
          <span className = '' >Metzger</span >
        </a >
      </Link >

      {/* <Link href = '/testbed-lesson' > */}
      {/*   <a >Test</a > */}
      {/* </Link > */}

      <RightHandSide >
        {/* <SearchBarAndResults searchResults = {[]} searchState = {{ query: {} }}/> */}
        <MainNavLinks />
      </RightHandSide >
      <MobileMenu />
    </StyledNavbar >
  );
} );



