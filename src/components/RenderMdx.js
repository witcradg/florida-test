"use client"

import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"

const mdxComponents = {
  Image,
}

// const RenderMdx = ({ mdxPage, productPage }) => {
const RenderMdx = (props) => {
  const mdxPageCode = props.mdxPage?.body.code
  const productPageCode = props.productPage?.body.code
  const MDXContent = useMDXComponent(mdxPageCode || productPageCode)
  return (
    <div className="font-in">
      <MDXContent components={mdxComponents} />
    </div>
  )
}

export default RenderMdx
