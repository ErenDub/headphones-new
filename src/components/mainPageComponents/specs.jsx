import React from 'react'

function Specs() {
  return (
    <section class="specs section grid" id="specs">
      <h2 class="section__title section__title-gradient">Specs</h2>

      <div class="specs__container container grid">
        <div class="specs__content grid">
          <div class="specs__data">
            <i class="ri-bluetooth-line specs__icon"></i>
            <h3 class="specs__title">Connection</h3>
            <span class="specs__subtitle">Bluetooth v5.2</span>
          </div>

          <div class="specs__data">
            <i class="ri-battery-charge-line specs__icon"></i>
            <h3 class="specs__title">Battery</h3>
            <span class="specs__subtitle">Duration 40h</span>
          </div>

          <div class="specs__data">
            <i class="ri-plug-line specs__icon"></i>
            <h3 class="specs__title">Load</h3>
            <span class="specs__subtitle">Fast charge 4.2-AAC</span>
          </div>

          <div class="specs__data">
            <i class="ri-mic-line specs__icon"></i>
            <h3 class="specs__title">Microphone</h3>
            <span class="specs__subtitle">
              Supports Apple Siri <br /> and Google
            </span>
          </div>
        </div>

        <div>
          <img src="assets/img/specs.png" alt="" class="specs__img" />
        </div>
      </div>
    </section>
  )
}

export default Specs
