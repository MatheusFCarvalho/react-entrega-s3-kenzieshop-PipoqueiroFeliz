import { useDispatch, useSelector } from "react-redux";
import {
  addOneThunks,
  remOneThunks,
} from "../../../../store/modules/cart/thunks";
import { StyledQtd } from "../../style";

function QtdControl(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { qtd, product, index } = props;

  function handleAddOne() {
    dispatch(addOneThunks(index, product, cart));
  }

  function handleRemOne() {
    dispatch(remOneThunks(index, product, cart));
  }
  return (
    <StyledQtd>
      <p>Qtd: {qtd}</p>
      <div className="control">
        <button onClick={handleAddOne}>+</button>
        <button onClick={handleRemOne}>-</button>
      </div>
    </StyledQtd>
  );
}
export default QtdControl;
