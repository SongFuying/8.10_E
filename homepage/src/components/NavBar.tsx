import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";

const nameArr = ["ttt", "name2", "name3", "name4", "name5"];

export default function NavBar() {
  return (
    <>
      <nav className="w-full flex justify-between items-center py-4 px-6 ">
        <div className={navigationMenuTriggerStyle()}>Name</div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center">
              {nameArr.map((item, index) => {
                return (
                  <div key={index} className={navigationMenuTriggerStyle()}>
                    {item}
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
