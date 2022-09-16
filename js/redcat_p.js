(() => {
  const refs = {
    openRedcatpBtn: document.querySelector('[data-redcatp-open]'),
    closeRedcatpBtn: document.querySelector('[data-redcatp-close]'),
    redcatp: document.querySelector('[data-redcatp]'),
    body: document.querySelector('body'),
  };

  refs.openRedcatpBtn.addEventListener('click', toggleRedcatp);
  refs.closeRedcatpBtn.addEventListener('click', toggleRedcatp);

  function toggleRedcatp() {
    refs.redcatp.classList.toggle('rotate_o');
  }
})();
