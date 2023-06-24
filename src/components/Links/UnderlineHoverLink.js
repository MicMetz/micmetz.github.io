import styled                        from "styled-components";
import { LinkContainer, StyledLink } from "../../styles/LinkStyledComponents.js";




export default function UnderlineHoverLink( { href, children, selected } ) {
  return (
    <LinkContainer >
      {selected ? (
        <StyledLink href = {href} >
          <SelectedStyle >{children}</SelectedStyle >
        </StyledLink >
      ) : (
        <StyledLink href = {href} >
          <span >{children}</span >
        </StyledLink >
      )}
    </LinkContainer >
  );
}



const SelectedStyle = styled.span`
  color: var(--color-secondary) !important;
`;

