"use client";
import * as Style from "./styles";
import { getCurrentMonth } from "@/utils/getCurrentMonth";

export function Promotions() {
  const currentMonth = getCurrentMonth();

  return (
    <Style.PromotionsContainer>
      <h2>Promoções de {currentMonth}</h2>
      <ProductsCarousel />
    </Style.PromotionsContainer>
  );
}
