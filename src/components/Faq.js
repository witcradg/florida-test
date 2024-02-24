import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Faq = () => {
  return (
    <>
      <h2 className="text-center text-3xl w-full">
        Top Questions from our Customers
      </h2>
      <Accordion className="text-xl w-full md:w-1/2" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I buy THC From Hemp in Florida?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes! The farm bill of 2019 and 2023 held up the .03% delta 9 thc law for hemp products.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Are Delta 9 Gummies Legal?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Hemp Derived Delta 9 Gummies are legal because of the Farm Bill
            allowing Hemp Products with less than .03 Percent thc in them.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do You Ship outside of Florida?</AccordionTrigger>
          <AccordionContent className="text-xl">
            We ship to the Whole USA.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Do You Have any specials?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Free Gummies!!!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Can I Pick-Up In Store?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes! Buy our gummies at your local smoke shop or bodega!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            How Strong Are Your Delta 9 Gummies?
          </AccordionTrigger>
          <AccordionContent className="text-xl">
            We offer Delta 9 Gummies in 10mg piece for the perfect dose.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Do you have any discounts?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Free Shipping on all orders over $50.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default Faq
