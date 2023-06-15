import {
  useEffect,
  useState
}                          from "react";
import { CurrentReadings } from "../../../posts/data/CurrentReadings.js";
import LibraryBookCard     from "../../components/Cards/LibraryBookCard.js";
import Header              from "../../components/Layouts/Header.js";
import LibraryLayout       from "../../components/Layouts/LibraryLayout.js";
import { Spacer }          from "../../components/MISC/Spacer.js";
import SplashScreen        from "../../components/MISC/Splash.js";
import {
  LibrarySectionTitle,
  LibraryStyledBody,
  LibraryStyledMain
}                          from "../../styles/LibraryStyledComponents.js";



let animation;

export default function LibraryPage() {
  const [ activeFeature, setActiveFeature ]   = useState( CurrentReadings[ 0 ] )
  const [ scrollPosition, setScrollPosition ] = useState()
  const [ isToggleOpen, setIsToggleOpen ]     = useState( false )
  const [ isSidebarOpen, setIsSidebarOpen ]   = useState( false )


  useEffect( () => {
    window.addEventListener( 'scroll', handleScroll )
    return () => {
      window.removeEventListener( 'scroll', handleScroll )
    }
  }, [] )


  const loadActiveReading = ( feature ) => {
    if ( feature === null && activeFeature !== null ) {
      return
    } else if ( feature !== null ) {
      setActiveFeature( feature )
    }
  }


  const handleScroll = () => {
    const observer = new IntersectionObserver( intersections => {
      intersections.forEach( ( intersection ) => {
        if ( intersection.intersectionRatio > 0.5 ) {
          loadActiveReading( CurrentReadings[ intersection.target.id ] )
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


  return (
    <LibraryLayout >
      <Header title = "Michael Metzger | Library" />
      <SplashScreen />
      <LibraryStyledBody >
        <LibraryStyledMain >
          <LibrarySectionTitle main >Currently Reading</LibrarySectionTitle >
          {CurrentReadings?.map( ( book, index ) => {
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

