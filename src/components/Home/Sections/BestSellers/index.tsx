import * as Style from "./styles";

export function BestSellers() {
  return (
    <Style.BestSellersContainer>
      <h2>Mais vendidos</h2>
      <ProductsCarousel />
    </Style.BestSellersContainer>
  );
}