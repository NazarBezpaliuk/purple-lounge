(() => {
  const refs = {
    openRedcatpbBtn: document.querySelector('[data-redcatpb-open]'),
    closeRedcatpbBtn: document.querySelector('[data-redcatpb-close]'),
    redcatpb: document.querySelector('[data-redcatpb]'),
    body: document.querySelector('body'),
  };

  refs.openRedcatpbBtn.addEventListener('click', toggleRedcatpb);
  refs.closeRedcatpbBtn.addEventListener('click', toggleRedcatpb);

  function toggleRedcatpb() {
    refs.redcatpb.classList.toggle('rotate_o');
  }
})();
