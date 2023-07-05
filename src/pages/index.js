import { ArrowRightIcon }                                                                          from '@heroicons/react/20/solid';
import { motion }                                                                                  from 'framer-motion';
import fs                                                                                          from 'fs';
import matter                                                                                      from 'gray-matter';
import Link                                                                                        from 'next/link';
import path                                                                                        from 'path';
import React                                                                                       from 'react';
import { ArcGISData }                                                                              from '../../posts/data/ArcGISData.js';
import { ArticleList }                                                                             from '../../posts/data/Articles.js';
import { CurrentReadings }                                                                         from '../../posts/data/CurrentReadings.js';
import ArticleCard                                                                                 from '../components/Cards/ArticleCard.js';
import AtlasCard                                                                                   from '../components/Cards/AtlasCard.js';
import BookCard                                                                                    from '../components/Cards/BookCard.js';
import EssayCard                                                                                   from '../components/Cards/EssayCard.js';
import IndexNoteCard                                                                               from '../components/Cards/IndexNoteCard.js';
import ProjectCard                                                                                 from '../components/Cards/ProjectCard.js';
import Header                                                                                      from '../components/Layouts/Header.js';
import { Layout }                                                                                  from '../components/Layouts/Layout.js';
import UnderlineHoverLink                                                                          from '../components/Links/UnderlineHoverLink.js';
import { Spacer }                                                                                  from '../components/MISC/Spacer.js';
import { ReadmoreLink }                                                                            from '../styles/LinkStyledComponents.js';
import { LeftSection, RightSection, SectionText }                                                  from '../styles/StyledComponents.js';
import { GardenSection, ProjectsSection }                                                          from '../styles/StyledSectionComponents.js';
import { SectionHeader, Subheader, Title1, Title2 }                                                from '../styles/StyledTypography.js';
import { essayFilePaths, ESSAYS_PATH, noteFilePaths, NOTES_PATH, projectFilePaths, PROJECTS_PATH } from '../tools/mdxUtils.js';




const collectionAnimation = {
  hidden    : {
    opacity: 0, transition: {
      when: 'afterChildren'
    }
  }, visible: {
    opacity: 1, transition: {
      delay: 0.2, ease: 'easeInOut', when: 'beforeChildren', staggerChildren: 0.2
    }
  }
};

const itemAnimation = {
  hidden    : {
    opacity: 0
  }, visible: {
    opacity: 1, transition: {
      duration: 0.4, ease: 'easeInOut'
    }
  }
};



export default function Index( { sortedEssays: essays, sortedNotes: notes, sortedProjects: projects } ) {



  return (
    <>
      <Header title = 'Michael Metzger | Portfolio' />
      <Layout >
        <header
          style = {{
            display       : 'flex',
            gap           : 'var(--space-xs)',
            flexDirection : 'column',
            alignContent  : 'center',
            alignItems    : 'center',
            justifyContent: 'center',
            marginBottom  : '10vh',
            marginTop     : '10vh'
          }}
        >
          <motion.div
            initial = {{ opacity: 0, x: -50 }}
            animate = {{ opacity: 1, x: 0 }}
            transition = {{ delay: 0.2, duration: 1 }}
            style = {{
              maxWidth    : '80vw',
              width       : '100%',
              float       : 'right',
              position    : 'relative',
              lineHeight  : '1',
              marginRight : 'var(--space-m)',
            }}
          >
            {/* <LeftSection > */}
              <Title1 fontWeight = '700' >
                Hi.
                <Spacer size = 'xs' />
                My name is
                <Spacer size = 'xs' />
                Michael.
              </Title1 >
            {/* </LeftSection > */}
          </motion.div >

          <motion.div
            initial = {{ opacity: 0, x: -50 }}
            animate = {{ opacity: 1, x: 0 }}
            transition = {{ delay: 0.5, duration: 1 }}
            style = {{
              maxWidth   : '80vw',
              width      : '100%',
              lineHeight : '1',
              float      : 'left',
              position   : 'relative',
            }}
          >
            {/* <RightSection > */}
              <SectionText >
                As of right now, I'm studying computer science at the University of Colorado at Boulder (CU Boulder).
                Before, and not too long ago, I was studying Sociology and Information Science at multiple New York City universities over a few years.
              </SectionText >
              <Spacer size = 'xs' />
              <SectionText >
                For more about me, check out my{' '}
                <UnderlineHoverLink href = '/About' >
                  <i >bio page</i >
                </UnderlineHoverLink >
                {' '}.
              </SectionText >
            {/* </RightSection > */}
          </motion.div >
        </header >


        <Spacer size = 'xlarge' />


        <motion.section
          initial = {{ opacity: 0, x: -50 }}
          animate = {{ opacity: 1, x: 0 }}
          transition = {{ delay: 0.7, duration: 1 }}
        >
          <Title2 style = {{ fontSize: 'var(--font-size-2xl)' }} >
            Writing Garden
          </Title2 >
          <Subheader >
            A collection of essays, notes, and responses to readings.{' '}
            <Spacer />
            <ReadmoreLink href = '/Garden' >
              Learn more
              <ArrowRightIcon width = '18' height = '18' />
            </ReadmoreLink >
          </Subheader >

          <GardenSection
            variants = {collectionAnimation}
            initial = 'hidden'
            animate = 'visible'
          >
            <section style = {{ gridArea: 'essays' }} >
              <Link href = '/Essays' >
                <SectionHeader >
                  Essays
                  <ArrowRightIcon width = '18' height = '18' />
                </SectionHeader >
              </Link >
              <Subheader >
                Opinionated, longform narrative writing with an agenda
              </Subheader >
              <div
                style = {{
                  display            : 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gridGap            : 'var(--space-2xs)'
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

            <section style = {{ gridArea: 'notes', marginLeft: '' }} >
              <Link href = '/Notes' >
                <SectionHeader >
                  Notes
                  <ArrowRightIcon width = '18' height = '18' />
                </SectionHeader >
              </Link >
              <Subheader >
                Short, <i >'concise'</i >, and to the point
              </Subheader >
              <div style = {{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: 'var(--space-2xs)' }} >
                {notes.slice( 0, 12 ).map( ( note ) => (
                  <IndexNoteCard key = {note.slug} note = {note} href = {note.slug} />
                ) )}
              </div >
            </section >


            <section style = {{ gridArea: 'books' }} >
              <Link href = 'https://micmetz.github.io/library/' >
                <SectionHeader >
                  Books
                  <ArrowRightIcon width = '18' height = '18' />
                </SectionHeader >
              </Link >
              <Subheader >
                Books I’m currently reading.
              </Subheader >
              <div
                style = {{
                  display            : 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gridGap            : 'var(--space-xs)'
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


        <Spacer size = '3xlarge' />


        <motion.section
          initial = {{ opacity: 0, x: -50 }}
          animate = {{ opacity: 1, x: 0 }}
          transition = {{ delay: 0.7, duration: 1 }}
        >
          <Title2 style = {{ fontSize: 'var(--font-size-2xl)' }} >
            Projects
          </Title2 >
          <Subheader >
            Projects I’ve worked on.
            <Spacer />
            <ReadmoreLink href = '/Design-Workshop' >
              Learn more
              <ArrowRightIcon width = '18' height = '18' />
            </ReadmoreLink >
          </Subheader >


          <ProjectsSection
            variants = {collectionAnimation}
            initial = 'hidden'
            animate = 'visible'
          >
            <section style = {{ gridArea: 'technology' }} >
              <Link href = '/Design-Workshop' >
                <SectionHeader >
                  Software Experiences
                  <ArrowRightIcon width = '18' height = '18' />
                </SectionHeader >
              </Link >
              <Subheader >
                Software and digital storytelling projects.
              </Subheader >
              <div
                style = {{
                  display            : 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
                }}
              >
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
              </div >
            </section >

            <section style = {{ gridArea: 'atlas', marginLeft: '3rem' }} >
              <Link href = '/Atlas' >
                <SectionHeader >
                  Atlas
                  <ArrowRightIcon width = '18' height = '18' />
                </SectionHeader >
              </Link >
              <Subheader >
                A collection of maps I’ve made.
              </Subheader >
              <div style = {{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }} >
                {ArcGISData.map( ( visual, i ) => (
                  <AtlasCard
                    key = {visual.slug}
                    slug = {visual.slug}
                    title = {visual.title}
                    date = {visual.date}
                  />
                ) )}
              </div >
            </section >
          </ProjectsSection >
        </motion.section >

        <Spacer size = 'xlarge' />

        <motion.section
          initial = {{ opacity: 0, x: -50 }}
          animate = {{ opacity: 1, x: 0 }}
          transition = {{ delay: 0.7, duration: 1 }}
        >
          <Title2 style = {{ fontSize: 'var(--font-size-2xl)' }} >
            Articles
          </Title2 >
          <Subheader >
            Some of the most memorable articles I’ve read over the recent months.{' '}
            <Spacer />
            <ReadmoreLink href = '/Articles' >
              See more
              <ArrowRightIcon width = '18' height = '18' />
            </ReadmoreLink >
          </Subheader >
          <section style = {{ height: 'fit-content' }} >
            {ArticleList.slice( 0 ).reverse().filter( ( article, i ) => i < 7 ).map( ( article, i ) => (
              <ArticleCard
                key = {i}
                title = {article.header.title}
                preamble = {article.header.preamble}
                cover = {article.cover}
                link = {article.link}
                topics = {article.topics}
                publisher = {article.publisher}
                author = {article.author}
                date = {article.date}
              />
            ) )}
          </section >
        </motion.section >


        <Spacer size = 'xlarge' />


      </Layout >
    </>
  )
    ;
};




export function getStaticProps() {
  // Get all essay posts
  let essays = essayFilePaths.map( ( filePath ) => {
    const source            = fs.readFileSync( path.join( ESSAYS_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug              = filePath.replace( /\.mdx$/, '' );

    return {
      content, data, slug, filePath
    };
  } );

  // Filter essays for featured property
  const filteredEssays = essays
  .filter( ( essay ) => essay.data.featured === true )
  .slice( 0, 4 );
  // Sort filtered essays by date
  const sortedEssays   = filteredEssays.sort( ( a, b ) => {
    return new Date( b.data.updated ) - new Date( a.data.updated );
  } );

  // Get all note posts
  let notes = noteFilePaths.map( ( filePath ) => {
    const source            = fs.readFileSync( path.join( NOTES_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug              = filePath.replace( /\.mdx?$/, '' );

    return {
      content, data, slug, filePath
    };
  } );

  // Sort notes in reverse order by date
  const sortedNotes = notes.sort( ( a, b ) => {
    return new Date( b.data.updated ) - new Date( a.data.updated );
  } );

  let projects = projectFilePaths.map( ( filePath ) => {
    const source            = fs.readFileSync( path.join( PROJECTS_PATH, filePath ) );
    const { content, data } = matter( source );
    const slug              = filePath.replace( /\.mdx?$/, '' );

    return {
      content, data, slug, filePath
    };
  } );

  // Sort projects by date
  const sortedProjects = projects.slice( 0, 4 ).sort( ( a, b ) => {
    return new Date( b.data.updated ) - new Date( a.data.updated );
  } );

  const allPosts = [
    ...essays,
    ...notes,
    ...projects
  ];

  return {
    props: { sortedEssays, sortedNotes, sortedProjects }
  };
}


