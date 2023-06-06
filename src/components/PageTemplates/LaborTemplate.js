import { LaborStyledHeaderSection, LaborStyledMain, LaborStyledMetadata, LaborStyledTitleContainer } from "@/styles/StyledPageTemplates/StyledLaborTemplate.js";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { Title1 } from "../../styles/StyledTypography.js";
import Header from "../Header.js";
import EvergreenIcon from "../icons/EvergreenIcon.js";
import BackHoverLink from "../links/BackHoverLink.js";
import BackToTop from "../mdx/BackToTop.js";
import ProseWrapper from "../mdx/ProseWrapper.js";
import { TwitterReply } from "../TwitterReply.js";



export default function LaborTemplate( {
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

						<LaborStyledHeaderSection >
								<div className = "above-title" >
										<Link href = "/Labor" >
												<BackHoverLink href = "/Labor" >Projects</BackHoverLink >
										</Link >
								</div >
								<LaborStyledTitleContainer >
										<Title1 >{frontMatter.title}</Title1 >
								</LaborStyledTitleContainer >
								<LaborStyledMetadata className = "metadata" >
										{frontMatter.topics && (
												<span style = {{ textTransform: "capitalize" }} >
														{frontMatter.topics}
												</span >
										)}
										<EvergreenIcon width = "14" height = "14" />
										{frontMatter.updated && (
												<span >{formattedDate( frontMatter.updated )}</span >
										)}
								</LaborStyledMetadata >
						</LaborStyledHeaderSection >
						<LaborStyledMain >
								<BackToTop />
								<ProseWrapper >
										<MDXRemote {...source} components = {components} />
								</ProseWrapper >
						</LaborStyledMain >
						<TwitterReply
								url = {`https://micmetz.github.io/${slug}/`}
								title = {frontMatter.title}
						/>
				</>
		);
}
