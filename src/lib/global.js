import React from "react"
// import statelist from '../../content/limited-distribution-states.json';

export const sliderSettings = {
  dots: true,
  fade: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  adaptiveHeight: true,
}

const dollarsUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export const prices = (data) => {
  return {
    discountedPrice: dollarsUS.format(data.discountedPrice),
    originalPrice: data.originalPrice
      ? dollarsUS.format(data.originalPrice)
      : null,
  }
}

export const formatDescription = (data) => {
  const formatted = prices(data)
  let mutation = data.dataItemDescription
    .replaceAll("\\", "")
    .replace("{discountedPrice}", formatted.discountedPrice)
    .replace("{pageTitle}", data.dataItemName)
    .replace("{productname}", data.dataItemName)
    .replace("{descriptionTotalContent}", data.descriptionTotalContent)
    .replace("{descriptionPotency}", data.descriptionPotency)
  return mutation
}

export const formatSeoTitle = (frontmatter) => {
  let seoTitle = frontmatter.seoTitle

  if (!seoTitle) {
    seoTitle = `${frontmatter.title} | Delta8Gummies`
    console.log(`The seoTitle value was missing for ${frontmatter.title}.`)
    console.log(`Using title instead.`)
  }

  return seoTitle
    .replaceAll("$", "")
    .replaceAll("{pageTitle}", frontmatter.title)
}

export const formatSeoDescription = (frontmatter) => {
  let seoDescription = frontmatter.seoDescription
  if (!seoDescription) {
    seoDescription = `${frontmatter.title} | Delta8Gummies`
    console.log(`The seoDescription value was missing for ${frontmatter.title}`)
    console.log(`Substituting ${frontmatter.title}`)
  }

  return seoDescription
    .replaceAll("$", "")
    .replaceAll("{pageTitle}", frontmatter.title)
}

// export const noticeXd = () => {
//     let formattedStateString = '';
//     for (let stat of statelist.listOfStates) {
//         stat = stat.charAt(0).toUpperCase() + stat.substring(1);
//         const pos = stat.indexOf('-');
//         if (pos > 0) {
//             stat =
//                 stat.substring(0, pos + 1) +
//                 stat.charAt(pos + 1).toUpperCase() +
//                 stat.substring(pos + 2);
//         }
//         formattedStateString =
//             formattedStateString.length === 0
//                 ? stat
//                 : formattedStateString + ', ' + stat;
//     }
//     return (
//         <h2 className="m-0">
//             (ONLY BUY IN {formattedStateString}). If you are not in one of these
//             states then shop on the regular site.
//         </h2>
//     );
// };
