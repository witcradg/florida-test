"use client"

import Image from "next/image"
import Link from "next/link"
import NavSection from "./NavSection"
import MobileNav from "./MobileNav"
import { FaShoppingCart } from "react-icons/fa"
import { useSnipcart } from "../SnipcartProvider"

const NavigationBar = () => {
  const { cart } = useSnipcart()
  return (
    <div className="align-center flex items-center justify-between px-16">
      <div>
        <Link href="/">
          <Image
            src="/img/logo-thcflorida.png"
            alt="THC Florida"
            width={120}
            height={120}
          />
        </Link>
      </div>
      <NavSection />
      <p className="flex items-center m-0">
        <button className="snipcart-checkout flex justify-center items-center text-dark text-2xl bg-transparent border-none cursor-pointer">
          <div className="flex flex-row">
            <FaShoppingCart className="text-3xl" />
            {cart && (
              <span className="pt-1 mx-4">
                &nbsp;${cart?.subtotal.toFixed(2)}
              </span>
            )}
          </div>
        </button>
      </p>
      <MobileNav />
    </div>
  )
}

export default NavigationBar
