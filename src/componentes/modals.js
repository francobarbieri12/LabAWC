export function ensureProductModalInDOM() {
  if (document.getElementById('productModal')) return;
  const modalHtml = `
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="productModalLabel">Detalle de producto</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row g-3 align-items-start">
                <div class="col-12 col-md-5">
                  <img id="modalImage" src="" alt="Imagen del producto" class="img-fluid rounded border" />
                </div>
                <div class="col-12 col-md-7">
                  <h5 id="modalTitle" class="mb-2"></h5>
                  <p id="modalDescription" class="mb-3"></p>
                  <div class="d-flex flex-wrap gap-3">
                    <span id="modalCategory" class="badge text-bg-secondary"></span>
                    <span id="modalPrice" class="badge text-bg-success"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

export function showProductModal(product) {
  const modalEl = document.getElementById('productModal');
  if (!modalEl) return;
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const modalCategory = document.getElementById('modalCategory');
  const modalPrice = document.getElementById('modalPrice');

  if (modalTitle) modalTitle.textContent = product.title;
  if (modalImage) {
    modalImage.src = product.image;
    modalImage.alt = product.title;
  }
  if (modalDescription) modalDescription.textContent = product.description;
  if (modalCategory) modalCategory.textContent = product.category;
  if (modalPrice) modalPrice.textContent = `$ ${product.price}`;

  if (window.bootstrap) {
    const modal = new window.bootstrap.Modal(modalEl);
    modal.show();
  }
}

export function setupProductModals(productListElement, products) {
  ensureProductModalInDOM();
  const buttons = productListElement.querySelectorAll('.card-button');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.getAttribute('data-id'));
      const product = products.find((item) => item.id === id);
      if (product) {
        showProductModal(product);
      }
    });
  });
}


