import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents/StyledComponents.js';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './CapabilitiesFeatureStyles';




export const CapabilitiesFeature = () => (
	<Section id = "tech" >
		<SectionDivider divider />
		<SectionTitle >Capabilities</SectionTitle >
		<SectionText >
			For about 2 years now, I've been developing a steady addiction to 3D graphics, and game
			development.
		</SectionText >
		<List >
			<ListItem >
				<picture >
					<DiReact size = "3rem" />
				</picture >
				<ListContainer >
					<ListTitle >Web Development</ListTitle >
					<ListParagraph >


					</ListParagraph >
				</ListContainer >
			</ListItem >
			<ListItem >
				<picture >
					<DiFirebase size = "3rem" />
				</picture >
				<ListContainer >
					<ListTitle >Database Management</ListTitle >
					<ListParagraph >

					</ListParagraph >
				</ListContainer >
			</ListItem >
			<ListItem >
				<picture >
					<DiZend size = "3rem" />
				</picture >
				<ListContainer >
					<ListTitle >Computer Graphics</ListTitle >
					<ListParagraph >

					</ListParagraph >
				</ListContainer >
			</ListItem >
		</List >
		<SectionDivider colorAlt />
	</Section >
);

