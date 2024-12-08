import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

//type结合interface

const nameArr = [
  { name: "AboutMe", link: "/about" },
  { name: "proto", link: "/proto" },
  { name: "type", link: "/proto/type" },
  { name: "name4", link: "/about" },
  { name: "name5", link: "/about" },
];

export default function NavBar() {
  return (
    <>
      <nav className="w-full flex justify-between items-center py-4 px-6 ">
        <div>
          <Link
            href="/"
            // target="_blank"
            // rel="noopener noreferrer"
            className={navigationMenuTriggerStyle()}
          >
            Name
          </Link>
        </div>
        {/* <input placeholder="123" /> */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center">
              {nameArr.map((item, index) => {
                return (
                  <div key={index}>
                    <Link
                      href={item.link}
                      // target="_blank"
                      // rel="noopener noreferrer"
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
