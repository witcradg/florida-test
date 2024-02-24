import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaPinterest,
  FaApple,
  FaLinkedin,
} from "react-icons/fa"

import styles from "./Footer.module.css"

const FooterSocial = (data) => {
  const socials = data.footerJson.socialElement.socials

  /** function that takes a label and returns the link for that label **/
  const getLink = (label) => {
    const social = socials.find((social) => social.label === label)
    return social?.link
  }

  /** function that takes a label and returns true or false if that label is in use **/
  const isInUse = (label) => {
    const social = socials.find((social) => social.label === label)
    return social?.enable
  }

  return (
    <div
      id="footer-social"
      className="mb-8 flex flex-col flex-wrap items-center justify-around pl-2 pr-8"
    >
      <div className="flex justify-around self-stretch text-xl">
        {isInUse("facebook") ? (
          <div className={styles.social_icon}>
            <a aria-label="facebook icon" href={getLink("facebook")}>
              <FaFacebook className="text-chsblue inline-block" />
            </a>
          </div>
        ) : null}
        {isInUse("twitter") ? (
          <div className={styles.social_icon}>
            <a aria-label="twitter icon" href={getLink("twitter")}>
              <FaTwitter className="text-chsblue inline-block" />
            </a>
          </div>
        ) : null}
        {isInUse("google") ? (
          <div className={styles.social_icon}>
            <a aria-label="google icon" href={getLink("google")}>
              <FaGoogle className="text-chsblue inline-block" />
            </a>
          </div>
        ) : null}

        {isInUse("instagram") ? (
          <div className={styles.social_icon}>
            <a aria-label="instagram icon" href={getLink("instagram")}>
              <FaInstagram className="text-chsblue inline-block" />
            </a>
          </div>
        ) : null}

        {isInUse("pinterest") ? (
          <div className={styles.social_icon}>
            <a aria-label="pinterest icon" href={getLink("pinterest")}>
              <FaPinterest className="text-chsblue inline-block" />
            </a>
          </div>
        ) : null}

        {isInUse("apple") ? (
          <div className={styles.social_icon}>
            <a aria-label="apple icon" href={getLink("apple")}>
              <FaApple className="text-chsblue inline-block" />
            </a>
          </div>
        ) : null}

        {isInUse("linkedin") ? (
          <div className={styles.social_icon}>
            <a aria-label="linkedin icon" href={getLink("linkedin")}>
              <FaLinkedin className="text-chsblue inline-block" />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default FooterSocial
