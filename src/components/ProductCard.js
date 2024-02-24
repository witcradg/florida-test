import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const ProductCard = ({ product }) => {
  return (
    <Card className="mb-4 lg:mb-0">
      <Link href={`${product.slug}`}>
        <div className="flex flex-col h-full">
          <div className="">
            <div className="h-[260px] flex flex-row justify-center">
              <Image
                src={product.productCardImage.filePath.split("/public")[1]}
                alt={product.title}
                width={256}
                height={256}
              />
            </div>
          </div>
          <div className="h-[80px] flex items-center justify-center">
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              {/* <CardDescription>{product.description}</CardDescription> */}
            </CardHeader>
          </div>

          <div>
            <CardContent>
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
          </div>

          <div className="mt-auto">
            <CardFooter className="flex justify-center">
              <Button>More Info</Button>
            </CardFooter>
          </div>
        </div>
      </Link>
    </Card>
  )
}
