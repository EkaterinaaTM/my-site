import React from "react"

const Burger = ({ isMenuOpen, togglMenu }) => (
  <div
    className={`menu-toggle ${isMenuOpen ? "menu-toggle--open" : ""}`}
    onClick={isMenuOpen ? () => togglMenu(false) : () => togglMenu(true)}
  >
    <div className={`bar ${isMenuOpen ? "bar--open" : ""}`}></div>
    <div className={`bar ${isMenuOpen ? "bar--open" : ""}`}></div>
    <div className={`bar ${isMenuOpen ? "bar--open" : ""}`}></div>
  </div>
)

export default Burger
