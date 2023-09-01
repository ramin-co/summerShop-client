import React from "react";
import "../style/announcement.css";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: teal;
  height: 40px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;



const Announcement = () => {
  return (
    <>
      <Container color="red" bg="green">
      Enjoy your shopping. Ramin.
      </Container>
    </>
  );
};

export default Announcement;
