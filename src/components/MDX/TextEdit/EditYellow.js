import styled from "styled-components";




export default function EditYellow( { children } ) {
  return <EditYellowContainer >{children}</EditYellowContainer >;
}



const EditYellowContainer = styled.div`
  color: yellow;
  opacity: 30%;
`;
