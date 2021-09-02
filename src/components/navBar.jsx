import React, { useEffect } from 'react'
import { navBarDataBase } from '../fixtures/navBars/navBarData'
function NavBarItems() {
  useEffect(() => {
    if (window.location.hash == '') {
      window.location.hash = '#home'
      window.scrollTo(1, 1)
    }
  }, [])
  return (
    <div>
      <header class="header" id="header">
        <nav class="nav container">
          <a href="#" class="nav__logo">
            <img src="assets/img/logo.png" alt="" />
          </a>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              {navBarDataBase.map((navItems) => (
                <li class="nav__item" key={navItems.name}>
                  <a href={navItems.route} class="nav__link">
                    {navItems.name}
                  </a>
                </li>
              ))}
            </ul>

            <div class="nav__close" id="nav-close">
              <i class="ri-close-line"></i>
            </div>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <i class="ri-function-line"></i>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavBarItems
