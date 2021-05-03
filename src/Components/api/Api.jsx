import axios from 'axios';
const API_KEY = '20695726-7968ecbd338f0bb5977a378a4';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImg = (requestKey, page) => {
    const url = `${BASE_URL}?q=${requestKey}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    return axios
    .get(url)
    .then(response => response.data)
}
const Api = { fetchImg };
export default Api;