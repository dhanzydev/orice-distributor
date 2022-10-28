import React from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import Home from "./components/Home/Home.jsx";
import Product from "./components/Product/Product"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Home />
      <Product/>
      <Footer/>
    </div>
  );
};

export default App;
