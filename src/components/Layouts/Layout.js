import { NextSeo }      from 'next-seo';
import { useRef }       from 'react';
import { StyledLayout } from '../../styles/StyledComponents.js';
import DynamicPostsGrid from '../Grids/DynamicPostsGrid.js';
import MasonryGrid      from '../Grids/MasonryGrid.js';
import LibraryLayout    from './LibraryLayout.js';




export default function Layout( { children, type, title, description } ) {
  const navigationRef = useRef( null );

  return (
    <>
      <NextSeo
        title = {title}
        description = {description}
        openGraph = {{ title, description }}
      />
      {type && {
        'default': (
          <StyledLayout >
            <main className = 'container mt-10 mb-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-full mx-auto px-4 xl:px-8' >
              {children}
            </main >
          </StyledLayout >
        ),
        'masonry': (
          <MasonryGrid >
            {children}
          </MasonryGrid >
        ),
        'posts'  : (
          <DynamicPostsGrid >
            {children}
          </DynamicPostsGrid >
        ),
        'library': (
          <LibraryLayout >
            {children}
          </LibraryLayout >
        )
      }[ type ] || (
        <StyledLayout >
          <main >
            {children}
          </main >
        </StyledLayout >
       )}
    </>
  );
}
