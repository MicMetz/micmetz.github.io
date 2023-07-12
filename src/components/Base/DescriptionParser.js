import React              from 'react';
import styled             from 'styled-components';
import { DefaultDetails } from '../../styles/LibraryStyledComponents.js';
import { SectionText }    from '../../styles/StyledComponents.js';




export function DescriptionParser( book ) {
  return (
    <DefaultDetails key = {book.id} >
      {book.description.map( ( paragraph, i ) => {
        return (
          <BookDescription key = {i} >
            {paragraph.split( '\n' ).map( ( item, key ) => {
              return (
                <span key = {key} >
                  {item}
                  <br />
                </span >
              );
            } )}
          </BookDescription >
        );
      } )}
    </DefaultDetails >
  );
}



const BookDescription = styled( SectionText )`

  font-style: var(--font-body) !important;
  font-size: var(--font-size-base) !important;

`;
