import fs                                  from "fs";
import matter                              from "gray-matter";
import path                                from "path";
import React                               from 'react';
import ProjectCard                         from "../../components/Cards/ProjectCard.js";
import Header                              from "../../components/Layouts/Header.js";
import { Layout }                          from "../../components/Layouts/Layout.js";
import InDevelopment                       from "../../components/MDX/InDevelopment.js";
import { SectionTitle }                    from "../../styles/StyledComponents.js";
import { ProjectGrid }                     from "../../styles/StyledGridComponents.js";
import { Subheader }                       from "../../styles/StyledTypography.js";
import { projectFilePaths, PROJECTS_PATH } from "../../tools/mdxUtils.js";




export default function ProjectsPage( { projects } ) {

  return (
    <>
      <Header title = "The Projects of Michael Metzger" />
      <Layout >
        <header
          style = {{
            display       : "flex",
            gap           : "var(--space-xs)",
            flexDirection : "column",
            alignContent  : "center",
            alignItems    : "center",
            justifyContent: "center",
            marginBottom  : "10vh",
          }}
        >
          <SectionTitle main >My Projects</SectionTitle >
          <Subheader >
            A collection of prior works, and works in progress.
          </Subheader >
        </header >
        <ProjectGrid >
          {projects.map( ( project ) => (
            <ProjectCard
              key = {project.slug}
              slug = {project.slug}
              title = {project.data.title}
              date = {project.data.updated}
              cover = {project.data.cover}
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
  let projects = projectFilePaths.map( ( filePath ) => {
    const source            = fs.readFileSync( path.join( PROJECTS_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug              = filePath.replace( /\.mdx$/, "" );

    return {
      content,
      data,
      slug,
      filePath,
    };
  } );

  // Sort projects by date
  const sortedProjects = projects.sort( ( a, b ) => {
    return new Date( b.data.updated ) - new Date( a.data.updated );
  } );
  projects             = sortedProjects;

  return { props: { projects } };
}
