import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
  padding: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80%;
  background-image: url("https://i.ytimg.com/vi/1AVN2yKwN10/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAjzj-96Xm5hpnTEmnnEWuuVaQqow");
  display: flex;
  align-items: end;
  justify-content: start;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const Bottom = styled.div`
  width: 100%;
  height: 20%;
`;
const Button = styled("a")`
  width: 15%;
  height: 12%;
  cursor: pointer;
  border-radius: 20px;
  background-color: red;
  color: black;
  border: none;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70%;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: darkred;
    transform: scale(1.1);
    color: white;
  }

  &:active {
    transform: scale(0.95);
    background-color: crimson;
  }
`;
const Button2 = styled("a")`
  width: 15%;
  height: 12%;
  border-radius: 20px;
  background-color: black;
  color: red;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  font-size: 70%;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  margin-left: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, crimson, transparent);
    transition: all 0.5s ease-in-out;
    transform: translate(-50%, -50%) scale(0);
    z-index: -1;
  }

  &:hover:before {
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover {
    background-color: crimson;
    color: white;
    transform: scale(1.1);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.9;
  }
`;

const Videos = () => {
  return (
    <Main>
      <Top>
        <Button href="https://www.youtube.com/embed/1AVN2yKwN10">
          TOMOSHA QILMOQ
        </Button>

          <Button2 href="https://youtu.be/K-nYazwmtq8">YANGI VIDEO</Button2>
      </Top>
      <Bottom></Bottom>
    </Main>
  );
};

export default Videos;
