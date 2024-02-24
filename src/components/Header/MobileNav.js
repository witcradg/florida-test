"use client"

import * as React from "react"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import site from "@/json/site.config.json"
import { RxHamburgerMenu } from "react-icons/rx"

// import { ViewVerticalIcon } from "@radix-ui/react-icons"

// import { docsConfig } from "@/config/docs"
// import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import headerJson from "@/json/header.json"

export const Icons = {
  logo: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
}

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-3xl hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <RxHamburgerMenu />
          {/* <svg
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M3 5H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 12H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg> */}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-0">
        <MobileLink
          href="/"
          className="flex items-center pl-1"
          onOpenChange={setOpen}
        >
          <Image src="/favicon-32x32.png" alt="hero" width={32} height={32} />
          <span className="m-2 text-2xl font-bold">{site.config.title}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-3 text-2xl">
          <MobileLink
            href="/"
            className="mt-4 flex items-center"
            onOpenChange={setOpen}
          >
            <span className="font-base text-2xl">
              {headerJson.mainMenu[0].label}
            </span>
          </MobileLink>
          <div className="mt-6 flex flex-col space-y-3 text-2xl">
            <div className="underline">{headerJson.mainMenu[1].label}</div>
            {headerJson.submenu1?.map(
              (item) =>
                item.link && (
                  <MobileLink
                    className="ml-4 text-lg"
                    key={item.link}
                    href={item.link}
                    onOpenChange={setOpen}
                  >
                    {item.label}
                  </MobileLink>
                )
            )}
          </div>
          <div className="mt-6 flex flex-col space-y-3 text-2xl">
            <div className="underline">{headerJson.mainMenu[2].label}</div>
            {headerJson.submenu2?.map(
              (item) =>
                item.link && (
                  <MobileLink
                    className="ml-4 text-lg"
                    key={item.link}
                    href={item.link}
                    onOpenChange={setOpen}
                  >
                    {item.label}
                  </MobileLink>
                )
            )}
          </div>
          {/* <div className="flex flex-col space-y-2 text-black"> */}
          {/* {headerJson.mainMenu[2].label} */}
          {/* {docsConfig.sidebarNav.map((item, index) => (
                            <div key={index} className="flex flex-col space-y-3 pt-6">
                                <h4 className="font-medium">{item.label}</h4>
                                {item?.items?.length &&
                                    item.items.map((item) => (
                                        <React.Fragment key={item.link}>
                                            {!item.disabled &&
                                                (item.link ? (
                                                    <MobileLink
                                                        href={item.link}
                                                        onOpenChange={setOpen}
                                                        className="text-muted-foreground"
                                                    >
                                                        {item.label}
                                                        {item.label && (
                                                            <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                                                {item.label}
                                                            </span>
                                                        )}
                                                    </MobileLink>
                                                ) : (
                                                    item.label
                                                ))}
                                        </React.Fragment>
                                    ))}
                            </div>
                        ))} */}
          {/* </div> */}
          {/* <MobileLink
                        href="/"
                        className="flex items-center"
                        onOpenChange={setOpen}
                    >
                        <span className="font-bold text-2xl">{headerJson.mainMenu[2].label}</span>
                    </MobileLink> */}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

function MobileLink({ href, onOpenChange, className, children, ...props }) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}

export default MobileNav
