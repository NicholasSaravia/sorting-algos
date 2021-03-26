import React from "react";
import styled from "styled-components";

const StyledLine = styled.div`
  border: 4px solid ${props => props.selected ? "hotpink" : props.compared ? "orange" : "black"};
  height: ${props => props.height}px;
  width: 2px;
`;

const Line = ({ node, selected, compared }) => {
  return (
    <div className="line-container">
      <StyledLine height={node.height} selected={selected} compared={compared}></StyledLine>
      {node.height}
    </div>
  );
};

export default Line;
