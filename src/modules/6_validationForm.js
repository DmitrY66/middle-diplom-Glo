const validationForm = () => {

  let labelName = false;
  let labelPhone = false;

  const activeButton = (button) => {
    if (labelName === true &&
      labelPhone === true) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  };

  const styleOut = (formInput) => {
    formInput.addEventListener('focusout', () => {
      formInput.style.borderColor = '';
      formInput.style.boxShadow = '';
    });
  };

  const cleanInp = () => {
    const formInputs = document.querySelectorAll('input');
    formInputs.forEach(elem => {
      elem.value = '';
    });
  };

  const validName = (target) => {
    if (/^[а-яА-Яa-zA-Z\s]+$/.test(target.value)) {
      target.style.borderColor = 'green';
      target.style.boxShadow = '0 0 8px green';

      labelName = true;
    } else {
      target.style.borderColor = 'red';
      target.style.boxShadow = '0 0 8px red';

      labelName = false;
    }
    if (target.value === '') {
      target.placeholder = "Имя русскими буквами";
      target.style.borderColor = 'green';
      target.style.boxShadow = '0 0 8px green';
    }
  };

  const validPhone = (target) => {
    if (/\+\d{1,16}$/.test(target.value)) {
      target.style.borderColor = 'green';
      target.style.boxShadow = '0 0 8px green';

      labelPhone = true;
    } else {
      target.style.borderColor = 'red';
      target.style.boxShadow = '0 0 8px red';

      labelPhone = false;
    }
    if (target.value === '') {
      target.placeholder = "Образец: +00000000000";
      target.style.borderColor = 'green';
      target.style.boxShadow = '0 0 8px green';
    }
  };

  const forms = document.querySelectorAll('form');

  let btn1 = forms[0].querySelector('button');
  let btn2 = forms[1].querySelector('button');
  let btn3 = forms[5].querySelector('button');
  let btn4 = forms[6].querySelector('button');
  btn1.disabled = true;
  btn2.disabled = true;


  const fancyBoxModal = document.querySelectorAll('.fancyboxModal');

  fancyBoxModal.forEach(el => {
    el.addEventListener('click', () => {
      btn3.disabled = true;
      btn4.disabled = true;
    })
  });

  forms.forEach(el => {
    el.addEventListener('input', (e) => {
      let target = e.target;

      if (target.matches('input[name="fio"]')) {
        validName(target);
        styleOut(target);
      }

      if (target.matches('input[name="phone"]')) {
        validPhone(target);
        styleOut(target);
      }

      activeButton(btn1);
      activeButton(btn2);
      activeButton(btn3);
      activeButton(btn4);
    });
  });

  document.body.addEventListener('submit', (e) => {
    const target = e.target;

    if (target.closest('#order_1, #order_2')) {
      e.preventDefault();
      labelName = false;
      labelPhone = false;
      btn1.disabled = true;
      btn2.disabled = true;
      cleanInp();
    }

    if (target.closest('.fancybox-skin')) {
      e.preventDefault();
      labelName = false;
      labelPhone = false;
      btn1.disabled = true;
      btn2.disabled = true;
      cleanInp();
    }
  });
};

export default validationForm;
