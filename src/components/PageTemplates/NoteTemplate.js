import GrowthIcon from "@/components/Icons/GrowthIcon.js";
import BackHoverLink from "@/components/Links/BackHoverLink.js";
import BackToTop from "@/components/MDX/BackToTop.js";
import ProseWrapper from "@/components/MDX/ProseWrapper.js";
import { NoteStyledHeaderSection, NoteStyledMain, NoteStyledMetadata, NoteStyledTitleContainer } from "@/styles/StyledPageTemplates/StyledNoteTemplate.js";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Header from "../Layouts/Header.js";
import Backlinks from "../Links/Backlinks.js";
import Dates from "../MISC/DatesFormat.js";
import GrowthStage from "../MISC/GrowthStage.js";
import TableOfContents from "../MISC/TableOfContents.js";
import Topics from "../MISC/Topics.js";
import { TwitterReply } from "../MISC/TwitterReply.js";



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
								<div className = "above-title" >
										<Link href = "/Notes" >
												<BackHoverLink href = "/Notes" >Notes</BackHoverLink >
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

