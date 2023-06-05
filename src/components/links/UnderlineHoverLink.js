import { LinkContainer, StyledLink } from "@/components/links/LinkStyledComponents.js";



export default function UnderlineHoverLink( { href, children } ) {
		return (
				<LinkContainer >
						<StyledLink href = {href} >
								<span >{children}</span >
						</StyledLink >
				</LinkContainer >
		);
}
