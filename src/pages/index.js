import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import React from "react";
import styled from "styled-components";
import { ArcGISData } from "../../posts/data/ArcGISData.js";
import { CurrentReadings } from "../../posts/data/CurrentReadings.js";

import { ProjectsData } from "../../posts/data/ProjectsData.js";
import AtlasCard from "../components/Cards/AtlasCard.js";
import BookCard from "../components/Cards/BookCard.js";
import EssayCard from "../components/Cards/EssayCard.js";
import ProjectCard from "../components/Cards/ProjectCard.js";
import GrowthIcon from "../components/Icons/GrowthIcon.js";
import Header from "../components/Layouts/Header.js";
import { Layout } from "../components/Layouts/Layout.js";
import UnderlineHoverLink from "../components/Links/UnderlineHoverLink.js";
import { Spacer } from "../components/MISC/Spacer.js";

import { ReadmoreLink } from "../styles/LinkStyledComponents.js";
import { LeftSection, SectionText } from "../styles/StyledComponents.js";

import { GardenSection, ProjectsSection } from "../styles/StyledSectionComponents.js";
import { SectionHeader, SmallTitle2, Subheader, Title1, Title2 } from "../styles/StyledTypography.js";
import { essayFilePaths, ESSAYS_PATH, noteFilePaths, NOTES_PATH, projectFilePaths, PROJECTS_PATH } from "../tools/mdxUtils.js";



const collection = {
  hidden    : {
    opacity: 0, transition: {
      when: "afterChildren",
    },
  }, visible: {
    opacity: 1, transition: {
      delay: 0.2, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.2,
    },
  },
};

const itemAnimation = {
  hidden    : {
    opacity: 0,
  }, visible: {
    opacity: 1, transition: {
      duration: 0.4, ease: "easeInOut",
    },
  },
};



export default function Index( { sortedEssays: essays, sortedNotes: notes, sortedProjects: projects } ) {



  return (
    <>
      <Header title = "Michael Metzger | Portfolio"/>

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
          <motion.section
            initial = {{ opacity: 0, x: -50 }}
            animate = {{ opacity: 1, x: 0 }}
            transition = {{ delay: 0.2, duration: 1 }}
            style = {{
              marginTop : "var(--space-m)",
              maxWidth  : "1100px",
              lineHeight: "1"
            }}
          >
            <LeftSection >
              <Title1 fontWeight = "700">
                Hi.
                <Spacer size = "xs"/>
                My name is
                <Spacer size = "xs"/>
                Michael.
              </Title1 >
            </LeftSection >

            <SectionText >
              As of right now, I'm studying computer science at the University of Colorado at Boulder (CU Boulder).
              Before, and not too long ago, I was studying Sociology and Information Science at multiple New York City universities over a few years.
              <Spacer size = "xs"/>
              <SmallTitle2
                initial = {{ opacity: 0, x: -50 }}
                animate = {{ opacity: 1, x: 0 }}
                transition = {{ delay: 0.5, duration: 1 }}
              >
                For more, check out my {" "}
                <UnderlineHoverLink href = "/About">
                  <i >bio page</i >
                </UnderlineHoverLink >
                {" "}.
              </SmallTitle2 >
            </SectionText >
          </motion.section >
        </header >



        <Spacer size = "xlarge"/>



        <motion.section
          initial = {{ opacity: 0, x: -50 }}
          animate = {{ opacity: 1, x: 0 }}
          transition = {{ delay: 0.7, duration: 1 }}
        >
          <Title2 style = {{ fontSize: "var(--font-size-2xl)" }}>
            Writing Garden
          </Title2 >
          <Subheader >
            A collection of essays, notes, and responses to readings.{' '}
            <Spacer />
            <ReadmoreLink href = "/Garden">
              Learn more
              <ArrowRightIcon width = "18" height = "18"/>
            </ReadmoreLink >
          </Subheader >

          <GardenSection
            variants = {collection}
            initial = "hidden"
            animate = "visible"
          >
            <section style = {{ gridArea: "essays" }}>
              <Link href = "/Essays">
                <SectionHeader >
                  Essays
                  <ArrowRightIcon width = "18" height = "18"/>
                </SectionHeader >
              </Link >
              <Subheader >
                Opinionated, longform narrative writing with an agenda
              </Subheader >
              <div
                style = {{
                  display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gridGap: "var(--space-2xs)"
                }}
              >
                {essays.map( ( essay, i ) => (
                  <EssayCard
                    id = {essay.slug}
                    key = {essay.slug}
                    variants = {itemAnimation}
                    slug = {essay.slug}
                    cover = {essay.data.cover}
                    title = {essay.data.title}
                    growthStage = {essay.data.growthStage}
                    date = {essay.data.updated}
                  />
                ) )}
              </div >
            </section >

            <section style = {{ gridArea: "notes", marginLeft: "1em" }}>
              <Link href = "/Notes">
                  <SectionHeader >
                    Notes
                    <ArrowRightIcon width = "18" height = "18"/>
                  </SectionHeader >
              </Link >
              <Subheader >
                Short, <i >'concise'</i >, and to the point
              </Subheader >
              <div style = {{}}>
                {notes.slice( 0, 12 ).map( ( note ) => (
                  <Link key = {note.slug} href = {`/${note.slug}`}>
                      <IndexNoteCard >
                        {note.data.growthStage && (
                          <GrowthIcon growthStage = {note.data.growthStage}/>
                        )}
                        <h3 >{note.data.title}</h3 >
                      </IndexNoteCard >
                  </Link >
                ) )}
              </div >
            </section >


            <section style = {{ gridArea: "books" }}>
              <Link href = "https://micmetz.github.io/library/">
                  <SectionHeader >
                    Books
                    <ArrowRightIcon width = "18" height = "18"/>
                  </SectionHeader >
              </Link >
              <Subheader >
                Books I’ve read and books I like the idea of having read.
              </Subheader >
              <div
                style = {{
                  display            : "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gridGap            : "var(--space-xs)",
                }}
              >
                {CurrentReadings.slice( 0, 8 ).map( ( book, i ) => (
                  <BookCard
                    small
                    subtitle = {book.header.subtitle}
                    key = {i}
                    cover = {book.cover}
                    title = {book.header.title}
                    author = {book.author}
                    link = {book.link}
                  />
                ) )}
              </div >
            </section >

          </GardenSection >
        </motion.section >

        <Spacer size = "3xlarge"/>


        <motion.section
          initial = {{ opacity: 0, x: -50 }}
          animate = {{ opacity: 1, x: 0 }}
          transition = {{ delay: 0.7, duration: 1 }}
        >
          <Title2 style = {{ fontSize: "var(--font-size-2xl)" }}>
            Projects
          </Title2 >
          <Subheader >
            Projects I’ve worked on.
          </Subheader >
          <ReadmoreLink href = "/Projects">
            Learn more
            <ArrowRightIcon width = "18" height = "18"/>
          </ReadmoreLink >


          <ProjectsSection
            variants = {collection}
            initial = "hidden"
            animate = "visible"
          >
            <section style = {{ gridArea: "technology" }}>
              <Link href = "/Projects/Software">
                  <SectionHeader >
                    Software
                    <ArrowRightIcon width = "18" height = "18"/>
                  </SectionHeader >
              </Link >
              <Subheader >
                Software and hardware projects I’ve worked on.
              </Subheader >
              <div
                style = {{
                  display            : "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gridGap            : "var(--space-xs)",
                }}
              >
                {ProjectsData.map( ( project, i ) => (
                    <ProjectCard
                      key = {i}
                      slug = {project.code}
                      title = {project.title}
                      cover = {project.image}
                      date = {project.date}
                    />
                  )
                )}
              </div >
            </section >

            <section style = {{ gridArea: "atlas", marginLeft: "3em" }}>
              <Link href = "/Atlas">
                  <SectionHeader >
                    Atlas
                    <ArrowRightIcon width = "18" height = "18"/>
                  </SectionHeader >
              </Link >
              <Subheader >
                Design responses gathered from my own observations and research.
              </Subheader >
              <div style = {{}}>
                {ArcGISData.map( ( visual, i ) => (
                  <AtlasCard
                    key = {i}
                    slug = {visual.slug}
                    title = {visual.title}
                    date = {visual.date}
                  />
                ) )}
              </div >
            </section >

            {/*
             <section style = {{ gridArea: "presentations" }} >
             <Link href = "/Project/Presentations" >
             <a href = "/Project/Presentations" >
             <Title2 style = {{ fontSize: "var(--font-size-2xl)" }} >
             <SectionHeader >
             Presentations
             <ArrowRightIcon width = "18" height = "18" />
             </SectionHeader >
             </Title2 >
             </a >
             </Link >
             <Subheader >

             </Subheader >

             {PresentationsData.map( ( project, i ) => (
             <BookCard
             key = {i}
             slug = {project.slug}
             title = {project.title}
             cover = {project.cover}
             date = {project.date}
             demo = {project.demo}
             />
             )
             )}


             </section >
             */}
          </ProjectsSection >
        </motion.section >

        <Spacer size = "3xlarge"/>

      </Layout >
    </>
  )
    ;
};



const IndexNoteCard = styled.div`
  display: flex;
  padding: var(--space-xs) 0 1.2rem;
  border-bottom: 1px solid var(--color-tinted-cream);
  transition: all 0.3s ease-in-out;

  svg {
    position: relative;
    top: 5px;
    flex-shrink: 0;
  }

  h3 {
    color: var(--color-gray-800);
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin-left: var(--space-xs);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    border-bottom: 1px solid var(--color-sea-blue);

    h3 {
      color: var(--color-tangerine);
    }

    transform: scale3d(1.02, 1.02, 1.02);
  }
`;



export function getStaticProps() {
  // Get all essay posts
  let essays = essayFilePaths.map( ( filePath ) => {
    const source = fs.readFileSync( path.join( ESSAYS_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug = filePath.replace( /\.mdx$/, "" );

    return {
      content, data, slug, filePath,
    };
  } );

  // Filter essays for featured property
  const filteredEssays = essays
  .filter( ( essay ) => essay.data.featured === true )
  .slice( 0, 4 );
  // Sort filtered essays by date
  const sortedEssays = filteredEssays.sort( ( a, b ) => {
    return new Date( b.data.updated ) - new Date( a.data.updated );
  } );

  // Get all note posts
  let notes = noteFilePaths.map( ( filePath ) => {
    const source = fs.readFileSync( path.join( NOTES_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug = filePath.replace( /\.mdx?$/, "" );

    return {
      content, data, slug, filePath,
    };
  } );

  // Sort notes in reverse order by date
  const sortedNotes = notes.sort( ( a, b ) => {
    return new Date( b.data.updated ) - new Date( a.data.updated );
  } );

  let projects = projectFilePaths.map( ( filePath ) => {
    const source = fs.readFileSync( path.join( PROJECTS_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug = filePath.replace( /\.mdx?$/, "" );

    return {
      content, data, slug, filePath,
    };
  } );

  // Sort projects by date
  const sortedProjects = projects.slice( 0, 4 ).sort( ( a, b ) => {
    return new Date( b.data.updated ) - new Date( a.data.updated );
  } );

  const allPosts = [ ...essays, ...notes, ...projects ];

  return {
    props: { sortedEssays, sortedNotes, sortedProjects },
  };
}


