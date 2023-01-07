import React from "react";
import SidebarItem from "./SidebarItem";

const links = [
  {
    name: "Home",
    link: "/home",
    icon: "Home",
  },
  {
    name: "Calendar",
    link: "/calendar",
    icon: "Calendar",
  },
  {
    name: "Profile",
    link: "/profile",
    icon: "User",
  },
  {
    name: "Settings",
    link: "/settings",
    icon: "Settings",
  },
];

const Sidebar = () => {
  return (
    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
      {links.map((link) => {
        return <SidebarItem key={link.link} link={link} />;
      })}
    </div>
  );
};

export default Sidebar;
