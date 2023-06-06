import { NoteStyledHeaderSection, NoteStyledMain, NoteStyledMetadata, NoteStyledTitleContainer } from "@/styles/StyledPageTemplates/StyledNoteTemplate.js";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Backlinks from "../Backlinks.js";
import Dates from "../DatesFormat";
import GrowthStage from "../GrowthStage";
import Header from "../Header.js";
import GrowthIcon from "../icons/GrowthIcon.js";
import BackHoverLink from "../links/BackHoverLink.js";
import BackToTop from "../mdx/BackToTop.js";
import ProseWrapper from "../mdx/ProseWrapper.js";
import TableOfContents from "../TableOfContents.js";
import Topics from "../Topics";
import { TwitterReply } from "../TwitterReply";



export default function NoteTemplate( {
		source,
		frontMatter,
		components,
		slug,
		toc,
		headings,
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
						<NoteStyledHeaderSection >
								<div className = "above-title" >
										<Link href = "/notes" >
												<BackHoverLink href = "/notes" >notes</BackHoverLink >
										</Link >
										<GrowthIcon size = "16" growthStage = {frontMatter.growthStage} />
										<GrowthStage stage = {frontMatter.growthStage} />
								</div >
								<NoteStyledTitleContainer >
										<h1 >{frontMatter.title}</h1 >
										{frontMatter.description && <p >{frontMatter.description}</p >}
								</NoteStyledTitleContainer >
								<NoteStyledMetadata >
										{frontMatter.topics && <Topics topics = {frontMatter.topics} />}
										<Dates
												startDate = {frontMatter.startDate}
												updated = {frontMatter.updated}
										/>
								</NoteStyledMetadata >
						</NoteStyledHeaderSection >
						<NoteStyledMain >
								<BackToTop />
								<ProseWrapper >
										{toc && <TableOfContents headings = {headings} />}
										<MDXRemote {...source} components = {components} />
								</ProseWrapper >
						</NoteStyledMain >
						<TwitterReply
								url = {`https://micmetz.github.io/${slug}/`}
								title = {frontMatter.title}
						/>
						{backlinks.length ? <Backlinks backlinks = {backlinks} /> : null}
				</>
		);
}

