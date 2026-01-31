/* ===== FOOTER INFO ===== */
const yearSpan = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

/* ===== MENU TOGGLE ===== */
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation ul');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('show');
});

/* ===== TEMPLES ARRAY ===== */
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
  }
];

/* ===== DISPLAY TEMPLES ===== */
const templesContainer = document.querySelector('#temples');

function displayTemples(templesList) {
  templesContainer.innerHTML = "";

  templesList.forEach(temple => {
    const card = document.createElement('article');
    const name = document.createElement('h2');
    const location = document.createElement('p');
    const dedicated = document.createElement('p');
    const area = document.createElement('p');
    const image = document.createElement('img');

    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    area.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;

    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";

    card.append(name, location, dedicated, area, image);
    templesContainer.appendChild(card);
  });
}

/* ===== FILTER HELPERS ===== */
function getYear(dedicated) {
  return Number(dedicated.split(",")[0]);
}

/* ===== MENU FILTER EVENTS ===== */
document.querySelector('#home').addEventListener('click', () => {
  displayTemples(temples);
});

document.querySelector('#old').addEventListener('click', () => {
  displayTemples(
    temples.filter(t => getYear(t.dedicated) < 1900)
  );
});

document.querySelector('#new').addEventListener('click', () => {
  displayTemples(
    temples.filter(t => getYear(t.dedicated) > 2000)
  );
});

document.querySelector('#large').addEventListener('click', () => {
  displayTemples(
    temples.filter(t => t.area > 90000)
  );
});

document.querySelector('#small').addEventListener('click', () => {
  displayTemples(
    temples.filter(t => t.area < 10000)
  );
});

/* ===== INITIAL LOAD ===== */
displayTemples(temples);
