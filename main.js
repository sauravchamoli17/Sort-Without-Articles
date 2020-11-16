const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const list = document.querySelector('#bands');
let sortedBands = bands;

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

sortedBands = sortedBands.slice(0).sort((a, b) => strip(a) > strip(b) ? 1 : -1);

function populateList(bandCollection) {
    list.innerHTML = '';
    list.innerHTML = bandCollection.map(band => `<li>${band}</li>`).join('');    
}

populateList(bands);
document.querySelector('button').addEventListener('click', function () {populateList(sortedBands);});