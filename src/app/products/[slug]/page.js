"use client"

import { allProducts } from "contentlayer/generated"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { prices } from "@/lib/global"
import { Legalq } from "@/components/helpers/legalQ"
import { ShippingDetails } from "@/components/helpers/shipping-details"
import { BuyNow } from "@/components/helpers/buy-now"
import { ProductDescription } from "@/components/helpers/product-description"
import { TermsCheckbox } from "@/components/helpers/terms-checkbox"
import * as styles from "@/app/products/product.module.css"

export default function ProductPage({ params }) {
  const product = allProducts.find(
    (product) => product._raw.flattenedPath === `products/${params.slug}`
  )

  const formatted = prices(product)

  const showdata = () => {
    return (
      <>
        <pre>{JSON.stringify(params)}</pre>
        <pre>{JSON.stringify(product)}</pre>
      </>
    )
  }

  if (!product) {
    return (
      <div>
        <h1>404 - Data for this product was Not Found</h1>
        {process.env.NODE_ENV === "development" && showdata()}
      </div>
    )
  }

  return (
    <>
      <div className="inline-block align-top w-full md:w-1/2 ">
        <div className="w-full">
          <Image
            src={product.productImage.filePath.replace("../public", "")}
            alt={product.title}
            placeholder="blur"
            blurDataURL={product.productImage.blurhashDataUrl}
            width={product.productImage.width}
            height={product.productImage.height}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="px-4 inline-block w-full md:w-1/2">
        <div className="flex-1 w-full pt-32">
          <div>
            <h1 className={styles.page_title}>{product.title}</h1>
            {/* GoldStars */}
            <div className="flex flex-row font-bold">
              <div className="text-4xl" style={{ color: "#f8353e" }}>
                ${product.discountedPrice}
              </div>
              &nbsp;
              <div
                className="text-4xl"
                style={{
                  color: "#2879fe",
                  textDecoration: "line-through",
                }}
              >
                {formatted.originalPrice}
              </div>
            </div>
            <div className="flex justify-start text-sm my-10 color-red space-x-8">
              <Legalq product={product.title} />
              <ShippingDetails />
            </div>
            <div className="bg-black text-white text-lg atc-btn">
              <Button
                className="snipcart-add-item btn btn-lg text-lg text-white w-full"
                data-item-id={product.sku}
                data-item-price={product.discountedPrice}
                data-item-url={`/products/${product.slug}`}
                data-item-image={product.productImage.url}
                data-item-name={product.name}
                data-item-description={product.dataItemDescription}
              >
                ADD TO CART
              </Button>
            </div>
            <TermsCheckbox />
            <BuyNow product={product} outOfStock={product.outOfStock} />
          </div>
          {/* <ProductVideo
          src={product.productVideoSrc}
          title={product.productVideoTitle}
        /> */}
        </div>
        <ProductDescription product={product} />
      </div>
    </>
  )
}
