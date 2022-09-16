(() => {
  const refs = {
    openRedcatabBtn: document.querySelector('[data-redcatab-open]'),
    closeRedcatabBtn: document.querySelector('[data-redcatab-close]'),
    redcatab: document.querySelector('[data-redcatab]'),
    body: document.querySelector('body'),
  };

  refs.openRedcatabBtn.addEventListener('click', toggleRedcatab);
  refs.closeRedcatabBtn.addEventListener('click', toggleRedcatab);

  function toggleRedcatab() {
    refs.redcatab.classList.toggle('rotate_o');
  }
})();
