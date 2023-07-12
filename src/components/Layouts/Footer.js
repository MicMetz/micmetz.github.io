import React                                                                                                                        from 'react';
import { FooterContent, FooterLinkColumn, FooterLinkItem, FooterLinkList, FooterSitemapList, FooterSocialMediaIcons, StyledFooter } from '../../styles/FooterStyles.js';
import { GithubIcon, LinkedInIcon, TwitterIcon }                                                                                    from '../Icons/SocialMediaIcons.js';
import UnderlineHoverLink                                                                                                           from '../Links/UnderlineHoverLink.js';




export default function Footer() {
  return (
    <StyledFooter >
      <FooterContent >
        <FooterLinkList >
          <FooterLinkColumn >
            <FooterLinkItem href = 'mailto:mime9599@colorado.edu' >
              mime9599@colorado.edu
            </FooterLinkItem >

            <FooterSocialMediaIcons >
              <FooterLinkItem href = 'https://github.com/MicMetz' >
                {/* <a rel = "me" href = "https://github.com/MicMetz"> */}
                <GithubIcon />
                {/* </a > */}
              </FooterLinkItem >
              <FooterLinkItem href = 'https://www.linkedin.com/in/michael-metzjer/' >
                {/* <a rel = "me" href = "https://www.linkedin.com/in/michael-metzjer/"> */}
                <LinkedInIcon />
                {/* </a > */}
              </FooterLinkItem >
              <FooterLinkItem href = 'https://bsky.app/' >
                {/* <a rel = "me" href = "https://bsky.app/"> */}
                <TwitterIcon />
                {/* </a > */}
              </FooterLinkItem >
            </FooterSocialMediaIcons >
          </FooterLinkColumn >
        </FooterLinkList >

        <FooterSitemapList >
          {[
            { text: 'My Digital garden', slug: '/garden' },
            { text: 'About', slug: '/about' },
            { text: 'Now', slug: '/Now' },
            { text: 'Essays', slug: '/essays' },
            { text: 'Notes', slug: '/notes' },
            { text: 'Topics', slug: '/topics' },
            { text: 'library', slug: '/library' },
            { text: 'Books', slug: '/library/books' },
            { text: 'Articles', slug: '/library/articles' },
            { text: 'design', slug: '/design' },
            { text: 'Patterns', slug: '/design/patterns' },
            { text: 'Lessons', slug: '/design/lessons' },
            { text: 'Projects', slug: '/design/projects' },
            { text: 'Resources', slug: '/design/resources' },
            { text: 'Contact', slug: '/contact' },
            { text: 'Changelog', slug: '/Now/changelog' }
          ].map( ( link, i ) => {
            return (
              <li key = {i} >
                <UnderlineHoverLink href = {link.slug} >
                  {link.text}
                </UnderlineHoverLink >
              </li >
            );
          } )}
        </FooterSitemapList >


      </FooterContent >
    </StyledFooter >
  );
};


