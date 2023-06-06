import { AtlasStyledHeaderSection, AtlasStyledMain, AtlasStyledMetadata, AtlasStyledTitleContainer } from "@/styles/StyledPageTemplates/StyledAtlasTemplate.js";
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
import Topics from "../Topics.js";
import { TwitterReply } from "../TwitterReply.js";



export default function AtlasTemplate( {
		source,
		frontMatter,
		components,
		slug,
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
						<AtlasStyledHeaderSection >
								<div className = "above-title" >
										<Link href = "/Labor/Atlas" >
												<BackHoverLink href = "/Labor/Atlas" >Atlas</BackHoverLink >
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
												startDate = {frontMatter.startDate}
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
						<TwitterReply
								url = {`https://micmetz.github.io//${slug}/`}
								title = {frontMatter.title}
						/>
						{backlinks && backlinks.length ? (
								<Backlinks backlinks = {backlinks} />
						) : null}
				</>
		);
}

