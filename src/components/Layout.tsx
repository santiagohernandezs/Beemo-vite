import { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
