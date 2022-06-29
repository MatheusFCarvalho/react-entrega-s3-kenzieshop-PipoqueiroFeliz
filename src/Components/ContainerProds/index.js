import { useSelector } from "react-redux";
import { ProdCard } from "./ProdCard";
import { StyledContainer } from "./style";

export function ContainerProds() {
  const products = useSelector((state) => state.prods);
  return (
    <>
      <StyledContainer>
        {products.map((prod, i) => (
          <ProdCard key={i} product={prod} />
        ))}
      </StyledContainer>
    </>
  );
}
