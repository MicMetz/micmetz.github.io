import { ConceptIcon, HypothesisIcon, TheoryIcon } from "./AllIcons";
import { Phyllotaxis }                             from "./Phyllotaxis.js";




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
      <Phyllotaxis
        width = {size ? size : "22"}
        height = {size ? size : "22"}
        radius = {size ? size : "1"}
      />

    );
  }
}
