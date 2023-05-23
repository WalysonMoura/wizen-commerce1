import { getCurrentMonth } from "@/utils/getCurrentMonth";

export type SiteConfig = typeof siteConfig;

const currentMonth = getCurrentMonth();

export const categories = [
  {
    title: "Eletrônicos",
    url: "/",
    image: "/images/categories/eletrônicos.png",
  },
  {
    title: "Pets",
    url: "/",
    image: "/images/categories/eletrônicos.png",
  },
  {
    title: "Beleza",
    url: "/",
    image: "/images/categories/eletrônicos.png",
  },
];

export const featuresBenefitsData = [
  {
    title: "Frete Grátis",
    description: "Entrega gratuita para todo o Brasil.",
    icon: "RiTruckLine",
  },
  {
    title: "Pagamento Seguro",
    description: "Opções de pagamento seguras e confiáveis.",
    icon: "AiOutlineShoppingCart",
  },
  {
    title: "Produtos de Qualidade",
    description: "Garantia de produtos de alta qualidade.",
    icon: "IoIosHeart",
  },
];

export const siteConfig = {
  name: "Wizen Shop",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: `Promoções de ${currentMonth}`,
      href: "/promo-do-mes",
    },
    {
      title: "Pegue seu Cupom🎁",
      href: "/cupom",
    },
  ],
  productCategories: categories,
  bottomNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Produtos",
      href: "/carrinho",
    },
    {
      title: "Carrinho",
      href: "/carrinho",
    },
    {
      title: "Perfil",
      href: "/perfil",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  banners: [
    {
      name: "wizen-prime.png",
      href: "#",
    },
    {
      name: "wizen-prime.png",
      href: "#",
    },
  ],
};
