(() => {
  const refs = {
    openSetBtn: document.querySelector('[data-set-open]'),
    closeSetBtn: document.querySelector('[data-set-close]'),
    set: document.querySelector('[data-set]'),
    body: document.querySelector('body'),
  };

  refs.openSetBtn.addEventListener('click', toggleSet);
  refs.closeSetBtn.addEventListener('click', toggleSet);

  function toggleSet() {
    refs.set.classList.toggle('is-hidden-set');
    refs.body.classList.toggle('no-scroll');
  }
})();
