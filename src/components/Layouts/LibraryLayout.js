import React from 'react'
import { LibraryStyledLayout } from "../../styles/LibraryStyledComponents.js";



export default function LibraryLayout( { children } ) {
  return (
    <LibraryStyledLayout >
      {children}
    </LibraryStyledLayout >
  );

  /* 		return (
   <>
   <Head >
   <meta content = "width=device-width, initial-scale=1.0" name = "viewport" />
   </Head >

   <div className = "flex flex-col justify-between h-screen" >
   {children}
   </div >
   </>
   ) */
}
