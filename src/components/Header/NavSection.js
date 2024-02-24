"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { NavigationMenuSub } from "@radix-ui/react-navigation-menu"

import headerJson from "@/json/header.json"
import { cn } from "@/lib/utils"

//TODO: use NavigationMenuLink instead of Link
// import Link from "next/link"

const nochevronStyle =
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 group 2text-xl"
const navButtonStyle = nochevronStyle + " text-white bg-blue-900"

export const NavButton = ({ target, label }) => {
  return (
    <div>
      <NavigationMenu className="m-2 text-white">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href={target} className={navButtonStyle}>
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const createSubmenu = (submenu) => {
  return (
    <NavigationMenuSub className="">
      <NavigationMenuList className="group flex flex-1 list-none flex-col items-start justify-start space-x-1">
        {submenu.map((item) => (
          <NavigationMenuItem key={item.link}>
            <NavigationMenuLink href={item.link} className={nochevronStyle}>
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenuSub>
  )
}

const NavSection = () => {
  return (
    <>
      <div id="navwrapper" className="hidden text-xl lg:block">
        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={headerJson.mainMenu[0].link}
                className={nochevronStyle}
              >
                {headerJson.mainMenu[0].label}
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className=" text-xl">
                {headerJson.mainMenu[1].label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {createSubmenu(headerJson.submenu1)}
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className=" text-xl">
                {headerJson.mainMenu[2].label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {createSubmenu(headerJson.submenu2)}
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href={headerJson.mainMenu[3].link}
                className={nochevronStyle}
              >
                {headerJson.mainMenu[3].label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <NavButton
        target={headerJson.mainMenu[4].link}
        label={headerJson.mainMenu[4].label}
      />
    </>
  )
}

export default NavSection