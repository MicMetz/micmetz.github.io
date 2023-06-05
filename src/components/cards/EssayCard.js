import { ImageWrapper, MetadataContainer, StyledEssayCard } from "@/components/cards/CardStyled/EssayStyled.js";
import Image from "next/image";
import Link from "next/link";
import { RelativeDate } from "../DatesFormat.js";
import GrowthIcon from "../icons/GrowthIcon";



export default function EssayCard( { slug, cover, title, growthStage, date, variants, id } ) {
		return (
				<Link key = {id} as = {`/${slug}`} href = {`/${slug}`} >
						<a >
								<StyledEssayCard variants = {variants} >
										{cover && (
												<ImageWrapper >
														<Image src = {cover} alt = {title} width = {400} height = {400} />
												</ImageWrapper >
										)}
										<h3 >{title}</h3 >
										<MetadataContainer >
												{growthStage && <span >{growthStage} Essay</span >}
												{growthStage && <GrowthIcon size = "15" growthStage = {growthStage} />}
												<span >
														<RelativeDate postDate = {date} />
												</span >
										</MetadataContainer >
								</StyledEssayCard >
						</a >
				</Link >
		);
}

