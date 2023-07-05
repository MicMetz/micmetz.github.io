import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import NoteCard from '../components/cards/NoteCard.js';
import Header from '../components/Layouts/Header.js';
import { Layout } from '../components/Layouts/Layout.js';
import TitleWithCount from '../components/MISC/TitleWithCount.js';
import { StyledNotesGrid } from '../styles/StyledGridComponents.js';
import { Title2 } from '../styles/StyledTypography.js';
import { noteFilePaths, NOTES_PATH } from '../tools/mdxUtils.js';




export default function Notes( { notes } ) {
  return (
    <>
      <Header title = 'Notes by Michael Metzger' />
      <Layout >
        <header style = {{ marginBottom: 'var(--space-xl)' }} >
          <TitleWithCount posts = {notes} >Notes</TitleWithCount >
          <Title2 >
            Loose, unopinionated notes on things I don’t entirely understand
            yet.
          </Title2 >
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


// Fetches the data for the page.

export function getStaticProps() {
  // Get all note posts
  let notes = noteFilePaths.map( ( filePath ) => {
    const source            = fs.readFileSync( path.join( NOTES_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug              = filePath.replace( /\.mdx$/, '' );

    return {
      content,
      data,
      slug,
      filePath
    };
  } );

  // Sort notes by date
  const sortedNotes = notes.sort( ( a, b ) => {
    return new Date( b.updated ) - new Date( a.updated );
  } );
  notes             = sortedNotes;

  return { props: { notes } };
}
