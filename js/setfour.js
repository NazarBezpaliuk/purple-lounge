(() => {
  const refs = {
    openSetfBtn: document.querySelector('[data-setf-open]'),
    closeSetfBtn: document.querySelector('[data-setf-close]'),
    setf: document.querySelector('[data-setf]'),
    body: document.querySelector('body'),
  };

  refs.openSetfBtn.addEventListener('click', toggleSetf);
  refs.closeSetfBtn.addEventListener('click', toggleSetf);

  function toggleSetf() {
    refs.setf.classList.toggle('is-hidden-set');
  }
})();
