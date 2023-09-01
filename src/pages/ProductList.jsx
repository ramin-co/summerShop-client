import Navbar from "../components/Nav";
import Announcement from "../components/announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Products from "../components/products";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const FilterContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 20px;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  })}
`;
const FilterText = styled.span`
  margin-right: 20px;
  ${mobile({ marginBottom: "10px" })}
`;

const Select = styled.select`
  border: 1px solid lightgray;
  padding: 10px;
  margin-right: 20px;
  ${mobile({ marginRight: "10px" })}
`;
const Option = styled.option`
  font-size: 14px;
  margin-bottom: 10px;
`;

const ContainerSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductList = () => {
  const params=useParams()
  const cat=params.catogeries;
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  
  const handleFilters=(e)=>{
    setFilters({
      ...filters,
      [e.target.name]:e.target.value.toLowerCase()
    })
  };
  console.log(filters,'filters');

console.log(sort,':sort')



  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <ContainerSelect>
            <Select name='color' onChange={(e)=>handleFilters(e)}>
              <Option  disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Yellow</Option>
              <Option>Pink</Option>
            </Select>
            <Select name='size' onChange={(e)=>handleFilters(e)}>
              <Option disabled selected>
                Size
              </Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
              <Option>XXL</Option>
            </Select>
          </ContainerSelect>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option selected>Newest</Option>
            <Option>price (Asc)</Option>
            <Option>price (Des)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
