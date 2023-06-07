import NoteCard from "@components/Cards/NoteCard.js";
import Header from "@components/Layouts/Header.js";
import MasonryGrid from "@components/Layouts/MasonryGrid.js";
import TitleWithCount from "@components/MISC/TitleWithCount.js";
import React from 'react';
import { Layout } from "@components/Layouts/Layout.js";



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
