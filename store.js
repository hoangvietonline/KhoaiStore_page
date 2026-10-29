const filters = document.querySelectorAll('[data-filter]');
const products = document.querySelectorAll('[data-category]');
const count = document.querySelector('.catalog-count');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  let visible = 0;
  products.forEach(product => {
    product.hidden = category !== 'all' && product.dataset.category !== category;
    if (!product.hidden) visible++;
  });
  count.textContent = `${visible} ${visible === 1 ? 'app' : 'apps'} to discover`;
}));
