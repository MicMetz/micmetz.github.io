import { ConceptIcon, HypothesisIcon, TheoryIcon } from "./AllIcons";




export default function GrowthIcon( { growthStage, size } ) {
  if ( growthStage === "Concept" || growthStage === "In Developing" ) {
    return (
      <ConceptIcon
        width = {size ? size : "22"}
        height = {size ? size : "22"}
      />
    );
  } else if ( growthStage === "Hypothesis" ) {
    return (
      <HypothesisIcon
        width = {size ? size : "22"}
        height = {size ? size : "22"}
      />
    );
  } else if ( growthStage === "Theory" ) {
    return (
      <TheoryIcon
        width = {size ? size : "22"}
        height = {size ? size : "22"}
      />
    );
  } else if ( growthStage === "Law" ) {
    return (
      <TheoryIcon
        width = {size ? size : "22"}
        height = {size ? size : "22"}
        color = "var(--color-secondary)"
      />
      /* <LawIcon
       width = {size ? size : "22"}
       height = {size ? size : "22"}
       /> */
    );
  }
}
