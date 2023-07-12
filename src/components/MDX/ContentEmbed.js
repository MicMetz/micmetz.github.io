import {MDXEmbedProvider} from 'mdx-embed';
import styled from "styled-components";



export default function ContentEmbed( { content } ) {
		return (
				<EmbedContainer className = "embed" >
						<MDXEmbedProvider  children={content}/>
				</EmbedContainer >
		);
}

const EmbedContainer = styled.div`
  &.Embed {
    margin: 0 auto var(--space-md);
    width: 100%;
    max-width: 550px;
  }
`;
