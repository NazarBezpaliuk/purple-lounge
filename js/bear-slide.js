(() => {
  const refs = {
    openBearslideBtn: document.querySelector('[data-bearslide-open]'),
    closeBearslideBtn: document.querySelector('[data-bearslide-close]'),
    bearslide: document.querySelector('[data-bearslide]'),
    body: document.querySelector('body'),
  };

  refs.openBearslideBtn.addEventListener('click', toggleBearslide);
  refs.closeBearslideBtn.addEventListener('click', toggleBearslide);

  function toggleBearslide() {
    refs.bearslide.classList.toggle('slide');
  }
})();
