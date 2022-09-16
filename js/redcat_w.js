(() => {
  const refs = {
    openRedcatwBtn: document.querySelector('[data-redcatw-open]'),
    closeRedcatwBtn: document.querySelector('[data-redcatw-close]'),
    redcatw: document.querySelector('[data-redcatw]'),
    body: document.querySelector('body'),
  };

  refs.openRedcatwBtn.addEventListener('click', toggleRedcatw);
  refs.closeRedcatwBtn.addEventListener('click', toggleRedcatw);

  function toggleRedcatw() {
    refs.redcatw.classList.toggle('rotate_o');
  }
})();
