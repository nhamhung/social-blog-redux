import React from "react";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <AiIcons.AiOutlineLogin />,
    cName: "nav-text",
  },
  {
    title: "Register",
    path: "/register",
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: "nav-text",
  },
];
