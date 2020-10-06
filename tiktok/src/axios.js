import axios from "axios";

const instance = axios.create({
  baseUrl: "https://merntiktokclone.herokuapp.com/",
});

export default instance;
