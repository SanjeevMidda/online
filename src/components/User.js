import React from "react";

const User = ({ name, onlineStatus }) => {
  return (
    <div className="user">
      <h1>{name}</h1>
      {onlineStatus ? (
        <div className="online"></div>
      ) : (
        <div className="offline"></div>
      )}
    </div>
  );
};

export default User;
