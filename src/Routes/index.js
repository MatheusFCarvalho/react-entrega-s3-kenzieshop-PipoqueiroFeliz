import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Products } from "../pages/products";

export function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
