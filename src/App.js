import "./App.css";
import { Button } from "@material-ui/core";
import createArray from "./methods";
import { useEffect } from "react";
import styled from "styled-components";
import Line from "./components/line";
import { Bubble } from "./components/bubble/bubble";
import {setArray} from './store/arraySlice';
import { useDispatch, useSelector } from "react-redux";

const StyledDiv = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
`;

function App() {

  const array = useSelector(state => state.array);
  const { comparedIndex, currentIndex, value, itterations } = array;

  const dispatch = useDispatch();

  useEffect(() => {
    const arr = createRandomArray(100);
    dispatch(setArray(arr));
  }, []);

 
  const createRandomArray = (lengthOfArray) => {
    const randomNum = Math.floor(Math.random() * lengthOfArray + 1);
    const arr = createArray(randomNum);
    return arr;
  };

  return (
    <div className="App">
      <div className="App__buttons">
        <Button
          onClick={() => dispatch(setArray(createRandomArray(100)))}
          variant="contained"
          color="primary"
        >
          Random Array
        </Button>
        <div>
          <Bubble array={value}></Bubble>
        </div>
      </div>
      <StyledDiv>
        <div>
          <h3>Itterations: {itterations}</h3>
        </div>
        <div className="App__array-container">
          {value.map((a, i) => (
            <Line
              key={i}
              node={a}
              selected={i === currentIndex}
              compared={i === comparedIndex}
            ></Line>
          ))}
        </div>
      </StyledDiv>
    </div>
  );
}

export default App;
