import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from 'react';
import Header from "../components/Layouts/Header.js";
import { Layout } from "../components/Layouts/Layout.js";
import TitleWithCount from "../components/MISC/TitleWithCount.js";
import { LaborFiltersAndHits } from "../components/Search/ProjectsFH/ProjectsFiltersAndHits.js";
import { SectionTitle } from "../styles/StyledComponents.js";
import { Subheader, Title2 } from "../styles/StyledTypography.js";
import { projectFilePaths, PROJECTS_PATH } from "../tools/mdxUtils.js";



export default function ProjectsPage(	{ projects } ) {

		return (
				<>
						<Header title = "The Projects of Michael Metzger" />
						<Layout >
        <header
          style = {{
            display       : "flex",
            gap           : "var(--space-xs)",
            flexDirection : "column",
            alignContent  : "center",
            alignItems    : "center",
            justifyContent: "center",
            marginBottom  : "10vh",
          }}
        >
          <SectionTitle main>My Projects</SectionTitle>
										<Subheader >
												A collection of prior works, and works in progress.
										</Subheader >
								</header >
								{/* <LaborFiltersAndHits allPostData = {projects} /> */}
						</Layout >
				</>
		);
}



export function getStaticProps() {
		// Get all essay posts
		let projects = projectFilePaths.map( ( filePath ) => {
				const source = fs.readFileSync( path.join( PROJECTS_PATH, filePath ) );
				const { content, data } = matter( source );
				const slug = filePath.replace( /\.mdx$/, "" );

				return {
						content,
						data,
						slug,
						filePath,
				};
		} );

		// Sort notes by date
		const sortedProjects = projects.sort( ( a, b ) => {
				return new Date( b.data.updated ) - new Date( a.data.updated );
		} );
		projects = sortedProjects;

		return { props: { projects } };
}
