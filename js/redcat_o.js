(() => {
  const refs = {
    openRedcatoBtn: document.querySelector('[data-redcato-open]'),
    closeRedcatoBtn: document.querySelector('[data-redcato-close]'),
    redcato: document.querySelector('[data-redcato]'),
    body: document.querySelector('body'),
  };

  refs.openRedcatoBtn.addEventListener('click', toggleRedcato);
  refs.closeRedcatoBtn.addEventListener('click', toggleRedcato);

  function toggleRedcato() {
    refs.redcato.classList.toggle('rotate_o');
  }
})();
