import { allMdxPages } from "contentlayer/generated"
import { allProducts } from "contentlayer/generated"
import { headers } from "next/headers"
import { globby } from "globby"
import { getAllCities } from "../lib/citiesCsv"

export default async function sitemap() {
  const headersList = headers()

  const host = headersList.get("host") // to get domain
  const baseUrl = host.includes("localhost") ? host : `https://${host}`
  const home = `${baseUrl}/`

  const mdxPages = await allMdxPages.map((page) => {
    return {
      url: `${baseUrl}/${page._raw.flattenedPath}`,
      lastModified: new Date().toISOString(),
    }
  })

  const productPages = await allProducts.map((page) => {
    return {
      url: `${baseUrl}/${page._raw.flattenedPath}`,
      lastModified: new Date().toISOString(),
    }
  })

  const allCities = await getAllCities()
  const cityPages = allCities.map((city) => {
    const slug = city[3].toLowerCase().replace(/ /g, "-")
    return {
      url: `${baseUrl}/florida/${slug}`,
      lastModified: new Date().toISOString(),
    }
  })

  //Add the static pages to the sitemap
  const pages = await globby("src/app/**/page.js")
  // console.log("pages", pages)
  const rawPages = pages.map((page) => {
    const url = page
      .replace("/page.js", "")
      .replace("src/app", "")
      .replace("/", "")
    if (url?.length > 0 && !url?.includes("[")) {
      return {
        url: `${baseUrl}/${url}`,
        lastModified: new Date().toISOString(),
      }
    }
  })

  const staticPages = rawPages.filter((page) => page !== undefined)

  return [
    {
      url: home,
      lastModified: new Date().toISOString(),
    },
    ...cityPages,
    ...mdxPages,
    ...productPages,
    ...staticPages,
  ]
}
