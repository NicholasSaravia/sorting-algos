import React from 'react'
import styled from 'styled-components';

const Line = ({node}) => {

    const StyledLine = styled.div`
      border: 4px solid ${node.selected ? "hotpink" :  "black"};
      height: ${node.height}px;
      width: 2px;
    `;

    return (
      <div className="line-container">
        <StyledLine></StyledLine>
        {node.height}
      </div>
    );
}

export default Line;
