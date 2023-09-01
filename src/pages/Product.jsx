import styled from "styled-components";
import Navbar from "../components/Nav";
import Announcement from "../components/announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/cartRedux";
import { publicRequest } from "../request/requestMethods";
import { mobile } from "../responsive";

const Wraper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* ${mobile({ padding: "20px" })} */

`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({  height: "300px" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: 400;
  ${mobile({ fontSize: "30px" })}
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 20px 0px;
  font-weight: 100;
`;
const Price = styled.div`
  font-size: 50px;
  font-weight: 200;
  margin-bottom: 30px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-bottom: 20px;
  ${mobile({ width: "100%" })}

`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterText = styled.span`
  font-size: 20px;
  margin-right: 10px;
  font-weight: 100;
`;
const FilterColor = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border: 1px solid lightgray;
  margin-right: 10px;
  cursor: pointer;
`;
const FilterSizeSelect = styled.select`
  padding: 10px;
  cursor: pointer;
`;
const FilterSizeOption = styled.option``;

const Container = styled.div``;

const Remove = styled.i`
  cursor: pointer;
  font-size: 20px;
`;

const Add = styled.i`
  cursor: pointer;
  font-size: 20px;
`;

const Amount = styled.div`
  border: 1px solid teal;
  padding: 5px 15px;
  margin: 0px 5px;
  border-radius: 5px;
`;
const Button = styled.button`
  padding: 15px 10px;
  border: 1px solid lightgray;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f8f2f2;
  }
  ${mobile({ marginLeft: "30px",width:'100px' ,borderRadius:'5px'})}

`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [pro, setPro] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log({ size, color, quantity });
  const handleQuantity = (type) => {
    switch (type) {
      case "dec": {
        quantity > 1 && setQuantity(quantity - 1);
        break;
      }
      case "inc": {
        setQuantity(quantity + 1);
        break;
      }
    }
  };

  const handleClick = () => {
    dispatch(
      addCart({
        product: { ...pro, color, size, quantity },
        id: pro._id,
      })
    );
  };
  console.log(cart);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/product/find/${id}`);
        console.log(res.data);
        setPro(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      {pro ? (
        <Wraper>
          <ImageContainer>
            <Image src={pro.img} />
          </ImageContainer>
          <InfoContainer>
            <Title>{pro.title}</Title>
            <Desc>{pro.desc}</Desc>
            <Price>$ {pro.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterText>color</FilterText>
                {pro.color.map((item) => {
                  return (
                    <FilterColor color={item} onClick={() => setColor(item)} />
                  );
                })}
              </Filter>
              <Filter>
                <FilterText>Size</FilterText>
                <FilterSizeSelect onChange={(e) => setSize(e.target.value)}>
                  {pro.size.map((s) => {
                    return <FilterSizeOption>{s}</FilterSizeOption>;
                  })}
                </FilterSizeSelect>
              </Filter>
            </FilterContainer>
            <FilterContainer>
              <Filter>
                <Remove onClick={() => handleQuantity("dec")}>
                  <i className="bi bi-dash-lg"></i>
                </Remove>
                <Amount>{quantity}</Amount>
                <Add onClick={() => handleQuantity("inc")}>
                  <i className="bi bi-plus-lg"></i>
                </Add>
              </Filter>
              <Button onClick={handleClick}>Add To Cart</Button>
            </FilterContainer>
          </InfoContainer>
        </Wraper>
      ) : (
        <h1>no product</h1>
      )}
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
