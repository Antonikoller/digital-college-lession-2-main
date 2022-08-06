

export function ProductsList() {
function _li(products) {
    return  `<li class="products-list__item">
    <div class="products-list__item-thumbnail">
      <img
        class="product__thumbnail"
        src=${products.thumbnail}
        />
    </div>
    <div class="products-list__item-main-content">
      <h4 class="product__name"><a href=${products.link}>${products.name}</a></h4>
      <p class="product__description">
        ${products.description}
      </p>
    </div>
    <div class="products-list__item-action-buttons">
      <button class="button" data-open-modal="1">
      Detalhes
      </button>
      </div>
      </li>
      `
  }

  function render(products = []) {
    const ul = document.querySelector('.products-list')
    if (ul) {
      products.forEach((product) => {
        ul.insertAdjacentHTML('beforeend', _li(product))
      })
    }
  }

  return {
    render
  }
}