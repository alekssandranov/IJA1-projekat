function biljke(x) {

    if (x === 1) {
        window.location = "biljke.html";
    }
    else if (x === 2) {
        window.location = "vencanja.html";
    }
    else if (x === 3) {
        window.location = "buketi.html";
    }
    return x;
}

function galerija() {
    var nizSlika = [];

    nizSlika.push('slike/buket1.jpg', 'slike/buket2.jpg', 'slike/buket4.jpg',
        'slike/buket5.jpg', 'slike/aranzman1.jpg', 'slike/aranzman2.jpg',
        'slike/aranzman3.jpg', 'slike/aranzman4.jpg');

    for (var i = 0; i < nizSlika.length; i++) {
        const slike = '<img src="' + nizSlika[i] + '">';
        document.getElementById('slike').innerHTML += slike;
    }
}




let form = document.forms["mojaForma"];
form.addEventListener("submit", forma);

function forma(e) {
    e.preventDefault();

    let podaci = {
        "ime": this.ime.value.charAt(0).toUpperCase() + this.ime.value.slice(1),
        "prezime": this.prezime.value.charAt(0).toUpperCase() + this.prezime.value.slice(1),
        "broj": this.broj.value,
        "email": this.email.value,
        "poruka": this.poruka.value
    }

    let	ispis = `
	<p>Ime: <span>${podaci.ime}</span></p>
	<p>Prezime: <span>${podaci.prezime}</span></p>
	<p>Broj: <span>${podaci.broj}</span></p>
	<p>Email: <span>${podaci.email}</span></p>
	<p>Poruka: <span>${podaci.poruka}</span></p>
    `;

    var stil = document.getElementById('ispis');
    stil.innerHTML = ispis;
    stil.style.fontSize = '20px';
    stil.style.margin = '13px 0 0 10px';

    return;

}


