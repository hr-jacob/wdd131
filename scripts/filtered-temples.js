function getYear(date) {
  return Number(date.split(",")[0]);
}

/* ===== FILTERS ===== */
const home = document.querySelector('#home');
const old = document.querySelector('#old');
const newer = document.querySelector('#new');
const large = document.querySelector('#large');
const small = document.querySelector('#small');

if (home) home.addEventListener('click', () => displayTemples(temples));

if (old) old.addEventListener('click', () =>
  displayTemples(temples.filter(t => getYear(t.dedicated) < 1900))
);

if (newer) newer.addEventListener('click', () =>
  displayTemples(temples.filter(t => getYear(t.dedicated) > 2000))
);

if (large) large.addEventListener('click', () =>
  displayTemples(temples.filter(t => t.area > 90000))
);

if (small) small.addEventListener('click', () =>
  displayTemples(temples.filter(t => t.area < 10000))
);
