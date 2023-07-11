import fs                                  from 'fs';
import matter                              from 'gray-matter';
import path                                from 'path';
import styled                              from 'styled-components';
import PatternCard                         from '../../components/Cards/PatternCard.js';
import Header                              from '../../components/Layouts/Header.js';
import Layout                              from '../../components/Layouts/Layout.js';
import TitleWithCount                      from '../../components/MDX/TitleWithCount.js';
import { Title2 }                          from '../../styles/StyledTypography.js';
import { patternFilePaths, PATTERNS_PATH } from '../../tools/mdxUtils.js';




export default function Patterns( { patterns } ) {
  return (
    <>
      <Header title = 'Patterns' />
      <Layout >
        <header style = {{ marginBottom: 'var(--space-xl)' }} >
          <TitleWithCount posts = {patterns} >Pattern Catalogue</TitleWithCount >
          <Title2 >
            A catalogue of design patterns gathered from my own observations and
            research.
          </Title2 >
        </header >
        <PatternGrid >
          {patterns.map( ( pattern, i ) => (
            <PatternCard
              id = {i}
              slug = {pattern.slug}
              title = {pattern.title}
              growthStage = {pattern.growthStage}
              date = {pattern.updated}
            />
          ) )}
        </PatternGrid >
      </Layout >
    </>
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
    const source            = fs.readFileSync( path.join( PATTERNS_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug              = filePath.replace( /\.mdx$/, '' );

    return {
      content,
      data,
      slug,
      filePath
    };
  } );

  return { props: { patterns } };
}
