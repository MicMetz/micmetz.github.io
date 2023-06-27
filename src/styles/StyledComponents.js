import { motion } from "framer-motion";
import Link       from "next/link";
import styled     from 'styled-components'




export const StyledLayout = styled( motion.main )`
  max-width: 1400px;
  margin: var(--space-l) auto var(--space-128);
  padding: 0 var(--space-l);
  @media (max-width: 768px) {
    margin: var(--space-s) auto var(--space-2xl);
    padding: 0 var(--space-m);
  }
  @media (max-width: 576px) {
    margin: var(--space-xs) auto var(--space-xl);
    padding: 0 var(--space-xs);
  }
`;



export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;




export const ImageSpread = styled.img`
  width: 100%;
  height: 100%;
  max-height: 75vh;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  border-radius: 0.5rem;

  @media ${( props ) => props.theme.breakpoints.mediaMD} {
    max-height: 50vh;

  }

  @media ${( props ) => props.theme.breakpoints.mediaSM} {
    max-height: 50vh;
  }

  @media ${( props ) => props.theme.breakpoints.mediaXS} {
    max-height: 50vh;
  }
`;



export const ImageCard = styled.div`
  display: flex;
  --imageHeight: calc(100vw / 6);
  --imageWidth: calc(100vw / 8);
  height: var(--imageHeight);
  width: var(--imageWidth);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  }

  @media ${( props ) => props.theme.breakpoints.mediaMD} {
    margin: 0 0 1rem;
    --imageHeight: calc(100vw / 6);
    --imageWidth: calc(100vw / 8);
    width: var(--imageWidth);
    height: var(--imageHeight);
  }

  @media ${( props ) => props.theme.breakpoints.mediaSM} {
    margin: 0 0 1rem;
    --imageHeight: calc(100vw / 6);
    --imageWidth: calc(100vw / 4);
    width: var(--imageWidth);
    height: var(--imageHeight);

`;



export const ImgStripe = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.2s ease-in-out;
  border-radius: 0.9rem;
`;



export const Section = styled.section`
  display: ${( props ) => props.grid ? "grid" : "flex"};
  flex-direction: ${( props ) => props.row ? "row" : "column"};
  padding: ${( props ) => props.nopadding ? "0" : "48px 0"};
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: content-box;
  position: relative;
  //overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${( props ) => props.theme.breakpoints.mediaMD} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${( props ) => props.theme.breakpoints.mediaSM} {
    padding: ${( props ) => props.nopadding ? "0" : "16px 16px 0"} ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;



export const LeftSection = styled.div`
  max-width: calc(100% - 100px);
  height: fit-content;


  @media ${( props ) => props.theme.breakpoints.mediaSM} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${( props ) => props.theme.breakpoints.mediaMD} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;



export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${( props ) => props.main ? '6rem' : '4rem'};
  line-height: ${( props ) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #171748 18.77%, rgba(0, 0, 0, 0.75) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  padding: ${( props ) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.mediaMD} {
    font-size: ${( props ) => props.main ? '56px' : '48px'};
    line-height: ${( props ) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${( props ) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.mediaSM} {
    font-size: 32px;
    //line-height: 40px;
    font-size: ${( props ) => props.main ? '28px' : '32px'};
    line-height: ${( props ) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${( props ) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`;



export const SectionText = styled.div`
  width: 100%;
  height: fit-content;

  position: relative;
  margin: auto;
  max-font-size: 2.2rem;
  font-size: 2.2rem;
  line-height: 3.2rem;
  font-weight: 300;
  color: black;

  @media ${( props ) => props.theme.breakpoints.mediaMD} {
    //max-width: 670px;
    font-size: 50%;
    line-height: 2.8rem;
    padding-bottom: 3.6rem;
  }

  @media ${( props ) => props.theme.breakpoints.mediaSM} {
    //max-width: 500px;
    font-size: 50%;
    line-height: 2.4rem;
    padding-bottom: 3.6rem;
  }

  @media ${( props ) => props.theme.breakpoints.mediaLG} {
    //max-width: 700px;
    font-size: 2.2rem;
    line-height: 3.2rem;
    padding-bottom: 3.6rem;

  }
`;



export const SectionRightText = styled.p`
  max-width: 45%;
  font-size: 2.2rem;
  line-height: 3.2rem;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: black;

  @media ${( props ) => props.theme.breakpoints.mediaMD} {
    max-width: 670px;
    font-size: 2rem;
    line-height: 2.8rem;
    padding-bottom: 3.6rem;
  }

  @media ${( props ) => props.theme.breakpoints.mediaSM} {
    font-size: 1.8rem;
    line-height: 2.4rem;
    padding-bottom: 3.6rem;
  }
`;



export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: black;

  @media ${( props ) => props.theme.breakpoints.mediaMD} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${( props ) => props.theme.breakpoints.mediaSM} {
    font-size: 14px;
    line-height: 22px;
  }
`;



export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;



export const Sprite = styled.div`
  background-image: url(${( { src } ) => src});
  background-repeat: no-repeat;
  background-size: contain;
  width: ${( { size } ) => size ? size : '24px'};
  height: ${( { size } ) => size ? size : '24px'};
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;



export const GalleryContainer = styled.section`
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
