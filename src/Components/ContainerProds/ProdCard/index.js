import { useDispatch } from "react-redux";
import { addProdThunks } from "../../../store/modules/cart/thunks";
import { StyledCard } from "../style";
import { useSelector } from "react-redux";

export function ProdCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleAddProd() {
    dispatch(addProdThunks(product, cart));
  }

  return (
    <StyledCard>
      <h2>{product.name}</h2>
      <p>Preço: R${product.price},00</p>
      <img src={product.img} alt={product.name} />
      <button onClick={handleAddProd}>Adicionar produto</button>
    </StyledCard>
  );
}
