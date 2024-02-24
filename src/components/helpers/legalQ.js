import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import Image from "next/image"

export const Legalq = ({ product }) => {
  const content = `The 2018 Farm Bill Legalized all Hemp Derived Products that contain less then .03% Delta 9 THC. This means
    ${product} are legal to sell, possess & consume on a Federal Level.`

  const btnlbl = (
    <div className="col-sm-3 m-0 whitespace-nowrap">
      <Image
        src="/img/hemp.png"
        width="18"
        height="18"
        alt="hemp leaf"
        className="inline mx-1 p-0 relative bottom-1"
      />
      Is THC Legal?
    </div>
  )

  return (
    <div className="cursor-pointer pr-4">
      <HoverCard>
        <HoverCardTrigger>{btnlbl}</HoverCardTrigger>
        <HoverCardContent>
          <h3 className="modal-body-title text-center pb-2 text-3xl">
            Is THC Florida Legal?
          </h3>
          <h3 className="text-xl">{content}</h3>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
