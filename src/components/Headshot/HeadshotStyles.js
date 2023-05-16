import styled from 'styled-components';




export const LeftSection = styled.div`
  max-width: calc(100% - 100px);
  height: fit-content;
  
  
  @media ${( props ) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${( props ) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;



