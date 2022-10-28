import React from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import Home from "./components/Home/Home.jsx";
import Product from "./components/Product/Product";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact.jsx";
import Profile from "./components/Profile/Profile.jsx";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Home />
      <Product />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
