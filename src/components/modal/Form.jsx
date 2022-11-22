import React, { useState } from "react";
import "./authentication.css";

export default function Form() {
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!form);
  };

  if (form) {
    document.body.classList.add("active-form");
  } else {
    document.body.classList.remove("active-form");
  }

  return (
    <>
      <div className="form">
        <div onClick={toggleForm} className="overlay"></div>
        <div className="form-content">
          <img
            width={"45px"}
            src="/images/logo.png"
            alt="logo"
            draggable={"false"}
          />
          <h3>
            {" "}
            <span className="appName_loginModal">Pet</span> Heaven
          </h3>
          <h2>Hello Modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perferendis suscipit officia recusandae, eveniet quaerat assumenda
            id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente
            dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum
            quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora
            vitae enim incidunt porro fuga ea.
          </p>
          <button className="close-form" onClick={toggleForm}>
            CLOSE
          </button>
        </div>
      </div>
      <p>Thank You!</p>
    </>
  );
}
