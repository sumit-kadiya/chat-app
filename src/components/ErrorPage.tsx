import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="err-page">
      <h2>
        Page Not Found! Back to <Link to="/">Home</Link>
      </h2>
    </div>
  );
};

export default ErrorPage;
