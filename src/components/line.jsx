import React from 'react'
import styles from './line.modules.css';

export const Line = ({height}) => {

    const StyledLine = styled.div`
      border-color: hotpink;
      border: 4px solid;
      height: ${height};
    `;

    return (
        <StyledLine>
        </StyledLine>
    )
}
