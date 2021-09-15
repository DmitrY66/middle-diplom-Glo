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
      target.placeholder = "Только буквы";
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

  const orderForm = document.querySelectorAll('.col-md-6 > .order-form > .form-horizontal');
  let btn1 = orderForm[0].querySelector('button');
  let btn2 = orderForm[1].querySelector('button');
  btn1.disabled = true;
  btn2.disabled = true;

  orderForm.forEach(el => {
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
    });
  });
};

export default validationForm;
