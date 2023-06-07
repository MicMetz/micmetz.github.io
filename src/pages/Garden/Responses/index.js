import ResponseCard from "@/components/Cards/ResponseCard.js";
import Header from "@/components/Layouts/Header.js";
import { Layout } from "@/components/Layouts/Layout.js";
import TitleWithCount from "@/components/MISC/TitleWithCount.js";
import { ResponsesGrid } from "@/styles/StyledGridComponents.js";
import { Title2 } from "@/styles/StyledTypography.js";
import { RESPONSES_PATH, responsesFilePaths } from "@/tools/mdxUtils.js";
import fs from "fs";
import matter from "gray-matter";
import path from "path";



export default function ResponsesPage( { responses } ) {
		return (
				<>
						<Header title = "Responses from Michael Metzger" />
						<Layout >
								<header style = {{ marginBottom: "var(--space-xl)" }} >
										<TitleWithCount posts = {responses} >Reponse Catalog</TitleWithCount >
										<Title2 >
												A catalogue of responses to subjects and opinionated questions.
										</Title2 >
								</header >
								<ResponsesGrid >
										{responses.map( ( pattern ) => (
												<ResponseCard
														id = {pattern.slug}
														slug = {pattern.slug}
														title = {pattern.data.title}
														growthStage = {pattern.data.growthStage}
														date = {pattern.data.updated}
												/>
										) )}
								</ResponsesGrid >
						</Layout >
				</>
		);
}



// Fetches the data for the page.

export function getStaticProps() {
		// Get all note posts
		let responses = responsesFilePaths.map( ( filePath ) => {
				const source = fs.readFileSync( path.join( RESPONSES_PATH, filePath ) );
				const { content, data } = matter( source );
				const slug = filePath.replace( /\.mdx$/, "" );

				return {
						content,
						data,
						slug,
						filePath,
				};
		} );

		return { props: { responses } };
}
