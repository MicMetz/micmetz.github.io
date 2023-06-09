import styled from "styled-components";



export default function ComingSoon() {
  return (
    <ComingSoonContainer >
      <h1 >Coming Soon</h1 >
    </ComingSoonContainer >
  );
}

const ComingSoonContainer = styled.div`
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
