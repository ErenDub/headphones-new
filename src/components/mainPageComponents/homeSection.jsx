import React from 'react'

function HomeSection() {
  return (
    <>
      <section class="home section" id="home">
        <div class="home__container container grid">
          <div>
            <img src="assets/img/home.png" alt="" class="home__img" />
          </div>

          <div class="home__data">
            <div class="home__header">
              <h1 class="home__title">On ear</h1>
              <h2 class="home__subtitle">Beats 3</h2>
            </div>

            <div class="home__footer">
              <h3 class="home__title-description">Overview</h3>
              <p class="home__description">
                Enjoy award-winning Beats sound with wireless listening freedom
                and a sleek, streamlined design with comfortable padded
                earphones, delivering first-rate playback.
              </p>
              <a href="#" class="button button--flex">
                <span class="button--flex">
                  <i class="ri-shopping-bag-line button__icon"></i> Add to Bag
                </span>
                <span class="home__price">$299</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSection
