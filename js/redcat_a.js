(() => {
  const refs = {
    openRedcataBtn: document.querySelector('[data-redcata-open]'),
    closeRedcataBtn: document.querySelector('[data-redcata-close]'),
    redcata: document.querySelector('[data-redcata]'),
    body: document.querySelector('body'),
  };

  refs.openRedcataBtn.addEventListener('click', toggleRedcata);
  refs.closeRedcataBtn.addEventListener('click', toggleRedcata);

  function toggleRedcata() {
    refs.redcata.classList.toggle('rotate_o');
  }
})();
