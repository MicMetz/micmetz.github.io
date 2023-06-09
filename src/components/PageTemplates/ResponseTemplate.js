import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";
import GrowthIcon from "../Icons/GrowthIcon";
import Header from "../Layouts/Header.js";
import BackHoverLink from "../Links/BackHoverLink";
import Backlinks from "../Links/Backlinks.js";
import BackToTop from "../MDX/BackToTop";
import ProseWrapper from "../MDX/ProseWrapper";
import Dates from "../MISC/DatesFormat.js";
import GrowthStage from "../MISC/GrowthStage.js";
import Topics from "../MISC/Topics.js";
import { TwitterReply } from "../MISC/TwitterReply.js";



export default function ResponseTemplate( { source, frontMatter, components, slug, backlinks, ogImage } ) {
  return (
    <>
      <Header
        title = {frontMatter.title}
        description = {frontMatter.description}
        keywords = {frontMatter.topics}
        ogImage = {ogImage}
      />
      <HeaderSection >
        <div className = "above-title">
          <Link href = "/Responses">
            <BackHoverLink href = "/Responses">Responses</BackHoverLink >
          </Link >
          {frontMatter.growthStage && (
            <>
              <GrowthIcon size = "16" growthStage = {frontMatter.growthStage}/>
              <GrowthStage stage = {frontMatter.growthStage}/>
            </>
          )}
        </div >
        <TitleContainer >
          <h1 >{frontMatter.title}</h1 >
          {frontMatter.description && <p >{frontMatter.description}</p >}
        </TitleContainer >
        <Metadata >
          {frontMatter.topics ? (
            <Topics topics = {frontMatter.topics}/>
          ) : (
            <div />
          )}
          <Dates
            startDate = {frontMatter.startDate}
            updated = {frontMatter.updated}
          />
        </Metadata >
      </HeaderSection >
      <StyledMain >
        <BackToTop />
        <ProseWrapper >
          <MDXRemote {...source} components = {components}/>
        </ProseWrapper >
      </StyledMain >
      <TwitterReply
        url = {`https://micmetz.github.io/${slug}/`}
        title = {frontMatter.title}
      />

    </>
  );
}


const TitleContainer = styled.div`
  padding: var(--space-s) 0 var(--space-l);
  border-bottom: 1px solid var(--color-tinted-cream);

  h1 {
    font-size: var(--font-size-2xl);
    line-height: var(--leading-tighter);
    max-width: 100%;
    @media screen and (max-width: 425px) {
      font-size: var(--font-size-xl);
    }
  }

  p {
    font-size: var(--font-size-md);
    margin: var(--space-s) 0 0 0;
    color: var(--color-gray-600);
    @media screen and (max-width: 425px) {
      font-size: var(--font-size-base);
    }
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
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
  }
`;

const StyledMain = styled.main`
  padding: var(--space-xl) 0;
  background: linear-gradient(var(--color-cream) 0, white 110px);
  grid-column: 1/4 !important;
  width: 100%;
  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-xs);
  }
`;
