import React, { Component } from "react";

export default class UserDetails extends Component {
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
      });
  }
  render() {
    return (
      <div>
        Name<h1>Moiz</h1>
        Email<h1>Moiz@gmail.com</h1>
      </div>
    );
  }
}
