import Repository from "./Repository";

const resources = "/DotA2";
export default {
  getNewSubreddits(params) {
    return Repository.get(`${resources}/new.json`, { params: params });
  },
  getHotSubreddits(params) {
    return Repository.get(`${resources}/hot.json`, { params: params });
  },
  getTopSubreddits(params) {
    return Repository.get(`${resources}/top.json`, { params: params });
  },
};
