import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import EvergreenIcon from "../../components/Icons/EvergreenIcon";
import { ExternalHoverLink } from "../../components/Links/ExternalHoverLink.js";
import { HoverLink } from "../../styles/LinkStyledComponents.js";
import { ProjectImageWrapper, ProjectMetadataContainer, StyledProjectCard } from "../../styles/StyledCardComponents/ProjectStyled.js";



export default function ProjectCard( { slug, cover, title, date, topics } ) {
  function formattedDate( date ) {
    return new Date( date ).toLocaleDateString( "en", {
      year : "numeric",
      month: "long",
    } );
  }


  return (
    <HoverLink
      style = {{ cursor: "pointer" }}
      href = {`/${slug}`}
      target = "_blank"
      rel = "noopener noreferrer"
    >

        <StyledProjectCard >
          <ExternalHoverLink >
            View further details{" "}
            <ArrowTopRightOnSquareIcon
              width = "18"
              height = "18"
              style = {{ position: "relative", top: "3px" }}
            />
          </ExternalHoverLink >

          <ProjectImageWrapper >
            <Image
              src = {cover}
              alt = {title}
              objectFit = "cover"
              width = {500}
              height = {300}
              // width = {300}
              // height = {225}
            />
            {/* <img */}
            {/*   src= {cover} */}
            {/*   alt = {title} */}
            {/*   style = {{ width: "100%", height: "100%", objectFit: "cover" }} */}
            {/* /> */}
          </ProjectImageWrapper >
          <ProjectMetadataContainer >
            <h3 >{title}</h3 >
            <div className = "metadata">
              <span >{formattedDate( date )}</span >
              <EvergreenIcon width = "14" height = "14"/>
              <span >{topics}</span >
            </div >
          </ProjectMetadataContainer >
        </StyledProjectCard >

    </HoverLink >

  );
}
