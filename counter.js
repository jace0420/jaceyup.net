(function () {
  fetch('/hits.json')
    .then(r => r.json())
    .then(data => {
      const el = document.getElementById('hit-counter-digits');
      if (el) el.textContent = String(data.hits).padStart(7, '0');
    })
    .catch(() => {});
})();
