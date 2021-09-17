const sendForm = () => {
  const errorMessage = 'Что-то пошло не так!';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

  const statusMessage = document.createElement('div');
  statusMessage.id = 'statusMass';
  statusMessage.textContent = 'Тут будет сообщение!';
  statusMessage.style.cssText = `
  font-size: 1.6rem;
  background: #394f6a;
  color: #fff;
  textAlign: center;
  position: absolute;
  padding: 4px 8px;
  `;

  const cleanInput = () => {
    const formInputs = document.querySelectorAll('input');
    const btnTypeSabmit = document.querySelectorAll('button[type="submit"]');

    formInputs.forEach(elem => {
      elem.value = '';
    });

    btnTypeSabmit.forEach(elem => {
      elem.disabled = true;
    });
  };

  const cleanMessage = () => {
    const divMass = document.getElementById('statusMass').remove();
  };

  const removeModal = () => {
    const overlay = document.querySelector('.overlay');
    const servicesModalClose = document.querySelector('.services-modal__close');
    const headerModalClose = document.querySelector('.header-modal__close');
    const headerModal = document.querySelector('.header-modal');
    const servicesModal = document.querySelector('.services-modal');

    overlay.style.display = 'none';
    servicesModalClose.style.display = 'none';
    headerModalClose.style.display = 'none';
    headerModal.style.display = 'none';
    servicesModal.style.display = 'none';
  };

  const postData = (body) => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  document.body.addEventListener('submit', (e) => {
    const target = e.target;

    if (target.closest('#order_1, #order_2')) {
      e.preventDefault();

      target.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      const formData = new FormData(target);

      if (document.querySelector('#calc-total')) {
        let calcTotal = document.querySelector('#calc-total').value;
        let body = { calcTotal };

        formData.forEach((val, key) => {
          body[key] = val;
        });

        postData(body)
          .then(
            (response) => {
              if (response.status !== 200) {
                throw new Error('status network not 200');
              }
              statusMessage.textContent = successMessage;
            }
          )
          .then(cleanInput)
          .catch(
            (error) => {
              statusMessage.textContent = errorMessage;
              console.error('errorische', error);
            }
          );
      } else {
        let body = {};
        formData.forEach((val, key) => {
          body[key] = val;
        });

        postData(body)
          .then(
            (response) => {
              if (response.status !== 200) {
                throw new Error('status network not 200');
              }
              statusMessage.textContent = successMessage;
            }
          )
          .then(cleanInput)
          .catch(
            (error) => {
              statusMessage.textContent = errorMessage;
              console.error('errorische', error);
            }
          );
      }
    }

    if (target.closest('.fancybox-skin')) {
      e.preventDefault();

      target.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      const formData = new FormData(target);

      if (document.querySelector('#calc-total')) {
        let calcTotal = document.querySelector('#calc-total').value;
        let body = { calcTotal };

        formData.forEach((val, key) => {
          body[key] = val;
        });

        postData(body)
          .then(
            (response) => {
              if (response.status !== 200) {
                throw new Error('status network not 200');
              }
              statusMessage.textContent = successMessage;
            }
          )
          .then(cleanInput)
          .catch(
            (error) => {
              statusMessage.textContent = errorMessage;
              console.error('errorische', error);
            }
          );
      } else {
        let body = {};
        formData.forEach((val, key) => {
          body[key] = val;
        });

        postData(body)
          .then(
            (response) => {
              if (response.status !== 200) {
                throw new Error('status network not 200');
              }
              statusMessage.textContent = successMessage;
            }
          )
          .then(cleanInput)
          .catch(
            (error) => {
              statusMessage.textContent = errorMessage;
              console.error('errorische', error);
            }
          );
      }
    }

    setTimeout(cleanMessage, 4000);
    setTimeout(removeModal, 4000);
  });
};

export default sendForm;
