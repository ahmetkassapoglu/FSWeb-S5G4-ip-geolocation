//axios import buraya gelecek
import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
	 return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek

let cards = document.querySelector(".cards")

 function yapici (obj){
let container = document.createElement("div")
container.className = "card"

let bayrak = document.createElement("img")
bayrak.setAttribute("src", obj.ülkebayrağı)
container.appendChild(bayrak)

//info
let info =document.createElement("div")
info.className = "card-info"
container.appendChild(info);

let h3 = document.createElement("h3")
h3.textContent = obj.sorgu
info.appendChild(h3)

let p1 = document.createElement("p")
p1.className= "ulke"
p1.textContent= obj.ülkeKodu
info.appendChild(p1)

 let p2 = document.createElement("p")
 p2.textContent = ` Enlem: ${obj.enlem} Boylam : ${obj.boylam}`
 info.appendChild(p2)


 let p3 = document.createElement("p")
 p3.textContent = obj.şehir
 info.appendChild(p3)

 
 let p4 = document.createElement("p")
 p4.textContent = ` Saat dilimi : ${obj.saatdilimi}`
 info.appendChild(p4)
 

 let p5 = document.createElement("p")
 p5.textContent = `Para birimi : ${obj.parabirimi}`
 info.appendChild(p5)

 let p6 = document.createElement("p")
 p6.textContent = `ISP : ${obj.isp}`
 info.appendChild(p6)

 return container
	}

	let sor = axios.get('https://apis.ergineer.com/ipgeoapi/94.54.23.41');

 sor.then( response => {
 let s = response.data
 cards.append(yapici(s))
})
