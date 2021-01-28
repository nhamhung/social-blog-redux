import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

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
  {
    title: "Friends",
    path: "/Friends",
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: "nav-text",
  },
  {
    title: "Write Post",
    path: " ",
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: "nav-text",
  },

  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
