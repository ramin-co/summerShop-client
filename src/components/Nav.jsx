import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userRedux";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  ${mobile({ justifyContent: "flex-start" })}
`;
const Wraper = styled.div``;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ justifyContent: "flex-start", flex: "2" })}
`;
const Lang = styled.span`
  margin-right: 10px;
  ${mobile({ display: "none" })}
`;
const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid gray;
  padding: 5px;
  ${mobile({ width: "100%", justifyContent: "flex-start" })}
`;
const Input = styled.input`
  padding: 5px;
  border: none;
  ${mobile({ width: "100%" })}
`;
const Icon = styled.i`
  margin: 0px 5px;
  cursor: pointer;
  position: relative;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const Logo = styled.h1`
  font-size: 45px;
  font-weight: 600;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ justifyContent: "flex-end", flex: "3", paddingRight: "10px" })}
`;
const MenuItem = styled.span`
  margin-left: 20px;
  font-size: 20px;
  ${mobile({ fontSize: "14px", marginLeft: "10px" })}
`;
const CartAmount = styled.div`
  position: absolute;
  top: -18px;
  right: -6px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: white;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  ${mobile({ top: "", padding: "5px" })}
`;

const Name = styled.div``;
const ProfileDet = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const LogOut = styled.span``;

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  // const navigate=useNavigate()

  return (
    <Container>
      <Left>
        <Lang>EN</Lang>
        <Search>
          <Input placeholder="Search" />
          <Icon>
            <i class="bi bi-search"></i>
          </Icon>
        </Search>
      </Left>
      <Center>
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: "rgba(0,0,0,.7)" }}
        >
          <Logo>RAMIN .</Logo>
        </Link>
      </Center>
      <Right>
        {user ? (
          <ProfileDet>
            <Name>{user.name}</Name>{" "}
            <LogOut onClick={() => dispatch(logOut())}>
              <i class="bi bi-power"></i>
            </LogOut>
          </ProfileDet>
        ) : (
          <>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "rgba(0,0,0,.7)" }}
            >
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "rgba(0,0,0,.7)" }}
            >
              <MenuItem>SIGNIN</MenuItem>
            </Link>
          </>
        )}

        <MenuItem>
          <Link
            to={"/cart"}
            style={{ textDecoration: "none", color: "rgba(0,0,0,.7)" }}
          >
            <Icon>
              <CartAmount>{cart.quantity}</CartAmount>
              <i class="bi bi-cart3"></i>
            </Icon>
          </Link>
        </MenuItem>
      </Right>
    </Container>
  );
};

export default Navbar;
