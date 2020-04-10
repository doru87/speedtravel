var panel__content = document.createElement('div');
panel__content.className="panel__content";
var h1 = document.createElement('h1');
h1.innerHTML = "Xanadu Island Resort";
var p = document.createElement('p');
p.innerHTML = "Am revenit din Luna noastra de Miere petrecuta la hotelul Xanadu Island Resort. O vacanta superba! Multumim! Acest resort inseamna relaxare, civilizatie, amabilitate, lux maxim, privelisti minunate, camere spatioase, animatie de bun gust, mancare buna pentru toate gusturile de la gratare cu pui, miel, vita, chiftele, kebab, cartofi si legume pe jar, la fructe de mare, peste, prajituri, fructe proaspete. Serile am ascultat muzica live.";
panel__content.appendChild(h1);
panel__content.appendChild(p);
document.body.appendChild(panel__content);

var panel__content1 = document.createElement('div');
panel__content1.className="panel__content";
var h1 = document.createElement('h1');
h1.innerHTML = "Riu Palace Las Americas";
var p = document.createElement('p');
p.innerHTML = "Chiar daca la prima impresie hotelul mi s-a parut invechit, am fost uimit de calitatea serviciilor. De departe cea mai buna servire si bufet (mancare + bautura) de peste tot pe unde am fost. Atmosfera super avand in vedere ca hotelul este Adults only si programul foarte animat. Plaja si nisipul sunt fenomenale de o culoare unica! ";
panel__content1.appendChild(h1);
panel__content1.appendChild(p);
document.body.appendChild(panel__content1);

const myItems = document.querySelectorAll('.panel__content');

for (let i = 0; i < myItems.length; i++) {
	const panels = document.querySelectorAll('.panel');
	for (let j = 0; j < panels.length; j++) {
		panels[0].appendChild(myItems[0]);
		panels[1].appendChild(myItems[1])

		var width = panels[i].offsetWidth;
		
		myItems[0].style.width = width * 0.75 +"px";
		myItems[1].style.width = width * 0.75 +"px";

		let myOffset1 = panels[0].offsetTop + 0.2 * panels[0].offsetHeight;
		let myOffset2 = panels[1].offsetTop + 0.2 * panels[1].offsetHeight;

		myItems[0].style.top = myOffset1 +"px";
		myItems[1].style.top = myOffset2 +"px";
		
	}
	myItems[i].style.position = 'absolute';
}
scrollFactor(myItems);


window.addEventListener("scroll", function(event) {
	scrollFactor(myItems);
}, false);

window.onresize = function(){ location.reload(); }

function scrollFactor(itemuri) {

	for (let i = 0; i < itemuri.length; i++) {
		(function() {
			let scrollY = window.scrollY;
			let innerHeight = window.innerHeight;
			let offsetTop = itemuri[i].offsetTop;
			let offsetHeight = itemuri[i].offsetHeight;
			let factor = 0.1;

			let myTransform = Math.round(((offsetTop - (innerHeight / 2) + offsetHeight) - scrollY) * factor);
			itemuri[i].style.transform = `translateY(${myTransform}px)`;
			itemuri[i].style.transition = "transform 0s linear";
		
			
		})(i);
	}
}


window.addEventListener("scroll", function(event) {
	var grid = this.document.getElementsByClassName('img-grid')[0];
	var myOffset = grid.offsetTop;

	let wOffset = window.scrollY;
	
	if(wOffset > myOffset){
		document.getElementById('echipa-container').style.visibility="visible";
		document.getElementById('echipa-container').setAttribute("style","opacity:1");
		var mql = window.matchMedia("screen and (max-width: 1140px)");
			if (mql.matches){
				document.getElementsByClassName('spaces')[0].style.transform = "translateY(0%)";
				document.getElementsByClassName('model')[0].style.transform = "translateY(0%)";
				document.getElementsByClassName('curiosity')[0].style.transform = "translateY(0%)"
			}else {
				document.getElementsByClassName('spaces')[0].style.transform = "translateY(10%)"
				document.getElementsByClassName('model')[0].style.transform ="translateX(0%)";
				document.getElementsByClassName('curiosity')[0].style.transform ="translateX(0%)";
			
			}

	}
})

const button = document.querySelector('.formular_contact');
const popup = document.getElementById('popup-container');
const close = document.querySelector('.popup-close')

button.addEventListener('click', () => {
	popup.style.display = 'flex';
})

close.addEventListener('click', () => {
	popup.style.display = 'none';
})


