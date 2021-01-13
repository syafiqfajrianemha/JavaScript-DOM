// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p3.style.backgroundColor = 'lightblue';
// }

//////////////////////////////////////////////

const p4 = document.querySelector('.p4');
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');

    const liBaru = document.createElement('li');
    const textliBaru = document.createTextNode('item baru');

    liBaru.appendChild(textliBaru);
    ul.appendChild(liBaru);
});

//////////////////////////////////////////////

// const p3 = document.querySelector('.p3');

// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function () {
//     p3.style.color = 'red';
// }

//////////////////////////////////////////////

// p3.addEventListener('click', function () {
//     p3.style.backgroundColor = 'lightblue';
// });
// p3.addEventListener('click', function () {
//     p3.style.color = 'red';
// });