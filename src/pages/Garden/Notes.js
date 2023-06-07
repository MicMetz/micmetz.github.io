// import {noteFilePaths,  NOTES_PATH } from "@/tools/mdxUtils.js";
import { noteFilePaths, NOTES_PATH } from "@/tools/mdxUtils.js";
import NoteCard from "@components/Cards/NoteCard.js";
import Header from "@components/Layouts/Header.js";
import { Layout } from "@components/Layouts/Layout.js";
import MasonryGrid from "@components/Layouts/MasonryGrid.js";
import TitleWithCount from "@components/MISC/TitleWithCount.js";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from 'react';



export default function NotesPage( { notes } ) {
		return (
				<>
						<Header title = "Notes of Michael Metzger" />
						<Layout >
								<header style = {{ marginBottom: "var(--space-xl)" }} >
										<TitleWithCount posts = {notes} >Notes</TitleWithCount >
								</header >
								<MasonryGrid >
										{notes.map( ( essay, i ) => (
												<NoteCard
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
