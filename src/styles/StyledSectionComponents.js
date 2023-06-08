import { breakpoints } from "../constants/breakpoints.js";
import { motion } from "framer-motion";
import styled from "styled-components";



export const GardenSection = styled( motion.section )`
  margin: var(--space-xl) 0 var(--space-s);
  height: fit-content;
  width: 100%;
  display: grid;

  align-items: stretch;
  //align-content: center;
  justify-content: center;
		
  grid-gap: var(--space-xl);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-row-gap: 5%;
  grid-template-areas:
    "essays essays notes"
    "books books books";
  @media ${breakpoints.mediaMD} {
    grid-gap: var(--space-m);
  }
  @media ${breakpoints.mediaSM} {
    grid-template-columns: 1fr;
    grid-gap: var(--space-l);
    grid-template-rows: auto;
    grid-template-areas: "essays" "notes" "books";
  }


  section {
    //margin: 10vh 0;
  }

  section:nth-child(1) {

  }
`;



export const ProjectsSection = styled( motion.section )`
  margin: 0 0 5vh 0;
  height: fit-content;
  width: 100%;
  display: grid;

  align-items: stretch;
  //align-content: center;
  justify-content: center;

  grid-gap: var(--space-lg);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-row-gap: 5%;

  grid-template-areas:
    "technology technology atlas";
  //"presentations presentations presentations"
  //"hardware hardware hardware";

  @media ${breakpoints.mediaMD} {
    grid-gap: var(--space-m);
  }
  @media ${breakpoints.mediaSM} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
						"technology technology"
						"atlas atlas";

  }
  @media ${breakpoints.mediaLG} {
    //grid-template-columns: 1fr 1fr 1fr;
    //grid-template-areas:
    //					"software software software"
    //					"hardware hardware hardware"
    //					"presentations presentations presentations";

  }


  section {
    //margin: 10vh auto;
  }

  section:nth-child(1) {

  }
`;



