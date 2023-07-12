import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import GrowthIcon from "../../components/Icons/GrowthIcon.js";
import BackHoverLink                                                                             from "../../components/Links/BackHoverLink.js";
import BackToTop                                                                                 from "../MDX/BackToTop.js";
import ProseWrapper                                                                              from "../MDX/ProseWrapper.js";
import { NoteStyledHeaderSection, NoteStyledMain, NoteStyledMetadata, NoteStyledTitleContainer } from "../../styles/StyledPageTemplates/StyledNoteTemplate.js";
import Header from "../Layouts/Header.js";
import Layout          from "../Layouts/Layout.js";
import DatesFormat     from '../Base/DatesFormat.js';
import GrowthStage                                                                               from "../MISC/GrowthStage.js";
import TableOfContents                                                                           from "../MDX/TableOfContents.js";
import Topics                                                                                    from "../MDX/Topics.js";



export default function NoteTemplate( { source, frontMatter, components, slug, toc, headings, backlinks, ogImage } ) {
  return (
    <>
      <Header
        title = {frontMatter.title}
        description = {frontMatter.description}
        keywords = {frontMatter.topics}
        ogImage = {ogImage}
      />
      <NoteStyledHeaderSection >
        <div className = "above-title">
          <Link href = "/garden/notes">
            <BackHoverLink href = "/Notes">Notes</BackHoverLink >
          </Link >
          <GrowthIcon size = "16" growthStage = {frontMatter.growthStage}/>
          <GrowthStage stage = {frontMatter.growthStage}/>
        </div >
        <NoteStyledTitleContainer >
          <h1 >{frontMatter.title}</h1 >
          {frontMatter.description && <p >{frontMatter.description}</p >}
        </NoteStyledTitleContainer >
        <NoteStyledMetadata >
          {frontMatter.topics && <Topics topics = {frontMatter.topics}/>}
          <DatesFormat
            started = {frontMatter.started}
            updated = {frontMatter.updated}
          />
        </NoteStyledMetadata >
      </NoteStyledHeaderSection >
      <NoteStyledMain >
        <BackToTop />
        <ProseWrapper >
          {toc && <TableOfContents headings = {headings}/>}
          <MDXRemote
            {...source}
            components={{ ...components}}
          />
        </ProseWrapper >
      </NoteStyledMain >


    </>
  );
}

