// open close top modal
const topModalOpenClose = () => {
  const topBtn = document.querySelector('#header > .container > .row > .col-xs-6 > .row > .col-sm-12 > .button > .btn');
  const headerModal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');
  const headerModalClose = document.querySelector('.header-modal__close');

  topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    headerModal.style.display = 'block';
    overlay.style.display = 'block';
    overlay.addEventListener('click', () => {
      headerModal.style.display = 'none';
      overlay.style.display = 'none';
    })
    document.addEventListener('keydown', (e) => {
      if (e.code == 'Escape') {
        headerModal.style.display = 'none';
        overlay.style.display = 'none';
      }
    });
  });

  headerModalClose.addEventListener('click', () => {
    headerModal.style.display = 'none';
    overlay.style.display = 'none';
  });
};

topModalOpenClose();

// slider carousel benefit user
const sliderCBU = () => {
  const benefitsInner = document.querySelector('.benefits-inner');
  console.log('benefitsInner: ', benefitsInner);

};

sliderCBU();
