import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import Image from "next/image"
export const ShippingDetails = () => {
  const btnlbl = (
    <div className="col-sm-3 m-0 whitespace-nowrap">
      <Image
        src="/img/shipping.png"
        width="18"
        height="18"
        alt="hemp leaf"
        className="inline mx-1 p-0 relative bottom-1"
      />
      Shipping
    </div>
  )

  return (
    <div className="cursor-pointer pr-4">
      <HoverCard>
        <HoverCardTrigger>{btnlbl}</HoverCardTrigger>
        <HoverCardContent>
          <h5 className="pb-1 text-2xl">SHIPPING</h5>
          <ul className="text-xl">
            <li>
              You can pick your shipping at checkout. Shipping Time: Typically 1
              to 7 business days
            </li>
            <li>In-store collection available within 1 to 7 business days</li>
            <li>
              Next-day and Express delivery options also available. Email your
              requirements to{" "}
              <a href="mailto:info@delta8gummies.com">info@delta8gummies.com</a>
              .
            </li>
            <li>
              Purchases are delivered in an white or tan padded envolope, with
              the exception of certain items
            </li>
            <li>
              See the delivery FAQs for details on shipping methods, costs and
              delivery times
            </li>
          </ul>
          <h5 className="modal-body-title pb-1">RETURNS AND EXCHANGES</h5>
          <ul
            style={{
              listStyleType: "disc",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            <li>Easy and complimentary, within 14 days</li>
            <li>See conditions and procedure in our return FAQs</li>
          </ul>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
