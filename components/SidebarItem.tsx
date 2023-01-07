"use client";

import React from "react";
import { Home, Calendar, User, Settings } from "react-feather";
import { usePathname } from "next/navigation";

const icons = {
  Home,
  Calendar,
  User,
  Settings,
};

const SidebarItem = ({ link = {} }) => {
  const pathname = usePathname();
  console.log({ pathname });
  const isActive = pathname === link.link;
  const Icon = icons[link?.icon];
  return (
    <a
      href={link.link}
      className={`-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 ${
        isActive ? "bg-green-100" : ""
      }`}
    >
      <Icon />
      <div className="ml-4">
        <p className="text-base font-medium text-gray-900">{link.name}</p>
      </div>
    </a>
  );
};

export default SidebarItem;
