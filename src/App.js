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
  grid-template-columns: repeat(auto-fill, minmax(2px, 1fr));
  gap: 35px;
`;

function App() {

  const array = useSelector(state => state.array);
  const { comparedIndex, currentIndex, value } = array;

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
      <div>
        <Button
          onClick={() => dispatch(setArray(createRandomArray(100)))}
          variant="contained"
          color="primary"
        >
          Random Array
        </Button>
        <Bubble array={value}></Bubble>
      </div>
      <StyledDiv>
        {value.map((a, i) => (
          <Line key={i} node={a} selected={i === currentIndex} compared={i === comparedIndex}></Line>
        ))}
      </StyledDiv>
    </div>
  );
}

export default App;
