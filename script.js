const products = [
  ['Cognac Chelsea Boot','Donn-Marc','boots'],
  ['Black Chelsea Boot','Donn-Marc','boots'],
  ['Black Suede Chelsea','Clarks','boots'],
  ['Espresso Chelsea Boot','Donn-Marc','boots'],
  ['Chocolate Suede Chelsea','Clarks','boots'],
  ['Navy Suede Boot','Donn-Marc','boots'],
  ['Brown Harness Boot','Donn-Marc','boots'],
  ['Tan Suede Chelsea','Clarks','boots'],
  ['Black Lug Chelsea','Donn-Marc','boots'],
  ['Tan Leather Loafer','Zoncasterr','loafers'],
  ['Burgundy Bit Loafer','Zoncasterr','loafers'],
  ['Wine Leather Loafer','Zoncasterr','loafers'],
  ['Oxblood Penny Loafer','Zoncasterr','loafers'],
  ['Burgundy Textured Loafer','Zoncasterr','loafers'],
  ['Wine Croc Loafer','Zoncasterr','loafers'],
  ['Black Driving Loafer','Zoncasterr','loafers'],
  ['White Leather Lace-up','Blackberrys','lace-ups'],
  ['Tan Leather Lace-up','Zoncasterr','lace-ups'],
  ['Black Woven Loafer','Zoncasterr','loafers'],
  ['Black Leather Lace-up','Zoncasterr','lace-ups'],
  ['Black Low-top Lace-up','Zoncasterr','lace-ups'],
  ['Black Classic Lace-up','Zoncasterr','lace-ups'],
  ['Cognac Leather Lace-up','Zoncasterr','lace-ups'],
  ['Black Panel Lace-up','Zoncasterr','lace-ups']
];
const grid = document.querySelector('#product-grid');
products.forEach(([name,brand,category],index) => {
  const number = String(index + 1).padStart(2,'0');
  const card = document.createElement('article');
  card.className = 'card'; card.dataset.category = category;
  card.innerHTML = `<button class="card-button" type="button" aria-label="View ${name} photograph"><div class="card-image"><img src="shoe-${number}.jpeg" alt="${name} from the supplied ${brand} collection" loading="lazy"></div><div class="card-meta"><span>${brand}</span><span>${number} / 24</span></div><h3>${name}</h3></button>`;
  card.querySelector('button').addEventListener('click', () => {
    document.querySelector('#dialog-image').src = `shoe-${number}.jpeg`;
    document.querySelector('#dialog-image').alt = `${name} from the supplied ${brand} collection`;
    document.querySelector('#dialog-caption').textContent = `${name} · ${brand}`;
    document.querySelector('#photo-dialog').showModal();
  });
  grid.append(card);
});
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  document.querySelectorAll('.card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
const dialog = document.querySelector('#photo-dialog');
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if(event.target === dialog) dialog.close(); });
