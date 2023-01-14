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
    <div className="relative grid gap-2 px-2 py-2 sm:gap-2 sm:p-2">
      {links.map((link) => {
        return <SidebarItem key={link.link} link={link} />;
      })}
    </div>
  );
};

export default Sidebar;
