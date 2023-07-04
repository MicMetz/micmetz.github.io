import { MDXRemote }                   from "next-mdx-remote";
import Link                            from "next/link";
import { useEffect, useRef, useState } from "react";
import styled                          from "styled-components";
import { breakpoints }                 from "../../constants/breakpoints.js";
import GrowthIcon                      from "../Icons/GrowthIcon.js";
import Header                          from "../Layouts/Header.js";
import { Layout }                      from "../Layouts/Layout.js";
import BackHoverLink                   from "../Links/BackHoverLink.js";
import Backlinks                       from "../Links/Backlinks.js";
import BackToTop                       from "../MDX/BackToTop.js";
import ProseWrapper                    from "../MDX/ProseWrapper.js";
import TableOfContents                 from "../MDX/TableOfContents.js";
import Topics                          from "../MDX/Topics.js";
import Dates                           from "../MISC/DatesFormat.js";
import GrowthStage                     from "../MISC/GrowthStage.js";




export default function LessonTemplate( { source, frontMatter, components, slug, headings, toc, backlinks, ogImage } ) {
  const [ scrollPosition, setScrollPosition ] = useState()
  const [ chapter, setChapter ]               = useState()
  const navRef                                = useRef()

  const chapterList = headings.map( ( heading, i ) => {
    return {
      text: heading.text.toString(),
      id  : i,
    }
  } )


  console.log( headings )
  console.log( chapterList )

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
          setChapter( intersection.target.id )
        }
      } )
    }, {
      threshold: 0.5
    } )

    document.querySelectorAll( 'h2[id]' ).forEach( ( section ) => {
      if ( section !== null ) {
        observer.observe( section )
      }
    } )
  }



  return (
    <>
      <Header
        title = {frontMatter.title}
        description = {frontMatter.description}
        keywords = {frontMatter.topics}
        ogImage = {ogImage}
      />
      <LessonHeaderSection >
        <div className = "above-title" >
          <Link href = "/lessons" >
            <BackHoverLink href = "/lessons" >Lessons</BackHoverLink >
          </Link >
          <GrowthIcon size = "16" growthStage = {frontMatter.growthStage} />
          <GrowthStage stage = {frontMatter.growthStage} />
        </div >
        <LessonTitleContainer >
          <h1 >{frontMatter.title}</h1 >
          {frontMatter.description && <p >{frontMatter.description}</p >}
        </LessonTitleContainer >
        <LessonMetadata >
          {frontMatter.topics && <Topics topics = {frontMatter.topics} />}
          <Dates
            started = {frontMatter.started}
            updated = {frontMatter.updated}
          />
        </LessonMetadata >
      </LessonHeaderSection >
      <LessonStyledMain >
        <BackToTop />
        <ProseWrapper >
          {toc && <TableOfContents headings = {headings} />}
          <MDXRemote {...source} components = {components} />
        </ProseWrapper >
      </LessonStyledMain >
      {backlinks?.length ? <Backlinks backlinks = {backlinks} /> : null}
    </>
  );

}




const LessonHeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 3rem 0;
  padding: 0 0 0 0;
  width: 100%;
  max-width: 52rem;


  max-width: 800px;
  margin: var(--space-l) auto 0;

  /* div.above-title {
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

} */

  @media ${breakpoints.mediaSM} {
    padding: 0 var(--space-xs);

    margin: 0 0 4rem 0;
  }

  .above-title {
    margin: 0 0 0.5rem 0;
  }

  .metadata {
    display: flex;
    align-items: center;
    margin: 1rem 0 0 0;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--color-text);

    span {
      display: flex;
      align-items: center;
      margin: 0 0.5rem 0 0;

      svg {
        margin: 0 0.25rem 0 0;
      }
    }
  }
`;

const LessonTitleContainer = styled.div`
  /*
  margin: 0 0 1rem 0;
  */
  padding: var(--space-xs) 0 var(--space-3xs);

  p {
    font-size: var(--font-size-md);
    margin: var(--space-s) 0 0 0;
    color: var(--color-gray-600);
  }
`;

const LessonMetadata = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 0 0;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-text);

  /*
  display: flex;
  grid-gap: var(--space-3xs);
  align-items: center;
  */

  span {
    display: flex;
    align-items: center;
    margin: 0 0.5rem 0 0;

    svg {
      margin: 0 0.25rem 0 0;
    }
  }
`;

const LessonStyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 4rem 0;
  padding: 0 0 0 0;
  width: 100%;
  max-width: 52rem;
`;
