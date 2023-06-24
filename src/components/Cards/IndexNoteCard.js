import React      from "react";
import styled     from "styled-components";
import GrowthIcon from "../Icons/GrowthIcon.js";
import Tooltip    from "../MISC/Tooltip.js";




export default function IndexNoteCard( { note, href } ) {


  return (
    <>
      <Tooltip maxWidth = {300} content = {note.data.description} >
        <a href = {`/${href}`} >
          <StyledIndexCard >
            {note.data.growthStage && (
              <StyledGrowthStage ><GrowthIcon growthStage = {note.data.growthStage} /></StyledGrowthStage >
            )}
            <h3 >{note.data.title}</h3 >
          </StyledIndexCard >
        </a >
      </Tooltip >
    </>
  );

}




const StyledIndexCard = styled.div`
  display: flex;
  padding: var(--space-xs) 0 1.2rem;
  border-bottom: 1px solid var(--color-tinted-cream);
  transition: all 0.3s ease-in-out;

  svg {
    position: relative;
    top: 5px;
    flex-shrink: 0;
  }

  h3 {
    color: var(--color-gray-800);
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin-left: var(--space-xs);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    border-bottom: 1px solid var(--color-sea-blue);

    h3 {
      color: var(--color-tangerine);
    }

    transform: scale3d(1.02, 1.02, 1.02);
  }
`;




const StyledGrowthStage = styled.p`
  display: inline-block;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--font-size-xs);
  color: var(--color-gray-800);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: bold;
  padding-right: var(--space-xs);
`;
