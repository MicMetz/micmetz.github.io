import styled from "styled-components";




export default function EditGrey( { children } ) {
  return <EditGreyContainer >{children}</EditGreyContainer >;
}



const EditGreyContainer = styled.div`
  color: grey;
  opacity: 30%;
`;
