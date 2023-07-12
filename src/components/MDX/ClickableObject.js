import NextLink  from 'next/link';
import PropTypes from 'prop-types';
import styled  from 'styled-components';
import Tooltip from '../MISC/Tooltip.js';




ClickableObject.propTypes = {
  link     : requireLinkOrOnClick,
  onClick  : requireLinkOrOnClick,
  icon     : requireTextOrIcon,
  text     : requireTextOrIcon,
  design   : PropTypes.oneOf( [ 'normal', 'rounded' ] ),
  active   : PropTypes.bool,
  className: PropTypes.string
};


function requireLinkOrOnClick( props, propName, componentName ) {
  if ( !props.link && !props.onClick ) {
    return new Error( `${componentName} requires one of "link" or "onClick"` );
  }

  if ( propName === 'link' && !props.onClick && typeof props.link !== 'string' ) {
    return new Error( `link must be a string in ${componentName}` );
  }

  if (
    propName === 'onClick' &&
    !props.link &&
    typeof props.onClick !== 'function'
  ) {
    return new Error( `onClick must be a function in ${componentName}` );
  }
}


function requireTextOrIcon( props, propName, componentName ) {
  if ( !props.text && !props.icon ) {
    return new Error( `${componentName} requires one of "text" or "icon"` );
  }

  if ( propName === 'text' && !props.icon && typeof props.text !== 'string' ) {
    return new Error( `text must be a string in ${componentName}` );
  }

  if ( propName === 'icon' && !props.text && typeof props.icon !== 'string' ) {
    return new Error( `icon must be a string in ${componentName}` );
  }
}


// link/button component
export default function ClickableObject( { link, onClick, icon, text, design, active, className = '', ...rest } ) {
  // decide whether to use button or link
  let Component;
  if ( link ) {
    Component = Link;
  } else {
    Component = Button;
  }

  // if no contents, don't render
  if ( !text && !icon ) {
    return null;
  }
  // if no actions, don't render
  if ( !link && !onClick ) {
    return null;
  }

  return (
    <ClickableComponent
      {...rest}
      link = {link}
      onClick = {( event ) => {
        event.target.blur();
        onClick( event );
      }}
      data-icon = {icon ? true : false}
      data-text = {text ? true : false}
      data-active = {active}
      data-design = {design}
    >
      {icon && (
        <span className = {styles.icon} >
          <i className = {icon} ></i >
        </span >
      )}
      {text && <span className = {styles.text} >{text}</span >}
    </ClickableComponent >
  );
}

// button component, for actions
const Button = ( { tooltip, ...rest } ) => (
  <Tooltip content = {tooltip} >
    <button {...rest} />
  </Tooltip >
);

// link component, for navigating somewhere
const Link = ( { tooltip, link = '/', ...rest } ) => (
  <NextLink href = {link} passHref legacyBehavior >
    <Tooltip content = {tooltip} >
      <a {...rest} />
    </Tooltip >
  </NextLink >
);




const ClickableComponent = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 10px;
  color: inherit;
  border: none;
  font-family: $sans;
  font-size: 0.9em;
  text-decoration: none;
  min-width: 50px;
  min-height: 50px;
  margin: 20px 15px;
  padding: 10px 15px;
  background: $gray-200;
  color: $black;

  &:not(:disabled):hover {
    background: $light-blue-100;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &[data-icon="true"][data-text="false"] {
    padding: 0;
  }

  &[data-text="true"] {
    padding: 10px 15px;
  }

  &[data-active="false"] {
    background: none;

    &:hover {
      background: $gray-200;
    }
  }

  &[data-active="true"] {
    background: $light-blue-100;
  }


  &[data-design="rounded"] {
    min-width: 50px;
    min-height: 50px;
    margin: 20px 15px;
    padding: 10px 15px;
    border-radius: 999px;
    background: $gray-800;
    color: $white;

    &:hover {
      background: $light-blue-500;
    }
  }

  p {
    text-align: center;
    font-family: $sans;
    font-weight: $medium;
  @include truncate;
  }

  &[data-icon="true"][data-text="true"] svg {
    margin-right: 0.8em;
  }

  &[data-icon="true"][data-text="false"] svg {
    font-size: 1.2em;
  }

`;

