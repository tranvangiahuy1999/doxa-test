import SubredditsRepository from "./SubredditsRepository";
const repositories = {
  subreddits: SubredditsRepository,
};
export const RepositoryFactory = {
  get: (name) => repositories[name],
};
