import { MDXRemote }                                                                                 from "next-mdx-remote";
import Link                                                                                          from "next/link";
import { AtlasStyledHeaderSection, AtlasStyledMain, AtlasStyledMetadata, AtlasStyledTitleContainer } from "../../styles/StyledPageTemplates/StyledAtlasTemplate.js";
import GrowthIcon                                                                                    from "../Icons/GrowthIcon.js";
import Header                                                                                        from "../Layouts/Header.js";
import { Layout }                                                                                    from "../Layouts/Layout.js";
import BackHoverLink                                                                                 from "../Links/BackHoverLink.js";
import Backlinks                                                                                     from "../Links/Backlinks.js";
import BackToTop                                                                                     from "../MDX/BackToTop.js";
import ProseWrapper                                                                                  from "../MDX/ProseWrapper.js";
import Topics                                                                                        from "../MDX/Topics.js";
import Dates                                                                                         from "../MISC/DatesFormat.js";
import GrowthStage                                                                                   from "../MISC/GrowthStage.js";




export default function AtlasTemplate( { source, frontMatter, components, slug, backlinks, ogImage } ) {
  return (
    <>
      <Header
        title = {frontMatter.title}
        description = {frontMatter.description}
        keywords = {frontMatter.topics}
        ogImage = {ogImage}
      />
      <AtlasStyledHeaderSection >
        <div className = "above-title" >
          <Link href = "/Atlas" >
            <BackHoverLink href = "/Atlas" >Atlas</BackHoverLink >
          </Link >
          {frontMatter.growthStage && (
            <>
              <GrowthIcon size = "16" growthStage = {frontMatter.growthStage} />
              <GrowthStage stage = {frontMatter.growthStage} />
            </>
          )}
        </div >
        <AtlasStyledTitleContainer >
          <h1 >{frontMatter.title}</h1 >
          {frontMatter.description && <p >{frontMatter.description}</p >}
        </AtlasStyledTitleContainer >
        <AtlasStyledMetadata >
          {frontMatter.topics ? (
            <Topics topics = {frontMatter.topics} />
          ) : (
            <div />
          )}
          <Dates
            started = {frontMatter.started}
            updated = {frontMatter.updated}
          />
        </AtlasStyledMetadata >
      </AtlasStyledHeaderSection >
      <AtlasStyledMain >
        <BackToTop />
        <ProseWrapper >
          <MDXRemote {...source} components = {components} />
        </ProseWrapper >
      </AtlasStyledMain >
      {backlinks?.length ? <Backlinks backlinks = {backlinks} /> : null}
    </>
  );
}

