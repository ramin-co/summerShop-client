import Footer from "../components/Footer";
import Announcement from "../components/announcement";
import Navbar from "../components/Nav";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { styled } from "styled-components";
import { UseSelector, useSelector, useDispatch } from "react-redux";
import { remove, removeCart, decrease, increase } from "../redux/cartRedux";

const Container = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Button = styled.button`
  width: ${(props) => props.size || "20%"};
  padding: 10px 10px;
  font-size: 20px;
  font-weight: 300;
  background-color: ${(props) =>
    props.type === "fill" ? "black" : "whiteSmoke"};
  color: ${(props) => (props.type === "fill" ? "white" : "black")};
  cursor: pointer;
  border: ${(props) => (props.type === "fill" ? "none" : "1px solid gray")};
  ${mobile({ width: "30%", fontSize: "14px" })}
`;

const Wraper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  ${mobile({ flexDirection: "column" })}
`;
const Products = styled.div`
  flex: 8;
  ${mobile({ width: "100%", marginBottom: "10px" })}
`;
const Product = styled.div`
  display: flex;
  gap: 40px;
  ${mobile({gap:'20px' })}
  /* justify-content: space-between; */
`;
const Image = styled.img`
  width: 40%;
  height: 60vh;
  ${mobile({ width: "45%" ,height:'40vh'})}
  display:flex;
  justify-content: center;
  align-items: center;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const DetailsTiltle = styled.h1`
  font-size: 70px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ fontSize: "30px" })}
`;

const DetailsDesc = styled.p`
  width: 50%;
  margin: 10px 0px;
  ${mobile({ width: "100%" })}
`;

const DetailsId = styled.span`
  margin: 10px 0px;
`;
const DetailsColor = styled.div`
  margin: 10px 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const DetailsPrice = styled.div`
  margin: 10px 0px;
  font-size: 40px;
  font-weight: 200;
`;

const ContainerAmount = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  ${mobile({ marginRight: "30px" })};
`;

const Icon = styled.i`
  font-size: 30px;
  cursor: pointer;
`;

const Amount = styled.span`
  font-size: 20px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 40px;
height: 40px; */
  border-radius: 5px;
  border: 1px solid teal;
  margin: 0px 5px;
  ${mobile({ margin: "0px 10px" })}
`;

const Summary = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  border: 1px solid lightgray;
  height: 50vh;
  padding: 10px 20px;
`;

const SummaryTitle = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin: 10px 0px;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const SummaryItemText = styled.span`
  font-size: 20px;
  font-weight: 300;
`;
const SummaryItemValue = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`;
// const Summary=styled.div``
const CollectionIcons = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  /* width:100%; */
`;
const DeleteButton = styled.i`
  color: red;
  font-size: 25px;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleTrash = (id) => {
    dispatch(remove( {id} ));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Top>
        <Button>
          <Link style={{ textDecoration: "none" }} to="/">
            Continue Shopping
          </Link>
        </Button>
        <Button onClick={()=>dispatch(removeCart())}>Empty Cart</Button>
        {/* <Button type="fill">CHEACKOUT NOW</Button> */}
      </Top>
      <Wraper>
        <Products>
          {cart.products.map((product) => (
            <Product>
              <Image src={product.img} />
              <ProductDetails>
                <DetailsTiltle>{product.title}</DetailsTiltle>
                <DetailsDesc>{product.desc}</DetailsDesc>
                <DetailsColor color={product.color}></DetailsColor>
                <DetailsPrice>
                  $ {product.quantity * product.price}
                </DetailsPrice>
                <CollectionIcons>
                  <ContainerAmount>
                    <Icon onClick={()=>dispatch(decrease(product._id))}>
                      <i class="bi bi-dash-lg"></i>
                    </Icon>
                    <Amount>{product.quantity}</Amount>
                    <Icon onClick={()=>dispatch(increase(product._id))}>
                      <i class="bi bi-plus-lg"></i>
                    </Icon>
                  </ContainerAmount>
                  <DeleteButton onClick={() => handleTrash(product._id)}>
                    <i class="bi bi-trash3"></i>
                  </DeleteButton>
                </CollectionIcons>
              </ProductDetails>
            </Product>
          ))}
        </Products>
        <Summary>
          <SummaryTitle>Your Summary</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>TOTAL:</SummaryItemText>
            <SummaryItemValue color="black" size="16">
              $ {cart.total}
            </SummaryItemValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>DISCOUNT:</SummaryItemText>
            <SummaryItemValue color="red" size="20">
              $ 5
            </SummaryItemValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>SUB TOTAL:</SummaryItemText>
            <SummaryItemValue color="green" size="30">
              $ {cart.total - 5}
            </SummaryItemValue>
          </SummaryItem>
          <Button type="fill" size="100%">
            CHECKOUT NOW
          </Button>
        </Summary>
      </Wraper>
      <Footer />
    </Container>
  );
};

export default Cart;
