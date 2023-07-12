import Highlight, { defaultProps } from "prism-react-renderer";
import theme                       from 'prism-react-renderer/themes/nightOwl';
import * as React                  from 'react';
import styled                      from 'styled-components';




export default function CodeBlock( { children } ) {
  const language = children.props.className.replace( /language-/, '' );
  return (
    <>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children.props.children.trim()}
        language={language}
      >
        {( { className, style, tokens, getLineProps, getTokenProps } ) => (
          <StyledCodeWrapper >
            <StyledCodeBlock className = {className} style = {style} >
              {tokens.map( ( line, i ) => (
                <div {...getLineProps( { line, key: i } )}>
                  {line.map( ( token, key ) => (
                    <span {...getTokenProps( { token, key } )} />
                  ) )}
                </div >
              ) )}
            </StyledCodeBlock >
          </StyledCodeWrapper >
        )}
      </Highlight >
    </>
  );
}



const StyledCodeWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;



const StyledCodeBlock = styled.pre`
  width: 100%;
  overflow: scroll;
  font-size: calc(var(--font-size-sm) * 1.1);
  line-height: var(--leading-loose);
  font-family: IBM Plex Mono, Dank Mono, SF Mono, consolas, sans-serif;
  padding: var(--space-24) var(--space-32);
  border-radius: 0.3em;
`;
