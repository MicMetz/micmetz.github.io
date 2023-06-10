import { useEffect, useState } from "react";
import { CurrentReadings } from "../../../posts/data/CurrentReadings.js";
import Header from "../../components/Layouts/Header.js";
import { Layout } from "../../components/Layouts/Layout.js";
import LibraryLayout from "../../components/Layouts/LibraryLayout.js";
import { Sidebar } from "../../components/Layouts/Sidebar.js";
import { Spacer } from "../../components/MISC/Spacer.js";
import SplashScreen from "../../components/MISC/Splash.js";
import { BookAtrribution, BookByline, BookCoverImage, BookSubtitle, BookTagline, BookTitle } from "../../styles/BookStyledComponents.js";
import { ContentBlock, DefaultBody, DefaultMain, LibrarySectionTitle } from "../../styles/LibraryStyledComponents.js";
import { DescriptionParser } from "../../tools/DescriptionParser.js";



let animation;

export default function LibraryPage( ) {
  const [ activeFeature, setActiveFeature ] = useState( CurrentReadings[ 0 ] )
  const [ scrollPosition, setScrollPosition ] = useState()
  const [ isToggleOpen, setIsToggleOpen ] = useState( false )
  const [ isSidebarOpen, setIsSidebarOpen ] = useState( false )


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
    <LibraryLayout>
      <Header title = "Michael Metzger | Library"/>
      <SplashScreen />
        <DefaultBody >
          <Sidebar header = {activeFeature.header}
                   chapters = {activeFeature.chapters}
                   open = {isSidebarOpen} toggle = {setIsSidebarOpen}
          />
          <DefaultMain >

            <LibrarySectionTitle main>Currently Reading</LibrarySectionTitle >
            {CurrentReadings?.map( ( book, index ) => {

              return (
                <ContentBlock key = {index} value = {book} id = {index}>
                  {DescriptionParser( book )}
                  <BookAtrribution >
                    <BookTitle >{book.header.title}</BookTitle >
                    <BookSubtitle >{book.header.subtitle}</BookSubtitle >
                    <BookByline >{book.author}</BookByline >
                  </BookAtrribution >
                  <BookCoverImage src = {book.cover} alt = {book.header.title}/>
                  <BookTagline >
                    <ul >
                      <li >
                        <a href = {book.link} target = "blank">Read More</a >
                      </li >
                      {book.tags.map( ( tag, id ) => {
                        return (
                          <li key = {id}>
                            <a href = {tag.link} target = "blank">{tag.name}</a >
                          </li >
                        )
                      } )}
                    </ul >
                  </BookTagline >
                </ContentBlock >
              )
            } )}
          </DefaultMain >
        </DefaultBody >

        <Spacer size = "3xlarge"/>
    </LibraryLayout >
  )
}



//
// export const getStaticProps = () => {
//
//   const data    = getLatestPosts();
//   const allPost = getAllPosts();
//   const feed    = generateRSSFeed(allPost)
//   fs.writeFileSync('public/rss.xml', feed.rss2());
//
//   return {
//     props: {
//       posts: data
//     }
//   }
// }
