import fs from "fs";
import matter from "gray-matter";
import path from "path";
import styled from "styled-components";
import NoteCard from "../components/cards/NoteCard";
import Header from "../components/Layouts/Header";
import { Layout } from "../components/Layouts/Layout.js";
import TitleWithCount from "../components/MISC/TitleWithCount";
import { Title2 } from "../styles/StyledTypography.js";
import { noteFilePaths, NOTES_PATH } from "../tools/mdxUtils";



export default function Notes( { notes } ) {
		return (
				<>
						<Header title = "Notes by Michael Metzger" />
						<Layout >
								<header style = {{ marginBottom: "var(--space-xl)" }} >
										<TitleWithCount posts = {notes} >Notes</TitleWithCount >
										<Title2 >
												Loose, unopinionated notes on things I don’t entirely understand
												yet.
										</Title2 >
								</header >
								<NotesGrid >
										{notes.map( ( note ) => (
												<NoteCard
														id = {note.slug}
														slug = {note.slug}
														title = {note.data.title}
														growthStage = {note.data.growthStage}
														date = {note.data.updated}
												/>
										) )}
								</NotesGrid >
						</Layout >
				</>
		);
}

const NotesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;


// Fetches the data for the page.

export function getStaticProps() {
		// Get all note posts
		let notes = noteFilePaths.map( ( filePath ) => {
				const source = fs.readFileSync( path.join( NOTES_PATH, filePath ) );
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
		const sortedNotes = notes.sort( ( a, b ) => {
				return new Date( b.data.updated ) - new Date( a.data.updated );
		} );
		notes = sortedNotes;

		return { props: { notes } };
}
