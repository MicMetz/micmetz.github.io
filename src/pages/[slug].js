import fs                                                                                                                                                               from 'fs';
import matter                                                                                                                                                           from 'gray-matter';
import { serialize }                                                                                                                                                    from 'next-mdx-remote/serialize';
import dynamic                                                                                                                                                          from 'next/dynamic';
import path                                                                                                                                                             from 'path';
import { Controls, PlayState, Timeline, Tween }                                                                                                                         from 'react-gsap';
import InternalTooltipLink                                                                                                                                              from '../components/Links/InternalTooltipLink.js';
import AssumedAudience                                                                                                                                                  from '../components/MDX/AssumedAudience.js';
import Disclaimer                                                                                                                                                       from '../components/MDX/Disclaimer.js';
import { EditBlue, EditGreen, EditGrey, EditPurple, EditRed, EditYellow }                                                                                               from '../components/MDX/TextEdit/AllHighlights.js';
import { Spacer }                                                                                                                                                       from '../components/MISC/Spacer.js';
import EssayTemplate                                                                                                                                                    from '../components/PageTemplates/EssayTemplate.js';
import LessonTemplate                                                                                                                                                   from '../components/PageTemplates/LessonTemplate.js';
import NoteTemplate                                                                                                                                                     from '../components/PageTemplates/NoteTemplate.js';
import PatternTemplate                                                                                                                                                  from '../components/PageTemplates/PatternTemplate.js';
import ProjectTemplate                                                                                                                                                  from '../components/PageTemplates/ProjectTemplate.js';
import { SmallCaps, Subtext, Title1, Title2, Title3, Title4 }                                                                                                           from '../styles/StyledTypography.js';
import { getHeadings }                                                                                                                                                  from '../tools/getHeadings.js';
import getOriginalImage                                                                                                                                                 from '../tools/getOriginalImage.js';
import { linkify }                                                                                                                                                      from '../tools/linkify.js';
import { essayFilePaths, ESSAYS_PATH, experimentFilePaths, EXPERIMENTS_PATH, lessonFilePaths, LESSONS_PATH, noteFilePaths, NOTES_PATH, patternFilePaths, PATTERNS_PATH } from '../tools/mdxUtils.js';



/*
 Custom components/renderers to pass to MDX.
 Since the MDX files aren't loaded by webpack, they have no knowledge of how
 to handle import statements. Instead, you must include components in scope
 here.
 */
export const components = {
  // a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally components for certain routes.
  // See the notes in README.md for more details.
  h1: ( props ) => ( <a href = {`#${props.id}`} >
    <Title1 {...props} />
  </a > ),

  h2: ( props ) => ( <a href = {`#${props.id}`} >
    <Title2 {...props} />
  </a > ),

  h3                 : Title3,
  h4                 : Title4,
  SmallCaps          : SmallCaps,
  InternalTooltipLink: InternalTooltipLink,
  Tween              : Tween,
  Timeline           : Timeline,
  AssumedAudience    : AssumedAudience,
  Disclaimer         : Disclaimer,
  PlayState          : PlayState,
  Spacer             : Spacer,
  Controls           : Controls,
  EditRed            : EditRed,
  EditBlue           : EditBlue,
  EditGreen          : EditGreen,
  EditYellow         : EditYellow,
  EditPurple         : EditPurple,
  EditGrey           : EditGrey,
  ButtonLink         : dynamic( () => import('../components/Links/ButtonLink') ),
  Podcastiframe      : dynamic( () => import('../components/MDX/Podcastiframe'), {
      ssr: false
    }
  ),
  BlockquoteCitation : dynamic( () => import('../components/MDX/BlockquoteCitation') ), Subtext: Subtext, Accordion: dynamic( () => import('../components/MDX/Accordion') ),
  Footnote           : dynamic( () => import('../components/MDX/Footnote'), {
      ssr: false
    }
  ),
  img                : dynamic( () => import('../components/MDX/Img'), {
      ssr: false
    }
  ),
  NextImage          : dynamic( () => import('../components/MDX/NextImage'), {
      ssr: false
    }
  ),
  Alert              : dynamic( () => import('../components/MDX/Alert'), {
      ssr: false
    }
  ),
  ResourceBook       : dynamic( () => import('../components/MDX/ResourceBook'), {
      ssr: false
    }
  ),
  Video              : dynamic( () => import('../components/MDX/Video'), {
      ssr: false
    }
  ),
  ReferencesLink     : dynamic( () => import('../components/MDX/ReferencesLink'), {
      ssr: false
    }
  ),
  a                  : dynamic( () => import('../components/Links/ToolTipLink.js'), {
      ssr: false
    }
  ),
  pre                : dynamic( () => import('../components/MDX/CodeBlock'), {
      ssr: false
    }
  ),
  Center             : dynamic( () => import('../components/MDX/Center'), {
      ssr: false
    }
  ),
  BasicImage         : dynamic( () => import('../components/MDX/BasicImage'), {
      ssr: false
    }
  ),
  ResponsiveImage    : dynamic( () => import('../components/MDX/ResponsiveImage'), {
      ssr: false
    }
  ),
  ImageFrame         : dynamic( () => import('../components/MDX/ImageFrame'), {
      ssr: false
    }
  ),
  ComingSoon         : dynamic( () => import('../components/MDX/ComingSoon'), {
      ssr: false
    }
  ),
  InDevelopment      : dynamic( () => import('../components/MDX/InDevelopment'), {
      ssr: false
    }
  ),

  References         : dynamic( () => import('../components/MDX/References'), {
      ssr: false
    }
  ),
  Draft              : dynamic( () => import('../components/MDX/Draft'), {
      ssr: false
    }
  ),
  TwoColumn          : dynamic( () => import('../components/MDX/TwoColumn'), {
      ssr: false
    }
  ),
  ThreeColumn        : dynamic( () => import('../components/MDX/ThreeColumn'), {
      ssr: false
    }
  ),
  TweetEmbed         : dynamic( () => import('../components/MDX/TweetEmbed'), {
      ssr: false, loading: () => <div >Loading...</div >
    }
  ),
  IntroParagraph     : dynamic( () => import('../components/MDX/IntroParagraph'), {
      ssr: false
    }
  ),
  SimpleCard         : dynamic( () => import('../components/MDX/SimpleCard'), {
      ssr: false
    }
  ),
  LinkCard           : dynamic( () => import('../components/MDX/LinkCard'), {
      ssr: false
    }
  ),
  ImageLink          : dynamic( () => import('../components/Links/ImageLink'), {
      ssr: false
    }
  ),
  FullWidthBackground: dynamic( () => import('../components/MDX/FullWidthBackground'), {
      ssr: false
    }
  ),
  FullWidthSection   : dynamic( () => import('../components/MDX/FullWidthSection'), {
      ssr: false
    }
  ),
  NowSection         : dynamic( () => import('../components/MDX/NowSection'), {
      ssr: false
    }
  ),
  TalkSlide          : dynamic( () => import('../components/MDX/TalkSlide'), {
      ssr: false
    }
  ),
  ListNumber         : dynamic( () => import('../components/MDX/ListNumber'), {
      ssr: false
    }
  ),
  ExpandCollapse     : dynamic( () => import('../components/MDX/ExpandCollapse'), {
      ssr: false
    }
  ),
  // Unique components – used in specific essays or notes
  StickyPosition         : dynamic( () => import('../components/Unique/css-position/StickyPosition'), {
      ssr: false
    }
  ),
  RelativeCSSPosition    : dynamic( () => import('../components/Unique/css-position/RelativeCSSPosition'), {
      ssr: false
    }
  ),
  AbsoluteCSSPosition    : dynamic( () => import('../components/Unique/css-position/AbsoluteCSSPosition'), {
      ssr: false
    }
  ),
  FixedCSSPosition       : dynamic( () => import('../components/Unique/css-position/FixedCSSPosition'), {
      ssr: false
    }
  ),
  StaticCSSPosition      : dynamic( () => import('../components/Unique/css-position/StaticCSSPosition'), {
      ssr: false
    }
  ),
  MysteriousVoid         : dynamic( () => import('../components/Unique/MysteriousVoid'), {
      ssr: false
    }
  ),
  ScrollingImages        : dynamic( () => import('../components/Unique/ScrollingImages'), {
      ssr: false
    }
  ),
  GsapScroller           : dynamic( () => import('../components/Unique/gsap-basics/GsapScroller'), {
      ssr: false
    }
  ),
  TweenRedBigBox         : dynamic( () => import('../components/Unique/gsap-basics/TweenRedBigBox'), {
      ssr: false
    }
  ),
  TweenSpinningBox       : dynamic( () => import('../components/Unique/gsap-basics/TweenSpinningBox'), {
      ssr: false
    }
  ),
  TweenReverseSpinningBox: dynamic( () => import('../components/Unique/gsap-basics/TweenReverseSpinningBox'), {
      ssr: false
    }
  ),
  TweenBlueRedBox        : dynamic( () => import('../components/Unique/gsap-basics/TweenBlueRedBox'), {
      ssr: false
    }
  ),
  MultipartIntro         : dynamic( () => import('../components/Unique/MultipartIntro.js'), {
      ssr: false
    }
  ),
  InvisiblesFeature      : dynamic( () => import('../components/Unique/InvisiblesFeature'), {
      ssr: false
    }
  ),
  MediumMaterialsMeat    : dynamic( () => import('../components/Unique/MediumMaterialsMeat'), {
      ssr: false
    }
  ),
  Tools                  : dynamic( () => import('../components/Unique/apps/Tools'), {
      ssr: false
    }
  ),
  Hardware               : dynamic( () => import('../components/Unique/apps/Hardware'), {
      ssr: false
    }
  ),
  TextvBlocks            : dynamic( () => import('../components/Unique/blocks/TextvBlocks'), {
      ssr: false
    }
  ),
  DemoBlock1             : dynamic( () => import('../components/Unique/blocks/DemoBlock1'), {
      ssr: false
    }
  ),
  DemoBlock2             : dynamic( () => import('../components/Unique/blocks/DemoBlock2'), {
      ssr: false
    }
  ),
  DemoBlock3             : dynamic( () => import('../components/Unique/blocks/DemoBlock3'), {
      ssr: false
    }
  ),
  DemoBlock4             : dynamic( () => import('../components/Unique/blocks/DemoBlock4'), {
      ssr: false
    }
  ),
  LinearChars            : dynamic( () => import('../components/Unique/blocks/LinearChars'), {
      ssr: false
    }
  ),
  Blocktimeline          : dynamic( () => import('../components/Unique/blocks/Blocktimeline'), {
      ssr: false
    }
  ),
  BlockAges              : dynamic( () => import('../components/Unique/blocks/BlockAges'), {
      ssr: false
    }
  ),
  BlockLogos             : dynamic( () => import('../components/Unique/blocks/BlockLogos'), {
      ssr: false
    }
  ),
  NoteAction             : dynamic( () => import('../components/Unique/programmatic-notes/NoteAction'), {
      ssr: false
    }
  ),
  NoteTrigger            : dynamic( () => import('../components/Unique/programmatic-notes/NoteTrigger'), {
    ssr: false
  } )
};



export default function PostPage( { source, frontMatter, slug, headings, backlinks, toc, ogImage } ) {
  if ( frontMatter.type === 'note' ) {
    return ( <NoteTemplate
        slug = {slug}
        source = {source}
        toc = {toc}
        frontMatter = {frontMatter}
        components = {components}
        backlinks = {backlinks}
        headings = {headings}
        ogImage = {ogImage}
      />
    );
  } else if ( frontMatter.type === 'essay' ) {
    return ( <EssayTemplate
        slug = {slug}
        source = {source}
        toc = {toc}
        frontMatter = {frontMatter}
        components = {components}
        backlinks = {backlinks}
        headings = {headings}
        ogImage = {ogImage}
      />
    );
  } else if ( frontMatter.type === 'experiment' ) {
    return ( <ProjectTemplate
        slug = {slug}
        source = {source}
        toc = {toc}
        frontMatter = {frontMatter}
        components = {components}
        backlinks = {backlinks}
        headings = {headings}
        ogImage = {ogImage}
      />
    );
  } else if ( frontMatter.type === 'lesson' ) {
    return ( <LessonTemplate
        slug = {slug}
        source = {source}
        toc = {toc}
        frontMatter = {frontMatter}
        components = {components}
        backlinks = {backlinks}
        headings = {headings}
        ogImage = {ogImage}
      />
    );
  } else if ( frontMatter.type === 'pattern' ) {
    return ( <PatternTemplate
        slug = {slug}
        source = {source}
        toc = {toc}
        frontMatter = {frontMatter}
        components = {components}
        backlinks = {backlinks}
        headings = {headings}
        ogImage = {ogImage}
      />
    );
  }
};



const getOgImagePath = ( properties ) => {
  let url = '/ogImage?';
  Object.keys( properties ).forEach( ( property ) => {
      if ( properties[ property ] ) {
        url += `${property}=${encodeURIComponent( properties[ property ] )}&`;
      }
    }
  );
  return url;
};



export const getStaticProps = async( { params } ) => {
  const essays      = fs.readdirSync( ESSAYS_PATH );
  const notes       = fs.readdirSync( NOTES_PATH );
  const experiments = fs.readdirSync( EXPERIMENTS_PATH );
  const lessons     = fs.readdirSync( LESSONS_PATH );
  const patterns    = fs.readdirSync( PATTERNS_PATH );


  // determine the type of file to load
  let type;
  if ( experiments.find( ( file ) => file.includes( params.slug ) ) ) {
    type = 'experiment';
  } else if ( essays.find( ( file ) => file.includes( params.slug ) ) ) {
    type = 'essay';
  } else if ( notes.find( ( file ) => file.includes( params.slug ) ) ) {
    type = 'note';
  } else if ( lessons.find( ( file ) => file.includes( params.slug ) ) ) {
    type = 'lesson';
  } else if ( patterns.find( ( file ) => file.includes( params.slug ) ) ) {
    type = 'pattern';
  }

  // switch case statement to determine which file to load
  let filePath;
  switch(type) {
    case 'essay': {
      filePath = path.join( ESSAYS_PATH, `${params.slug}.mdx` );
      break;
    }
    case 'note': {
      filePath = path.join( NOTES_PATH, `${params.slug}.mdx` );
      break;
    }
    case 'experiment': {
      filePath = path.join( EXPERIMENTS_PATH, `${params.slug}.mdx` );
      break;
    }
    case 'lesson': {
      filePath = path.join( LESSONS_PATH, `${params.slug}.mdx` );
      break;
    }
    case 'pattern': {
      filePath = path.join( PATTERNS_PATH, `${params.slug}.mdx` );
      break;
    }
  }

  const source                        = fs.readFileSync( filePath );
  const { content, data }             = matter( source );
  const toc                           = data?.toc || null;
  const headings                      = await getHeadings( content );
  const ogObject                      = { title: data.title, subtitle: data.description, postType: data.type, growthStage: data.growthStage, cover: data.cover };
  const ogImagePath                   = getOgImagePath( ogObject );
  const ogImage                       = await getOriginalImage( ogImagePath, data.title );
  const contentWithBidirectionalLinks = linkify( content, data.title );

  const mdxSource = await serialize( contentWithBidirectionalLinks, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [], rehypePlugins: [
          require( 'rehype-slug' ),
          require( 'rehype-autolink-headings' )
        ]
      }, scope  : data
    }
  );


  return {
    props: {
      source     : mdxSource,
      frontMatter: data, headings,
      slug       : params.slug, toc, ogImage
    }
  };
};




export const getStaticPaths = async() => {
  // Get slugs for all file paths passed in
  const getSlugParams = ( filePaths ) => filePaths
  // Remove the .MDX extension
  .map( ( path ) => path.replace( /\.mdx?$/, '' ) )
  .map( ( slug ) => ( { params: { slug } } ) );

  const notePaths       = getSlugParams( noteFilePaths );
  const essayPaths      = getSlugParams( essayFilePaths );
  const experimentPaths = getSlugParams( experimentFilePaths );
  const lessonPaths     = getSlugParams( lessonFilePaths );
  const patternPaths    = getSlugParams( patternFilePaths );

  // Combine all paths into one array
  const paths = notePaths.concat( essayPaths, notePaths, experimentPaths, lessonPaths );

  return {
    paths, fallback: false
  };
};
