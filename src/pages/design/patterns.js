import fs                                  from 'fs';
import matter                              from 'gray-matter';
import path                                from 'path';
import styled                              from 'styled-components';
import Header                              from '../../components/Layouts/Header.js';
import Layout         from '../../components/Layouts/Layout.js';
import TitleWithCount from '../../components/MISC/TitleWithCount.js';
import { Title2 }     from '../../styles/StyledTypography.js';
import PatternCard                         from '../../components/Cards/PatternCard.js';
import { patternFilePaths, PATTERNS_PATH } from '../../tools/mdxUtils.js';




export default function Patterns( { patterns } ) {
  return (
    <Layout >
      <Header title = 'Design Patterns by Michael Metzger' />
      <header style = {{ marginBottom: 'var(--space-xl)' }} >
        <TitleWithCount posts = {patterns} >Design Patterns</TitleWithCount >
        <Title2 >
          A catalogue of design patterns gathered from my own observations and
          research.
        </Title2 >
      </header >
      <PatternGrid >
        {patterns.map( ( pattern ) => (
          <PatternCard
            key = {pattern.slug}
            id = {pattern.slug}
            slug = {pattern.slug}
            title = {pattern.title}
            growthStage = {pattern.growthStage}
            date = {pattern.updated}
          />
        ) )}
      </PatternGrid >
    </Layout >
  );
}



const PatternGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;




// Fetches the data for the page.
export function getStaticProps() {
  // Get all note posts
  let patterns = patternFilePaths.map( ( filePath ) => {
      const source                                                     = fs.readFileSync( path.join( PATTERNS_PATH, filePath ) );
      const { content, data }                                          = matter( source );
      const slug                                                       = filePath.replace( /\.mdx$/, '' );
      const { title, description, growthStage, topics, type, updated } = data;

      return {
        content,
        title,
        growthStage,
        topics,
        type,
        updated,
        slug,
        filePath
      };
    }
  );

  const sortedPatterns = patterns.sort( ( a, b ) => {
    return new Date( b.updated ) - new Date( a.updated );
  } );
  patterns             = sortedPatterns;


  return { props: { patterns } };
}
