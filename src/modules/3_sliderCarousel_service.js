const classCarousel_service = () => {

  const mainChange = document.querySelector('#services > .container');
  const wrapChange = document.querySelector('#services > .container .row');
  wrapChange.children[4].remove();
  let service_arrows = document.createElement('div');
  service_arrows.className = 'services-arrows';
  service_arrows.innerHTML = `
      <div class="services__arrow services__arrow--left">
        <img src="images/benefits/left-arrow.svg" alt="">
      </div>
      <div class="services__arrow services__arrow--right">
        <img src="images/benefits/right-arrow.svg" alt="">
      </div>
      `;
  mainChange.appendChild(service_arrows);

  class Carousel_service {
    constructor({
      main,
      wrap,
      next,
      prev,
      infinity = false,
      position = 0,
      slidesToShow = 1,
      responsive = [],
    }) {
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slidesToShow = slidesToShow;
      this.options = {
        position,
        infinity,
        widthSlide: Math.floor(100 / this.slidesToShow),
        maxPosition: this.slides.length - this.slidesToShow,
      };
      this.responsive = responsive;
    }

    init() {
      this.addGloClass();
      this.addStyle();

      this.controlSlider();

      if (this.responsive) {
        this.responseInit();
      }
    }

    addGloClass() {
      this.main.classList.add('glo-service');
      this.wrap.classList.add('glo-service__wrap');
      for (const item of this.slides) {
        item.classList.add('glo-service__item');
      }
    }

    addStyle() {
      let style_service = document.getElementById('serviceCarousel-style');
      if (!style_service) {
        style_service = document.createElement('style');
        style_service.id = 'serviceCarousel-style';
      }

      style_service.textContent = `
        .glo-service{
          overflow: hidden !important;
          margin: 0 auto !important;
          // background: black;
          
        }
        @media (max-width: 576px) {
          .glo-service{
            width: 100%;
          }
        }
        .glo-service__wrap{
          transition: transform 0.5s !important;
          will-change: transform !important;
          // background: red;
          display: flex !important;
        }
        .glo-service__item{
          flex: 0 0 ${this.options.widthSlide}% !important;
          margin: auto 0 !important;
        }
        `;
      document.head.appendChild(style_service);
    }

    controlSlider() {
      this.next.addEventListener('click', this.nextSlider.bind(this));
      this.prev.addEventListener('click', this.prevtSlider.bind(this));
    }

    prevtSlider() {
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;
        if (this.options.position < 0) {
          this.options.position = this.options.maxPosition;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }

    nextSlider() {
      if (this.options.infinity || this.options.position < this.options.maxPosition) {
        ++this.options.position;
        if (this.options.position > this.options.maxPosition) {
          this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }

    responseInit() {
      const slidesToShowDefault = this.slidesToShow;
      const allRespone = this.responsive.map(item => item.breakpoint);
      const maxResponse = Math.max(...allRespone);

      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < maxResponse) {
          for (let i = 0; i < allRespone.length; i++) {
            if (widthWindow < allRespone[i]) {
              this.slidesToShow = this.responsive[i].slideToShow;
              this.options.widthSlide = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            }
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        }
      };

      checkResponse();

      window.addEventListener('resize', checkResponse);
    }
  }

  const carousel_service = new Carousel_service({
    main: '#services > .container',
    wrap: '#services > .container > .row',
    prev: '.services__arrow--left',
    next: '.services__arrow--right',

    slidesToShow: 2,
    infinity: true,

    responsive: [{
      breakpoint: 576,
      slideToShow: 1,
    }]
  });
  carousel_service.init();
};

export default classCarousel_service;
