"use client";

import * as React from "react";
import Link from "next/link";
import * as Styles from "./styles";
//import { getPublishedBlogPosts } from "@/services/notion"
//import { useQuery } from "react-query"

//import { BlogPost } from "@/types/blogPost"
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { MdAccountCircle } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";

import { BlogPost } from "@/types/blogPost";
import { getSingleBlogPost } from "@/services/notion";

import { siteConfig } from "@/config/site";
import { MainNav } from "../main-nav";

export function DesktopMenu() {
  return (
    <Styles.DesktopMenuContainer>
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.fullLogo className="h-10 " />
      </Link>
      {/**<Search/> */}
      <Styles.Tracking>
        <FaMapMarkerAlt size={24} color="#009ED0" />
        <div>
          <span>Onde está meu pedido?</span>
          <h3>Rastrear Pedido</h3>
        </div>
      </Styles.Tracking>
      <Styles.Account>
        {/**
         * Login
         */}
        <MdAccountCircle size={24} color="#009ED0" />
        <div>
          <span>
            Descubra uma <strong>Experiência Personalizada!</strong>
          </span>

          <h3>
            Crie sua <strong>Conta</strong> agora ou faça seu
            <strong>Login</strong>
          </h3>
        </div>
      </Styles.Account>
    </Styles.DesktopMenuContainer>
  );
}
