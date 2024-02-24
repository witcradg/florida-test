import { FaPhone, FaStar } from "react-icons/fa"
import site from "@/json/site.config.json"

const phoneNumber = site.config.phone
const phoneHref = `tel:${phoneNumber.replace(/[^a-zA-Z0-9]/g, "")}`

const TopHeaderRow = () => (
  <div className="bg-blue-900 p-1 text-center text-base text-white md:text-2xl">
    <div className="grid grid-cols-1 gap-0 md:grid-cols-2 xl:grid-cols-4">
      <div id="address" className="my-3">
        <a
          href="/location"
          title="See map"
          className="text-center hover:text-red-400"
        >
          <span className="">Miami Beach, Miami</span>
          <span className="whitespace-nowrap"> FL 33139</span>
        </a>
      </div>

      <div
        id="reviews"
        className="flex flex-col text-white md:mt-2 2xl:flex-row"
      >
        <div className="whitespace-nowrap text-xl font-semibold text-white 2xl:m-4 ">
          THC Gummies Florida
        </div>
        <div className="flew-row flex items-center justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="min-w-4 text-yellow-400 lg:mx-1" />
          ))}
          <a
            className="pl-2 text-sm underline"
            href="https://thcflorida.co/"
            title="See all reviews"
          >
            {" "}
            5 Star Reviews{" "}
          </a>
        </div>
      </div>

      <div
        id="phone"
        className="align-center my-3 flex flex-row justify-center"
      >
        <a href={phoneHref} title="Call Skinny's Performance" className="">
          <span className="flex flex-row whitespace-nowrap text-white hover:text-red-400 ">
            <FaPhone className="mr-4 inline-block pt-1 text-3xl" />
            <div id="phonenumber" className="text-4xl font-bold">
              {phoneNumber}
            </div>
          </span>
        </a>
      </div>

      <div id="hours" className="my-3">
        <span className="font-semibold text-white">
          Mon - Fri: 8:30 AM - 5:00 PM
        </span>
      </div>
    </div>
  </div>
)

export default TopHeaderRow
