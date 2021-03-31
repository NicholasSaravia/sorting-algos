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

  const swap = (i, j, arrayCopy) => {};

  const selectionSort = async () => {
    let arrayCopy = [...array];
    let comparedIndex = 1;

    // loop through array once.
    for (let i = 0; i < arrayCopy.length; i++) {
      let smallestIndex = i;

      let setMallestIndexPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          dispatch(setCurrentIndex(smallestIndex));
          resolve();
        }, 100);
      });
      await Promise.all([setMallestIndexPromise]);

      // itterate through array swapping indexes if right side is bigger than left
      for (let j = i + 1; j < arrayCopy.length; j++) {
        // set compared index - orange
        let promiseOne = new Promise((resolve, reject) => {
          setTimeout(() => {
            comparedIndex = j;
            dispatch(setComparedIndex(comparedIndex));
            resolve();
          }, 100);
        });
        await Promise.all([promiseOne]);

        // if right is smaller than left, then update smallest index to be j
        // we do not swap right away because there could be a smaller index;
        if (arrayCopy[smallestIndex].height > arrayCopy[j].height) {
          smallestIndex = j;
        }
      }

      if (smallestIndex != i) {
        let swapPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log({ arrayCopy, i, smallestIndex});
            const temp = arrayCopy[smallestIndex];
            arrayCopy[smallestIndex] = arrayCopy[i];
            arrayCopy[i] = temp;
            dispatch(
              updateArrayPositions({ index1: i, index2: smallestIndex })
            );
            resolve();
          }, 100);
        });
        await Promise.all([swapPromise]);
      }
    }
  };

  return (
    <Button onClick={() => selectionSort()} variant="contained" color="secondary">
      Selection Sort
    </Button>
  );
};
