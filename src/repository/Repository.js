import axios from "axios";

const baseDomain = "https://www.reddit.com";
const baseURL = `${baseDomain}/r`;
export default axios.create({
  baseURL,
});
