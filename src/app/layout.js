import "./globals.css"
import { Inter, Manrope } from "next/font/google"
import { cx } from "@/lib/utils"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { SnipcartProvider } from "../components/SnipcartProvider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css"
        />
      </head>
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light text-dark"
        )}
      >
        <SnipcartProvider>
          <Header />
          {children}
          <Footer />
        </SnipcartProvider>

        <script
          async
          src="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js"
        ></script>
        <div
          hidden
          id="snipcart"
          data-api-key={process.env.SC_API_KEY}
          data-config-modal-style="side"
        ></div>
      </body>
    </html>
  )
}
