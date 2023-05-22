import * as Style from "./styles";

export function Promotions() {
  const currentMonth = getCurrentMonth();

  return (
    <Style.PromotionsContainer>
      <h2>Promoções de {currentMonth}</h2>
      <ProductsCarousel />
    </Style.PromotionsContainer>
  );
}
