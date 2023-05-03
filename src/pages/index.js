import React from "react";
import Headshot from "../components/Headshot/Headshot.js";
import NotableFeature from "../components/Notable/NotableFeature.js";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import { ProjectsFeature } from "../components/Projects/ProjectsFeature";
import { CapabilitiesFeature } from "../components/Technologies/CapabilitiesFeature";
import TimelineFeature from "../components/TimeLine/TimelineFeature.js";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents/StyledComponents.js";



const Home = () => {
		return (
				<Layout >
						<Section grid >
								<Headshot />
						</Section >
						<br />
						<br />
						<br />
						<ProjectsFeature />
						<br />
						<br />
						<br />
						<CapabilitiesFeature />
						<br />
						<br />
						<br />
						<TimelineFeature />
						{/* <NotableFeature /> */}
				</Layout >
		);
};

export default Home;
