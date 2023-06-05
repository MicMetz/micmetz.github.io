import { breakpoints } from "@/constants/breakpoints.js";
import { motion } from "framer-motion";
import styled from "styled-components";



export const ArchiveSection = styled( motion.section )`
  margin: 0 0 10vh 0;
  display: grid;
  grid-gap: var(--space-xl);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-row-gap: 5%;
  grid-template-areas:
    "essays essays essays notes"
    "books books books ideas";
  @media ${breakpoints.mediaMD} {
    grid-gap: var(--space-m);
  }
  @media ${breakpoints.mediaSM} {
    grid-template-columns: 1fr;
    grid-gap: var(--space-l);
    grid-template-rows: auto;
    grid-template-areas: "essays" "notes" "atlas" "books";
  }


  section {
    //margin: 10vh 0;
  }

  section:nth-child(1) {

  }
`;



export const LaborSection = styled( motion.section )`
  margin: 0 0 10vh 0;
  display: grid;
  grid-gap: var(--space-xl);

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-row-gap: 5%;

  grid-template-areas:
    "technology technology technology atlas";
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



