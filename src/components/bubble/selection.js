import { Button, SwipeableDrawer } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCurrentIndex, updateArrayPositions } from "../../store/arraySlice";

export const Selection = () => {
  let array = useSelector((state) => state.array.value);
  const dispatch = useDispatch();

  const swap = (i, j, arrayCopy) => {
    const temp = arrayCopy[j];
    arrayCopy[j] = arrayCopy[i];
    arrayCopy[i] = temp;
  };

  const selectionSort = async () => {
    let arrayCopy = [...array];
    for (let i = 0; i < arrayCopy.length; i++) {
      let smallestNumIndex = i;
      for (let j = 1; j < arrayCopy.length; j++) {
        if (arrayCopy[i] > arrayCopy[j]) {
          let promise = new Promise((resolve, reject) => {
            dispatch(updateArrayPositions({ index1: i, index2: j }));
            dispatch(setCurrentIndex(j));
          });
          await promise;

          swap(i, j, arrayCopy);
          smallestNumIndex = j;
        }
      }
    }
  };

  return (
    <Button onClick={() => selectionSort()} variant="contained" color="default">
      Selection Sort
    </Button>
  );
};
