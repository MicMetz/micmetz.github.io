import PropTypes                     from 'prop-types';
import { createContext, useContext } from 'react';
import styled                        from 'styled-components';



// section wrapper component that spans entire width of screen and colors
// background in alternating white/off-white
ObjectSection.propTypes = {
  children: PropTypes.node.isRequired,
  dark    : PropTypes.bool,
  width   : PropTypes.oneOf( [ 'narrow', 'normal', 'full' ] )
};

// make sure markdown starts and ends with this component, or doesn't use it at
// all. see PageContent component.
const SectionContext = createContext( { width: 'normal' } );

export default function ObjectSection( { children, dark = false, width = 'normal', ...props } ) {
  return (
    <SectionContext.Provider value = {{ width }} >
      <SectionRow
        {...props}
        data-dark = {dark}
        data-width = {width}
      >
        <div className = {styles.wrapper} >{children}</div >
      </SectionRow >
    </SectionContext.Provider >
  );
}


export function useSectionWidth() {
  const { width } = useContext( SectionContext );
  return width;
}




const InnerSection = styled.div`
  position: relative;
  width: 100%;
  max-width: $page;
  margin: 0 auto;
  padding: 40px;
  text-align: center;

  @media (max-width: $phone) {
    padding: 20px;
  }
`;



const SectionRow = styled.section`
  &:last-child {
    flex-grow: 1;
  }

  &:nth-child(odd) {
    background: var(--color-white);
  }

  &:nth-child(even) {
    background: var(--color-gray-100);
  }

  &[data-dark="true"] {
    background: var(--color-gray-900);
    color: var(--color-gray-100);
  }

  &[data-width="narrow"] {
    > ${InnerSection} {
      max-width: var(--page-content-column-narrow);
    }
  }

  &[data-width="full"] {
    > ${InnerSection} {
      max-width: var(--page-content-column-full);
    }
  }

  &[data-width="wide"] {
    > ${InnerSection} {
      max-width: var(--page-content-column-wide);
    }
  }
`;
