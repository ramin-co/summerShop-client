import { styled } from "styled-components";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import LoginCall  from "../redux/apiCall";
import { useDispatch, useSelector, } from "react-redux";
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 20px;
  border: 1px solid teal;
  background-color: rgba(0, 0, 0, 0.2);
  ${mobile({ width: "80%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 10px;
  padding: 10px 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  color: white;
  background-color: teal;
  padding: 15px 20px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled{
    color:green;
    cursor: not-allowed;
  }
`;

const Titr = styled.span`
  font-size: 24px;
  font-weight: 200;
  ${mobile({ fontSize: "15px" })}
`;

const Link = styled.a`
  text-decoration: underline;
  color: blue;
  font-size: 20px;
  cursor: pointer;
  ${mobile({ fontSize: "13px", textDecoration: "none" })}
`;

const Error=styled.span`
  color:red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const user = useSelector(state=>state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    LoginCall(dispatch, { username, password });
    
  };
  useEffect(()=>{
    if(user.currentUser){
      navigate('/')
    }
  },[user.currentUser])

  return (
    <Container>
      <Wraper>
        <Title>LOG IN</Title>
        <Form>
          <Input
            placeholder="user name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleLogin} disabled={user.isFetching}>SIGN IN</Button>
          {user.error && <Error>somthing wrong ....</Error>}
          <Titr>
            Do you have any account? <Link>Create Acount</Link>
          </Titr>
        </Form>
      </Wraper>
    </Container>
  );
};

export default Login;
