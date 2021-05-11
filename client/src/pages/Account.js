import React, {useState, useEffect} from "react";
import { getMyData, showMyLists } from "../utils/API";
import { NavLink } from "react-router-dom";

function Account() {
  const [user, setUser] = useState({});
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getMyData(user).then(({ data: userData }) => {
      showMyLists(lists).then(({ data: listData }) => {
        setUser(userData);
        setLists(listData);
      });
    });
  }, [user, lists]);

  return (
    <div>
      {user ? (
        <div className="container">
          <h1 className="text-center">
            {user.firstName} {user.lastName}
          </h1>

          <div className="card">
            <div className="card-header">My Gift Lists</div>
            <div className="card-content">
              <ul>
                {lists.map((list) => {
                  return (
                    <li className="border-bottom" key={lists.id}>
                      <strong>{lists.registry}</strong>
                      <br />
                      <NavLink to="/UserPage" className="btn btn-info ml-3">
                        View/Update
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <NavLink to="/CreateList" className="btn btn-primary mx-2">
                {user ? (
                  "Create New Registry"
                ) : (
                  <NavLink to="Login" class="text-light">
                    Log In
                  </NavLink>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <h1>No account is signed in right now</h1>
      )}
    </div>
  );
}

export default Account;
