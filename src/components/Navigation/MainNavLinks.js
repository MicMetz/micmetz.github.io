import { Popover }                                                       from '@headlessui/react';
import { AnimatePresence }                                               from 'framer-motion';
import Link                                                              from 'next/link';
import { useRouter }                                                     from 'next/router';
import { DropdownLink, HoverLink }                                       from '../../styles/LinkStyledComponents.js';
import UnderlineHoverLink                                                from '../Links/UnderlineHoverLink';
import { Dropdown, MainNav, StyledChevronDownIcon, StyledPopoverButton } from '../Navigation/NavigationStyles.js';




function GardenPopoverLinks() {
  const router = useRouter();

  return (
    <Popover style = {{ position: 'relative' }} >
      <HoverLink >
        <UnderlineHoverLink href = '/Garden' selected = {router.pathname === '/Garden'} >
          <Link href = '/Garden' >
            <span >Garden</span >
          </Link >
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
            <Link href = '/Garden/Essays' >
              <span >Essays</span >
            </Link >
          </DropdownLink >
          <DropdownLink >
            <Link href = '/Garden/Notes' >
              <span > Notes</span >
            </Link >
          </DropdownLink >
        </Dropdown >
      </Popover.Panel >
    </Popover >
  );
}



function LibraryPopoverLinks() {
  const router = useRouter();

  return (
    <Popover style = {{ position: 'relative' }} >
      <HoverLink >
        <UnderlineHoverLink href = '/Library' selected = {router.pathname === '/Library'} >
          <Link href = '/Library' >
            <span >Library</span >
          </Link >
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
            <Link href = '/Library/Books' >
              <span >Books</span >
            </Link >
          </DropdownLink >
          <DropdownLink >
            <Link href = '/Library/Articles' >
              <span >Articles</span >
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
        <GardenPopoverLinks />
      </AnimatePresence >
      <AnimatePresence >
        <LibraryPopoverLinks />
      </AnimatePresence >
      <div className = 'outside-dropdown' >
        <UnderlineHoverLink href = '/' selected = {router.pathname === '/'} >Home</UnderlineHoverLink >
        <UnderlineHoverLink href = '/Gallery' selected = {router.pathname === '/Gallery'} >Gallery</UnderlineHoverLink >
        <UnderlineHoverLink href = '/Design' selected = {router.pathname === '/Design'} >Design</UnderlineHoverLink >
        <UnderlineHoverLink href = '/About' selected = {router.pathname === '/About'} >About</UnderlineHoverLink >
        <UnderlineHoverLink href = '/Contact' selected = {router.pathname === '/Contact'} >Contact</UnderlineHoverLink >
      </div >
    </MainNav >
  );
};




