const topModalOpenClose = () => {
  const topBtn = document.querySelector('#header > .container > .row > .col-xs-6 > .row > .col-sm-12 > .button > .btn');
  const headerModal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');
  const headerModalClose = document.querySelector('.header-modal__close');

  topBtn.addEventListener('click', () => {
    headerModal.style.display = 'block';
    overlay.style.display = 'block';
  });

  headerModalClose.addEventListener('click', () => {
    headerModal.style.display = 'none';
    overlay.style.display = 'none';
  });
};

export default topModalOpenClose;
