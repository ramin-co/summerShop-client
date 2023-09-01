import { styled } from "styled-components";
import {mobile} from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 60vh;
  background-color: #c9f5f5;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 20px;
  ${mobile({fontSize:"40px"})}
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({fontSize:"20px", textAlign:'center'})}
`;
const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({width:'80%'})}

`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  flex: 8;
  border: none;
  padding-left: 20px;
  font-size: 14px;
`;
const Icon = styled.i`
 width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color:white;
  background-color:teal;
  cursor: pointer;
  
`;

const NewsLetter = () => {
  return (
    <>
      <Container>
        <Title>News Letter</Title>
        <Description>
          Send your mail for us until we send newest news for you
        </Description>
        <InputContainer>
          <Input placeholder="Send email ..."/>
          <Icon >
            <i  class="bi bi-send-fill"></i>
          </Icon>
        </InputContainer>
      </Container>
    </>
  );
};

export default NewsLetter;
