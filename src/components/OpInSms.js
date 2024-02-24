import Script from "next/script"

const OptInSms = () => {
  return (
    <>
      <Script src="https://link.msgsndr.com/js/form_embed.js" />

      <iframe
        src="https://api.leadconnectorhq.com/widget/form/okNPKzaKJ1d1kHEPUJPf"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "4px",
        }}
        id="inline-okNPKzaKJ1d1kHEPUJPf"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Appointment"
        data-height="1026"
        data-layout-iframe-id="inline-okNPKzaKJ1d1kHEPUJPf"
        data-form-id="okNPKzaKJ1d1kHEPUJPf"
        title="Appointment"
      ></iframe>
    </>
  )
}

export default OptInSms
