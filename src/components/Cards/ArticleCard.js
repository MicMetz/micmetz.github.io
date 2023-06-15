import styled                from "styled-components";
import { ExternalHoverLink } from "../Links/ExternalHoverLink.js";
import ImageLink             from "../Links/ImageLink.js";




export default function ArticleCard( { title, preamble, cover, link, publisher, author, date, topics } ) {
  return (
    <StyledArticleCard >
      <StyledArticleCoverWrapper >
        <ImageLink href = {link} target = "_blank" rel = "noopener noreferrer" >
          <img src = {cover} alt = {title} />
        </ImageLink >
      </StyledArticleCoverWrapper >


      <StyledArticleMain >
        <StyledArticleDetailsWrapper >
          <h3 >{title}</h3 >

          <StyledArticleTopics >
            {topics.map( ( topic, index ) => (
              <li key = {index} >{topic}</li >
            ) )}
          </StyledArticleTopics >

          <p >{preamble}</p >

        </StyledArticleDetailsWrapper >

        <StyledArticleMetaWrapper >
          <span className = "metadata" >{author}</span >
          <span className = "metadata" >{publisher}</span >
          <span className = "metadata" >{date}</span >
        </StyledArticleMetaWrapper >

      </StyledArticleMain >


    </StyledArticleCard >
  );

}



const StyledArticleCard = styled.section`
  display: flex;
  //position: relative;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  height: fit-content;

  margin: 10vh 0;
  padding: 0;
  border: 1px solid var(--color-tinted-cream);

  border-radius: var(--border-radius-base);
  box-shadow: var(--box-shadow-sm);
  background: var(--color-light-cream);
  transition: all 0.3s ease-in-out;
  color: var(--color-gray-800);

    // ${ExternalHoverLink} {
  //   opacity: 100%;
  // }

`;


const StyledArticleMain = styled.div`

  border-top: 1px solid var(--color-gray-300);
`;



const StyledArticleCoverWrapper = styled.div`
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
  padding: var(--space-2xs) var(--space-xs) var(--space-xs) var(--space-xs);

  h3 {
    font-size: var(--font-size-lg);
    padding: var(--space-2xs) 0;
  }

  p {
    font-size: var(--font-size-base);
    line-height: var(--leading-base);
    padding: var(--space-2xs) 0;
  }

`;


const StyledArticleMetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: var(--space-2xs) var(--space-xs) var(--space-xs) var(--space-xs);

  span.metadata {
    font-size: var(--font-size-xs);
    line-height: var(--leading-tighter);
    padding: var(--space-xxs) 0 0 0;
  }
`;



const StyledArticleTopics = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  list-style: none;
  padding: 0 var(--space-xs) 0 0;
  margin: 0 0 var(--space-s) 0;

  li {
    font-size: var(--font-size-xs);
    line-height: var(--leading-tighter);
    padding: 0;
    margin: 0 1em 0 0;
    color: var(--color-gray-500);
  }

  li:not(:last-child)::after {
    content: ", ";
  }
`;
