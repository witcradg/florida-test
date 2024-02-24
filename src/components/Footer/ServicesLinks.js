import React from "react"
import headerJson from "@/json/header.json"
import Link from "next/link"

const ServicesLinks = (props) => {
  const services = headerJson.submenu1

  return (
    <div>
      {services.map((item) => {
        return (
          <Link key={item.link} className={props.classes} href={item.link}>
            <div>{item.label}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default ServicesLinks
