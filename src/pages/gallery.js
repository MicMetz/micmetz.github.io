import useEmblaCarousel                            from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from "react";
import styled          from "styled-components";
import { GalleryData } from "../../data/GalleryData.js";
import Layout          from "../components/Layouts/Layout.js"




export default function PhotoGallery() {
  const images                              = randomizeImages( GalleryData )
  const [ selectedIndex, setSelectedIndex ] = useState( 0 )
  const [ emblaMainRef, emblaMainApi ]      = useEmblaCarousel( {} )
  const [ emblaThumbsRef, emblaThumbsApi ]  = useEmblaCarousel( {
    containScroll: 'keepSnaps',
    dragFree     : true,
  } )

  const onThumbClick = useCallback(
    ( index ) => {
      if ( !emblaMainApi || !emblaThumbsApi ) {
        return
      }
      emblaMainApi.scrollTo( index )
    },
    [ emblaMainApi, emblaThumbsApi ],
  )

  const onSelect = useCallback( () => {
    if ( !emblaMainApi || !emblaThumbsApi ) {
      return
    }
    setSelectedIndex( emblaMainApi.selectedScrollSnap() )
    emblaThumbsApi.scrollTo( emblaMainApi.selectedScrollSnap() )
  }, [ emblaMainApi, emblaThumbsApi, setSelectedIndex ] )

  useEffect( () => {
    if ( !emblaMainApi ) {
      return
    }
    onSelect()
    emblaMainApi.on( 'select', onSelect )
    emblaMainApi.on( 'reInit', onSelect )
  }, [ emblaMainApi, onSelect ] )


  function randomizeImages( data ) {
    let set = Array.from( data );
    return set.sort( () => Math.random() - 0.5 );
  }



  return (
    <Layout >
      <Embla >
        <EmblaSlideViewport ref = {emblaMainRef} >
          <EmblaSlideContainer >
            {GalleryData.map( ( image, index ) => (
              <EmblaSlide key = {index} >
                <EmblaThumbSlideNumber >
                  <span >{index + 1}</span >
                </EmblaThumbSlideNumber >
                <EmblaSlideImg
                  src = {image.image}
                  alt = ""
                />
              </EmblaSlide >
            ) )}
          </EmblaSlideContainer >
        </EmblaSlideViewport >

        <EmblaThumbs ref = {emblaThumbsRef} >
          <EmblaThumbContainer >
            {GalleryData.map( ( image, index ) => (
              <Thumb
                onClick = {() => onThumbClick( index )}
                selected = {index === selectedIndex}
                index = {index}
                imgSrc = {(image.image)}
                key = {index}
              />
            ) )}
          </EmblaThumbContainer >
        </EmblaThumbs >
      </Embla >
    </Layout >
  );
}


const Thumb = ( props ) => {
  const { selected, imgSrc, index, onClick, width } = props

  return (
    <>
      <EmblaThumbSlideButton onClick = {onClick} >
        {selected ? (
          <EmblaSlideSelectedThumb >
            <EmblaThumbSlideNumber >
              <span >{index + 1}</span >
            </EmblaThumbSlideNumber >
            <EmblaSlideThumbImg
              src = {imgSrc}
              alt = ""
            />
          </EmblaSlideSelectedThumb >
        ) : (
          <EmblaSlideThumb >
            <EmblaThumbSlideNumber >
              <span >{index + 1}</span >
            </EmblaThumbSlideNumber >
            <EmblaSlideThumbImg
              src = {imgSrc}
              alt = ""
            />
          </EmblaSlideThumb >
        )}
      </EmblaThumbSlideButton >
    </>
  )
}



const Embla = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 75vh;
  padding: 1.6rem;
`;


const EmblaSlideViewport = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;


const EmblaSlideContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  flex-direction: row;
  height: auto;
  margin-left: calc(var(--slide-spacing) * -1);
`;


const EmblaSlide = styled.div`
  flex: 0 0 var(--slide-size);
  width: 100%;
  height: 100%;
  max-height: var(--slide-height);
  padding-left: var(--slide-spacing);
  position: relative;
`;



const EmblaSlideImg = styled.img`
  display: block;
  height: var(--slide-height);
  //width: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  margin: 0 auto;

`;



const EmblaThumbs = styled.div`
  --thumbs-slide-spacing: 0.8rem;
  --thumbs-slide-height: 9rem;
  margin-top: var(--thumbs-slide-spacing);
  overflow: hidden;
`;



const EmblaSlideSelectedThumb = styled.div`
  flex: 0 0 28%;
  min-width: 0;
  padding-left: var(--thumbs-slide-spacing);
  position: relative;
  opacity: 1;

`;



const EmblaSlideThumb = styled.div`
  flex: 0 0 28%;
  min-width: 0;
  padding-left: var(--thumbs-slide-spacing);
  position: relative;
  opacity: 0.5;

  &:hover {
    opacity: .75;
  }

`;


const EmblaThumbContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--thumbs-slide-spacing) * -1);
`;



const EmblaThumbSlideButton = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: block;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 8rem;

  &:hover {
    opacity: 1;
  }
`;



const EmblaSlideThumbImg = styled.img`
  display: block;
  height: var(--thumbs-slide-height);
  width: 100%;
  object-fit: cover;
`;


const EmblaThumbSlideNumber = styled.div`
  width: 3rem;
  height: 3rem;
  z-index: 1;
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  border-radius: 50%;
  background-color: rgba(var(--background-site-rgb-value), 0.85);
  line-height: 3rem;
  font-weight: 900;
  text-align: center;
  pointer-events: none;


  span {
    color: var(--brand-primary);
    background-image: linear-gradient(45deg,
    var(--brand-primary),
    var(--brand-secondary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.4rem;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

`;

