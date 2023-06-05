import IdeaCard from "@/components/cards/IdeaCard.js";
import Header from "@/components/Header.js";
import TitleWithCount from "@/components/TitleWithCount.js";
import { Title2 } from "@/components/Typography.js";
import { Layout } from "@/layout/Layout.js";
import { patternFilePaths, PATTERNS_PATH } from "@/tools/mdxUtils.js";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import styled from "styled-components";



export default function Ideas( { patterns } ) {
		return (
				<>
						<Header title = "Patterns by Maggie Appleton" />
						<Layout >
								<header style = {{ marginBottom: "var(--space-xl)" }} >
										<TitleWithCount posts = {patterns} >Pattern Catalogue</TitleWithCount >
										<Title2 >
												A catalogue of design patterns gathered from my own observations and
												research.
										</Title2 >
								</header >
								<PatternGrid >
										{patterns.map( ( pattern ) => (
												<IdeaCard
														id = {pattern.slug}
														slug = {pattern.slug}
														title = {pattern.data.title}
														growthStage = {pattern.data.growthStage}
														date = {pattern.data.updated}
												/>
										) )}
								</PatternGrid >
						</Layout >
				</>
		);
}

const PatternGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;


// Fetches the data for the page.

export function getStaticProps() {
		// Get all note posts
		let patterns = patternFilePaths.map( ( filePath ) => {
				const source = fs.readFileSync( path.join( PATTERNS_PATH, filePath ) );
				const { content, data } = matter( source );
				const slug = filePath.replace( /\.mdx$/, "" );

				return {
						content,
						data,
						slug,
						filePath,
				};
		} );

		return { props: { patterns } };
}
