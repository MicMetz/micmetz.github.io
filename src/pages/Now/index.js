import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import styled from "styled-components";
import { Layout } from "../../components/Layouts/Layout.js";
import ProseWrapper from "../../components/mdx/ProseWrapper.js";
import { Title1, Title2 } from "../../styles/StyledTypography.js";
import { components } from "../[slug].js";



export default function Now( { source } ) {
  return (
    <Layout >
      <HeaderContainer >
        <Title1 >Now</Title1 >
        <Title2 >


        </Title2 >
      </HeaderContainer >
      <MainSection >
        <ProseWrapper >
          <MDXRemote {...source} components = {components}/>
        </ProseWrapper >
      </MainSection >
    </Layout >
  );
}

const HeaderContainer = styled.div`
  margin: var(--space-xl) auto;
  max-width: 800px;
  @media (max-width: 768px) {
    margin: var(--space-m) 0;
    max-width: 100%;
  }
`;

const MainSection = styled.section`
  margin: var(--space-xl) auto;
  max-width: 800px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// TODO - use getstaticProps to read the now.mdx file for this.

export const getStaticProps = async () => {
  //get the source code of the index.mdx file
  const nowFilePath = path.join( process.cwd(), "pages", "now", "now.mdx" );
  const source = fs.readFileSync( nowFilePath );
  const { content, data } = matter( source );
  const mdxSource = await serialize( content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope     : data,
  } );
  //return the props
  return {
    props: {
      source     : mdxSource,
      frontMatter: data,
    },
  };
};
