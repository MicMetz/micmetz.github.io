import { Popover } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { DropdownLink, HoverLink } from "../../styles/LinkStyledComponents.js";
import UnderlineHoverLink from "../Links/UnderlineHoverLink";
import { Dropdown, MainNav, StyledChevronDownIcon, StyledPopoverButton } from "../Navigation/NavigationStyles.js";



function GardenPopoverLinks() {
  return (
    <Popover style = {{ position: "relative" }}>
      <Link href = "/Garden">
        <HoverLink >
          <span >Garden</span >
        </HoverLink >
      </Link >
      <StyledPopoverButton >
        <StyledChevronDownIcon width = "24" height = "24"/>
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
          < Link href = "/Essays">
            <DropdownLink >Essays</DropdownLink >
          </Link >
          <Link href = "/Notes">
            <DropdownLink >Notes</DropdownLink >
          </Link >
        </Dropdown >
      </Popover.Panel >
    </Popover >
  );
}


function LibraryPopoverLinks() {
  return (
    <Popover style = {{ position: "relative" }}>
      <Link href = "/Library">
        <HoverLink >
          <span >Library</span >
        </HoverLink >
      </Link >
      <StyledPopoverButton >
        <StyledChevronDownIcon width = "24" height = "24"/>
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
          <Link href = "/Library/Books">
            <DropdownLink >Books</DropdownLink >
          </Link >
          <Link href = "/Library/Articles">
            <DropdownLink >Articles</DropdownLink >
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
      <AnimatePresence >
        <LibraryPopoverLinks />
      </AnimatePresence >
      <div className = "outside-dropdown">
        <UnderlineHoverLink href = "/">Home</UnderlineHoverLink >
        <UnderlineHoverLink href = "/Gallery">Gallery</UnderlineHoverLink >
        <UnderlineHoverLink href = "/Projects">Projects</UnderlineHoverLink >
        <UnderlineHoverLink href = "/About">About</UnderlineHoverLink >
        <UnderlineHoverLink href = "/Contact">Contact</UnderlineHoverLink >
      </div >
    </MainNav >
  );
}


