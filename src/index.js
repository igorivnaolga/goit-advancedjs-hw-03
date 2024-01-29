import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SlimSelect from 'slim-select';
import 'slim-select/styles';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectPlaceholder = `<option class="js-selectOption js-placeholder-select" value="choose">Select the cat</option>`;

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorMessage = document.querySelector('.error');

breedSelect.insertAdjacentHTML('afterbegin', selectPlaceholder);

loader.hidden = false;
breedSelect.hidden = true;
errorMessage.hidden = true;

function markup(arr) {
  return arr
    .map(({ name, id }) => {
      return `<option class="js-breedSelectOption" value="${id}">${name}</option>`;
    })
    .join('');
}

fetchBreeds()
  .then(data => {
    breedSelect.insertAdjacentHTML('beforeend', markup(data));
    loader.hidden = true;
    breedSelect.hidden = false;
    new SlimSelect({
      select: breedSelect,
    });
  })

  .catch(
    err => console.log(err),
    iziToast.error({
      message: 'Oops! Something went wrong! Try reloading the page!',
    })
  );

breedSelect.addEventListener('change', onChangeSelect);

function onChangeSelect() {
  catInfo.hidden = true;
  loader.hidden = false;
  breedSelect.hidden = true;

  fetchCatByBreed(breedSelect.value)
    .then(data => {
      const img = data[0].url;
      const name = data[0].breeds[0].name;
      const description = data[0].breeds[0].description;
      const temperament = data[0].breeds[0].temperament;

      catInfo.innerHTML = createCatCard(img, name, description, temperament);
      loader.hidden = true;
      breedSelect.hidden = false;
      catInfo.hidden = false;
    })
    .catch(err => {
      iziToast.error({
        message: 'Oops! Something went wrong! Try reloading the page!',
      });
      console.log(err);
      loader.hidden = true;
      breedSelect.hidden = false;
      catInfo.hidden = true;
    });
}

function createCatCard(url, name, description, temperament) {
  return `<img class="js-cat-photo" src="${url}" alt="${name}" width="300">
    <div class="js-cat-description">
      <h2>${name}</h2>
      <p>${description}</p>
      <h3>Temperament:</h3>
      <p>${temperament}</p>
    </div>`;
}
