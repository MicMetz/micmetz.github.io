import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from "react";
import { GalleryData } from "../../../posts/data/GalleryData.js";
import { Layout } from "../../components/Layouts/Layout.js"
import { GalleryContainer, ImageCard, ImageSpread, ImgStripe, PhotoGrid, Section, SectionTitle } from "../../styles/StyledComponents.js";



export default function PhotoGallery() {
		const router = useRouter()

		const [ selectedImage, setSelectedImage ] = useState( null );

  const [ isLoaded, setIsLoaded ] = useState( false );

  const [ images, setImages ] = useState( [] );

  const [ error, setError ] = useState( null );

  const [ page, setPage ] = useState( 1 );


  const [ hasMore, setHasMore ] = useState( false );


  const observer = useRef( null );


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
						<Section nopadding id = "PhotographyPage" >
								<GalleryContainer >
										<Section row nopadding >
												<ImageSpread src = {GalleryData[ 0 ].image} />
										</Section >

										<Section flex >
												<Section row nopadding >
														<SectionTitle main >Photos</SectionTitle >
												</Section >

												<Section row >
														<PhotoGrid >
																{images.map( ( image, index ) => {
																		return (
																				<ImageCard >
																						<ImgStripe
																								src = {image.image}
																								width = {image.width}
																								height = {image.height}
																								onClick = {() => selectImage( image )}
																						/>
																				</ImageCard >
																		);
																} )}
														</PhotoGrid >
												</Section >

												<div id = "gallery-bottom" ></div >


												{isLoaded && hasMore && (
														<div className = "loading" >
																<h2 >Loading...</h2 >
														</div >
												)}


										</Section >
								</GalleryContainer >
						</Section >
				</Layout >
  );
}



/*

 return (
 <Layout >
 <Section nopadding id = "PhotographyPage" >
 <GalleryContainer >
 <Section flex >

 <Section row nopadding >
 <SectionTitle main >Photos</SectionTitle >
 </Section >

 <Section row >
 <PhotoGrid >
 {GalleryData.map(
 ( gallery ) => {
 return (
 <ImageCard >
 <ImgStripe
 src = {gallery.image}
 key = {gallery.id}
 width = {gallery.width}
 height = {gallery.height}
 // layout = "fill"
 />
 </ImageCard >
	)
	}
	)}
	</PhotoGrid >
	</Section >
	</Section >
	</GalleryContainer >
	</Section >
	</Layout >
	);
	*/
