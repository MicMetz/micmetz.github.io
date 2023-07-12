import React, { useEffect, useRef, useState } from 'react'
import { ArticleList }                        from '../../../data/Articles.js'
import Header                                 from "../../components/Layouts/Header.js";
import LibraryLayout                                                 from '../../components/Layouts/LibraryLayout.js'
import { Spacer }                                                    from "../../components/Base/Spacer.js";
import { LibrarySectionTitle, LibraryStyledBody, LibraryStyledMain } from '../../styles/LibraryStyledComponents.js'



export default function ArticlesPage( forwardRef, open, toggle ) {
  const [ activeFeature, setActiveFeature ] = useState( ArticleList[ 0 ] )
  const [ scrollPosition, setScrollPosition ] = useState()
  const navRef = useRef( { open, toggle } )


  useEffect( () => {
    window.addEventListener( 'scroll', handleScroll )
    return () => {
      window.removeEventListener( 'scroll', handleScroll )
    }
  }, [] )


  const loadActiveArticle = ( article ) => {
    if ( article === null && activeFeature !== null ) {
      return
    } else if ( article !== null ) {
      setActiveFeature( article )
    }
  }


  const handleScroll = () => {
    const observer = new IntersectionObserver( intersections => {
      intersections.forEach( ( intersection ) => {
        if ( intersection.intersectionRatio > 0.5 ) {
          loadActiveArticle( ArticleList[ intersection.target.id ] )
        }
      } )
    }, {
      threshold: 0.5
    } )

    document.querySelectorAll( 'section[id]' ).forEach( ( section ) => {
      if ( section !== null ) {
        observer.observe( section )
      }
    } )
  }


  const handleFeature = ( index ) => {
    setActiveFeature( index )
  }


  const handleNav = () => {
    navRef.current.toggle()
  }



  return (
    <LibraryLayout >
      <Header title = "Article List" description = "A list of articles that have stuck with me over the years."/>
      <LibraryStyledBody >
        <LibraryStyledMain >
          <LibrarySectionTitle main>Notable Articles</LibrarySectionTitle >
          {/* {ArticleList.map( ( article, index ) => {


           } )} */}
        </LibraryStyledMain >
      </LibraryStyledBody >

      <Spacer size = "3xlarge"/>

    </LibraryLayout >
  );
}
