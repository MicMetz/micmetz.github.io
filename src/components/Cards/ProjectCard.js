import Image                                                                from "next/image";
import Link                                                                 from "next/link";
import EvergreenIcon                                                        from "../Icons/TheoryIcon.js";
import { ProjectImageWrapper, ProjectMetadataContainer, StyledProjectCard } from "../../styles/StyledCardComponents/ProjectStyled.js";




export default function ProjectCard( { slug, cover, title, date, topics } ) {
  function formattedDate( date ) {
    return new Date( date ).toLocaleDateString( "en", {
      year : "numeric",
      month: "long",
    } );
  }


  return (
    <Link href = {`/${slug}`} >
      <a >
        <StyledProjectCard >
          <ProjectImageWrapper >
            <Image
              src = {cover}
              alt = {title}
              width = {300}
              height = {225}
            />
          </ProjectImageWrapper >
          <ProjectMetadataContainer >
            <h3 >{title}</h3 >
            <div className = "metadata" >
              <span >{formattedDate( date )}</span >
              <EvergreenIcon width = "14" height = "14" />
              <span >{topics}</span >
            </div >
          </ProjectMetadataContainer >
        </StyledProjectCard >
      </a >
    </Link >
  );
}

