import { BuddingIcon, EvergreenIcon, SeedlingIcon } from "./AllIcons";



export default function GrowthIcon( { growthStage, size } ) {
		if ( growthStage === "Seedling Idea" ) {
				return (
						<SeedlingIcon
								width = {size ? size : "22"}
								height = {size ? size : "22"}
						/>
				);
		} else if ( growthStage === "Budding Concept" ) {
				return (
						<BuddingIcon
								width = {size ? size : "22"}
								height = {size ? size : "22"}
						/>
				);
		} else if ( growthStage === "Evergreen Theory" ) {
				return (
						<EvergreenIcon
								width = {size ? size : "22"}
								height = {size ? size : "22"}
						/>
				);
		}
}
