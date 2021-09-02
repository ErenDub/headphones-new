import React from 'react'
import { SponsorsDataBase } from '../../fixtures/homePageSponosrs/sponsorsData'
function SponsorSection() {
  return (
    <>
      <section class="sponsor section">
        <div class="sponsor__container container grid">
          {SponsorsDataBase.map((sponsortArr) => (
            <img
              key={sponsortArr.name}
              src={sponsortArr.logo}
              alt={sponsortArr.name}
              class="sponsor__img"
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default SponsorSection
