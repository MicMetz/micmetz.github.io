// import {noteFilePaths,  NOTES_PATH } from "..//tools/mdxUtils.js";
import fs                            from "fs";
import matter                        from "gray-matter";
import path                          from "path";
import React                         from 'react';
import NoteCard                      from "../components/Cards/NoteCard.js";
import Header                        from "../components/Layouts/Header.js";
import { Layout }                    from "../components/Layouts/Layout.js";
import TitleWithCount                from "../components/MDX/TitleWithCount.js";
import { StyledNotesGrid }           from "../styles/StyledGridComponents.js";
import { noteFilePaths, NOTES_PATH } from "../tools/mdxUtils.js";




export default function NotesPage( { notes } ) {
  return (
    <>
      <Header title = "Notes of Michael Metzger" />
      <Layout >
        <header style = {{ marginBottom: "var(--space-xl)" }} >
          <TitleWithCount posts = {notes} >Notes</TitleWithCount >
        </header >
        <StyledNotesGrid >
          {notes.map( ( value, i ) => (
            <NoteCard
              key = {i}
              id = {value.slug}
              slug = {value.slug}
              cover = {value.cover}
              title = {value.title}
              growthStage = {value.growthStage}
              date = {value.updated}
            />
          ) )}
        </StyledNotesGrid >
      </Layout >
    </>
  );
}




export function getStaticProps() {
  // Get all note posts
  let notes = noteFilePaths.map( ( filePath ) => {
    const source            = fs.readFileSync( path.join( NOTES_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug              = filePath.replace( /\.mdx$/, "" );

    return {
      content,
      data,
      slug,
      filePath,
    };
  } );

  // Sort notes by date
  const sortedNotes = notes.sort( ( a, b ) => {
    return new Date( b.updated ) - new Date( a.updated );
  } );
  notes             = sortedNotes;

  return { props: { notes } };
}

