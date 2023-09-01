import { catogeries } from "../data/data";
import { mobile } from "../responsive";
import CatogeryItem from "./gatogeryItem.jsx";
import { styled } from "styled-components";

const Container = styled.div`
    
   display: flex;
   justify-content: space-between;
   padding-top: 10px;
   ${mobile({flexDirection:'column'})}
`;

const Catogeries = () => {
  return (
    <>
      <Container>
        {catogeries.map((item) => (
          <CatogeryItem item={item} />
        ))}
      </Container>
    </>
  );
};

export default Catogeries;
