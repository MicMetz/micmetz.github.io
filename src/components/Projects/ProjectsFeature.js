import React from 'react';

import { Card, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsFeatureStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents/StyledComponents.js';
import { ProjectsData } from '../../constants/constants';




export const ProjectsFeature = () => (
	<Section nopadding id = "projects" >
		<SectionDivider />
		<SectionTitle main >Featured Work</SectionTitle >
		<GridContainer >
			{ProjectsData[ 0 ].recent.map( ( value, idx ) => {
				return (
					<Card key = {idx} >
						<Img src = {value.image} />
						<TitleContent >
							<HeaderThree title >{value.name}</HeaderThree >
							<Hr />
						</TitleContent >
						<CardInfo className = "card-info" >{value.description}</CardInfo >
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
);

