import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import RenderMdx from "@/components/RenderMdx"
import { GummiesAddenda } from "./gummies-addenda"
import * as styles from "@/app/products/product.module.css"

export const ProductDescription = ({ product }) => {
  const isDelta9 = product.title.includes("Delta 9")

  const ttlContent = product.descriptionTotalContent || "300mg"

  const renderCaseTotal = () => {
    if (totalCaseContent)
      return (
        <li>
          <strong>Total ∆9THC Content Per Case:</strong>
          <span>&nbsp;{totalCaseContent}</span>
        </li>
      )
  }

  const renderCaseCount = () => {
    if (caseCount)
      return (
        <li>
          <strong>Gummies per Case:</strong>
          <span>&nbsp;{caseCount}</span>
        </li>
      )
  }

  return (
    <div>
      <div className="text-left">
        <Accordion className="text-xl w-full" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className={styles.accordion_header}>DESCRIPTION</h1>
            </AccordionTrigger>
            <AccordionContent className="text-xl">
              <div>
                <div className="prose prose-lg max-w-full">
                  <RenderMdx productPage={product} />
                </div>
                <GummiesAddenda />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {isDelta9 && (
        <div className="text-left">
          <Accordion className="text-xl w-full" type="single" collapsible>
            <AccordionItem value="item-1" className="py-8">
              <AccordionTrigger>
                <h1 className={styles.accordion_header}>
                  ADDITIONAL INFORMATION
                </h1>
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                <div className="block">
                  <ul style={{ color: "#777", listStyleType: "disc" }}>
                    <li>
                      <strong>Total ∆9THC Content:</strong>
                      <span>&nbsp;{ttlContent}</span>
                    </li>
                    <li>
                      <strong>∆9THC Content Per Gummy:</strong>
                      <span>&nbsp;{product.descriptionPotency}</span>
                    </li>
                    <li>
                      <strong>Gummies per Pack:</strong>
                      <span>&nbsp;{product.descriptionCount}</span>
                    </li>
                    <li>
                      <strong>Container:</strong>
                      <span>&nbsp;Sealed, Child Proof Jar</span>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  )
}
