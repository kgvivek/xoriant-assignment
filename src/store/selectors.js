import { createSelector } from "reselect";

const search = (users, searchTerm) => {
  if (searchTerm && users.length)
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return users;
};

const getUserData = (state) => state;

const getSearchTerm = createSelector(getUserData, (data) => data?.searchTerm);

const getUsersList = createSelector(
  [getUserData, getSearchTerm],
  (data, searchData) => search(data?.usersList, searchData)
);

const selectors = {
  getSearchTerm,
  getUsersList,
};

export default selectors;
