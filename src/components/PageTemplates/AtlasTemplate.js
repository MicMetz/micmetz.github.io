import GrowthIcon from "@/components/Icons/GrowthIcon.js";
import BackHoverLink from "@/components/Links/BackHoverLink.js";
import BackToTop from "@/components/MDX/BackToTop.js";
import ProseWrapper from "@/components/MDX/ProseWrapper.js";
import { AtlasStyledHeaderSection, AtlasStyledMain, AtlasStyledMetadata, AtlasStyledTitleContainer } from "@/styles/StyledPageTemplates/StyledAtlasTemplate.js";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Header from "../Layouts/Header.js";
import Backlinks from "../Links/Backlinks.js";
import Dates from "../MISC/DatesFormat.js";
import GrowthStage from "../MISC/GrowthStage.js";
import Topics from "../MISC/Topics.js";
import { TwitterReply } from "../MISC/TwitterReply.js";



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
										<Link href = "/Projects/Atlas" >
												<BackHoverLink href = "/Projects/Atlas" >Atlas</BackHoverLink >
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

