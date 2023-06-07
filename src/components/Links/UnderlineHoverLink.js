import { LinkContainer, StyledLink } from "@/components/Links/LinkStyledComponents.js";



export default function UnderlineHoverLink( { href, children } ) {
		return (
				<LinkContainer >
						<StyledLink href = {href} >
								<span >{children}</span >
						</StyledLink >
				</LinkContainer >
		);
}
