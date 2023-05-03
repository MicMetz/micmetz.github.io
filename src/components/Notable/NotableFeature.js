import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents/StyledComponents.js';
import { Box, Boxes, BoxNum, BoxText } from './NotableFeatureStyles.js';



const data = [
		{ number: 20, text: 'Open Source Projects' },
		{ number: 1000, text: 'Students', },
		{ number: 1900, text: 'Github Followers', },
		{ number: 5000, text: 'Github Stars', }
];

const NotableFeature = () => (
		<Section >
				<SectionTitle > Notable Achievements </SectionTitle >
				<Boxes >

				</Boxes >
				<SectionDivider />
		</Section >
);

export default NotableFeature;
