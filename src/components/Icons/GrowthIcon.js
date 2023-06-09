import { BuddingIcon, EvergreenIcon, SeedlingIcon } from "./AllIcons";



export default function GrowthIcon( { growthStage, size } ) {
		if ( growthStage === "SeedlingIdea" ) {
				return (
						<SeedlingIcon
								width = {size ? size : "22"}
								height = {size ? size : "22"}
						/>
				);
		} else if ( growthStage === "BuddingConcept" ) {
				return (
						<BuddingIcon
								width = {size ? size : "22"}
								height = {size ? size : "22"}
						/>
				);
		} else if ( growthStage === "EvergreenTheory" ) {
				return (
						<EvergreenIcon
								width = {size ? size : "22"}
								height = {size ? size : "22"}
						/>
				);
		}
}
