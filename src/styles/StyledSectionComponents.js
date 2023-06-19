import { breakpoints } from "../constants/breakpoints.js";
import { motion } from "framer-motion";
import styled from "styled-components";



export const GardenSection = styled( motion.section )`
  margin: var(--space-xl) 0 var(--space-s);
  height: fit-content;
  width: 100%;
  display: grid;

  align-items: stretch;
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
  margin: var(--space-xl) 0 var(--space-s);
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

  @media ${breakpoints.mediaMD} {
    grid-gap: var(--space-m);
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "technology atlas";
  }
  @media ${breakpoints.mediaSM} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:	"technology atlas";

  }
  @media ${breakpoints.mediaLG} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
						"technology technology atlas";
  }


  section {
    //margin: 10vh auto;
  }

  section:nth-child(1) {

  }
`;



