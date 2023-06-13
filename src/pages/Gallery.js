import React, { useEffect, useRef, useState } from "react";
import { GalleryData } from "../../posts/data/GalleryData.js";
import { Layout } from "../components/Layouts/Layout.js"
import { GalleryContainer, ImageCard, ImageSpread, ImgStripe, Section, SectionTitle } from "../styles/StyledComponents.js";
import { PhotoGrid } from "../styles/StyledGridComponents.js";



function randomizeImages( data ) {
  let set = Array.from( data );
  return set.sort( () => Math.random() - 0.5 );
}



export default function PhotoGallery() {
  const imageRef = useRef( randomizeImages( GalleryData ) );
  const observer = useRef( null );

  const [ selectedImage, setSelectedImage ] = useState( imageRef.current[ 0 ] );
  const [ isLoaded, setIsLoaded ] = useState( false );
  const [ images, setImages ] = useState( [] );
  const [ error, setError ] = useState( null );
  const [ page, setPage ] = useState( 1 );
  const [ hasMore, setHasMore ] = useState( false );



  function selectImage( image ) {
    setSelectedImage( image );
  }


  function handleObserver( entities ) {
    const target = entities[ 0 ];
    if ( target.isIntersecting ) {
      setPage( page + 1 );
    }

  }


  function fetchImages() {
    for ( let i = 0; i < GalleryData.length; i++ ) {
      setImages( ( images ) => [ ...images, GalleryData[ i ] ] );
    }
    setIsLoaded( true );
  }


  useEffect( () => {
    const options = {
      root      : null,
      rootMargin: "20px",
      threshold : 1.0
    };
    observer.current = new IntersectionObserver( handleObserver, options );
    if ( images.length ) {
      observer.current.observe( document.querySelector( "#gallery-bottom" ) );
    }
  }, [ images ] );


  useEffect( () => {
    fetchImages();
  }, [ page ] );



  return (
    <Layout >
      <Section nopadding id = "PhotographyPage">
        <GalleryContainer >


          <Section flex>
            <Section row nopadding>
              <SectionTitle main>Photos</SectionTitle >
            </Section >
          </Section >

          <Section row>
            <ImageSpread src = {selectedImage?.image}/>
          </Section >

          <Section flex>
            <Section column nopadding>
              <PhotoGrid >
                {images.map( ( image, index ) => {
                  return (
                    <ImageCard >
                      <ImgStripe
                        src = {image.image}
                        width = {image.width}
                        height = {image.height}
                        onClick = {() => selectImage( images[ index ] )}
                      />
                    </ImageCard >
                  );
                } )}
                <div id = "gallery-bottom"></div >

                {isLoaded && hasMore && (
                  <div className = "loading">
                    <h2 >Loading...</h2 >
                  </div >
                )}
              </PhotoGrid >
            </Section >
          </Section >



        </GalleryContainer >
      </Section >
    </Layout >
  );
}



const useOnScreen = ( ref ) => {
  const [ isIntersecting, setIntersecting ] = useState( false );

  const observer = new IntersectionObserver(
    ( [ entry ] ) => setIntersecting( entry.isIntersecting )
  );

  useEffect( () => {
    observer.observe( ref.current );
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [] );

  return isIntersecting;
}
