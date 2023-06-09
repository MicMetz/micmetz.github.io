import { MDXRemote }                                                                                 from 'next-mdx-remote';
import Link                                                                                          from 'next/link';
import { useEffect, useRef, useState }                                                               from 'react';
import { EssayStyledHeaderSection, EssayStyledMain, EssayStyledMetadata, EssayStyledTitleContainer } from '../../styles/StyledPageTemplates/StyledEssayTemplate.js';
import DatesFormat                                                                                   from '../Base/DatesFormat.js';
import GrowthIcon                                                                                    from '../Icons/GrowthIcon.js';
import Header                                                                                        from '../Layouts/Header.js';
import BackHoverLink                                                                                 from '../Links/BackHoverLink.js';
import Backlinks                                                                                     from '../Links/Backlinks.js';
import BackToTop                                                                                     from '../MDX/BackToTop.js';
import ProseWrapper                                                                                  from '../MDX/ProseWrapper.js';
import TableOfContents                                                                               from '../MDX/TableOfContents.js';
import Topics                                                                                        from '../MDX/Topics.js';
import GrowthStage                                                                                   from '../MISC/GrowthStage.js';




export default function EssayTemplate( { source, frontMatter, components, slug, headings, toc, backlinks, ogImage } ) {
  const [ scrollPosition, setScrollPosition ] = useState();
  const [ chapter, setChapter ]               = useState();
  const navRef                                = useRef();


  const chapterList = headings.map( ( heading, i ) => {
      return {
        text: heading.text.toString(),
        id  : i
      };
    }
  );


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
          }
        );
      }, {
        threshold: 0.5
      }
    );

    document.querySelectorAll( 'h2[id]' ).forEach( ( section ) => {
        if ( section !== null ) {
          observer.observe( section );
        }
      }
    );

  };



  return (
    <>
      <Header
        title = {frontMatter.title}
        description = {frontMatter.description}
        keywords = {frontMatter.topics}
        ogImage = {ogImage}
      />
      <EssayStyledHeaderSection >
        <div className = 'above-title' >
          <Link href = '/garden/essays' >
            <BackHoverLink href = '/Essays' >Essays</BackHoverLink >
          </Link >
          <GrowthIcon size = '16' growthStage = {frontMatter.growthStage} />
          <GrowthStage stage = {frontMatter.growthStage} />
        </div >
        <EssayStyledTitleContainer >
          <h1 >{frontMatter.title}</h1 >
          {frontMatter.description && <p >{frontMatter.description}</p >}
        </EssayStyledTitleContainer >
        <EssayStyledMetadata >
          {frontMatter.topics && <Topics topics = {frontMatter.topics} />}
          <DatesFormat
            started = {frontMatter.started}
            updated = {frontMatter.updated}
          />
        </EssayStyledMetadata >
      </EssayStyledHeaderSection >
      <EssayStyledMain >
        <BackToTop />
        <ProseWrapper >
          {toc && <TableOfContents headings = {headings} />}
          <MDXRemote
            {...source}
            components = {{ ...components }}
          />
        </ProseWrapper >
      </EssayStyledMain >

      {backlinks?.length ? <Backlinks backlinks = {backlinks} /> : null}

    </>
  );
}

