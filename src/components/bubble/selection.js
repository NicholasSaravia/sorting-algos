import { Button, SwipeableDrawer } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setComparedIndex,
  setCurrentIndex,
  updateArrayPositions,
} from "../../store/arraySlice";

export const Selection = () => {
  let array = useSelector((state) => state.array.value);
  const dispatch = useDispatch();

  const swap = (i, j, arrayCopy) => {
    console.log({ arrayCopy, i, j });
    const temp = arrayCopy[j];
    arrayCopy[j] = arrayCopy[i];
    arrayCopy[i] = temp;
  };

  const selectionSort = async () => {
    let arrayCopy = [...array];
    let smallestIndex = 0;
    let comparedIndex = 1;
    // loop through array once.
    for (let i = 0; i < arrayCopy.length; i++) {
      // itterate through array swapping indexes if right side is bigger than left
      for (let j = 1; j < arrayCopy.length; j++) {
        // set compared index - orange
        let promiseOne = new Promise((resolve, reject) => {
          setTimeout(() => {
            comparedIndex = j;
            dispatch(setComparedIndex(comparedIndex));
            resolve();
          }, 100);
        });
        await Promise.all([promiseOne]);

        // if right is smaller than left, then swap places
        if (arrayCopy[smallestIndex].height > arrayCopy[comparedIndex].height) {
          // swap places and set current index (pink) to current index
          let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
              // update local array
              swap(smallestIndex, comparedIndex, arrayCopy);             
              dispatch(updateArrayPositions({ index1: smallestIndex, index2: comparedIndex }));

              smallestIndex = j;
              comparedIndex = j + 1;
              // update state array
              dispatch(setCurrentIndex(smallestIndex));
              dispatch(setComparedIndex(comparedIndex));

              resolve();
            }, 100);
          });
          await Promise.all([promise]);
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
