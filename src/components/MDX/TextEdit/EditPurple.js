import styled from "styled-components";




export default function EditPurple( { children } ) {
  return <EditPurpleContainer >{children}</EditPurpleContainer >;
}



const EditPurpleContainer = styled.div`
  color: purple;
  opacity: 30%;
`;
