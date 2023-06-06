import { EssayStyledHeaderSection, EssayStyledMain, EssayStyledMetadata, EssayStyledTitleContainer } from "@/styles/StyledPageTemplates/StyledEssayTemplate.js";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Backlinks from "../Backlinks.js";
import Dates from "../DatesFormat.js";
import GrowthStage from "../GrowthStage.js";
import Header from "../Header.js";
import GrowthIcon from "../icons/GrowthIcon.js";
import BackHoverLink from "../links/BackHoverLink.js";
import BackToTop from "../mdx/BackToTop.js";
import ProseWrapper from "../mdx/ProseWrapper.js";
import TableOfContents from "../TableOfContents.js";
import Topics from "../Topics.js";
import { TwitterReply } from "../TwitterReply.js";



export default function EssayTemplate( {
		source,
		frontMatter,
		components,
		slug,
		headings,
		toc,
		backlinks,
		ogImage,
} ) {
		return (
				<>
						<Header
								title = {frontMatter.title}
								description = {frontMatter.description}
								keywords = {frontMatter.topics}
								ogImage = {ogImage}
						/>
						<EssayStyledHeaderSection >
								<div className = "above-title" >
										<Link href = "/essays" >
												<BackHoverLink href = "/essays" >Essays</BackHoverLink >
										</Link >
										<GrowthIcon size = "16" growthStage = {frontMatter.growthStage} />
										<GrowthStage stage = {frontMatter.growthStage} />
								</div >
								<EssayStyledTitleContainer >
										<h1 >{frontMatter.title}</h1 >
										{frontMatter.description && <p >{frontMatter.description}</p >}
								</EssayStyledTitleContainer >
								<EssayStyledMetadata >
										{frontMatter.topics && <Topics topics = {frontMatter.topics} />}
										<Dates
												startDate = {frontMatter.startDate}
												updated = {frontMatter.updated}
										/>
								</EssayStyledMetadata >
						</EssayStyledHeaderSection >
						<EssayStyledMain >
								<BackToTop />
								<ProseWrapper >
										{toc && <TableOfContents headings = {headings} />}
										<MDXRemote {...source} components = {components} />
								</ProseWrapper >
						</EssayStyledMain >
						<TwitterReply
								url = {`https://micmetz.github.io/${slug}/`}
								title = {frontMatter.title}
						/>

						{backlinks.length ? <Backlinks backlinks = {backlinks} /> : null}

				</>
		);
}

