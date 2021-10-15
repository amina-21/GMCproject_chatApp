import React from "react";
import "./../App.css";
const LogoutForm = (props) => {
  console.log(props.username);
  const signOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div
      style={{
        backgroundColor: "#cabcdc",
        padding: "20px",
        color: "white",
      }}
    >
      <p style={{ fontWeight: "bold" }}>{`Welcome ${localStorage
        .getItem("username")
        .toUpperCase()}`}</p>

      <button
        onClick={signOut}
        style={{
          padding: "5px",
          // marginLeft: "190vh",
          backgroundColor: "#7554a0",
          borderRadius: "6px",
          border: "none",
          color: "white",
          fontWeight: "bold",
          position: "absolute",
          //   top: "50%",
          right: "0",
          width: "120px",
          transform: "translateY(-70%) translateX(-60%)",
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default LogoutForm;
