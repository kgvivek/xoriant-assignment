import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actions as usersAction } from "./store";
import userSelector from "./store/selectors";

import Search from "./Search/Search";
import "./App.css";

const App = ({ actions, searchText, usersList }) => {
  useEffect(() => {
    actions.loadUsersList();
  }, []);

  const handleChange = (searchData) => {
    actions.setSearchTerm(searchData);
  };

  const listOfUsers = usersList.length ? (
    <div className="users">
      {usersList.map((user) => {
        const company = `Organization Name: ${user.company.name}`;
        const address = `Address: ${user.address.street}
            ${user.address.suite}
            ${user.address.city}
            ${user.address.zipcode}`;
        const email = `Email: ${user.email}`;
        const phone = `Phone: ${user.phone}`;

        return (
          <div className="user" key={user.id}>
            <h1>{user.name}</h1>
            <label>{company}</label>
            <label>{address}</label>
            <label>{email}</label>
            <label>{phone}</label>
          </div>
        );
      })}
    </div>
  ) : (
    "No users found"
  );

  return (
    <div className="app">
      <Search
        placeholder="Search by name"
        onChange={handleChange}
        searchTerm={searchText}
      />

      {listOfUsers}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchText: userSelector.getSearchTerm(state),
  usersList: userSelector.getUsersList(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...usersAction }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
