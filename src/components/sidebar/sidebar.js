import React, { useState, Fragment } from "react"
// import { A } from "hookrouter"
import { Link, withRouter } from "react-router-dom"

import sidebarArrow from "../../images/sidebar-arrow.svg"
import Burger from "./burger"

import data from "../../data"

const sidebarLinks = [
  {
    name: "ABOUT ME",
    link: "/about",
  },
  {
    name: "MY WORKS",
    link: "/works",
  },
  {
    name: "CONTACTS",
    link: "/contacts",
  },
]

const Sidebar = ({ location }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // controls mobile visibility of sidebar when click on burger
  const togglMenu = isOpen => {
    setIsMenuOpen(isOpen)
    console.log(isOpen)
  }
  return (
    <Fragment>
      <Burger isMenuOpen={isMenuOpen} togglMenu={togglMenu} />
      <aside className={`sidebar ${isMenuOpen ? "sidebar--open" : ""}`}>
        <ul className="sidebar_menu">
          {sidebarLinks.map((sidebarLink, index) => (
            // menu item
            <li className="sidebar_menu_link" key={index}>
              <Link to={sidebarLink.link}>
                <img
                  className={`sidebar_menu_link_arrow ${
                    location.pathname === sidebarLink.link
                      ? "sidebar_menu_link_arrow--active"
                      : ""
                  }`}
                  src={sidebarArrow}
                  alt="arrow icon"
                />
                {sidebarLink.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="sidebar_social">
          {data.socialIcons.map((socialIcon, index) => (
            <li key={index} className="sidebar_social_item">
              <a
                href={socialIcon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialIcon.icon} alt={socialIcon.alt} />
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </Fragment>
  )
}

export default withRouter(Sidebar)
