import { styled } from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { publicRequest } from "../request/requestMethods";
import {useNavigate} from 'react-router-dom'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("./images/background.jpg");
`;

const Wraper = styled.div`
  width: 40%;
  padding: 20px;
  border: 1px solid teal;
  background-color: rgba(0, 0, 0, 0.2);
  ${mobile({ width: "80%", padding: "10px" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
  ${mobile({ marginLeft: "5px" })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin-right: 10px;
  padding: 10px 10px;
  margin-bottom: 10px;
  ${mobile({ margin: "5px" })}
`;

const Agenment = styled.div`
  width: 100%;
  margin-bottom: 10px;
  ${mobile({ display: "none" })}
`;

const Button = styled.button`
  width: 40%;
  border: none;
  color: white;
  background-color: teal;
  padding: 15px 20px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Register = () => {
  const [user, setUser] = useState({});
  const navigate=useNavigate();
console.log(user)
  const handleClick = (e) => {
    e.preventDefault();
    const createUser = async () => {
      try {
        const res = await publicRequest.post("/auth/register", user);
        console.log('response:',res);        
         navigate('/login');
      } catch (error) {
        console.log(error);
      }
    };
    createUser();
  };

  return (
    <Container>
      <Wraper>
        <Title>CREATE NEW ACCOUNT</Title>
        <Form>
          <Input
            name="name"
            placeholder="name"
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              })
            }
          />
          <Input
            name="lastname"
            placeholder="last name"
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              })
            }
          />
          <Input
            name="username"
            placeholder="user name"
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              })
            }
          />
          <Input
            name="password"
            placeholder="password"
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              })
            }
          />
          <Input
            name="email"
            placeholder="email"
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              })
            }
          />
          {/* <Input name="confirm password" placeholder="confirm password" onChange={(e)=>setUser((prev=>{return {...prev, [e.target.name]:e.target.value}}))} /> */}
          <Input
            name="address"
            placeholder="address"
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              })
            }
          />
          <Input
            name="phone"
            placeholder="phone"
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              })
            }
          />
          <Agenment>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            omnis dolor impedit vitae ipsa quae?
          </Agenment>
          <Button onClick={(e) => handleClick(e)}>SEND</Button>
        </Form>
      </Wraper>
    </Container>
  );
};

export default Register;
