
const rumah = document.querySelectorAll('.rumah');
const tangan = document.querySelectorAll('.tangan');
const play = document.querySelector('button');
const skor = document.querySelector('span');
const dor = document.querySelector('#dor')

let rumahAwal;
let selesai;
let nilaiSkor;



function acakRumah(rumah) {
    const a = Math.floor(Math.random() * rumah.length);
    const aRumah = rumah[a];
    if (aRumah == rumahAwal) {
        acakRumah(rumah);
    }
    rumahAwal = aRumah;
    return aRumah;
}

function acakWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculTangan() {
    const tanganMuncul = acakRumah(rumah);
    const aWaktu = acakWaktu(200, 1000);


    tanganMuncul.classList.add('muncul');

    setTimeout(() => {
        tanganMuncul.classList.remove('muncul');
        if (!selesai) {
            munculTangan();
        }
    }, aWaktu);
}

function getok() {
    nilaiSkor++
    this.parentNode.classList.remove('muncul');
    dor.play();
    skor.innerHTML = nilaiSkor;
}

tangan.forEach(t => {
    t.addEventListener('click', getok)
})

// play.addEventListener('click', function() {
   
//     play.innerHTML= "stop"
//     selesai = false;
//     nilaiSkor = 0;
//     skor.innerHTML = nilaiSkor;
//     munculTangan();

//     setTimeout(()=> {
//         play.innerHTML="start";
//         selesai = true;
//     }, 20000);
// });


function go() {
    play.innerHTML= "stop"
    selesai = false;
    nilaiSkor = 0;
    skor.innerHTML = nilaiSkor;
    munculTangan();

    setTimeout(()=> {
        play.innerHTML="start";
        selesai = true;
    }, 20000);
}
