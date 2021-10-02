export default class Card {
  element;

  constructor ({
    id = '',
    images = [],
    title = '',
    rating = 0,
    price = 0,
    category = '',
    brand = ''
  } = {}) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.brand = brand;

    this.render();
  }

  getTemplate() {
    return `
				<div class="product__image">
           <img src="${this.images[0]}" />
        </div>
        <div class="product__info">
          <div class="flex-row">
            <div class="product__rate">
              <span class="product__rate_num">${this.rating}</span>
              <img class="product__rate_star" src="img/star.svg" />
            </div>
            <div class="product__price">${this.price}₴</div>
          </div>
          <p class="product__title">${this.title}</p>
          <p class="product__description">
            Redesigned from scratch and completely revised.
          </p>
        </div>
        <div class="product__buttons">
        <button class="product__buttons_wishlist">
          <span class="product__buttons_btn">
            <img class="wishlist-btn__ico" src="img/heart-2.svg" />
            <span class="product__buttons_text">wishlist</span>
          </span>
        </button>
        <button class="product__button_add">
          <span class="product__buttons_btn">
            <img class="add-btn__ico" src="img/shopping-bag.svg" />
            <span class="product__buttons_text-2">add to cart</span>
          </span>
        </button>
      </div>
		`
  }

  render () {
    const wrapper = document.createElement('div');
    wrapper.className = 'product';
    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }

  remove () {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy () {
    this.remove();
    this.element = null;
  }
}
