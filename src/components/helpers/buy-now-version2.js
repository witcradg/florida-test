"use client"

import React, { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useSnipcart, useSnipcartState } from "@/components/SnipcartProvider"
export const BuyNow = ({ product, outOfStock }) => {
  const snipcartRef = useRef()
  const router = useRouter()

  product.productImage.url = product.productImage.filePath.replace(
    "../public",
    ""
  )

  useEffect(() => {
    snipcartRef.current = window.Snipcart
  }, [])

  // Now you can use snipcartRef.current anywhere in your component
  // For example, in a click handler:
  const handleClick = (e) => {
    console.log("e", e)

    if (snipcartRef.current) {
      // Use snipcartRef.current here

      console.log("snipcartRef.current", snipcartRef.current)
      console.log("snipcartRef.current.api", snipcartRef.current.api)
      console.log(
        "snipcartRef.current.events.on item.added",
        snipcartRef.current.events.on("item.added", (cartItem) => {
          console.log(cartItem)
        })
      )

      const foo = snipcartRef.current.events.on("item.added", (cartItem) => {
        console.log("------------>", cartItem)
      })

      console.log("foo", foo)

      const item = {
        id: product.sku,
        name: product.name,
        price: product.discountedPrice,
        url: product.url,
        quantity: 1,
      }

      snipcartRef.current.api.cart.items.add(item)

      foo()
      const checkoutLink = "/products/thca-juicy-fruit#/checkout"
      // console.log("redirect: ", `${product.url}#/checkout`)
      // console.log("router.push: ", checkoutLink)

      // router.push(`${product.url}#/checkout`)
      router.push(checkoutLink)

      // snipcartRef.current.api.addProduct({
      //   id: product.sku,
      //   name: product.name,
      //   price: product.price,
      //   url: product._raw.flatenedPath,
      //   image: product.image,
      //   quantity: 1,
      // })
    }
  }

  return (
    <Button
      className="snipcart-checkout btn bg-accent text-blue-900 p-4"
      onClick={handleClick}
    >
      BUY NOW
    </Button>
  )
}
