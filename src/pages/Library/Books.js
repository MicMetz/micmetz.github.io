import { ReadingList } from '/posts/data/ReadingList.js'
import React, {
  useEffect,
  useRef,
  useState
}                      from 'react'
import LibraryBookCard from "../../components/Cards/LibraryBookCard.js";
import Header          from "../../components/Layouts/Header.js";
import LibraryLayout   from "../../components/Layouts/LibraryLayout.js";
import { Spacer }      from "../../components/MISC/Spacer.js";
import {
  LibrarySectionTitle,
  LibraryStyledBody,
  LibraryStyledMain
}                      from '../../styles/LibraryStyledComponents.js'



export default function ReadingPage( forwardRef, open, toggle ) {
  const [ activeFeature, setActiveFeature ]   = useState( ReadingList[ 0 ] )
  const [ scrollPosition, setScrollPosition ] = useState()
  const navRef                                = useRef( { open, toggle } )
  const ref                                   = useRef( forwardRef )
  const [ activeReading, setActiveReading ]   = useState( ReadingList.find( ( book ) => book.id === 0 ) )


  useEffect( () => {
    let isMounted = true
    window.addEventListener( 'scroll', handleScroll )

    return () => {
      window.removeEventListener( 'scroll', handleScroll )
      isMounted = false
    }
  }, [] )


  const loadActiveReading = ( book ) => {
    if ( book === null && activeReading !== null ) {
      return
    } else if ( book !== null ) {
      setActiveReading( book )
    }
  }


  const handleScroll = () => {
    const observer = new IntersectionObserver( intersections => {
      intersections.forEach( ( intersection ) => {
        if ( intersection.intersectionRatio > 0.5 ) {
          loadActiveReading( ReadingList[ intersection.target.id ] )
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


  return (
    <LibraryLayout >
      <Header title = "Reading List" description = "A collection of books I've read and recommend." />
      <LibraryStyledBody >
        <LibraryStyledMain >
          <LibrarySectionTitle main >Reading List</LibrarySectionTitle >
          {ReadingList.map( ( book, index ) => {
            return (
              <LibraryBookCard key = {index} book = {book} index = {index} />
            )
          } )}
        </LibraryStyledMain >
      </LibraryStyledBody >
      <Spacer size = "3xlarge" />
    </LibraryLayout >
  );


}


const transition = {
  duration: 1,
  ease    : [
    0.6,
    0.01,
    -0.05,
    0.9
  ],
}


const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter  : { scale: 1, opacity: 1, transition },
  exit   : {
    scale     : 0.5,
    opacity   : 0,
    transition: { duration: 1.5, ...transition },
  },
}


const frameVariants = {
  hover: { scale: 0.95 },
}



{/* <Sidebar header = {activeReading.header}
 chapters = {activeReading.chapters}
 open = {open}
 toggle = {toggle}
 forwardRef = {navRef}
 /> */
}
