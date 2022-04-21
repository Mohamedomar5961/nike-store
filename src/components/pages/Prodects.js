import React from "react";
import Item from "../Items/Item";
import Items from "../Items/Items";
import { Route, Routes } from "react-router-dom";
import FavPage from "../pages/FavPage";
import UnFavpage from "../pages/unFavpage";
import CartPage from "./CartPage";
const Prodects = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/product/:id" element={<Item />} />
        <Route path="/favorites" element={<FavPage />} />
        <Route path="/liked/:id" element={<UnFavpage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default Prodects;
