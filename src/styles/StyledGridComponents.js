import Masonry from "react-masonry-css";
import styled from "styled-components";





export const StyledAtlasGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;


export const StyledNotesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;


export const StyledMasonryGrid = styled( Masonry )`
  // https://github.com/paulcollett/react-masonry-css

  display: flex;
  width: auto;
  margin-top: var(--space-m);

  & .masonry_grid_column + .masonry_grid_column {
    margin-left: ${( props ) =>
            props.columnGapLeft ? props.columnGapLeft : "0"};
    background-clip: padding-box;
  }

  & .masonry_grid_column div:first-child {
    margin-bottom: ${( props ) =>
            props.columnGapBottom ? props.columnGapBottom : "var(--space-2xs)"};
  }
`;


export const ProjectGrid = styled.section`
  display: grid;
  grid-gap: var(--space-s);
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
`;


export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media ${( props ) => props.theme.breakpoints.sm} {
    display: grid;
    height: auto !important;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  @media ${( props ) => props.theme.breakpoints.md} {
    display: grid;
    height: auto !important;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }
`;


export const DefaultGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 1rem;
  row-gap: 3rem;
  @media ${( props ) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 0;
  }
`;
