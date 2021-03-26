import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { setArray, setCurrentIndex } from "../../store/arraySlice";

export const Bubble = ({ array }) => {
  const dispatch = useDispatch();

  const bubbleSort = async () => {
    let swap = false;
    let arrayCopy = [...array];
    do {
      swap = false;
      for (let i = 0; i < arrayCopy.length; i++) {

        if (
          i + 1 <= arrayCopy.length - 1 &&
          arrayCopy[i].height > arrayCopy[i + 1].height
        ) {
          arrayCopy = [
            ...arrayCopy.slice(0, i),
            arrayCopy[i + 1],
            arrayCopy[i],
            ...array.slice(i + 2),
          ];
          swap = true;
        }

        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            dispatch(setCurrentIndex(i));
            updateArrayHandler(arrayCopy, resolve);
          }, 100);
        });
        await Promise.all([promise]);
      }
    } while (swap);
  };

  const updateArrayHandler = async (arrayCopy, resolve) => {
    dispatch(setArray(arrayCopy));
    resolve();
  };

  return (
    <Button onClick={() => bubbleSort()} variant="contained" color="secondary">
      Bubble Sort
    </Button>
  );
};
