import React from 'react';
import { ProjectsData } from "../../../posts/data/ProjectsData.js";
import { Section, SectionTitle } from '../../styles/StyledComponents.js';

import { Card, ExternalLinks, GridContainer, HeaderThree, Hr, Img, Intro, Tag, TagList, TitleContent, UtilityList } from './ProjectsFeatureStyles';



export const ProjectsFeature = () => (
		<Section nopadding id = "projects" >
				{/* <SectionDivider /> */}
				<SectionTitle main >Featured Work</SectionTitle >
				<GridContainer >
						{ProjectsData.map( ( value, idx ) => {
								return (
										<Card key = {idx} >
												<Img src = {value.image} style = {{ minHeight: '35%', maxHeight: '35%', position: 'relative', top: '0' }} />
												<TitleContent >
														<HeaderThree title = "true" >{value.name}</HeaderThree >
														<Hr />
												</TitleContent >
												<Intro >{value.description}</Intro >
												<br />
												<br />
												<br />
												<div >
														<TitleContent >Features</TitleContent >
														<TagList >
																{value.tags?.map( ( t, i ) => {
																		return <Tag key = {i} >{t}</Tag >;
																} )}
														</TagList >
												</div >
												<div >
														<TagList style = {{ position: 'relative', bottom: '0' }} >
																{value.technologies?.map( ( t, i ) => {
																		return <Tag key = {i} style = {{ position: 'relative', paddingBottom: '0' }} >
																				{t}
																		</Tag >;
																} )}
														</TagList >
												</div >
												<UtilityList style = {{ position: 'relative', bottom: '0' }} >
														<ExternalLinks href = {value.code} >Code</ExternalLinks >
														<ExternalLinks href = {value.demo} >Demo</ExternalLinks >
												</UtilityList >
										</Card >
								);
						} )}
				</GridContainer >
		</Section >
);

