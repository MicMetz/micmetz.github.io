import { MDXRemote }           from 'next-mdx-remote';
import Link                    from 'next/link';
import { useEffect, useState } from 'react';
import styled                  from 'styled-components';
import { breakpoints }         from '../../constants/breakpoints.js';
import { Title1 }              from '../../styles/StyledTypography.js';
import GrowthIcon              from '../Icons/GrowthIcon.js';
import Header                  from '../Layouts/Header.js';
import BackHoverLink           from '../Links/BackHoverLink.js';
import Backlinks               from '../Links/Backlinks.js';
import BackToTop               from '../MDX/BackToTop.js';
import ProseWrapper            from '../MDX/ProseWrapper.js';
import TableOfContents         from '../MDX/TableOfContents.js';
import Topics                  from '../MDX/Topics.js';
import DatesFormat             from '../MISC/DatesFormat.js';
import GrowthStage             from '../MISC/GrowthStage.js';




export default function LessonTemplate( { source, frontMatter, components, slug, headings, toc, backlinks, ogImage } ) {
  const [ scrollPosition, setScrollPosition ] = useState();
  const [ chapter, setChapter ]               = useState();

  const chapterList = headings.map( ( heading, i ) => {
      return {
        text: heading.text.toString(),
        id  : i
      };
    }
  );

  console.log( headings );
  console.log( chapterList );

  useEffect( () => {
    window.addEventListener( 'scroll', handleScroll );
    return () => {
      window.removeEventListener( 'scroll', handleScroll );
    };

  }, [] );


  // Scroll by chapters in chapterList
  const handleScroll = () => {
    const observer = new IntersectionObserver( intersections => {
      intersections.forEach( ( intersection ) => {
        if ( intersection.intersectionRatio > 0.5 ) {
          setChapter( intersection.target.id );
        }
      } );
    }, {
      threshold: 0.5
    } );

    document.querySelectorAll( 'h2[id]' ).forEach( ( section ) => {
      if ( section !== null ) {
        observer.observe( section );
      }
    } );
  };



  return (
    <>
      <Header
        title = {frontMatter.title}
        description = {frontMatter.description}
        keywords = {frontMatter.topics}
        ogImage = {ogImage}
      />
      <HeaderSection >
        <div className = 'above-title' >
          <Link href = '/Design/Lessons' >
            <BackHoverLink href = '/Design/Lessons' >Lessons</BackHoverLink >
          </Link >
          <GrowthIcon size = '16' growthStage = {frontMatter.growthStage} />
          <GrowthStage stage = {frontMatter.growthStage} />
        </div >
        <TitleContainer >
          <h1 >{frontMatter.title}</h1 >
          {frontMatter.description && <p >{frontMatter.description}</p >}
        </TitleContainer >
        <Metadata className = 'metadata' >
          {frontMatter.topics && <Topics topics = {frontMatter.topics} />}
          <DatesFormat
            started = {frontMatter.started}
            updated = {frontMatter.updated}
          />
        </Metadata >
      </HeaderSection >
      <StyledMain >
        <BackToTop />
        <ProseWrapper >
          {toc && <TableOfContents headings = {headings} />}
          <MDXRemote {...source} components = {components} />
        </ProseWrapper >
      </StyledMain >
      {backlinks?.length ? <Backlinks backlinks = {backlinks} /> : null}
    </>
  );

}




const TitleContainer = styled.div`
  padding: var(--space-xs) 0 var(--space-3xs);

  p {
    font-size: var(--font-size-md);
    margin: var(--space-s) 0 0 0;
    color: var(--color-gray-600);
  }
`;


const HeaderSection = styled.header`
  max-width: 800px;
  margin: var(--space-l) auto 0;

  div.above-title {
    a,
    p {
      display: inline-block;
      font-family: var(--font-sans);
      font-size: var(--font-size-xs);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: bold;
      padding-right: var(--space-xs);
    }

    p {
      padding-left: var(--space-2xs);
    }

    svg {
      position: relative;
      top: 3px;
    }
  }

  @media ${breakpoints.mediaSM} {
    padding: 0 var(--space-xs);
  }
`;

const Metadata = styled.div`
  display: flex;
  grid-gap: var(--space-3xs);
  align-items: center;
`;


const StyledMain = styled.main`
  margin-top: var(--space-xs);
  padding: var(--space-xl) 0;
  background-color: white;
  background-image: linear-gradient(var(--color-cream) 0, white 110px);
  grid-column: 1/4 !important;
  width: 100%;
  @media ${breakpoints.mediaSM} {
    padding: var(--space-m) var(--space-xs);
  }
`;
