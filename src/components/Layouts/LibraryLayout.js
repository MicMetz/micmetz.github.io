import React from 'react'
import { LibraryStyledLayout } from "../../styles/LibraryStyledComponents.js";



export default function LibraryLayout( { children } ) {
  return (
    <LibraryStyledLayout >
      {children}
    </LibraryStyledLayout >
  );
}
