import styled  from 'styled-components';
import Tooltip from './Tooltip.js';




export default function GrowthStage( { stage } ) {
  if ( stage === 'Law' ) {
    return (
      <Tooltip maxWidth = {300} content = "Laws are ideas I've invested significant time into. They are refined, edited, and won't significantly change – aside from the occassional trimming." >
        <StyledGrowthStage >{stage}</StyledGrowthStage >
      </Tooltip >
    );
  } else if ( stage === 'Theory' ) {
    return (
      <Tooltip maxWidth = {300} content = "Evergreens are ideas I've invested significant time into. They are refined, edited, but stiill incomplete." >
        <StyledGrowthStage >{stage}</StyledGrowthStage >
      </Tooltip >
    );
  } else if ( stage === 'Hypothesis' ) {
    return (
      <Tooltip maxWidth = {300} content = "Hypotheses are concepts I've revised and worked on a bit. They're starting to grow, but still need refinement." >
        <StyledGrowthStage >{stage}</StyledGrowthStage >
      </Tooltip >
    );
  } else if ( stage === 'Concept' || stage === 'In Development' ) {
    return (
      <Tooltip maxWidth = {300} content = "Developmental Concepts are early ideas I've just started that are rough, unrefined, and need some time to grow." >
        <StyledGrowthStage >{stage}</StyledGrowthStage >
      </Tooltip >
    );
  }
}

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
