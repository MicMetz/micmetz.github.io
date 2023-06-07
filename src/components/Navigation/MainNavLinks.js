/**
	* @Author: Maggie Appleton <https://github.com/MaggieAppleton>
	* @Author: Michael Metzger
	*/


import { DropdownLink, HoverLink } from "@/components/Links/LinkStyledComponents.js";
import UnderlineHoverLink from "@/components/Links/UnderlineHoverLink";
import { Dropdown, MainNav, StyledChevronDownIcon, StyledPopoverButton } from "@/components/Navigation/NavigationStyles.js";
import { Popover } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";



function GardenPopoverLinks() {
		return (
				<Popover style = {{ position: "relative" }} >
						<Link href = "/Garden" >
								<HoverLink >
										<span >The Garden</span >
								</HoverLink >
						</Link >
						<StyledPopoverButton >
								<StyledChevronDownIcon width = "24" height = "24" />
						</StyledPopoverButton >

						<Popover.Panel >
								<Dropdown
										initial = {{
												opacity        : 0,
												rotateX        : "90deg",
												transformOrigin: "top",
										}}
										animate = {{ opacity: 1, rotateX: "0deg" }}
										exit = {{ opacity: 0, rotateX: "90deg" }}
										transition = {{ duration: 0.6, ease: "easeInOut" }}
										style = {{ position: "absolute", zIndex: "10" }}
										key = "dropdown"
								>
										< Link href = "/src/Essays.js" >
												<DropdownLink >Essays</DropdownLink >
										</Link >
										<Link href = "/Garden/Notes" >
												<DropdownLink >Notes</DropdownLink >
										</Link >
										<Link href = "/Garden/Responses" >
												<DropdownLink >Responses</DropdownLink >
										</Link >
								</Dropdown >
						</Popover.Panel >
				</Popover >
		);
}


export default function MainNavLinks() {
		return (
				<MainNav >
						<AnimatePresence >
								<GardenPopoverLinks />
						</AnimatePresence >
						{/* <OutsideDropdown > */}
						<div className = "outside-dropdown" >
								<UnderlineHoverLink href = "/library" >Library</UnderlineHoverLink >
								<UnderlineHoverLink href = "/Projects" >Projects</UnderlineHoverLink >
								<UnderlineHoverLink href = "/About" >About</UnderlineHoverLink >
						</div >
						{/* </OutsideDropdown > */}
				</MainNav >
		);
}


