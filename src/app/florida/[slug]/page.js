import Image from "next/image"
import { getAllCities, getCityBySlug } from "@/lib/citiesCsv"
import { allMdxPages } from "contentlayer/generated"
import HomeCoverSection from "@/components/Home/HomeCoverSection"
import Faq from "@/components/Faq"
import { allProducts } from "contentlayer/generated"
import { ProductCard } from "@/components/ProductCard"

export default async function ServiceAreas({ params }) {
  const city = await getCityBySlug(params.slug)

  return (
    <>
      <h1 className="text-center font-bold text-6xl">{city.city}</h1>
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

export async function generateStaticParams() {
  const allCities = await getAllCities()
  const cities = []

  allCities.map((city) => {
    const citySlug = city[3].toLowerCase().replace(/ /g, "-")
    cities.push(citySlug)
  })

  return cities.map((citySlug) => ({
    slug: citySlug,
  }))
}
