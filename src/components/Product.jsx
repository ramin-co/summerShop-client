import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
opacity:0;
font-size:20px;
     display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  transition:all .5s ease;
  background-color:rgb(0,0,0,.2);
  width:100%;
  height:100%;

`;
const Container = styled.div`
  flex: 1;
  min-width: 300px;
  height: 350px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  position: relative;
  cursor: pointer;
  &:hover ${Info}{
    opacity:1;
  }
`;
const Circle = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
border-radius: 50%;
  height: 75%;
  z-index: 1;
`;

const Icon = styled.i`
    widows: 40px;
    height: 40px;
    background-color:whitesmoke;
    border-radius:50%;
    padding: 10px;
    margin: 10px;
    transition:all .5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        transform:scale(1.1);
        background-color:#e9f5f5;
    }
`;


const Product = ({ item }) => {
  return (
    <>
      <Container>
        {/* <Circle /> */}
        <Image src={item.img} />
        <Info>
          <Icon>
            <i class="bi bi-cart3"></i>
          </Icon>
          <Icon>
            <i class="bi bi-heart"></i>
          </Icon>
          <Link to={`/product/${item._id}`}>
          <Icon>
            <i class="bi bi-search"></i>
          </Icon>
          </Link>
        </Info>
      </Container>
    </>
    
  );
};

export default Product;
