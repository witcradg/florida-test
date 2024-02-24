import { NavButton } from "@/components/Header/NavSection"

const AnnouncmentBar = () => (
  <div
    id="anouncement-bar"
    className="\ bg-gradient-to-r from-black-900 via-white-600 to-white-600 bg-contain
  bg-left-top bg-no-repeat"
  >
    <div
      id="column"
      className="flex flex-col items-center justify-around py-4 lg:flex-row"
    >
      <div id="message" className="text-4xl uppercase text-black">
        <p className="m-2">
          Shop THC Products <br />
          Online! &amp; FREE SHIPPING!
        </p>
      </div>
      <NavButton target="/florida-medical-cannabis-card/" label="MEDICAL CARD" />
    </div>
  </div>
)

export default AnnouncmentBar
