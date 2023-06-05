import Header from "@/components/Header.js";
import { LaborFiltersAndHits } from "@/components/Search/LaborFH/LaborsFiltersAndHits.js";
import TitleWithCount from "@/components/TitleWithCount.js";
import { Title2 } from "@/components/Typography.js";
import { Layout } from "@/layout/Layout.js";
import { LABOR_PATH, laborFilePaths, laborNoteFilePaths, LABORNOTES_PATH } from "@/tools/mdxUtils.js";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from 'react';



export default function LaborPage() {

		return (
				<>
						<Header title = "The Labor of Michael Metzger" />
						<Layout >
								<header style = {{ marginBottom: "var(--space-xl)" }} >
										<TitleWithCount posts = {allPosts} >My Labor</TitleWithCount >
										<Title2 >
												A collection of prior works, and works in progress.
										</Title2 >
								</header >
								<LaborFiltersAndHits allPostData = {allPosts} />
						</Layout >
				</>
		);
}



// Fetches the data for the page.
export function getStaticProps() {
		// Get all essay posts
		let labors = laborFilePaths.map( ( filePath ) => {
				const source = fs.readFileSync( path.join( LABOR_PATH, filePath ) );
				const { content, data } = matter( source );
				const slug = filePath.replace( /\.mdx$/, "" );

				const {
						title,
						description,
						growthStage,
						startDate,
						topics,
						type,
						cover,
						updated,
				} = data;

				return {
						content,
						title,
						cover,
						description,
						growthStage,
						startDate,
						topics,
						type,
						updated,
						slug,
						filePath,
				};

		} );

		// Sort essays by date
		const sortedLabor = labors.sort( ( a, b ) => {
				return new Date( b.updated ) - new Date( a.updated );
		} );


		labors = sortedLabor;


		// Get all note posts
		let laborsNotes = laborNoteFilePaths.map( ( filePath ) => {
				const source = fs.readFileSync( path.join( LABORNOTES_PATH, filePath ) );
				const { content, data } = matter( source );
				const slug = filePath.replace( /\.mdx$/, "" );
				const {
						title,
						description,
						growthStage,
						startDate,
						topics,
						type,
						updated,
				} = data;

				return {
						content,
						title,
						description,
						growthStage,
						startDate,
						topics,
						type,
						updated,
						slug,
						filePath,
				};
		} );

		// Sort notes by date
		const sortedlaborsNotes = laborsNotes.sort( ( a, b ) => {
				return new Date( b.updated ) - new Date( a.updated );
		} );
		laborsNotes = sortedlaborsNotes;

		const allPosts = labors.concat( laborsNotes );

		return { props: { allPosts } };
}

