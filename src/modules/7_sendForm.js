const sendForm = () => {
  const errorMessage = 'Что-то пошло не так!';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

  const statusMessage = document.createElement('div');
  statusMessage.textContent = 'Тут будет сообщение!';
  statusMessage.style.cssText = 'font-size: 1.6rem';
  statusMessage.style.background = '#394f6a';
  statusMessage.style.color = '#fff';
  statusMessage.style.textAlign = 'center';
  statusMessage.style.position = 'absolute';
  statusMessage.style.padding = '4px 8px';

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
  });
};

export default sendForm;
