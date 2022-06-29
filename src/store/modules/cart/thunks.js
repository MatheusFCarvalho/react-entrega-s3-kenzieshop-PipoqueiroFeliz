import { addCart, addOneProd, remCart, remOneProd } from "./action";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addProdThunks = (product, cart) => (dispatch) => {
  let cartAtual = [];
  if (cart.includes(product)) {
    cartAtual = cart.filter((prod) => prod.id !== product.id);
    product.qtd++;
    cartAtual = [...cartAtual, product];
    toast.success(`Você tem ${product.qtd} ${product.name}s em seu carrinho`);
  } else {
    cartAtual = [...cart, product];
    toast.success(`${product.name} adicionado em seu carrinho`);
  }
  const action = { type: "addProd", retorno: cartAtual };

  localStorage.setItem("@kenzieShop:cart", JSON.stringify(cartAtual));
  dispatch(addCart(action));
};

export const remProdThunks = (product, cart) => (dispatch) => {
  product.qtd = 1;
  const cartAtual = cart.filter((prod) => product.id !== prod.id);
  const action = { type: "remProd", retorno: cartAtual };

  toast.error(`${product.name} removido!`);
  localStorage.setItem("@kenzieShop:cart", JSON.stringify(cartAtual));
  dispatch(remCart(action));
};

export const addOneThunks = (index, product, cart) => (dispatch) => {
  cart[index].qtd++;

  const action = { type: "addOneProd", retorno: [...cart] };

  toast.success(`Você tem ${product.qtd} ${product.name}s em seu carrinho`);
  localStorage.setItem("@kenzieShop:cart", JSON.stringify(cart));
  dispatch(addOneProd(action));
};
export const remOneThunks = (index, product, cart) => (dispatch) => {
  cart[index].qtd--;

  if (cart[index].qtd === 0) {
    cart = cart.filter((prod) => prod.id !== product.id);
    toast.error(`Você removeu ${product.name} em seu carrinho`);
  } else {
    toast.success(`Você tem ${product.qtd} ${product.name}s em seu carrinho`);
  }

  const action = { type: "remOneProd", retorno: [...cart] };

  localStorage.setItem("@kenzieShop:cart", JSON.stringify(cart));
  dispatch(remOneProd(action));
};
