import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { SidebarHeader, SidebarMenuButtonOverlay, SideMenuClosed, SideMenuHeader, SideMenuOpened, TableHeader, TableItem, TableOfContents } from '../../styles/SidebarStyledComponents.js'



export const Sidebar = ( { header, chapters, type, open, toggle, forwardRef } ) => {
  const [ menuOpen, setMenu ] = useState( false )
  const [ activeChapter, setActiveChapter ] = useState()
  const route = useRouter().asPath;

  useEffect( () => {
    let isMounted = true
    if ( isMounted ) {
      setActiveChapter( window.location.hash.slice( 1 ) )
    }
    return () => { isMounted = false }
  }, [] )


  const toggleSidebar = ( event ) => {
    event.preventDefault()
    setMenu( !menuOpen )
  }

  return (
    <StyledSidebar >
      <SidebarMenuButtonOverlay onClick = {toggleSidebar}>
        {menuOpen ?
          <SideMenuOpened >
            <SideMenuHeader >
              <h1 >{header?.title}</h1 >
              <h2 >{header?.subtitle || header?.preamble}</h2 >
            </SideMenuHeader >
            <TableOfContents >
              <TableHeader >
                <h3 >Table of Contents</h3 >
              </TableHeader >
              <ul >
                {chapters?.map( ( { text }, id ) => {
                  const link = text.toLowerCase()
                  .toLowerCase()
                  .replace( /\s/g, "-" )
                  .replace( /[.,?()]/gim, "" )
                  .replace( /<[^>]+>/g, "" );
                  return (
                    // <TableItem key = {id} active = {activeChapter === chapterTitle.toLowerCase().replace( / /g, '-' )}>
                    <TableItem key = {id}>
                      <a href = {`${route}#${link}`}>
                        <span ></span >
                        {text}
                      </a >
                    </TableItem >
                  );
                } )}
              </ul >
            </TableOfContents >
          </SideMenuOpened >
          :
          <SideMenuClosed >
            <SidebarHeader >
              <h1 >{header?.title}</h1 >
            </SidebarHeader >
          </SideMenuClosed >
        }
      </SidebarMenuButtonOverlay >
    </StyledSidebar >
  )
}



const StyledSidebar = styled.aside`
  width: fit-content;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: ${( { theme } ) => theme.colors.sidebar};
  z-index: 100;
  transition: all 0.5s ease;
  overflow: hidden;


    // ${( { theme } ) => theme.mediaQueries.tablet} {
  //   width: 30%;
  //   height: 100%;
  // }
  //
    // ${( { theme } ) => theme.mediaQueries.desktop} {
  //   width: 20%;
  //   height: 100%;
  // }

`;
