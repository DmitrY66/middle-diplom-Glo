const classSliderCarousel = () => {
  class SliderCarousel {
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
      this.main.classList.add('glo-slider');
      this.wrap.classList.add('glo-slider__wrap');
      for (const item of this.slides) {
        item.classList.add('glo-slider__item');
      }
    }

    addStyle() {
      let style = document.getElementById('sliderCarousel-style');
      if (!style) {
        style = document.createElement('style');
        style.id = 'sliderCarousel-style';
      }

      style.textContent = `
        .glo-slider{
          overflow: hidden !important;
          width: 555px;
          margin: 0 auto !important;
          // background: black;
        }
        @media (max-width: 576px) {
          .glo-slider{
            width: 185px;
          }
        }
        .glo-slider__wrap{
          transition: transform 0.5s !important;
          will-change: transform !important;
          // background: red;
        }
        .glo-slider__item{
          flex: 0 0 ${this.options.widthSlide}% !important;
          margin: auto 0 !important;
        }
        `;
      document.head.appendChild(style);
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

  const carousel = new SliderCarousel({
    main: '.benefits-inner',
    wrap: '.benefits-wrap',
    prev: '.benefits__arrow--left',
    next: '.benefits__arrow--right',

    slidesToShow: 3,
    infinity: true,

    responsive: [{
      breakpoint: 576,
      slideToShow: 1,
    }]
  });
  carousel.init();
};

export default classSliderCarousel;
