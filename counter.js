(function () {
  fetch('https://neocities.org/api/info?sitename=jaceyup')
    .then(r => r.json())
    .then(data => {
      const el = document.getElementById('hit-counter-digits');
      if (el) el.textContent = String(data.info.hits).padStart(7, '0');
    })
    .catch(() => {});
})();
