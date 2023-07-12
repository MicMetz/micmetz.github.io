import { Popover }                                                       from '@headlessui/react';
import { AnimatePresence }                                               from 'framer-motion';
import Link                                                              from 'next/link';
import { useRouter }                                                     from 'next/router';
import { DropdownLink, HoverLink }                                       from '../../styles/LinkStyledComponents.js';
import UnderlineHoverLink                                                from '../Links/UnderlineHoverLink';
import { Dropdown, MainNav, StyledChevronDownIcon, StyledPopoverButton } from '../Navigation/NavigationStyles.js';




function GardenDropdown() {
  const router = useRouter();

  return (
    <Popover style = {{ position: 'relative' }} >
      <HoverLink >
        <UnderlineHoverLink href = '/garden' selected = {router.pathname === '/garden'} >
          Garden
        </UnderlineHoverLink >
      </HoverLink >
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
  const router = useRouter();

  return (
    <Popover style = {{ position: 'relative' }} >
      <HoverLink >
        <UnderlineHoverLink href = '/library' selected = {router.pathname === '/library'} >
          Library
        </UnderlineHoverLink >
      </HoverLink >
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
  const router = useRouter();

  return (
    <Popover style = {{ position: 'relative' }} >
      <HoverLink >
        <UnderlineHoverLink href = '/design' selected = {router.pathname === '/design'} >
          Design
        </UnderlineHoverLink >
      </HoverLink >
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
        <UnderlineHoverLink href = '/Gallery' selected = {router.pathname === '/Gallery'} >Gallery</UnderlineHoverLink >
        <UnderlineHoverLink href = '/About' selected = {router.pathname === '/About'} >About</UnderlineHoverLink >
        <UnderlineHoverLink href = '/Contact' selected = {router.pathname === '/Contact'} >Contact</UnderlineHoverLink >
      </div >
    </MainNav >
  );
};




