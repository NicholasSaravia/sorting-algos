import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentIndex,
  setComparedIndex,
  updateArrayPositions
} from "../../store/arraySlice";

export const Bubble = () => {
  const array = useSelector(state => state.array.value);
  const dispatch = useDispatch();

  const bubbleSort = async () => {
    let swap = false;
    do {
      swap = false;
      for (let i = 0; i < array.length; i++) {     
        dispatch(setCurrentIndex(i));
        dispatch(setComparedIndex(i + 1));

        if (
          // check out of range
          i + 1 <= array.length - 1 &&
          // check if left is greator than right
          array[i].height > array[i + 1].height
        ) {

          // switch left and right positions
          dispatch(updateArrayPositions({ index1: i, index2: i + 1}));
          swap = true;
        }

        let promise = new Promise((resolve, reject) => {
            setTimeout(()=> {
              resolve();
            },1000)
        });
        await Promise.all([promise]);


      }
    } while (swap);
  };

  return (
    <Button onClick={() => bubbleSort()} variant="contained" color="secondary">
      Bubble Sort
    </Button>
  );
};
