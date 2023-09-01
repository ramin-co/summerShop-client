// import Product from "./pages/Product";
import Home from "./pages/home";
import ProductList from "./pages/ProductList";
import Wrong from "./pages/wrong";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart";
import {
  Router,
  BrowserRouter,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Nav from "./components/Nav";
import Product from "./pages/Product";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currenUser);
  // const user = localStorage.getItem("user");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? redirect("/") : <Wrong />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:catogeries" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
      {/* <Nav/> */}
    </>
  );
}

export default App;
