const img = document.querySelector('img');
const randomButton = document.querySelector('.random-button');
const textInput = document.querySelector('[type=search]');
const searchButton = document.querySelector('.search-button');

function fetchRandom() {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=cats`, {
    mode: 'cors',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

function fetchSpecific(input) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${input}`,
    {
      mode: 'cors',
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

randomButton.addEventListener('click', fetchRandom);
searchButton.addEventListener('click', () => {
  if (textInput.value == '') {
    textInput.placeholder = 'please type something';
    textInput.classList.add('validation-failed');
  } else {
    textInput.classList.remove('validation-failed');
    fetchSpecific(textInput.value);
  }
});

fetchRandom();
