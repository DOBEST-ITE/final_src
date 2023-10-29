import styled from "styled-components";
import React, {useState, useEffect} from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  h1 {
    color: #fab005;
  }
`;



const Review = () => {
   const [message, setMessage] = useState("");
   useEffect(() => {
        fetch('/review')
        .then(Response => Response.text())
        .then(message => {
        setMessage(message);
        });

    },[]

    )
  return (
    <Wrapper>
      <h1>Review</h1>
      <div>{message}</div>
    </Wrapper>
  );
};

export default Review;
