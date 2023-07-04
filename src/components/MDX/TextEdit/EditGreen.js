import styled from "styled-components";




export default function EditGreen( { children } ) {
  return <EditGreenContainer >{children}</EditGreenContainer >;
}


const EditGreenContainer = styled.div`
  color: green;
  opacity: 30%;
`;
