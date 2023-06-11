/**
 * @author
 * @function MasonryGrid
 * @description https://github.com/paulcollett/react-masonry-css
 *
 */
import { StyledMasonryGrid } from "../../styles/StyledGridComponents.js";



export default function MasonryGrid( { children, breakpointColumnsObj = { default: 3, 1100: 2, 700: 1 }, ...props } ) {
  return (
    <StyledMasonryGrid
      breakpointCols = {breakpointColumnsObj}
      columnClassName = "masonry_grid_column"
      {...props}
    >
      {children}
    </StyledMasonryGrid >
  );
}


//
