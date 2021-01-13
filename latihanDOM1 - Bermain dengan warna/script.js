const btn = document.getElementById('btn');

btn.onclick = function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}

const btnRandom = document.createElement('button');
const textbtnRandom = document.createTextNode('Random Warna');

btnRandom.appendChild(textbtnRandom);
btnRandom.setAttribute('type', 'button');

btn.after(btnRandom);

btnRandom.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 * 1);
    const g = Math.round(Math.random() * 255 * 1);
    const b = Math.round(Math.random() * 255 * 1);
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + b + ', ' + b + ')';
});

////////////////////////////////////////////////

// const warna = document.querySelectorAll("input[type='range']");

// warna.forEach(function (slider) {
//     slider.addEventListener("input", function () {
//         const r = document.querySelector("input[name='sMerah']").value;
//         const g = document.querySelector("input[name='sHijau']").value;
//         const b = document.querySelector("input[name='sBiru']").value;

//         document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     });
// });

////////////////////////////////////////////////

// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]');

// sMerah.addEventListener('input', function () {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
// });

// sHijau.addEventListener('input', function () {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
// });

// sBiru.addEventListener('input', function () {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
// });

////////////////////////////////////////////////

// document.body.addEventListener('mousemove', function (event) {
//     const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//     const yPos = Math.round((event.clientY / window.innerHeight) * 255);

//     document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 100)';
// });

////////////////////////////////////////////////

const sectionA = document.querySelector('section#a');

const sMerah = sectionA.querySelector('input[name=sMerah]');
const sHijau = sectionA.querySelector('input[name=sHijau]');
const sBiru = sectionA.querySelector('input[name=sBiru]');

sectionA.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});