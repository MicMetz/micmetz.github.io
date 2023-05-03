import { Img, Card, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Intro, TitleContent, UtilityList } from "../../components/Projects/ProjectsFeatureStyles.js";
import { Layout } from "../../layout/Layout.js";
import { Section, SectionDivider, SectionTitle, Tag, TagList } from '../../styles/GlobalComponents/StyledComponents.js';
import { ProjectsData } from '../../constants/constants';
import React, { useEffect, useState } from 'react';




export default function ProjectsPage() {

	return (
		<Layout >
			<Section nopadding id = "ProjectsPage" >
				<SectionTitle main >Projects</SectionTitle >
				<GridContainer >
					{ProjectsData[ 0 ].recent.map( ( value, idx ) => {
						return (
							<Card key = {idx} >
								<Img src = {value.image} />
								<TitleContent >
									<HeaderThree title >{value.name}</HeaderThree >
									<Hr />
								</TitleContent >
								<Intro >{value.description}</Intro >

								<CardInfo className = "card-info" ></CardInfo >
								<br />
								<br />
								<br />
								<div >
									<TitleContent >Features</TitleContent >
									<TagList >
										{value.tags.map( ( t, i ) => {
											return <Tag key = {i} >{t}</Tag >;
										} )}
									</TagList >
								</div >
								<div >
									<TagList >
										{value.technologies.map( ( t, i ) => {
											return <Tag key = {i} >{t}</Tag >;
										} )}
									</TagList >
								</div >
								<UtilityList >
									<ExternalLinks href = {value.code} >Code</ExternalLinks >
									<ExternalLinks href = {value.demo} >Demo</ExternalLinks >
								</UtilityList >
							</Card >
						);
					} )}
				</GridContainer >
			</Section >
		</Layout >
	);
}
