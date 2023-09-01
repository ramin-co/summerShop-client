import { styled } from "styled-components";
import {mobile} from '../responsive';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({flexDirection:'column'})}

`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.h1`
  font-size: 40px;
`;
const Description = styled.div`
  margin: 20px 0px;
  ${mobile({fontSize:'14px',width:'300px'})}

`;
const SotialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  background-color: #${(props) => props.color};
  padding: 10px;
  margin-right: 20px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const Center = styled.div`
  flex: 1;
  height: 50%;
  padding: 20px;
  margin-bottom:20px;
  ${mobile({display:'none'})}

`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
    padding: 20px;
    height:300px;
    ${mobile({fontSize:'14px',width:'350px'})}

`;

const ContactItem=styled.div`
    margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>RAMIN</Logo>
          <Description>
          Hello friends !
While welcoming you all, I would like to introduce this store to you.
Visit Catogery, it is not without grace, we have prepared beautiful things for you.
You can use the search to find the product you want.
Finally, after choosing each product, specify the quantity and then add to your shopping cart.
I need to remind you that this is a trial version and it is only for viewing and the payment part is inactive.
          </Description>
          <SotialIcon>
            <Icon color="3a86ff">
              <i class="bi bi-facebook"></i>
            </Icon>
            <Icon color="7ae582">
              <i class="bi bi-whatsapp"></i>
            </Icon>
            <Icon color="ff006e">
              <i class="bi bi-instagram"></i>
            </Icon>
            <Icon color="68b0ab">
              <i class="bi bi-telegram"></i>
            </Icon>
          </SotialIcon>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>home</ListItem>
            <ListItem>cart</ListItem>
            <ListItem>login</ListItem>
            <ListItem>register</ListItem>
            <ListItem>logout</ListItem>
            <ListItem>create new product</ListItem>
            <ListItem>go to products</ListItem>
            <ListItem>catogeries</ListItem>
            <ListItem>T-shirts</ListItem>
            <ListItem>Jackets</ListItem>
          </List>
        </Center>
        <Right>
          <Title>
            Contact us
          </Title>
          <ContactItem><i style={{marginRight:'10px'}} class="bi bi-geo-alt"></i> Iran,Khuzestan,MIS,Main Streat</ContactItem>
          <ContactItem><i style={{marginRight:'10px'}} class="bi bi-telephone"></i> +98 9167273453</ContactItem>
          <ContactItem><i style={{marginRight:'10px'}} class="bi bi-envelope-at"></i> ramin.ghasemi75@yahoo.dev</ContactItem>
        </Right>
      </Container>
    </>
  );
};

export default Footer;
