import Link from "next/link"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button, buttonVariants } from "@/components/ui/button"

export const Pricing = () => {
  const automakers = "Free Shipping Over $100"
  return (
    <Table className="text-xl">
      <TableCaption>Products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="whitespace-nowrap">Item</TableHead>
          <TableHead>Shipping</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Buy Now</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>THCA Donnie Burger</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$99.99</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/products/thca-donnie-burger-ounce">Buy Now</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>THCA Jealousy Mintz</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$99.99</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/products/thca-jealousy-ounce">Buy Now</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>THCA Kombucha Ounce</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$99.99</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/products/thca-kumbacha-ounce">Buy Now</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>THCA Quarter Sampler</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$200.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/products/thca-quarter-pound-sampler">Buy Now</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>THCA Permanent Marker</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$200.00</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/products/thca-permanent-marker-ounce">Buy Now</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>THCA Gelato 33 Ounce</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$99.99</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/products/thca-gelato-33">Buy Now</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Delta 9 Blueberry</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/products/d9-blueberry-300">Buy Now</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Delta 9 Green Apple</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/products/d9-green-apple-300">Buy Now</Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Delta 9 Strawberry</TableCell>
          <TableCell>{automakers}</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell className="text-right">
            <Button asChild>
              <Link href="/products/d9-strawberry-300">Buy Now</Link>
            </Button>
          </TableCell>
        </TableRow>
      
      </TableBody>
    </Table>
  )
}

export default Pricing
