"use client";

import * as Style from "./styles";
import { FaStar } from "react-icons/fa";

export function CardProduct({ product }) {
  return (
    <Style.CardProductContainer>
      <Style.Image
        src={`/images/products/caneca.jpg`}
        width={1000}
        height={1000}
        alt={product.slug}
      />
      <Style.AddFavorites></Style.AddFavorites>
      <div>
        <Style.PriceContent>
          <Style.Price>R$ 1.079,89</Style.Price>
        </Style.PriceContent>

        <Style.Stars>
          <div>
            <FaStar size={10} color="#FFEF40"/>
            <FaStar size={10} color="#FFEF40"/>
            <FaStar size={10} color="#FFEF40"/>
            <FaStar size={10} color="#FFEF40"/>
            <FaStar size={10} color="#FFEF40"/>
          </div>
          <span>105</span>
        </Style.Stars>
        <Style.TitleProduct>Caneca Naruto</Style.TitleProduct>
      </div>
      <Style.AddCartButton>Adicionar ao Carrinho</Style.AddCartButton>
    </Style.CardProductContainer>
  );
}
