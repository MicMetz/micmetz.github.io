// import {noteFilePaths,  NOTES_PATH } from "..//tools/mdxUtils.js";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import React from 'react';
import styled from "styled-components";
import NoteCard from "../components/Cards/NoteCard.js";
import Header from "../components/Layouts/Header.js";
import { Layout } from "../components/Layouts/Layout.js";
import TitleWithCount from "../components/MISC/TitleWithCount.js";
import { noteFilePaths, NOTES_PATH } from "../tools/mdxUtils.js";



export default function NotesPage( { notes } ) {
		return (
				<>
						<Header title = "Notes of Michael Metzger" />
						<Layout >
								<header style = {{ marginBottom: "var(--space-xl)" }} >
										<TitleWithCount posts = {notes} >Notes</TitleWithCount >
								</header >
								<NotesGrid >
										{notes.map( ( value, i ) => (
												<NoteCard
														key = {i}
														id = {value.slug}
														slug = {value.slug}
														cover = {value.data.cover}
														title = {value.data.title}
														growthStage = {value.data.growthStage}
														date = {value.data.updated}
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

