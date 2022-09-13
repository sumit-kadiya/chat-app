import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../store/User-Context";

const Home = () => {
  const [user, setUser] = useState("");
  let navigate = useNavigate();
  const { users, alertMsg, loginHandler } = useGlobalContext();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === "") {
      alert("Please enter username");
    }
    const currentUser = users?.find(
      (el: any) => el.login === user.toLowerCase()
    );
    if (currentUser && user.toLowerCase() === currentUser.login) {
      loginHandler(currentUser);
      navigate(`/${currentUser.id}`);
    } else {
      alert("Invalid user");
    }
  };
  return (
    <div className="login-page">
      <div className="form">
        {alertMsg ? (
          <h2>{alertMsg}</h2>
        ) : (
          <form className="login-form" onSubmit={submitHandler}>
            <h2>React Chat</h2>
            <input
              name="username"
              type="text"
              placeholder="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button>Log-In</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
