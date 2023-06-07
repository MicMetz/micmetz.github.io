import Header from "@/components/Layouts/Header.js";
import { Layout } from "@/components/Layouts/Layout.js";
import TitleWithCount from "@/components/MISC/TitleWithCount.js";
import { GardenFiltersAndHits } from "@/components/Search/GardenFH/GardenFiltersAndHits.js";
import { Title2 } from "@/styles/StyledTypography.js";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { SectionText } from '../../styles/StyledComponents.js'
import { essayFilePaths, ESSAYS_PATH, noteFilePaths, NOTES_PATH } from "../../tools/mdxUtils";



export default function GardenPage( { allPosts } ) {
		return (
				<>
						<Header title = "The Garden of Michael Metzger" />
						<Layout >
								<header style = {{ marginBottom: "var(--space-xl)" }} >
										<TitleWithCount posts = {allPosts} >The Garden</TitleWithCount >
										<Title2 >
												<SectionText >
														Welcome to my digital garden. This is where I cultivate my ideas and collect the things that help me grow.
												</SectionText >
										</Title2 >
								</header >
								<GardenFiltersAndHits allPostData = {allPosts} />
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
				const { title, description, growthStage, startDate, topics, type, cover, updated, } = data;

				return {
						content, title, cover, description, growthStage, startDate, topics, type, updated, slug, filePath,
				};
		} );

		// Sort essays by date
		const sortedEssays = essays.sort( ( a, b ) => {
				return new Date( b.updated ) - new Date( a.updated );
		} );

		essays = sortedEssays;

		// Get all note posts
		let notes = noteFilePaths.map( ( filePath ) => {
				const source = fs.readFileSync( path.join( NOTES_PATH, filePath ) );
				const { content, data } = matter( source );
				const slug = filePath.replace( /\.mdx$/, "" );
				const { title, description, growthStage, startDate, topics, type, updated, } = data;

				return {
						content, title, description, growthStage, startDate, topics, type, updated, slug, filePath,
				};
		} );

		// Sort notes by date
		const sortedNotes = notes.sort( ( a, b ) => {
				return new Date( b.updated ) - new Date( a.updated );
		} );
		notes = sortedNotes;

		const allPosts = essays.concat( notes );

		return { props: { allPosts } };
}
