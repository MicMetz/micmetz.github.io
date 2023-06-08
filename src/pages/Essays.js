import { essayFilePaths, ESSAYS_PATH } from "../tools/mdxUtils.js";
import EssayCard from "../components/Cards/EssayCard.js";
import Header from "../components/Layouts/Header.js";
import { Layout } from "../components/Layouts/Layout.js";
import MasonryGrid from "../components/Layouts/MasonryGrid.js";
import TitleWithCount from "../components/MISC/TitleWithCount.js";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from 'react';



export default function EssaysPage({ sortedEssays: essays} ) {
		return (
				<>
						<Header title = "Essays of Michael Metzger" />
						<Layout >
								<header style = {{ marginBottom: "var(--space-xl)" }} >
										<TitleWithCount posts = {essays} >Essays</TitleWithCount >
								</header >
								<MasonryGrid >
										{essays.map( ( essay, i ) => (
												<EssayCard
														key = {i}
														id = {essay.slug}
														slug = {essay.slug}
														cover = {essay.data.cover}
														title = {essay.data.title}
														growthStage = {essay.data.growthStage}
														date = {essay.data.updated}
												/>
										) )}
								</MasonryGrid >
						</Layout >
				</>
		);
}



export function getStaticProps() {

		// Get all essay posts
		let essays = essayFilePaths.map( ( filePath ) => {
				const source = fs.readFileSync( path.join( ESSAYS_PATH, filePath ) );
				const { content, data } = matter( source );
				const slug = filePath.replace( /\.mdx$/, "" );

				return {
						content,
						data,
						slug,
						filePath,
				};
		} );

}

