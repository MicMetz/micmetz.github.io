import Image                 from "next/image";
import styled                from "styled-components";
import { ExternalHoverLink } from "../Links/ExternalHoverLink.js";
import ImageLink             from "../Links/ImageLink.js";




export default function ArticleCard( { title, preamble, cover, link, publisher, author, date } ) {
  return (
    <StyledArticleCard >
      <StyledArticleCoverWrapper >
        <ImageLink href = {link} target = "_blank" rel = "noopener noreferrer" >
        <img src = {cover} alt = {title} />
        </ImageLink >
      </StyledArticleCoverWrapper >
      <StyledArticleDetailsWrapper >
        <h3 >{title}</h3 >
        <p >{preamble}</p >
        <p >
          <span className = "metadata" >{author}</span >
          <br />
          <span className = "metadata" >{publisher}</span >
          <br />
          <span className = "metadata" >{date}</span >
        </p >
        {/* <ExternalHoverLink small = {false} href = {link} target = "_blank" rel = "noopener noreferrer" > */}
        {/*   Read the article */}
        {/*   <ArrowTopRightOnSquareIcon */}
        {/*     width = "18" */}
        {/*     height = "18" */}
        {/*     style = {{ position: "relative", top: "3px" }} */}
        {/*   /> */}
        {/* </ExternalHoverLink > */}
      </StyledArticleDetailsWrapper >

    </StyledArticleCard >
  );

}



const StyledArticleCard = styled.section`
  //display: flex;
  //position: relative;
  //flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  height: fit-content;

  margin: 10vh 0;
  padding: 0;

  border: 1px solid gray;

  ${ExternalHoverLink} {
    opacity: 100%;
  }

`;


const StyledArticleCoverWrapper = styled.div`
  display: block;
  position: relative;

  width: 100%;
  height: fit-content;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    
    object-position: center;
    
    
    object-fit: fill;
  }
`;


const StyledArticleDetailsWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;

  background-color: var(--color-white);
  border-top: 1px solid var(--color-gray-300);

  h3 {
    font-size: var(--font-size-lg);
    padding: var(--space-2xs) var(--space-xs);
  }

  p {
    font-size: var(--font-size-base);
    line-height: var(--leading-base);
    padding: var(--space-2xs) var(--space-xs) var(--space-xs) var(--space-xs);
  }

  span.metadata {
    font-size: var(--font-size-sm);
    line-height: var(--leading-sm);
    padding: var(--space-2xs) 0 var(--space-xs);
  }
`;
