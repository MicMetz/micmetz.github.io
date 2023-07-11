import { connectInfiniteHits } from 'react-instantsearch-dom';
import AtlasCard               from '../../Cards/AtlasCard.js';
import EssayCard               from '../../Cards/EssayCard.js';
import NoteCard                from '../../Cards/NoteCard.js';
import MasonryGrid             from '../../Grids/MasonryGrid.js';




function ProjectHits( { hits, allPostData } ) {
  const hitLength    = hits?.length;
  const sortedPosts  = allPostData.sort( ( a, b ) => {
    return new Date( b.updated ) - new Date( a.updated );
  } );
  const filteredHits = hitLength > 0 ? hits : sortedPosts;


  return (
    <MasonryGrid >
      {filteredHits.map( ( post, i ) => {
        if ( post.type === 'software' ) {
          return (
            <EssayCard
              key = {i}
              id = {post.slug}
              slug = {post.slug}
              cover = {post.cover ?? null}
              title = {post.title}
              growthStage = {post.growthStage}
              date = {post.updated}
            />
          );
        } else if ( post.type === 'hardware' ) {
          return (
            <NoteCard
              key = {i}
              id = {post.slug}
              slug = {post.slug}
              title = {post.title}
              growthStage = {post.growthStage}
              date = {post.updated}
            />
          );
        } else if ( post.type === 'atlas' ) {
          return (
            <AtlasCard
              key = {i}
              id = {post.slug}
              slug = {post.slug}
              title = {post.title}
              growthStage = {post.growthStage}
              date = {post.updated}
            />
          );
        }
      } )}
    </MasonryGrid >
  );
}


export default connectInfiniteHits( ProjectHits );
