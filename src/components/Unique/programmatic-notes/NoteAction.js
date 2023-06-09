import styled from "styled-components";



const NoteAction = ( { children } ) => {
		return <StyledNoteAction >{children}</StyledNoteAction >;
};

const StyledNoteAction = styled.span`
  color: var(--color-bright-tangerine);
`;

export default NoteAction;
