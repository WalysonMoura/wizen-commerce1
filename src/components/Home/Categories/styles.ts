"use client"

import Image from "next/image"
import Link from "next/link"
import { styled } from "styled-components"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Navigation, Pagination } from "swiper"

import { siteConfig } from "@/config/site"


export const CategoriesContainer = styled(Swiper)`
width: 100%;
  height: 400px;`;

export const CategoryItemContainer = styled.div`

text-align: center;
  font-size: 18px;
  background: #fff;
  width: 5rem;
  height: 8rem;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Image = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`