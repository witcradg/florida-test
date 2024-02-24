const fs = require("fs")
const readline = require("readline")

export async function getAllCities(header = false) {
  let cities = []

  let filePath = "content/cities.tsv"
  const file = fs.createReadStream(filePath, "utf8")

  const rl = readline.createInterface({
    input: file,
    crlfDelay: Infinity,
  })

  for await (const line of rl) {
    cities.push(line.split("\t"))
  }

  const allCities = header ? cities : cities.slice(1)

  return allCities
}

export async function getCityBySlug(slug) {
  const header = true
  const allCities = await getAllCities(header)
  for (let i = 1; i < allCities.length; i++) {
    const city = allCities[i]
    const cityObject = {}
    for (let j = 0; j < city.length; j++) {
      cityObject[allCities[0][j]] = city[j]
    }
    const citySlug = cityObject.city.toLowerCase().replace(/ /g, "-")
    if (citySlug === slug) {
      return cityObject
    }
  }
  return null
}
