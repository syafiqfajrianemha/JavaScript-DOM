// Manipulasi Node
// appendChild() -> menyimpan ke akhir dari sebuah element parent
// buat elemen baru
const pBaru = document.createElement('p');
const textpBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam tag P
pBaru.appendChild(textpBaru);

// simpan pBaru diakhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//////////////////////////////////////////////

const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('item baru');

liBaru.appendChild(teksliBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

//////////////////////////////////////////////

const link = sectionA.getElementsByTagName('a')[0];

sectionA.removeChild(link);

//////////////////////////////////////////////

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const texth2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(texth2Baru);

sectionB.replaceChild(h2Baru, p4);

//////////////////////////////////////////////

pBaru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';