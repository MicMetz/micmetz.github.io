import topics          from '../../../data/topics.yaml';
import ClickableObject from '../../components/MDX/ClickableObject.js';
import TopicHeader     from '../../components/MISC/TopicHeader.js';
import MenuCard    from '../../components/Cards/MenuCard.js';
import ObjectSection from '../../components/Grids/ObjectSection.js';
import Layout        from '../../components/Layouts/Layout.js';
// import { lessonMeta } from '../../tools/pagesMeta';




export default function Topic( { topic } ) {
  return (
    <Layout >
      <TopicHeader topic = {topic} />
      <ObjectSection width = 'narrow' >
        <div style = {{ textAlign: 'left' }} >
          <ClickableObject
            link = '/#lessons'
            text = 'Lessons'
            icon = 'fas fa-arrow-left'
            style = {{ margin: 0 }}
          />
        </div >

        <div style = {{ margin: '20px -20px' }} >
          {topic.lessons.map( ( slug ) => (
            <MenuCard key = {slug} id = {slug} />
          ) )}
        </div >
      </ObjectSection >
    </Layout >
  );
}


export async function getStaticPaths() {
  const paths = topics.map( ( topic ) => `/topics/${topic.slug}` );
  return { paths, fallback: false };
}


export async function getStaticProps( { params } ) {
  const topic = topics.find( ( topic ) => topic.slug === params.slug );

  return {
    props: {
      topic
      // lessons: lessonMeta
    }
  };
}
