import EssayCard from "@components/Cards/EssayCard.js";
import Header from "@components/Layouts/Header.js";
import MasonryGrid from "@components/Layouts/MasonryGrid.js";
import TitleWithCount from "@components/MISC/TitleWithCount.js";
import React from 'react';
import { Layout } from "@components/Layouts/Layout.js";



export default function EssaysPage( { essays } ) {
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
