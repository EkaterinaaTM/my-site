import React from "react"
import MyWorks from "../components/myWorks/myWorks"
import About from "../components/about/about"
import Contacts from "../components/contacts/contacts"

const Routes = {
  "/": () => <About />,
  "/about": () => <About />,
  "/works": () => <MyWorks />,
  "/contacts": () => <Contacts />,
}

export default Routes
