import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { SocialIcons } from '../Navigation/NavigationStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';




const Footer = () => {
	return (
		<FooterWrapper >
			<LinkList >
				<LinkColumn >
					<LinkTitle >Call</LinkTitle >
					<LinkItem href = "tel:314-343-3432" >631-241-6006</LinkItem >
				</LinkColumn >
				<LinkColumn >
					<LinkTitle >Email</LinkTitle >
					<LinkItem href = "mailto:mime9599@colorado.edu" >
						mime9599@colorado.edu
					</LinkItem >
				</LinkColumn >
			</LinkList >
			<SocialIconsContainer >
				<CompanyContainer >

				</CompanyContainer >
				<SocialContainer >
					<SocialIcons href = "https://github.com/MicMetz" >
						<AiFillGithub size = "3rem" />
					</SocialIcons >
					<SocialIcons href = "https://www.linkedin.com/in/michael-metzjer/" >
						<AiFillLinkedin size = "3rem" />
					</SocialIcons >
					<SocialIcons href = "https://bsky.app/" >
						<AiFillTwitterSquare size = "3rem" />
					</SocialIcons >
				</SocialContainer >
			</SocialIconsContainer >
		</FooterWrapper >
	);
};

export default Footer;
