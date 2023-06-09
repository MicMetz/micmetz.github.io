import GrowthIcon from "../Icons/GrowthIcon.js";
import BackHoverLink from "../Links/BackHoverLink.js";
import BackToTop from "../MDX/BackToTop.js";
import ProseWrapper from "../MDX/ProseWrapper.js";
import { ProjectStyledHeaderSection, ProjectStyledMain, ProjectStyledMetadata, ProjectStyledTitleContainer } from "../../styles/StyledPageTemplates/StyledProjectTemplate.js";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Header from "../Layouts/Header.js";
import Backlinks from "../Links/Backlinks.js";
import Dates from "../MISC/DatesFormat.js";
import GrowthStage from "../MISC/GrowthStage.js";
import TableOfContents from "../MISC/TableOfContents.js";
import Topics from "../MISC/Topics.js";
import { TwitterReply } from "../MISC/TwitterReply.js";



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
						<ProjectStyledHeaderSection >
								<div className = "above-title" >
										<Link href = "/Project" >
												<BackHoverLink href = "/essays" >Projects</BackHoverLink >
										</Link >
										<GrowthIcon size = "16" growthStage = {frontMatter.growthStage} />
										<GrowthStage stage = {frontMatter.growthStage} />
								</div >
								<ProjectStyledTitleContainer >
										<h1 >{frontMatter.title}</h1 >
										{frontMatter.description && <p >{frontMatter.description}</p >}
								</ProjectStyledTitleContainer >
								<ProjectStyledMetadata >
										{frontMatter.topics && <Topics topics = {frontMatter.topics} />}
										<Dates
												startDate = {frontMatter.startDate}
												updated = {frontMatter.updated}
										/>
								</ProjectStyledMetadata >
						</ProjectStyledHeaderSection >
						<ProjectStyledMain >
								<BackToTop />
								<ProseWrapper >
										{toc && <TableOfContents headings = {headings} />}
										<MDXRemote {...source} components = {components} />
								</ProseWrapper >
						</ProjectStyledMain >
						<TwitterReply
								url = {`https://micmetz.github.io/${slug}/`}
								title = {frontMatter.title}
						/>

      {backlinks.length ? <Backlinks backlinks = {backlinks} /> : null}
				</>
		);
}
