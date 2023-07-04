import fs                                from "fs";
import matter                            from "gray-matter";
import path                              from "path";
import React                             from 'react';
import NoteCard                          from "../components/Cards/NoteCard.js";
import Header                            from "../components/Layouts/Header.js";
import { Layout }                        from "../components/Layouts/Layout.js";
import TitleWithCount                    from "../components/MDX/TitleWithCount.js";
import { StyledNotesGrid }               from "../styles/StyledGridComponents.js";
import { lessonFilePaths, LESSONS_PATH } from "../tools/mdxUtils.js";




export default function LessonsPage( { lessons } ) {
  return (
    <Layout >
      <Header title = "Lessons of Michael Metzger" />
      <header style = {{ marginBottom: "var(--space-xl)" }} >
        <TitleWithCount posts = {lessons} >Lessons</TitleWithCount >
      </header >
      <StyledNotesGrid >
        {lessons.map( ( lesson, i ) => (
          <NoteCard
            key = {i}
            id = {lesson.slug}
            slug = {lesson.slug}
            cover = {lesson.data.cover}
            title = {lesson.data.title}
            growthStage = {lesson.data.growthStage}
            date = {lesson.data.updated}
          />
        ) )}
      </StyledNotesGrid >
    </Layout >
  );
}




export function getStaticProps() {
  let lessons = lessonFilePaths.map( ( filePath ) => {
    const source                                                              = fs.readFileSync( path.join( LESSONS_PATH, filePath ) );
    const { content, data }                                                   = matter( source );
    const slug                                                                = filePath.replace( /\.mdx$/, "" );

    return {
      content,
      data,
      slug,
      filePath,
    };
  } );


  // Sort lessons by date
  const sortedLessons = lessons.sort( ( a, b ) => {
    return new Date( b.updated ) - new Date( a.updated );
  } );
  lessons             = sortedLessons;


  return { props: { lessons } };
}

