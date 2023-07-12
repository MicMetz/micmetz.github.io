import PropTypes from 'prop-types';
import styled  from 'styled-components';
import Tooltip from './Tooltip.js';




Chip.propTypes = {
  text   : requireTextOrIcon,
  icon   : requireTextOrIcon,
  mini   : PropTypes.bool,
  tooltip: PropTypes.node
};


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


// generic chip component with text and icon
export default function Chip( { text, icon, mini = false, tooltip } ) {
  return (
    <Tooltip content = {tooltip} >
      <ChipWrapper data-mini = {mini} >
        {icon && <i className = {icon} />}
        {text}
      </ChipWrapper >
    </Tooltip >
  );
}



const ChipWrapper = styled.span`
  margin: 5px;
  padding: 2px 8px;
  background: $light-blue-100;
  border-radius: 999px;
  font-size: 0.8rem;
  vertical-align: middle;
  letter-spacing: 0;

  &[data-mini="false"] {
    margin-right: 10px;
  }
`;
