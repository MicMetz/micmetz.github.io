import fs                                    from 'fs';
import matter                                from 'gray-matter';
import path                                  from 'path';
import styled                                from 'styled-components';
import ResourceCard                          from '../../components/Cards/ResourceCard.js';
import Header                                from '../../components/Layouts/Header.js';
import Layout                                from '../../components/Layouts/Layout.js';
import TitleWithCount                        from '../../components/MISC/TitleWithCount.js';
import { Title2 }                            from '../../styles/StyledTypography.js';
import { resourceFilePaths, RESOURCES_PATH } from '../../tools/mdxUtils.js';





export default function Resources( { resources } ) {
  return (
    <Layout >
      <Header title = 'Resources used by Michael Metzger' />
      <header style = {{ marginBottom: 'var(--space-xl)' }} >
        <TitleWithCount posts = {resources} >Resources</TitleWithCount >
        <Title2 >
          A catalogue of resources I use.
        </Title2 >
      </header >
      <ResourceGrid >
        {resources.map( ( resource ) => (
          <ResourceCard
            key = {resource.slug}
            id = {resource.slug}
            slug = {resource.slug}
            title = {resource.title}
            description = {resource.description}
            usages = {resource.usages}
          />
        ) )}
      </ResourceGrid >
    </Layout >
  );
}



const ResourceGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;




export function getStaticProps() {
  let resources = resourceFilePaths.map( ( filePath ) => {
      const source            = fs.readFileSync( path.join( RESOURCES_PATH, filePath ) );
      const { content, data } = matter( source );
      const slug              = filePath.replace( /\.mdx$/, '' );

      return {
        content, data, slug, filePath
      };
    }
  );

  resources.sort( ( a, b ) => {
      if ( a.data.title < b.data.title ) {
        return -1;

      } else if ( a.data.title > b.data.title ) {
        return 1;

      } else {
        return 0;
      }

    }
  );

  return {
    props: {
      resources
    }
  };
}
