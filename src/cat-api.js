import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.headers.common['x-api-key'] =
  'live_irHtt3V8BrTGwkXWLI8iNhKiq5Mjia2e5QWJF9QV3w8S7qeRvaIuzpJtDhIIrhEx';

const BASE_URL = 'https://api.thecatapi.com/v1/';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}breeds`).then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}images/search?breed_ids=${breedId}`)
    .then(response => {
      if (!response.data) {
        throw new Error(`Breed ${breedId} not found`);
      } else {
        return response.data;
      }
    });
}
