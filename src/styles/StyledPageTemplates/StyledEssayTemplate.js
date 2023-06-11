import { breakpoints } from "../../constants/breakpoints.js";
import styled from "styled-components";



export const EssayStyledTitleContainer = styled.div`
  padding: var(--space-s) 0 var(--space-l);
  border-bottom: 1px solid var(--color-tinted-cream);

  h1 {
    font-size: var(--font-size-2xl);
    line-height: var(--leading-tighter);
    max-width: 100%;
    @media screen and (max-width: 425px) {
      font-size: var(--font-size-xl);
    }
  }

  p {
    font-size: var(--font-size-md);
    margin: var(--space-s) 0 0 0;
    color: var(--color-gray-600);
    @media screen and (max-width: 425px) {
      font-size: var(--font-size-base);
    }
  }
`;


export const EssayStyledHeaderSection = styled.header`
  max-width: 800px;
  margin: var(--space-l) auto 0;

  div.above-title {
    a,
    p {
      display: inline-block;
      font-family: var(--font-sans);
      font-size: var(--font-size-xs);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: bold;
      padding-right: var(--space-xs);
    }

    p {
      padding-left: var(--space-2xs);
    }

    svg {
      position: relative;
      top: 3px;
    }
  }

  @media ${breakpoints.mediaSM} {
    padding: 0 var(--space-xs);
  }
`;


export const EssayStyledMetadata = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
  }
`;


export const EssayStyledMain = styled.main`
  margin-top: var(--space-xs);
  padding: var(--space-xl) 0;
  background: linear-gradient(var(--color-cream) 0, white 110px);
  grid-column: 1/4 !important;
  width: 100%;
  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-xs);
  }
`;
