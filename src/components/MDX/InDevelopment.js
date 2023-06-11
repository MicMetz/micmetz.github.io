import styled from "styled-components";



export default function InDevelopment() {
  return (
    <DevelopmentContainer >
      <h1 >In Development</h1 >
    </DevelopmentContainer >
  );
}



const DevelopmentContainer = styled.div`
  margin: var(--space-s) 0;
  box-shadow: var(--box-shadow-lg);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-tinted-cream);
  display: flex;
  flex-direction: column;
  grid-gap: var(--space-2xs);
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-l) var(--space-xs) var(--space-xl);

  h1,
  p {
    margin: 0;
    line-height: var(--leading-tight);
  }
  
`;
