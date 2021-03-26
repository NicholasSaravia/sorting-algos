import { Button } from '@material-ui/core';
import React from 'react'

export const Bubble = ({array, updateArray}) => {
  
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
            updateArray(arrayCopy);
        }
      }
    } while (swap);
  };

  return (
    <Button onClick={() => bubbleSort()} variant="contained" color="secondary">
      Bubble Sort
    </Button>
  );
}
