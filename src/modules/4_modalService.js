const modalService = () => {
  const wrapCardsService = document.querySelector('#services > .container .row');
  const serviceModal = document.querySelector('.services-modal');
  const overlay = document.querySelector('.overlay');
  const servicesModalClose = document.querySelector('.services-modal__close');

  wrapCardsService.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.closest('.service-button')) {
      serviceModal.style.display = 'block';
      overlay.style.display = 'block';
    }
  });
  servicesModalClose.addEventListener('click', () => {
    serviceModal.style.display = 'none';
    overlay.style.display = 'none';
  });
  overlay.addEventListener('click', () => {
    serviceModal.style.display = 'none';
    overlay.style.display = 'none';
  });
  document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape') {
      serviceModal.style.display = 'none';
      overlay.style.display = 'none';
    }
  });
};

export default modalService;
