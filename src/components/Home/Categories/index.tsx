"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

import { categories } from "@/config/site";

export function Categories() {
  return (
    <Styles.CategoriesContainer
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index}>
          <CategoryItem
            title={category.title}
            link={category.link}
            image={category.image}
          />
        </SwiperSlide>
      ))}
    </Styles.CategoriesContainer>
  );
}

function CategoryItem({ title, link, image }) {
  return (
    <Styles.CategoryItemContainer>
      <Link href={link}>
        <SlideImage
          src={image}
          width={1000}
          height={1000}
          alt={title || "Imagem da categoria"}
        />
      </Link>
    </Styles.CategoryItemContainer>
  );
}
