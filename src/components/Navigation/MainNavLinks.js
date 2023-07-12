import { Popover }                                                       from '@headlessui/react';
import { AnimatePresence }                                               from 'framer-motion';
import Link                                                              from 'next/link';
import { useRouter }                                                     from 'next/router';
import { useEffect, useState }                                           from 'react';
import styled                                                            from 'styled-components';
import { DropdownLink, HoverLink }                                       from '../../styles/LinkStyledComponents.js';
import UnderlineHoverLink                                                from '../Links/UnderlineHoverLink';
import { Dropdown, MainNav, StyledChevronDownIcon, StyledPopoverButton } from '../Navigation/NavigationStyles.js';




const SelectedStyle = styled.span`
  border-bottom: 0.2em solid var(--color-primary) !important;
  margin-left: var(--space-s);
  text-decoration: none;
  font-size: var(--font-size-xs);
  font-family: var(--font-sans);
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  top: 1px;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  padding-bottom: 0.25rem;

  span {
    color: var(--color-gray-800);
  }

  &::before {
    content: "";
    transform-origin: 50% 100%;
    background: var(--color-sea-blue);
    transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    position: absolute;
    width: 100%;
    height: 1px;
    top: 95%;
    left: 0;
    pointer-events: none;
    clip-path: polygon(0% 0%,
    0% 100%,
    0 100%,
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    0 100%,
    100% 100%,
    100% 0%);
  }
`;



function GardenDropdown() {
  const router                    = useRouter();
  const [ selected, setSelected ] = useState( false );


  useEffect( () => {
    if ( router.pathname.includes( '/garden' ) ) {
      setSelected( true );
    } else {
      setSelected( false );
    }
  }, [ router.pathname ] );


  return (
    <Popover style = {{ position: 'relative' }} >
      <Link href = '/garden' >
        {selected ? (
          <SelectedStyle >
            Garden
          </SelectedStyle >
        ) : (
          <HoverLink >
            <span >Garden</span >
          </HoverLink >
        )}
      </Link >
      <StyledPopoverButton >
        <StyledChevronDownIcon width = '24' height = '24' />
      </StyledPopoverButton >

      <Popover.Panel >
        <Dropdown
          initial = {{
            opacity        : 0,
            rotateX        : '90deg',
            transformOrigin: 'top'
          }}
          animate = {{ opacity: 1, rotateX: '0deg' }}
          exit = {{ opacity: 0, rotateX: '90deg' }}
          transition = {{ duration: 0.6, ease: 'easeInOut' }}
          style = {{ position: 'absolute', zIndex: '10' }}
          key = 'dropdown'
        >
          <DropdownLink >
            <Link href = '/garden/essays' >
              <span >Essays</span >
            </Link >
          </DropdownLink >
          <DropdownLink >
            <Link href = '/garden/notes' >
              <span > Notes</span >
            </Link >
          </DropdownLink >
        </Dropdown >
      </Popover.Panel >
    </Popover >
  );
}



function LibraryDropdown() {
  const router                    = useRouter();
  const [ selected, setSelected ] = useState( false );


  useEffect( () => {
    if ( router.pathname.includes( '/library' ) ) {
      setSelected( true );
    } else {
      setSelected( false );
    }
  }, [ router.pathname ] );


  return (
    <Popover style = {{ position: 'relative' }} >
      <Link href = '/library' >
        {selected ? (
          <SelectedStyle >
            Library
          </SelectedStyle >
        ) : (
          <HoverLink >
            <span >Library</span >
          </HoverLink >
        )}
      </Link >
      <StyledPopoverButton >
        <StyledChevronDownIcon width = '24' height = '24' />
      </StyledPopoverButton >

      <Popover.Panel >
        <Dropdown
          initial = {{
            opacity        : 0,
            rotateX        : '90deg',
            transformOrigin: 'top'
          }}
          animate = {{ opacity: 1, rotateX: '0deg' }}
          exit = {{ opacity: 0, rotateX: '90deg' }}
          transition = {{ duration: 0.6, ease: 'easeInOut' }}
          style = {{ position: 'absolute', zIndex: '10' }}
          key = 'dropdown'
        >
          <DropdownLink >
            <Link href = '/library/books' >
              <span >Books</span >
            </Link >
          </DropdownLink >
          <DropdownLink >
            <Link href = '/library/articles' >
              <span >Articles</span >
            </Link >
          </DropdownLink >
        </Dropdown >
      </Popover.Panel >
    </Popover >
  );
};



function DesignWorkshopDropdown() {
  const router                    = useRouter();
  const [ selected, setSelected ] = useState( false );


  useEffect( () => {
    if ( router.pathname.includes( '/design' ) ) {
      setSelected( true );
    } else {
      setSelected( false );
    }
  }, [ router.pathname ] );


  return (
    <Popover style = {{ position: 'relative' }} >
      <Link href = '/design' >
        {selected ? (
          <SelectedStyle >
            Design
          </SelectedStyle >
        ) : (
          <HoverLink >
            <span >Design</span >
          </HoverLink >
        )}
      </Link >
      <StyledPopoverButton >
        <StyledChevronDownIcon width = '24' height = '24' />
      </StyledPopoverButton >

      <Popover.Panel >
        <Dropdown
          initial = {{
            opacity        : 0,
            rotateX        : '90deg',
            transformOrigin: 'top'
          }}
          animate = {{ opacity: 1, rotateX: '0deg' }}
          exit = {{ opacity: 0, rotateX: '90deg' }}
          transition = {{ duration: 0.6, ease: 'easeInOut' }}
          style = {{ position: 'absolute', zIndex: '10' }}
          key = 'dropdown'
        >
          <DropdownLink >
            <Link href = '/design/patterns' >
              <span >Patterns</span >
            </Link >
          </DropdownLink >
          <DropdownLink >
            <Link href = '/design/lessons' >
              <span >Lessons</span >
            </Link >
          </DropdownLink >
          <DropdownLink >
            <Link href = '/design/projects' >
              <span >Projects</span >
            </Link >
          </DropdownLink >
        </Dropdown >
      </Popover.Panel >
    </Popover >
  );
};



export default function MainNavLinks() {
  const router = useRouter();

  return (
    <MainNav >
      <AnimatePresence >
        <GardenDropdown />
      </AnimatePresence >
      <AnimatePresence >
        <DesignWorkshopDropdown />
      </AnimatePresence >
      <AnimatePresence >
        <LibraryDropdown />
      </AnimatePresence >
      <div className = 'outside-dropdown' >
        <UnderlineHoverLink href = '/' selected = {router.pathname === '/'} >Home</UnderlineHoverLink >
        <UnderlineHoverLink href = '/gallery' selected = {router.pathname === '/gallery'} >Gallery</UnderlineHoverLink >
        <UnderlineHoverLink href = '/about' selected = {router.pathname === '/about'} >About</UnderlineHoverLink >
        <UnderlineHoverLink href = '/contact' selected = {router.pathname === '/contact'} >Contact</UnderlineHoverLink >
      </div >
    </MainNav >
  );
};




