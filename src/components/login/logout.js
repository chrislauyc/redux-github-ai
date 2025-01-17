import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Parallax } from "react-parallax";
import {Family} from '../../assets/index'

const Logout = () => {
  let history = useHistory();
  const logout = () => {
    alert("You have been logged out. Thank you for visiting");
    localStorage.clear();
    history.push("/");
  };

  return (
    <Parallax bgImage={Family} strength={500}>
      <div className={'flex flex-col justify-center items-center'} style={{ height: "100vh" }}>
    <div
      className="d-flex flex-col justify-between items-center bg-yellow-600 -mt-20"
      style={{
        border: '5px solid',
        color: "white",
        textAlign: "center",
        padding: "2vh 3vw",
        opacity: "0.7",
      }}
    >
      <Link
        to="/"
        onClick={() => logout()}
        style={{
          margin: "5vh 0",
          fontSize: "5vh",
          color: "white",
          textDecoration: "none",
          padding: "2rem 3rem",
          opacity: "",
        }}
      >
        <h2>Thank you for visiting Grubspace.</h2>
        <h3 style={{ marginTop: "2vh", marginBottom: "5vh" }}>Happy Eating!</h3>
        <h4>- Logout -</h4>
      </Link>
      </div>
    </div>
    </Parallax>
  );
};

export default Logout;
