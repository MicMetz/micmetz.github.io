import { useState } from 'react';
import styled       from 'styled-components';




export const TestInteractive = ( { startValue = 1 } ) => {
  const [ count, setCount ] = useState( startValue );

  return (
    <InteractiveContainer >
      <InteractiveButton onClick = {() => setCount( count + 1 )} >
        Click me: {count}
      </InteractiveButton >
    </InteractiveContainer >
  );
};




const InteractiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;


const InteractiveButton = styled.button`
  background: $light-blue-100;
  width: 200px;
  height: 50px;
`;
