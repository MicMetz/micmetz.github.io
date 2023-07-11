import fs                                        from 'fs';
import matter                                    from 'gray-matter';
import path                                      from 'path';
import React                                     from 'react';
import ProjectCard                               from '../../components/Cards/ProjectCard.js';
import Header                                    from '../../components/Layouts/Header.js';
import Layout                                    from '../../components/Layouts/Layout.js';
import InDevelopment                             from '../../components/MDX/InDevelopment.js';
import { SectionTitle }                          from '../../styles/StyledComponents.js';
import { ProjectGrid }                           from '../../styles/StyledGridComponents.js';
import { Subheader }                             from '../../styles/StyledTypography.js';
import { experimentFilePaths, EXPERIMENTS_PATH } from '../../tools/mdxUtils.js';




export default function ProjectsPage( { experiment } ) {

  return (
    <>
      <Header title = 'The Projects of Michael Metzger' />
      <Layout >
        <header
          style = {{
            display       : 'flex',
            gap           : 'var(--space-xs)',
            flexDirection : 'column',
            alignContent  : 'center',
            alignItems    : 'center',
            justifyContent: 'center',
            marginBottom  : '10vh'
          }}
        >
          <SectionTitle main >My Projects</SectionTitle >
          <Subheader >
            A collection of prior works, and works in progress.
          </Subheader >
        </header >
        <ProjectGrid >
          {experiment.map( ( project ) => (
            <ProjectCard
              key = {project.slug}
              slug = {project.slug}
              title = {project.data.title}
              date = {project.data.updated}
              cover = {project.data.cover ? project.data.cover : null}
              topics = {project.data.topics}
            />
          ) )}
        </ProjectGrid >
        <InDevelopment />
      </Layout >
    </>
  );
}



export function getStaticProps() {
  // Get all project posts
  let experiment = experimentFilePaths.map( ( filePath ) => {
    const source            = fs.readFileSync( path.join( EXPERIMENTS_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug              = filePath.replace( /\.mdx$/, '' );

    return {
      content,
      data,
      slug,
      filePath
    };
  } );

  // Sort experiments by date
  const sortedExperiments = experiment.sort( ( a, b ) => {
    return new Date( b.updated ) - new Date( a.updated );
  } );
  experiment              = sortedExperiments;

  return { props: { experiment } };
}
