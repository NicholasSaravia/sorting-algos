import { Button } from '@material-ui/core'
import React from 'react'

export const Selection = () => {
    return (
      <Button
        onClick={() => console.log("hey")}
        variant="contained"
        color="default"
      >
        Selection Sort
      </Button>
    );
}
