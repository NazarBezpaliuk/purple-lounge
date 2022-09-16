(() => {
  const refs = {
    openRedcatobBtn: document.querySelector('[data-redcatob-open]'),
    closeRedcatobBtn: document.querySelector('[data-redcatob-close]'),
    redcatob: document.querySelector('[data-redcatob]'),
    body: document.querySelector('body'),
  };

  refs.openRedcatobBtn.addEventListener('click', toggleRedcatob);
  refs.closeRedcatobBtn.addEventListener('click', toggleRedcatob);

  function toggleRedcatob() {
    refs.redcatob.classList.toggle('rotate_o');
  }
})();
