import fs                                                                                        from 'fs';
import matter                                                                                    from 'gray-matter';
import path                                                                                      from 'path';
import Header                                                                                    from '../../components/Layouts/Header.js';
import Layout                                                                                    from '../../components/Layouts/Layout.js';
import TitleWithCount                                                                            from '../../components/MDX/TitleWithCount.js';
import { GardenFiltersAndHits }                                                                  from '../../components/Search/GardenFH/GardenFiltersAndHits.js';
import { SectionText }                                                                           from '../../styles/StyledComponents.js';
import { Title2 }                                                                                from '../../styles/StyledTypography.js';
import { essayFilePaths, ESSAYS_PATH, lessonFilePaths, LESSONS_PATH, noteFilePaths, NOTES_PATH } from '../../tools/mdxUtils.js';




export default function GardenPage( { allPosts } ) {
  return (
    <>
      <Header title = 'My Digital Garden of Michael Metzger' />
      <Layout >
        <header style = {{ marginBottom: 'var(--space-xl)' }} >
          <TitleWithCount posts = {allPosts} >My Digital Garden</TitleWithCount >
          <Title2 >
            <SectionText >
              Welcome to my digital garden. This is where I cultivate my ideas and collect the things that help me grow.
            </SectionText >
          </Title2 >
        </header >
        <GardenFiltersAndHits allPostData = {allPosts} />
      </Layout >
    </>
  );
}



// Fetches the data for the page.
export function getStaticProps() {
  // Get all essay posts
  let essays         = essayFilePaths.map( ( filePath ) => {
    const source                                                                     = fs.readFileSync( path.join( ESSAYS_PATH, filePath ) );
    const { content, data }                                                          = matter( source );
    const slug                                                                       = filePath.replace( /\.mdx$/, '' );
    const { title, description, growthStage, created, topics, type, cover, updated } = data;

    return {
      content,
      title,
      cover,
      description,
      growthStage,
      created,
      topics,
      type,
      updated,
      slug,
      filePath
    };
  } );
  // Sort essays by date
  const sortedEssays = essays.sort( ( a, b ) => {
    return new Date( b.updated ) - new Date( a.updated );
  } );
  essays             = sortedEssays;


  // Get all note posts
  let notes         = noteFilePaths.map( ( filePath ) => {
    const source                                                              = fs.readFileSync( path.join( NOTES_PATH, filePath ) );
    const { content, data }                                                   = matter( source );
    const slug                                                                = filePath.replace( /\.mdx$/, '' );
    const { title, description, growthStage, created, topics, type, updated } = data;

    return {
      content,
      title,
      description,
      growthStage,
      created,
      topics,
      type,
      updated,
      slug,
      filePath
    };
  } );
  // Sort notes by date
  const sortedNotes = notes.sort( ( a, b ) => {
    return new Date( b.updated ) - new Date( a.updated );
  } );
  notes             = sortedNotes;


  let lessons         = lessonFilePaths.map( ( filePath ) => {
    const source                                                              = fs.readFileSync( path.join( LESSONS_PATH, filePath ) );
    const { content, data }                                                   = matter( source );
    const slug                                                                = filePath.replace( /\.mdx$/, '' );
    const { title, description, growthStage, created, topics, type, updated } = data;

    return {
      content,
      title,
      description,
      growthStage,
      created,
      topics,
      type,
      updated,
      slug,
      filePath
    };
  } );
  // Sort lessons by date
  const sortedLessons = lessons.sort( ( a, b ) => {
    return new Date( b.updated ) - new Date( a.updated );
  } );
  lessons             = sortedLessons;



  const allPosts = essays.concat( notes, lessons );

  return { props: { allPosts } };
}
