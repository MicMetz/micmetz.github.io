import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React                           from 'react';
import EssayCard                       from "../../components/Cards/EssayCard.js";
import Header                          from "../../components/Layouts/Header.js";
import Layout                          from "../../components/Layouts/Layout.js";
import MasonryGrid                     from "../../components/Grids/MasonryGrid.js";
import TitleWithCount                  from "../../components/MDX/TitleWithCount.js";
import { essayFilePaths, ESSAYS_PATH } from "../../tools/mdxUtils.js";



export default function EssaysPage( { essays } ) {
  return (
    <Layout >
      <Header title = "Essays of Michael Metzger"/>
      <header style = {{ marginBottom: "var(--space-xl)" }}>
        <TitleWithCount posts = {essays}>Essays</TitleWithCount >
      </header >
      <MasonryGrid >
        {essays.map( ( essay, i ) => (
          <EssayCard
            key = {i}
            id = {essay.slug}
            slug = {essay.slug}
            cover = {essay.cover}
            title = {essay.title}
            growthStage = {essay.growthStage}
            date = {essay.updated}
          />
        ) )}
      </MasonryGrid >
    </Layout >
  );
}


export function getStaticProps() {
  // Get all essay posts
  let essays = essayFilePaths.map( ( filePath ) => {
    const source = fs.readFileSync( path.join( ESSAYS_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug = filePath.replace( /\.mdx$/, "" );


    return {
      content,
      data,
      slug,
      filePath,
    };
  } );

  // Sort essays by date
  const sortedEssays = essays.sort( ( a, b ) => {
    return new Date( b.updated ) - new Date( a.updated );
  } );
  essays = sortedEssays;


  return { props: { essays } };
}
