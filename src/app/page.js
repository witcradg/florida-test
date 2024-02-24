"use client"

import Faq from "@/components/Faq"
import Pricing from "@/components/Pricing"
import Image from "next/image"
import { allMdxPages } from "contentlayer/generated"
import { allProducts } from "contentlayer/generated"
import HomeCoverSection from "@/components/Home/HomeCoverSection"
import { ProductCard } from "@/components/ProductCard"

export default function HomePage() {
  return (
    <>
      <HomeCoverSection mdxPages={allMdxPages} />
      <main className="flex flex-col items-center justify-center p-4 lg:p-24">
        <div className="lg:grid grid-cols-4 gap-4 mb-16">
          {allProducts.map((product) => {
            return <ProductCard key={product.sku} product={product} />
          })}
        </div>

        <Faq />

        <div className="inline-block lg:flex justify-around pt-4">
          <Image
            src="/img/logo-thcflorida.png"
            alt="hero"
            width={256}
            height={256}
          />
        </div>
      </main>
    </>
  )
}
