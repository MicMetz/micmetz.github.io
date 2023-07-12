import fs                                from 'fs';
import matter                            from 'gray-matter';
import path                              from 'path';
import React                             from 'react';
import Card                              from '../../components/Cards/Card.js';
import Header                            from '../../components/Layouts/Header.js';
import Layout              from '../../components/Layouts/Layout.js';
import TitleWithCount      from '../../components/MDX/TitleWithCount.js';
import { StyledNotesGrid } from '../../styles/StyledGridComponents.js';
import { Title2 }                        from '../../styles/StyledTypography.js';
import { lessonFilePaths, LESSONS_PATH } from '../../tools/mdxUtils.js';




export default function LessonsPage( { lessons } ) {
  return (
    <Layout >
      <Header title = 'Lessons of Michael Metzger' />
      <header style = {{ marginBottom: 'var(--space-xl)' }} >
        <TitleWithCount posts = {lessons} >Lessons</TitleWithCount >
        <Title2 >
          A collection of lessons learned and recited from my own experiences and understanding.
        </Title2 >
      </header >
      <StyledNotesGrid >
        {lessons.map( ( lesson, i ) => (
          <Card
            key = {i}
            id = {lesson.slug}
            slug = {lesson.slug}
            type = {lesson.type}
            cover = {lesson.cover ?? null}
            title = {lesson.title}
            growthStage = {lesson.growthStage}
            date = {lesson.updated}
            data = {lesson}
          />
        ) )}
      </StyledNotesGrid >
    </Layout >
  );
}




export function getStaticProps() {
  let lessons = lessonFilePaths.map( ( filePath ) => {
      const source                                                     = fs.readFileSync( path.join( LESSONS_PATH, filePath ) );
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

  // Sort lessons by date
  const sortedLessons = lessons.sort( ( a, b ) => {
    return new Date( b.updated ) - new Date( a.updated );
  } );
  lessons             = sortedLessons;

  return { props: { lessons } };
}

