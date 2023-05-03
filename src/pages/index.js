import Head from 'next/head';
import React from "react";
import Headshot from "../components/Headshot/Headshot.js";
import NotableFeature from "../components/Notable/NotableFeature.js";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import { ProjectsFeature } from "../components/Projects/ProjectsFeature";
import { CapabilitiesFeature } from "../components/Capabilities/CapabilitiesFeature";
import TimelineFeature from "../components/TimeLine/TimelineFeature.js";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents/StyledComponents.js";




const Home = () => {
  return (
    <Layout >
      <Head >
        <title >Michael Metz | Portfolio</title >
      </Head >
      <Section grid >
        <Headshot />
      </Section >
      <BgAnimation />
      <br />
      <br />
      <br />
      <ProjectsFeature />
      <br />
      <br />
      <br />
      <BgAnimation />
      <CapabilitiesFeature />
      <br />
      <br />
      <br />
      <BgAnimation />
      <TimelineFeature />
      {/* <NotableFeature /> */}
    </Layout >
  );
};

export default Home;
