import footerJson from "@/json/footer.json"
import site from "@/json/site.config.json"
import FooterBody from "./FooterBody"

const copyrightMobile = () => {
  let titleMobile = site.config.title.split("|")

  return (
    <>
      {titleMobile[0]}
      <br />
      {titleMobile[1]}
      <br />
    </>
  )
}

const Footer = async () => {
  const logo = footerJson.logoImage
  return (
    <>
      <FooterBody />
      {/* <div className='bg-blue-300 min-h-32 flex justify-center p-8'>
          <Image src={logo} alt="Skinny's Performance and Auto Repair" width={200} height={200} />
        </div> */}

      <footer
        id="copyright"
        className="px-4 lg:px-0"
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        <div className="hidden content-start justify-between lg:flex lg:flex-row">
          © {new Date().getFullYear()} &middot; {site.config.title}&nbsp;
        </div>
        <div className="block lg:hidden">
          © {new Date().getFullYear()} &middot; {copyrightMobile()}
        </div>
      </footer>
    </>
  )
}

export default Footer
