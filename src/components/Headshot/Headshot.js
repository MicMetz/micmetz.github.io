import UnderlineHoverLink from "@/components/links/UnderlineHoverLink.js";
import { SmallTitle2 } from "@/components/Typography.js";
import React from 'react'

import { SectionText, SectionTitle } from '../../styles/StyledComponents.js'
import { LeftSection } from './HeadshotStyles.js'



const Headshot = () => (
		<>
				<LeftSection >
						<SectionTitle main center >
								Hi.
								<br />
								My name is
								<br />
								Michael.
						</SectionTitle >
				</LeftSection >

				<SectionText >
						As of right now, I'm studying computer science at the University of Colorado at Boulder (CU Boulder).
						Before, and not too long ago, I was studying Sociology and Information Science focused student at
						multiple New York universities over a few years.
						<br />
						<br />
						<SmallTitle2
								initial = {{ opacity: 0, x: -50 }}
								animate = {{ opacity: 1, x: 0 }}
								transition = {{ delay: 0.5, duration: 1 }}
						>
								For more, check out my {" "}
								<UnderlineHoverLink href = "/About" >
										<i >bio page</i >
								</UnderlineHoverLink >
								{" "}.
						</SmallTitle2 >
				</SectionText >
		</>
)

export default Headshot
