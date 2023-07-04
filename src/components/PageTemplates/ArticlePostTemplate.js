import styled    from "styled-components"
import Button    from "../Layouts/Button.js";
import Header    from "../Layouts/Header.js";
import { Layout } from "../Layouts/Layout.js";
import Paragraph from "../Layouts/Paragraph.js";
import Text      from "../Layouts/Text.js";
import Backlinks from "../Links/Backlinks.js";




export default function ArticlePostTemplate( { source, frontMatter, components, slug, headings, toc, backlinks, ogImage } ) {

  return (
    <>
      <ArticleWrapper >
        <ArticleStyledHeader >
          <ArticleRow area = "title" margin = "0 0 1em 0" >
            <Header size = "h1" >{frontMatter.title}</Header >
          </ArticleRow >
          <ArticleRow area = "image" margin = "0 0 1em 0" >
            <img src = {frontMatter.image} alt = {frontMatter.title} />
          </ArticleRow >
          <ArticleRow area = "lead" margin = "0 0 1em 0" >
            <Paragraph >{frontMatter.lead}</Paragraph >
          </ArticleRow >
          <ArticleRow area = "tags" margin = "0 0 1em 0" >
            <Paragraph >{frontMatter.tags}</Paragraph >
          </ArticleRow >
        </ArticleStyledHeader >
        <ArticleSection >
          <Text >
            {components}
          </Text >
        </ArticleSection >
        <ArticleSection >
          <Paragraph >{source}</Paragraph >
        </ArticleSection >
        <ArticleSection >
          <Paragraph >{slug}</Paragraph >
        </ArticleSection >
        <ArticleSection >
          <Paragraph >{headings}</Paragraph >
        </ArticleSection >
        <ArticleSection >
          <Paragraph >{toc}</Paragraph >
        </ArticleSection >
        <ArticleSection >
          <Paragraph >{backlinks}</Paragraph >
        </ArticleSection >
        <ArticleSection >
          <Paragraph >{ogImage}</Paragraph >
        </ArticleSection >

      </ArticleWrapper >
      {backlinks?.length ? <Backlinks backlinks = {backlinks} /> : null}

    </>
  )

}




const ArticleWrapper = styled.div`
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
  min-height: calc(100vh * 2);
  padding: 0 4em;
  color: ${( props ) => props.color || "white"};
  background: ${( props ) => props.background || "black"};
`;


const ArticleStyledHeader = styled.div`
  grid-template-columns:  1fr 1fr;
  grid-template-rows:     1fr;
  grid-template-areas:    "title image lead tags";
  width: 100%;
  margin: 0 auto;
  padding: 2em 4em;
  background: inherit;
  box-shadow: none;
  transition: background 0.25s linear;
  color: ${( props ) => props.color || "inherit"};


  @media screen and (min-width: 768px) {
    grid-template-columns:  1fr 1fr;
    grid-template-rows:     1fr;
    grid-template-areas:    "title image lead tags";
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns:  1fr 1fr;
    grid-template-rows:     1fr;
    grid-template-areas:    "title image lead tags";
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns:  1fr 1fr;
    grid-template-rows:     1fr;
    grid-template-areas:    "title image lead tags";
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns:  1fr 1fr;
    grid-template-rows:     1fr;
    grid-template-areas:    "title image lead tags";
  }
`;


const ArticleRow = styled.section`
  grid-area: ${( props ) => props.area || "inherit"};
  margin: ${( props ) => props.margin || "0 auto"};
  padding: 0 0 2em 0;
`;


const ArticleSection = styled.div`
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding: 2em 4em;
  background: inherit;
  box-shadow: none;
  transition: ${( props ) => props.transition || "inherit"};
  color: ${( props ) => props.color || "inherit"};
`;


const ArticleButton = styled( Button )`
  margin: 2em auto;
  padding: 0.5em 1em;
  background: ${( props ) => props.background || "inherit"};
  color: ${( props ) => props.color || "inherit"};
  border: 1px solid ${( props ) => props.border || "inherit"};
  transition: ${( props ) => props.transition || "inherit"};

  &:hover {
    background: ${( props ) => props.hoverBackground || "inherit"};
    color: ${( props ) => props.hoverColor || "inherit"};
    border: 1px solid ${( props ) => props.hoverBorder || "inherit"};
  }
`;
