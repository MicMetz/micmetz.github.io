import styled from "styled-components";




const PartName = ( { partName, href, focus } ) => {
  return <StyledPartName >{partName}</StyledPartName >;
};

const StyledPartName = styled.p``;



export default function MultipartIntro( { partNames } ) {
  return (
    <MultipartContainer >
      {partNames.map( ( partName, index ) => {
        if ( index === 0 ) {
          return (
            <FocusedPartContainer key = {index} >
              <span >Part {index + 1}</span >
              <PartName focus partName = {partName} />
              <span >You are here</span >
            </FocusedPartContainer >
          );
        } else {
          return (
            <PartContainer key = {index} >
              <span >Part {index + 1}</span >
              <PartName partName = {partName} />
            </PartContainer >
          );
        }
      } )}
    </MultipartContainer >
  );
};



const MultipartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: var(--space-xs);
  width: 100%;
  grid-column: 1/4;
  max-width: 900px;
  justify-content: center;
  text-align: center;
  transition: 0.6s;
  margin: var(--space-xl) auto var(--space-s);
`;

const PartContainer = styled.div`
  height: 140px;
  display: block;
  transition: 0.6s;
  margin-bottom: var(--space-m);
  border-top: 2px solid var(--color-gray-100);
  padding: var(--space-xs) 0;

  p {
    transition: 0.6s;
    line-height: var(--leading-base);
    align-self: center;
    color: var(--color-gray-500);
    padding: var(--space-xs) 0;
    margin: 0;
  }

  span {
    color: var(--color-gray-500);
    align-self: start;
    font-family: sans-serif;
    font-size: var(--font-size-sm);
    display: block;
    transition: 0.6s;
  }
`;

const FocusedPartContainer = styled( PartContainer )`
  padding: var(--space-xs) 0;
  align-items: center;
  transition: 0.6s;
  border-top: 2px solid var(--color-sea-blue);

  p {
    color: var(--color-gray-900);
  }

  span {
    color: var(--color-sea-blue);
  }
`;

