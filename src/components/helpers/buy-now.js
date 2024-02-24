"use client"
import { Button } from "@/components/ui/button"

export const BuyNow = ({ product, outOfStock }) => {
  return (
    <div>
      {!outOfStock ? (
        <div className="mb-8">
          <Button
            className="snipcart-add-item btn btn-lg text-lg w-full rounded-none py-2 px-4"
            style={{
              fontFamily: "MontserratExtraBold",
              backgroundColor: "#ffc520",
              color: "#2879fe",
              borderRadius: "0",
            }}
            data-item-id={product.sku}
            data-item-price={product.discountedPrice}
            data-item-url={product.dataItemUrl}
            data-item-description={product.dataItemDescription}
            data-item-image={product.productImage.url}
            data-item-name={product.name}
            data-item-category={product.dataItemCategory}
          >
            BUY NOW!
          </Button>
        </div>
      ) : (
        <br />
      )}
    </div>
  )
}
