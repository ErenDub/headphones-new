import React from 'react'

function Case() {
  return (
    <section class="case section grid" id="case">
      <h2 class="section__title section__title-gradient">Case</h2>

      <div class="case__container container grid">
        <div>
          <img src="assets/img/case.png" alt="" class="case__img" />
        </div>

        <div class="case__data">
          <p class="case__description">
            With a comfortable and adaptable case so that you can store it
            whenever you want, and keep your durability forever.
          </p>
          <a href="#" class="button button--flex">
            <i class="ri-information-line button__icon"></i> More info
          </a>
        </div>
      </div>
    </section>
  )
}

export default Case
