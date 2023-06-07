import EvergreenIcon from "@/components/Icons/EvergreenIcon.js";
import BackHoverLink from "@/components/Links/BackHoverLink.js";
import BackToTop from "@/components/MDX/BackToTop.js";
import ProseWrapper from "@/components/MDX/ProseWrapper.js";
import { LaborStyledHeaderSection, LaborStyledMain, LaborStyledMetadata, LaborStyledTitleContainer } from "@/styles/StyledPageTemplates/StyledLaborTemplate.js";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { Title1 } from "../../styles/StyledTypography.js";
import Header from "../Layouts/Header.js";
import { TwitterReply } from "../MISC/TwitterReply.js";



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
