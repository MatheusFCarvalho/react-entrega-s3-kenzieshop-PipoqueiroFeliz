import { useDispatch, useSelector } from "react-redux";
import { remProdThunks } from "../../../store/modules/cart/thunks";
import { StyledCard } from "../style";
import QtdControl from "./QtdController";

export function CartProd({ product, index }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(remProdThunks(product, cart));
  }

  return (
    <StyledCard>
      <h2>{product.name}</h2>
      <img src={product.img} alt={product.name} />
      <QtdControl product={product} index={index} qtd={product.qtd} />
      <p>Preço: R${product.price},00</p>
      <button onClick={handleRemove}>Remover do carrinho</button>
    </StyledCard>
  );
}
