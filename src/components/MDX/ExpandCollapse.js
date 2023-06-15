import React, { useEffect, useRef, useState } from "react";
import styled                                 from "styled-components";




/**
 * @param children - The content to be rendered inside the component (required) - type: plain text
 * @param collapseText - The text to be displayed on the button when the content is expanded (optional) - type: plain text
 * @param expandText - The text to be displayed on the button when the content is collapsed (optional) - type: plain text
 * @param maxHeight - The maximum height of the content when collapsed (optional) - type: number
 * @param minHeight - The minimum height of the content when collapsed (optional) - type: number
 */

export function ExpandCollapse( { children, collapseText = '(Close)', expandText = "...Read More", minHeight = 10} ) {
  const [ isExpanded, setIsExpanded ]         = useState( false );
  const [ scrollPosition, setScrollPosition ] = useState( 0 );
  const [ contentHeight, setContentHeight ]   = useState( 0 );
  const [ scrollHeight, setScrollHeight ]     = useState( 0 );
  const [ buttonText, setButtonText ]         = useState();
  const toggleRef                             = useRef();
  const contentRef                            = useRef( children );



  useEffect( () => {
    setButtonText( expandText );
    setContentHeight( contentRef?.current?.clientHeight );
    setScrollHeight( contentRef?.current?.scrollHeight );
  }, [] );



  useEffect( () => {
    if ( isExpanded ) {
      setButtonText( setCollapse() );
    } else {
      setButtonText( setOpen() );
    }
  }, [ isExpanded ] );



  const canExpand = () => {
    return scrollHeight > contentHeight;
  }


  const onClick = () => {
    setIsExpanded( !isExpanded );
    setScroll();
  }


  const setCollapse = () => {
    return (
      <>
        {collapseText}
      </>
    );
  }


  const setOpen = () => {
    return (
      <>
        {expandText}
      </>
    );
  }


  const getContent = () => {
    return children;
  }


  const setScroll = () => {
    if ( canExpand() ) {
      if ( !isExpanded ) {
        setScrollPosition( window.scrollY );
        window.scrollTo( 0, toggleRef?.current?.offsetTop );
      } else {
        window.scrollTo( 0, scrollPosition );
      }
    }
  }



  return (
    <>
      <StyledContainer isExpanded = {isExpanded} >
        <StyledContent isExpanded = {isExpanded} >
          <StyledText >
            {getContent()}
          </StyledText >
        </StyledContent >
        <StyledButton
          ref = {toggleRef}
          onClick = {onClick}
        >
          {isExpanded ? setCollapse() : setOpen()}
        </StyledButton >
      </StyledContainer >
    </>
  );

}



const StyledContainer = styled.div`
  display: flow;
  position: relative;

  margin: 1rem;
  padding: 1rem;

  left: 0px;
  top: 0px;

  border: ${props => props.isExpanded ? "1px solid var(--color-gray-300)" : "none"};

  box-shadow: ${props => props.isExpanded ? "var(--shadow)" : "none"};

  border-radius: var(--border-radius);

  background-color: var(--color-gray-100);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-gray-200);
  }

`;


const StyledExternalUrl = styled.a`
  color: var(--color-gray-600);
  transition: color 0.2s ease-in-out;
  text-align: center;

  &:hover {
    color: var(--color-bright-crimson);
  }
`;


const StyledButton = styled.button`
  color: var(--color-gray-600);
  transition: color 0.2s ease-in-out;
  text-align: center;

  &:hover {
    color: var(--color-bright-crimson);
  }
`;


const StyledContent = styled.div`
  max-height: ${props => props.isExpanded ? props.scrollHeight : 0};
  min-height: ${props => props.isExpanded ? props.scrollHeight : props.minHeight};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, min-height 0.5s ease-in-out;
`;


const StyledText = styled.div`
  color: var(--color-gray-600);
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-bright-crimson);
  }
`;



