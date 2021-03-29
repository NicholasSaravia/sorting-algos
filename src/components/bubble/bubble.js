import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  setCurrentIndex,
  setComparedIndex,
  updateArrayPositions,
  setItterations,
} from "../../store/arraySlice";

export const Bubble = () => {
  const array = useSelector((state) => state.array.value);
  const dispatch = useDispatch();

  const bubbleSort = async () => {
    const arrayCopy = [...array];
    let itterations = 0;
    let swap = false;

    do {
      swap = false;
      dispatch(setItterations(itterations++));

      for (let i = 0; i < arrayCopy.length; i++) {
        let promise1 = new Promise((resolve, reject) => {
          setTimeout(() => {
            dispatch(setCurrentIndex(i));
            dispatch(setComparedIndex(i + 1));
            resolve();
          }, 10);
        });

        await promise1;
        if (
          // check out of range
          i + 1 <= arrayCopy.length - 1 &&
          // check if left is greator than right
          arrayCopy[i].height > arrayCopy[i + 1].height
        ) {
          // switch left and right positions
          let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
              dispatch(updateArrayPositions({ index1: i, index2: i + 1 }));
              resolve();
            }, 10);
          });

          // update local arrayCopy to match redux store copy
          const temp1 = arrayCopy[i];
          arrayCopy[i] = arrayCopy[i + 1];
          arrayCopy[i + 1] = temp1;

          await Promise.all([promise]);
          swap = true;
        }
      }
    } while (swap);
  };

  return (
    <Button onClick={() => bubbleSort()} variant="contained" color="secondary">
      Bubble Sort
    </Button>
  );
};
