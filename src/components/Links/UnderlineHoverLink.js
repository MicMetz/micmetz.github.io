import Link                          from 'next/link';
import styled                        from 'styled-components';
import { LinkContainer, StyledLink } from '../../styles/LinkStyledComponents.js';




export default function UnderlineHoverLink( { href, children, selected } ) {
  return (
    <LinkContainer >
      <Link href = {href} >
        {selected ? (
          <SelectedStyle >
            <a href = {href} >
              {children}
            </a >
          </SelectedStyle >
        ) : (
          <StyledLink href = {href} >
            <span >{children}</span >
          </StyledLink >
        )}
      </Link >
    </LinkContainer >
  );
};



const SelectedStyle = styled.span`
  border-bottom: 0.2em solid var(--color-secondary) !important;
`;

