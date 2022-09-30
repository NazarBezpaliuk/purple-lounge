(() => {
  const refs = {
    openRedcatdBtn: document.querySelector('[data-redcatd-open]'),
    closeRedcatdBtn: document.querySelector('[data-redcatd-close]'),
    redcatd: document.querySelector('[data-redcatd]'),
    body: document.querySelector('body'),
  };

  refs.openRedcatdBtn.addEventListener('click', toggleRedcatd);
  refs.closeRedcatdBtn.addEventListener('click', toggleRedcatd);

  function toggleRedcatd() {
    refs.redcatd.classList.toggle('rotate_o');
  }
})();
