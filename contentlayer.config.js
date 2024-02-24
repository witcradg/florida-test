import { makeSource, defineDocumentType } from "@contentlayer/source-files"

const MdxPages = defineDocumentType(() => ({
  name: "MdxPages",
  filePathPattern: "mdx-pages/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    featuredImage: {
      type: "image",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/mdxpages/${doc._raw.flattenedPath}`,
    },
  },
}))

const Products = defineDocumentType(() => ({
  name: "Products",
  filePathPattern: "products/**/*.mdx",
  contentType: "mdx",
  fields: {
    sku: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    cardName: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    productImage: {
      type: "image",
      required: true,
    },
    productImageAlt: {
      type: "string",
      required: true,
    },
    productCardImage: {
      type: "image",
      required: true,
    },
    productCardImageAlt: {
      type: "string",
      required: true,
    },
    discountedPrice: {
      type: "number",
      required: true,
    },
    originalPrice: {
      type: "number",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    outOfStock: {
      type: "boolean",
      required: true,
    },
    descriptionTotalContent: {
      type: "string",
      required: true,
    },
    descriptionPotency: {
      type: "string",
      required: true,
    },
    descriptionCount: {
      type: "string",
      required: true,
    },
    seoTitle: {
      type: "string",
      required: true,
    },
    seoDescription: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  /* options */
  contentDirPath: "content",
  documentTypes: [MdxPages, Products],
  disableImportAliasWarning: true,
})
