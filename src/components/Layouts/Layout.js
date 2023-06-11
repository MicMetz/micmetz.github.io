import { StyledLayout } from "../../styles/StyledComponents.js";
import DynamicPostsGrid from "./DynamicPostsGrid.js";
import LibraryLayout from "./LibraryLayout.js";
import MasonryGrid from "./MasonryGrid.js";



export function Layout( { children, type } ) {
  switch (type) {
    default: {
      return (
        <StyledLayout >
          {children}
        </StyledLayout >
      );
    }
    case 'default': {
      return (
        <StyledLayout >
          {children}
        </StyledLayout >
      );
    }
    case 'masonry': {
      return (
        <MasonryGrid >
          {children}
        </MasonryGrid >
      );
    }
    case 'posts': {
      return (
        <DynamicPostsGrid >
          {children}
        </DynamicPostsGrid >
      );
    }
    case 'library': {
      return (
        <LibraryLayout >
          {children}
        </LibraryLayout >
      );
    }
  }
}
