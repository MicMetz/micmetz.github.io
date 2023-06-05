import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import styled from "styled-components";
import Header from "../components/Header";
import EvergreenIcon from "../components/icons/EvergreenIcon";
import BackHoverLink from "../components/links/BackHoverLink";
import BackToTop from "../components/mdx/BackToTop";
import ProseWrapper from "../components/mdx/ProseWrapper";
import { TwitterReply } from "../components/templates/TwitterReply";
import { Title1 } from "../components/Typography";
import { breakpoints } from "../utils/breakpoints";



export default function ProjectTemplate( {
		source,
		frontMatter,
		components,
		slug,
		ogImage
} ) {
		function formattedDate( date ) {
				return new Date( date ).toLocaleDateString( "en-GB", {
						year : "numeric",
						month: "long",
				} );
		}


		return (
				<>
						<Header title = {frontMatter.title} description = {frontMatter.description} ogImage = {ogImage} />

						<HeaderSection >
								<div className = "above-title" >
										<Link href = "/Labor" >
												<BackHoverLink href = "/Labor" >Projects</BackHoverLink >
										</Link >
								</div >
								<TitleContainer >
										<Title1 >{frontMatter.title}</Title1 >
								</TitleContainer >
								<Metadata className = "metadata" >
										{frontMatter.topics && (
												<span style = {{ textTransform: "capitalize" }} >
														{frontMatter.topics}
												</span >
										)}
										<EvergreenIcon width = "14" height = "14" />
										{frontMatter.updated && (
												<span >{formattedDate( frontMatter.updated )}</span >
										)}
								</Metadata >
						</HeaderSection >
						<StyledMain >
								<BackToTop />
								<ProseWrapper >
										<MDXRemote {...source} components = {components} />
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
