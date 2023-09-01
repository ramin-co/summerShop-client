import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  /* object-fit:cover ; */
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color:yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 50px;
  color: whitesmoke;
  margin-bottom: 10px;
`;
const Botton = styled.button`
  padding: 10px;
  border: none;
  background-color: white;
  color: gray;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.1s ease;
  }
`;
const CatogeryItem = ({ item }) => {
  return (
    <>
      <Container>
        <Link to={`/products/${item.cat}`}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Botton>SHOP NOW</Botton>
          </Info>
        </Link>
      </Container>
    </>
  );
};

export default CatogeryItem;
