
import React, { useState } from "react";
import Dashboard from "./Dashboard";

const Users = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const user = await fetch(`https://api.github.com/users/${username}`);
    const userJson = await user.json();

    const repositories = await fetch(userJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (userJson) {
      setData(userJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="Search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>

          <button
            className="button"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Search
          </button>
          <Dashboard data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};
export default Users;