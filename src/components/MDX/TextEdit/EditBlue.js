import styled from "styled-components";




export default function EditBlue( { children } ) {
  return <EditBlueContainer >{children}</EditBlueContainer >;
}



const EditBlueContainer = styled.div`
  color: blue;
  opacity: 30%;
`;
