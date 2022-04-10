import React, { useState } from "react";
import styled from "styled-components";

function Button(props) {
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <MyButton
      onClick={() => {
        const tag = document.getElementsByClassName(props.theClass);
        tag.style.display = "none";
        alert("None");
      }}
    >
      reload
    </MyButton>
  );
}

export default Button;

const MyButton = styled.button`
  padding: 2px 5px;
  text-transform: uppercase;
  background-color: white;
  border-radius: 10px;
`;
