const sertDoc = () => {
  const overlay = document.querySelector('.overlay');
  const sertificateDocument = document.querySelectorAll('.sertificate-document');

  let sert_1;
  let sert_2;
  let sert_3;

  const pathImg_1 = 'images/documents/original/document4.jpg';
  const pathImg_2 = 'images/documents/original/document4.jpg';
  const pathImg_3 = 'images/documents/original/document4.jpg';

  const createModSert = (createMod, path) => {
    createMod = document.createElement('div');
    createMod.innerHTML = `
  <img src=${path} alt="">
  <span class="services-modal__close">&#10006;</span>
  `;
    createMod.className = 'sertDocMod';
    createMod.src = path;
    createMod.style.cssText = `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  z-index: 9999;
  display: none;
  transition: all .5s linear 0s;
  `;
    createMod.children[0].style.height = '100vh';
    document.body.append(createMod);
    return createMod;
  };

  const visualMod = (sert) => {
    overlay.style.display = 'block';
    sert.style.display = 'block';
    sert.children[1].addEventListener('click', () => {
      sert.style.display = 'none';
      overlay.style.display = 'none';
    });
  };

  const overlayClosue = (sert) => {
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      sert.style.display = 'none';
    });
  };

  sert_1 = createModSert(sert_1, pathImg_1);
  sert_2 = createModSert(sert_2, pathImg_2);
  sert_3 = createModSert(sert_3, pathImg_3);

  sertificateDocument[0].addEventListener('click', (e) => {
    e.preventDefault();
    visualMod(sert_1);
    overlayClosue(sert_1);
  });

  sertificateDocument[1].addEventListener('click', (e) => {
    e.preventDefault();
    visualMod(sert_2);
    overlayClosue(sert_2);
  });

  sertificateDocument[2].addEventListener('click', (e) => {
    e.preventDefault();
    visualMod(sert_3);
    overlayClosue(sert_3);
  });
};

export default sertDoc;
