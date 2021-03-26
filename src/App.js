import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import createArray from "./methods";
import { useEffect } from "react";
import styled from "styled-components";
import Line from "./components/line";
import { Bubble } from "./components/bubble/bubble";
import {setArray} from './store/arraySlice';
import { useDispatch, useSelector } from "react-redux";

function App() {

  const array = useSelector(state => state.array.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const arr = createRandomArray();
    dispatch(setArray(arr));
  }, []);

 
  const createRandomArray = () => {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    const arr = createArray(randomNum);
    return arr;
  };

  const StyledDiv = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2px, 1fr));
    gap: 35px;
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
        <Bubble array={array} updateArray={setArray}></Bubble>
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
