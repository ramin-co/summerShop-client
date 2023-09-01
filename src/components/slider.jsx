import { useState } from "react";
import styled from "styled-components";
import {  data } from "../data/data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
  ${mobile({display:'none'})}
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  background: #dcd6d6;
  cursor: pointer;
  opacity: 0.5;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 300vw;
  /* background-color: #f0f03e; */
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  background-color: #${(props) => props.bg};
  /* height: 100%; */
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;
const Image = styled.img`
  height: 90%;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size:50px;
`;
const Description = styled.p`
  letter-spacing: 3px;
  font-size:20px;
  margin: 50px 0px;
`;
const Button = styled.button`
  padding: 10px;
  /* border:1px solid gray; */
  color: #504b4b;
  background-color:white;
  font-weight:500;
  cursor: pointer;
  &:hover{
    transform:scale(1.1);
    transition:all .1s ease;
}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <i class="bi bi-caret-left-fill"></i>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {data.map((item) => (
            <Slide bg={item.bg}>
              <ImgContainer>
                <Image src={item.img} alt="" />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.name}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <i class="bi bi-caret-right-fill"></i>
        </Arrow>
      </Container>
    </>
  );
};

export default Slider;
