"use client"

import { allMdxPages } from "contentlayer/generated"
import Image from "next/image"
import RenderMdx from "@/components/RenderMdx"

export default function MdxPage({ params }) {
  const mdxPage = allMdxPages.find(
    (mdxPage) => mdxPage._raw.flattenedPath === `mdx-pages/${params.slug}`
  )

  if (!mdxPage) {
    return (
      <div>
        <h1>404 - Service Page Not Found</h1>
        <pre>{JSON.stringify(params)}</pre>
        <pre>{JSON.stringify(mdxPage)}</pre>
      </div>
    )
  }

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div
          className="w-full z-10 flex flex-col items-center justify-center \
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <h1
            className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal
            relative w-5/6"
          >
            {mdxPage.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60">
          <Image
            src={mdxPage.featuredImage.filePath.replace("../public", "")}
            alt={mdxPage.title}
            placeholder="blur"
            blurDataURL={mdxPage.featuredImage.blurhashDataUrl}
            width={mdxPage.featuredImage.width}
            height={mdxPage.featuredImage.height}
            className="aspect-square w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="w-full p-6 md:px-12 md:py-8 xl:w-3/4 m-auto prose prose-lg">
        <RenderMdx mdxPage={mdxPage} />
      </div>
    </article>
  )
}
