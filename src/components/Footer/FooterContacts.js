import site from "@/json/site.config.json"

const FooterContacts = ({ data }) => {
  // console.dir(data)
  return (
    <div>
      <div className="text-chsblue mt-8 whitespace-nowrap text-xl font-bold">
        {site.config.businessName}
      </div>
      <div className="mt-8 whitespace-nowrap text-xl">{data.addressLine1}</div>
      <div className="mt-8 whitespace-nowrap text-xl">
        {data.addressCsz}
        <div className="mt-8 whitespace-nowrap text-xl font-semibold">
          {site.config.phone}
        </div>
        <div className="mt-8 whitespace-nowrap text-lg font-semibold">
          {data.email}
        </div>
      </div>
    </div>
  )
}

export default FooterContacts
