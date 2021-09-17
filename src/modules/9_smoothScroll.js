const smoothScroll = () => {
  const smoothScr = document.querySelector('.smooth-scroll');
  const header = document.querySelector('#header');
  
  smoothScr.style.display = 'none'

  window.addEventListener('scroll', () => {
    let scrollHeight = scrollY;
    if (scrollHeight < 600) {
      smoothScr.style.display = 'none'
    }
    if (scrollHeight > 600) {
      smoothScr.style.display = 'block'
    }
  });

  smoothScr.addEventListener('click', () => {
    header.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  });
};

export default smoothScroll;
