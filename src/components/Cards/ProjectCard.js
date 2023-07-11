import Image                                                                from 'next/image';
import Link                                                                 from 'next/link';
import { ProjectImageWrapper, ProjectMetadataContainer, StyledProjectCard } from '../../styles/StyledCardComponents/ProjectStyled.js';
import GrowthIcon                                                           from '../Icons/GrowthIcon.js';
import TheoryIcon                                                           from '../Icons/TheoryIcon.js';
import { RelativeDate }                                                     from '../MISC/DatesFormat.js';




export default function ProjectCard( { slug, cover, title, growthStage, date, data, id } ) {
  return (
    <Link key = {id} as = {`/${slug}`} href = {`/${slug}`} >
      <a >
        <StyledProjectCard >
          <ProjectImageWrapper >
            <Image src = {cover} alt = {title} width = {400} height = {400} />
          </ProjectImageWrapper >

          <ProjectMetadataContainer >
            <h3 >{title}</h3 >

            {growthStage && <span >{growthStage} Essay</span >}
            {growthStage && <GrowthIcon size = '15' growthStage = {growthStage} />}
            <span >
              <TheoryIcon width = '14' height = '14' />
              <RelativeDate postDate = {date} />
            </span >
          </ProjectMetadataContainer >
        </StyledProjectCard >
      </a >
    </Link >
  );
}

