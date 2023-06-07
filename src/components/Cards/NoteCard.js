import GrowthIcon from "@/components/Icons/GrowthIcon.js";
import { NoteMetadataContainer, StyledNoteCard } from "@/styles/StyledCardComponents/NoteStyled.js";
import Link from "next/link";
import { RelativeDate } from "../MISC/DatesFormat.js";



export default function NoteCard( { slug, title, growthStage, date, id } ) {
		return (
				<Link key = {id} as = {`/${slug}`} href = {`/${slug}`} >
						<a >
								<StyledNoteCard >
										{growthStage && <GrowthIcon size = "24" growthStage = {growthStage} />}
										<div >
												<h3 >{title}</h3 >
												<NoteMetadataContainer >
														<span >{growthStage} Note</span >
														<svg width = "6px" height = "14px" >
																<circle r = "3" cx = "3" cy = "3" fill = "var(--color-gray-400)" />
														</svg >
														<RelativeDate postDate = {date} />
												</NoteMetadataContainer >
										</div >
								</StyledNoteCard >
						</a >
				</Link >
		);
}

