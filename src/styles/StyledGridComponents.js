import Masonry from "react-masonry-css";
import styled from "styled-components";



export const ResponsesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;


export const AtlasGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;



export const StyledMasonryGrid = styled( Masonry )`
  // Docs
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
