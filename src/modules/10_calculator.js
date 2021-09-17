const calculator = () => {
  const calcBlock = document.querySelector('#calc');

  try {
    calcBlock.addEventListener('input', (e) => {
      let target = e.target;

      if (target.matches('input')) {
        target.value = target.value.replace(/\D/g, '');
      }
    });
  } catch (err) { }

  const calc = (price = 100) => {
    const calcType = document.querySelector('#calc-type');
    const calcTypeMaterial = document.querySelector('#calc-type-material');
    const calcSquare = document.querySelector('#calc-input');
    const calcTotal = document.querySelector('#calc-total');

    const countSum = () => {
      let priceTotal = 0;

      if (calcSquare.value != '' && calcType.value != '--' && calcTypeMaterial.value != '--') {
        priceTotal = Math.round((+calcSquare.value * +calcType.value * +calcTypeMaterial.value) * price);
        calcTotal.value = priceTotal;
      } else {
        calcTotal.placeholder = 'заполните все поля';
        calcTotal.value = 'заполните все поля';
      }
    };

    try {
      calcBlock.addEventListener('change', (e) => {
        const target = e.target;

        if (target.matches('select') || target.matches('input')) {
          countSum();
        }
        if (target.matches('#calc-type')) {
          if (calcType.value === '--') {
            calcTypeMaterial.value = '--';
            calcSquare.value = '';
            calcTotal.placeholder = 'Итого';
            calcTotal.value = '';
          }
        }
      });
    } catch (err) { }
  };

  calc();
};

export default calculator;
