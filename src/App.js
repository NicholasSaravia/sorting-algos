import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import createArray from "./methods";
import { useState, useEffect } from "react";
import Line from "./components/line";
import styled from "styled-components";

function App() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const arr = createRandomArray();
    setArray(arr);
  }, []);

  const bubbleSort = () => {
    let swap = false;
    let arrayCopy = [...array];

    do {
      swap = false;
      for (let i = 0; i < arrayCopy.length; i++) {
        if (
          i + 1 <= arrayCopy.length - 1 &&
          arrayCopy[i].height > arrayCopy[i + 1].height
        ) {
          const temp = arrayCopy[i];
          arrayCopy[i].selected = true;
          arrayCopy[i] = arrayCopy[i + 1];
          arrayCopy[i + 1] = temp;
          swap = true;
        } else {
        }
      }
    } while (swap);
  };

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
        <Button
          onClick={() => bubbleSort()}
          variant="contained"
          color="secondary"
        >
          Bubble Sort
        </Button>
      </div>
      <StyledDiv>
        {array.map((a, i) => (
          <Line key={i} node={a}></Line>
        ))}
      </StyledDiv>
    </div>
  );
}

export default App;
