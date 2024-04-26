import axios from "axios";
const BACKEND_ENDPOINT = `https://qtify-backend-labs.crio.do`;

// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new
// https://qtify-backend-labs.crio.do/album/:slug
// https://qtify-backend-labs.crio.do/songs
// https://qtify-backend-labs.crio.do/faq
// https://qtify-backend-labs.crio.do/genres

export const fetchTopAlbums = async () => {
  // console.log("fetchTopAlbums fun called");
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchNewAlbums = async () => {
  // console.log("fetchNewAlbums fun called");
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchSongs = async () => {
  // console.log("songs fun called");
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchFaq = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/faq`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
