(() => {
  const refs = {
    openRedcatwbBtn: document.querySelector('[data-redcatwb-open]'),
    closeRedcatwbBtn: document.querySelector('[data-redcatwb-close]'),
    redcatwb: document.querySelector('[data-redcatwb]'),
    body: document.querySelector('body'),
  };

  refs.openRedcatwbBtn.addEventListener('click', toggleRedcatwb);
  refs.closeRedcatwbBtn.addEventListener('click', toggleRedcatwb);

  function toggleRedcatwb() {
    refs.redcatwb.classList.toggle('rotate_o');
  }
})();
