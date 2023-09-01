import { styled } from "styled-components";
import { productsItem } from "../data/data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const Text = styled.h1``;

const Products = ({ cat, filters, sort, home }) => {
  const [products, setProducts] = useState([]);
  const [filtredPtoducts, setFilterdProducts] = useState([]);

  useEffect(() => {
    const findPro = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://212.23.201.180:80/api/product/find/?catogery=${cat}`
            : "http://212.23.201.180:80/api/product/find"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    findPro();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterdProducts(
        products.filter((item) => {
          return Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          });
        })
      );
  }, [cat, products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterdProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "price (Asc)") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else {
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    }
  }, [sort]);

  return (
    <>
      <Container>
        {cat
          ? filtredPtoducts.map((item) => <Product item={item} />)
          :( home ? products.sort((a,b)=>a.createdAt-b.createdAt).slice(0,8).map(item=><Product item={item}/>) : products.map((item) => <Product item={item} />))}
      </Container>
    </>
  );
};

export default Products;
