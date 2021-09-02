import React from 'react'
import { ProductsDataBase } from '../../fixtures/homePageSponosrs/products'
function Producsts() {
  return (
    <section class="products section" id="products">
      <h2 class="section__title section__title-gradient products__line">
        Choose <br /> Your Style
      </h2>

      <div class="products__container container grid">
        {ProductsDataBase.map((prodArr, id) => (
          <article class="products__card" key={id}>
            <div class="products__content">
              <img src={prodArr.img} alt="" class="products__img" />

              <h3 class="products__title">{prodArr.name}</h3>
              <span class="products__price">${prodArr.price}</span>

              <button class="button button--flex products__button">
                <i class="ri-shopping-bag-line button__icon"></i>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Producsts
