import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents/StyledComponents.js';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeadshotStyles.js';




const Headshot = ( props ) => (
	<>
		<Section row nopadding >
			<LeftSection >
				<SectionTitle main center >
					Hi.
					<br />
					My name is <br />
					<span style = {{ color: '#00bfff' }} >Michael Metz</span >.
				</SectionTitle >
				<SectionText >
					I am a perpetual student. As of right now, I'm studying computer science at the University of Colorado at Boulder (CU Boulder).
					Before, and not too long ago, I was studying how groups interact and how human social relationships form as a
					Sociology and Information Science focused student at multiple New York universities over a few years. Next, who knows?
					I'm open to anything, and never satisfied with just sitting idle, I’m always scouring for something.
				</SectionText >

			</LeftSection >
		</Section >
	</>
);

export default Headshot;
