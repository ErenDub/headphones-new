import React from 'react'
import { FooterDataBase } from '../fixtures/footer/FooterData'
import { footerSocialNetworkDataBase } from '../fixtures/footer/footerSocial'

function Footer() {
  return (
    <div>
      <footer class="footer section">
        <div class="footer__container container grid">
          <a href="#" class="footer__logo">
            <img src="assets/img/logo.png" alt="" />
          </a>

          <div class="footer__content">
            <h3 class="footer__title">Products</h3>

            <ul class="footer__links">
              {FooterDataBase[0].products.map((arrProds) => (
                <li key={arrProds.route}>
                  <a href={arrProds.route} class="footer__link">
                    {arrProds.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">Support</h3>

            <ul class="footer__links">
              {FooterDataBase[1].support.map((arrProds) => (
                <li key={arrProds.route}>
                  <a href={arrProds.route} class="footer__link">
                    {arrProds.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div class="footer__content">
            <form action="" class="footer__form">
              <input type="email" placeholder="Email" class="footer__input" />
              <button class="button button--flex">
                <i class="ri-send-plane-line button__icon"></i> Subscribe
              </button>
            </form>

            <div class="footer__social">
              {footerSocialNetworkDataBase.map((socialsArr) => (
                <a
                  href={socialsArr.route}
                  target="_blank"
                  class="footer__social-link"
                >
                  <i class={socialsArr.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p class="footer__copy">
          <a
            href="https://www.youtube.com/c/Bedimcode/"
            target="_blank"
            class="footer__copy-link"
          >
            &#169; All CopyRights are Cliemed
          </a>
        </p>
      </footer>
      <a href="#" class="scrollup" id="scroll-up">
        <i class="ri-arrow-up-s-line scrollup__icon"></i>
      </a>
    </div>
  )
}

export default Footer
