(() => {
  const refs = {
    openSetsBtn: document.querySelector('[data-sets-open]'),
    closeSetsBtn: document.querySelector('[data-sets-close]'),
    sets: document.querySelector('[data-sets]'),
    body: document.querySelector('body'),
  };

  refs.openSetsBtn.addEventListener('click', toggleSets);
  refs.closeSetsBtn.addEventListener('click', toggleSets);

  function toggleSets() {
    refs.sets.classList.toggle('is-hidden-set');
  }
})();
