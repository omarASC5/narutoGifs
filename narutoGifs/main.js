
 
 //javascript, jQuery
 const xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=5");
   xhr.done(function(data) {
       console.log("success got data", data);
   });
 
 const current = document.getElementById('current');
 current.addEventListener('click', searchNaruto);
 
//  const kakashi = document.getElementById('kakashi');
//  kakashi.addEventListener('click', searchKakashi);
 
//  const itachi = document.getElementById('itachi');
//  itachi.addEventListener('click', searchItachi);
 
//  const shikamaru = document.getElementById('shikamaru');
//  shikamaru.addEventListener('click', searchShikamaru);
 
//  const gaara = document.getElementById('gaara');
//  gaara.addEventListener('click', searchGaara);
 
//  const konan = document.getElementById('konan');
//  konan.addEventListener('click', searchKonan);
//  const sasuke = document.getElementById('sasuke');
//  const hashirama = document.getElementById('hashirama');
//  const hinata = document.getElementById('hinata');
//  const sakura = document.getElementById('sakura');
//  const obito = document.getElementById('obito');
//  sasuke.addEventListener('click', searchSasuke);
//  hashirama.addEventListener('click', searchHashirama);
//  hinata.addEventListener('click', searchHinata);
//  sakura.addEventListener('click', searchSakura);
//  obito.addEventListener('click', searchObito);
 
//  function randomFromArray(array) {
//    const randomIndex = Math.random();
//    const range = randomIndex * (array.length);
//    const finalIndex = Math.floor(range);
//    return array[finalIndex];
//  }
 
 function randomAnyRange(low, high) {
   const randomNumber = Math.floor((Math.random() * (high - low)) + low);
   return randomNumber;
 }
 function searchNaruto() {
   const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=naruto&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
   zhr.done(function(data) {
       const ranIndex = randomAnyRange(0, data.data.length);
       current.src =  data.data[ranIndex].images.original.url;
   });
 }
 
 function searchKakashi() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=kakashi&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        current.src =  data.data[ranIndex].images.original.url;
    });
 }
 
 function searchItachi() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=itachi&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        current.src =  data.data[ranIndex].images.original.url;
    });
 }
 
 function searchShikamaru() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=shikamaru&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        current.src =  data.data[ranIndex].images.original.url;
    });
 }
 
 function searchGaara() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=gaara&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        current.src =  data.data[ranIndex].images.original.url;
    });
 }
 
 function searchKonan() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=konan&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        current.src =  data.data[ranIndex].images.original.url;
    });
 }
 
 function searchSasuke() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=sasuke&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        current.src =  data.data[ranIndex].images.original.url;
    });
 }
 
 function searchHashirama() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=hashirama&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        current.src =  data.data[ranIndex].images.original.url;
    });
 }
 
 function searchHinata() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=hinata&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        current.src =  data.data[ranIndex].images.original.url;
    });
 }
 
 function searchSakura() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=sakura&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        current.src =  data.data[ranIndex].images.original.url;
    });
 }
 
 function searchObito() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=obito&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        current.src =  data.data[ranIndex].images.original.url;
    });
 }

var array_of_functions = [
    searchNaruto,
    searchKakashi,
    searchSasuke,
    searchItachi,
    searchShikamaru,
    searchGaara,
    searchKonan,
    searchHashirama,
    searchHinata,
    searchSakura,
    searchObito
]

const namesArray = ['Naruto', 'Kakashi','Sasuke', 'Itachi', 'Shikamaru', 'Gaara', 'Konan', 'Hashirama','Hinata', 'Sakura', 'Obito'];
const imageArray = ['Naruto.png', 'kakashi.jpg','Sasuke.jpg', 'itachi.jpg', 'shikamaru.jpg', 'gaara.jpg', 'konan.png', 'Hashirama.png','Hinata.png', 'Sakura.png', 'Obito.jpg'];
const backButton = document.querySelector('.fa-arrow-circle-right');
 backButton.addEventListener('click', nextImage);

 const forwardButton = document.querySelector('.fa-arrow-circle-left');
 forwardButton.addEventListener('click', lastImage);

 const characterName = document.querySelector('#character-name');
 
 var i = 0;
 function nextImage() {
    if (i < namesArray.length - 1) {
        i++;
        current.removeEventListener('click', array_of_functions[i-1]);

    } else if (i == namesArray.length) {
       i = namesArray.length - 1;

    }
    characterName.innerHTML = namesArray[i]; 
    current.src = imageArray[i];  


    current.addEventListener('click', array_of_functions[i]);
    

    
}


function lastImage() {
    if (i > 0) {
        i--; 
        current.removeEventListener('click', array_of_functions[i+1]);
    } else if (i == -1) {
        i = 0;

    }

    characterName.innerHTML = namesArray[i];
    current.src = imageArray[i]; 
    current.addEventListener('click', array_of_functions[i]);

  
 }

