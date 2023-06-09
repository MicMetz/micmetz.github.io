import React from 'react';
import { FooterContent, FooterLinkColumn, FooterLinkItem, FooterLinkList, FooterLinkTitle, FooterSitemapList, FooterSocialMediaIcons, StyledFooter } from "../../styles/FooterStyles.js";
import { GithubIcon, LinkedInIcon, TwitterIcon, } from "../Icons/SocialMediaIcons.js";
import UnderlineHoverLink from "../Links/UnderlineHoverLink.js";



export default function Footer() {
		return (
				<StyledFooter >
						<FooterContent >
								<FooterLinkList >
										<FooterLinkColumn >
												<FooterLinkTitle >Email</FooterLinkTitle >
												<FooterLinkItem href = "mailto:mime9599@colorado.edu" >
														mime9599@colorado.edu
												</FooterLinkItem >
										</FooterLinkColumn >

										<FooterLinkColumn >
												<FooterSocialMediaIcons >
														<FooterLinkItem href = "https://github.com/MicMetz" >
																<a rel = "me" href = "https://github.com/MicMetz" >
																		<GithubIcon />
																</a >
														</FooterLinkItem >
														<FooterLinkItem href = "https://www.linkedin.com/in/michael-metzjer/" >
																<a rel = "me" href = "https://www.linkedin.com/in/michael-metzjer/" >
																		<LinkedInIcon />
																</a >
														</FooterLinkItem >
														<FooterLinkItem href = "https://bsky.app/" >
																<a rel = "me" href = "https://bsky.app/" >
																		<TwitterIcon />
																</a >
														</FooterLinkItem >
												</FooterSocialMediaIcons >
										</FooterLinkColumn >

								</FooterLinkList >

								<FooterSitemapList >
										{[
												{ text: "The Digital Garden", slug: "/Garden" },
												{ text: "Essays", slug: "/Essays" },
												{ text: "About", slug: "/About" },
												{ text: "Notes", slug: "/Notes" },
												{ text: "Topics", slug: "/topics" },
												{ text: "Now", slug: "/now" },
												{ text: "Library", slug: "/library" },
												{ text: "Books", slug: "library/books" },
            { text: "Projects", slug: "/Projects" },
            { text: "Changelog", slug: "/changelog" },
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


