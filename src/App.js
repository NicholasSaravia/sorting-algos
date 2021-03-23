import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import createArray from './methods';
import { useState, useEffect } from 'react';
import Line from './components/line';
import styled from 'styled-components';

function App() {

  const [array, setArray] = useState([])
  useEffect(() => {
    const arr = createRandomArray();
    setArray(arr);
  }, [])

  const createRandomArray = () => {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    const arr = createArray(randomNum);
    return arr;
  };

  const StyledDiv = styled.div`
  padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2px, 1fr));
    gap: 10px;
  `;

  return (
    <div className="App">
      <div>
        <Button
          onClick={() => setArray(createRandomArray)}
          variant="contained"
          color="primary"
        >
          Random Array
        </Button>
      </div>
      <StyledDiv>
        {array.map((a) => (
          <Line height={a}></Line>
        ))}
      </StyledDiv>
    </div>
  );
}

export default App;
