import UnderlineHoverLink from "../Links/UnderlineHoverLink.js";
import { SmallTitle2 } from "../../styles/StyledTypography.js";
import React from 'react'
import styled from "styled-components";

import { SectionText, SectionTitle } from '../../styles/StyledComponents.js'



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



const LeftSection = styled.div`
  max-width: calc(100% - 100px);
  height: fit-content;


  @media ${( props ) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${( props ) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
