// 1 apply directly in html

// 2 
function makeYellow() {
    document.body.style.backgroundColor = 'yellow'
}
//3 .1
const getTomatoId = document.getElementById('make-tomato');
getTomatoId.onclick = makeTomato;
function makeTomato() {
    document.body.style.backgroundColor = 'tomato';
}

// 3.2

document.getElementById('make-skyblue').onclick = function makeSkyblue() { document.body.style.backgroundColor = 'skyblue'; }

// 4.1
const MakeGoldenRodButton = document.getElementById('make-goldenrod');
MakeGoldenRodButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod'
}

//4.2
const MakeGreenButton = document.getElementById('make-green');
MakeGreenButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green'
});


// final 5 
document.getElementById('make-orange').addEventListener('click', function (){document.body.style.backgroundColor='orange'})