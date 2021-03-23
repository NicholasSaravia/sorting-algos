import React from 'react'
import styled from 'styled-components';

const Line = ({height}) => {

    const StyledLine = styled.div`
      border-color: hotpink;
      border: 4px solid;
      height: ${height}px;
      width: 2px;
    `;

    return (
        <StyledLine>
        </StyledLine>
    )
}

export default Line;