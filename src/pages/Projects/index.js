import Header from "../../components/Layouts/Header.js";
import { Layout } from "../../components/Layouts/Layout.js";
import TitleWithCount from "../../components/MISC/TitleWithCount.js";
import { LaborFiltersAndHits } from "../../components/Search/ProjectsFH/ProjectsFiltersAndHits.js";
import { Title2 } from "../../styles/StyledTypography.js";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from 'react';
import { projectFilePaths, PROJECTS_PATH } from "../../tools/mdxUtils.js";



export default function ProjectsPage() {

		return (
				<>
						<Header title = "The Projects of Michael Metzger" />
						<Layout >
								<header style = {{ marginBottom: "var(--space-xl)" }} >
										<TitleWithCount posts = {allPosts} >My Projects</TitleWithCount >
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
		let projects = projectFilePaths.map( ( filePath ) => {
				const source = fs.readFileSync( path.join( PROJECTS_PATH, filePath ) );
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
		const sortedprojects = projects.sort( ( a, b ) => {
				return new Date( b.updated ) - new Date( a.updated );
		} );
		projects = sortedprojects;

		const allPosts = projects
		return { props: { allPosts } };
}

