import { TimelineData }                       from '../../../data/TimelineData.js';
import React, { useEffect, useRef, useState } from 'react';
import styled                                 from "styled-components";
import { Section, SectionText, SectionTitle } from '../../styles/StyledComponents.js';



const TOTAL_CAROUSEL_COUNT = TimelineData.length;

const TimelineFeature = () => {
		const [ activeItem, setActiveItem ] = useState( 0 );
		const carouselRef = useRef();

		const scroll = ( node, left ) => {
				return node.scrollTo( { left, behavior: 'smooth' } );
		}

		const handleClick = ( e, i ) => {
				e.preventDefault();

				if ( carouselRef.current ) {
						const scrollLeft = Math.floor( carouselRef.current.scrollWidth * 0.7 * ( i / TimelineData.length ) );

						scroll( carouselRef.current, scrollLeft );
				}
		}

		const handleScroll = () => {
				if ( carouselRef.current ) {
						const index = Math.round( ( carouselRef.current.scrollLeft / ( carouselRef.current.scrollWidth * 0.7 ) ) * TimelineData.length );

						setActiveItem( index );
				}
		}

		useEffect( () => {
				const handleResize = () => {
						scroll( carouselRef.current, 0 );
				}

				// window.addEventListener( 'resize', handleResize );
		}, [] );

		return (
				<Section id = "about" >
						<SectionTitle >My Path So Far</SectionTitle >
						<SectionText >

						</SectionText >
						<CarouselContainer ref = {carouselRef} onScroll = {handleScroll} >
								<>
										{TimelineData.map( ( item, index ) => (
												<CarouselMobileScrollNode
														key = {index}
														final = {index === TOTAL_CAROUSEL_COUNT - 1} >
														<CarouselItem
																index = {index}
																id = {`carousel__item-${index}`}
																active = {activeItem}
																onClick = {( e ) => handleClick( e, index )} >
																<CarouselItemTitle >
																		{`${item.year}`}
																		<CarouselItemImg
																				width = "208"
																				height = "6"
																				viewBox = "0 0 208 6"
																				fill = "none"
																				xmlns = "http://www.w3.org/2000/svg" >
																				<path
																						fillRule = "evenodd"
																						clipRule = "evenodd"
																						d = "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
																						fill = "url(#paint0_linear)"
																						fillOpacity = "0.33"
																				/>
																				<defs >
																						<linearGradient
																								id = "paint0_linear"
																								x1 = "-4.30412e-10"
																								y1 = "0.5"
																								x2 = "208"
																								y2 = "0.500295"
																								gradientUnits = "userSpaceOnUse" >
																								<stop stopColor = "white" />
																								<stop
																										offset = "0.79478"
																										stopColor = "white"
																										stopOpacity = "0"
																								/>
																						</linearGradient >
																				</defs >
																		</CarouselItemImg >
																</CarouselItemTitle >
																<CarouselItemText >{item.text}</CarouselItemText >
														</CarouselItem >
												</CarouselMobileScrollNode >
										) )}
								</>
						</CarouselContainer >
						<CarouselButtons >
								{TimelineData.map( ( item, index ) => {
										return (
												<CarouselButton
														key = {index}
														index = {index}
														active = {activeItem}
														onClick = {( e ) => handleClick( e, index )}
														type = "button" >
														<CarouselButtonDot active = {activeItem} />
												</CarouselButton >
										);
								} )}
						</CarouselButtons >
						{/* <SectionDivider /> */}
				</Section >
		);
};

export default TimelineFeature;



const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0F1624;
  border-radius: 8px;
  border: 1px solid #212D45;
  padding: 1.5rem 2rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  /* overflow-x: hidden; */

  margin-left: 32px;

  &:first-of-type {
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${props => props.theme.breakpoints.mediaSM} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`
const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.mediaSM} {
    display: flex;
    min-width: ${( { final } ) => final ? `120%;` : `min-content`}
  }
`

const CarouselItem = styled.div`
  background: #0F1624;
  border-radius: 3px;
  max-width: 196px;

  @media ${props => props.theme.breakpoints.mediaMD} {
    max-width: 124px;
  }

  @media ${props => props.theme.breakpoints.mediaSM} {
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${( props ) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`};
  }
`

const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.mediaMD} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${props => props.theme.breakpoints.mediaSM} {
    font-size: 16px;
    line-height: 24px;
  }
`
const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: \`linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))\`;
  width: 100%;

  @media ${props => props.theme.breakpoints.mediaSM} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.mediaMD} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.mediaSM} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`
const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.mediaSM} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`

const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${( props ) => props.active === props.index ? `1` : `.33`};
  transform: ${( props ) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`

const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`
