import React       from 'react';
import styled      from 'styled-components';
import EssayCard   from '../Cards/EssayCard.js';
import NoteCard    from '../Cards/NoteCard.js';
import ProjectCard from '../Cards/ProjectCard.js';
import MasonryGrid from './MasonryGrid.js';




export default function DynamicPostsGrid( { postsToShow } ) {
  return (
    <MasonryGrid >
      {postsToShow.map(
        ( { slug, title, type, growthStage, cover, updated }, i ) => {
          if ( type === 'essay' ) {
            return (
              <EssayCard
                key = {i}
                slug = {slug}
                cover = {cover}
                title = {title}
                growthStage = {growthStage}
                date = {updated}
              />
            );
          } else if ( type === 'note' ) {
            return (
              <NoteCard
                key = {i}
                slug = {slug}
                title = {title}
                growthStage = {growthStage}
                date = {updated}
              />
            );
          } else if ( type === 'project' ) {
            return (
              <ProjectCard
                key = {i}
                slug = {slug}
                title = {title}
                growthStage = {growthStage}
                date = {updated}
              />
            );
          } 
        }
      )}
    </MasonryGrid >
  );
}




const TopicGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
`;
