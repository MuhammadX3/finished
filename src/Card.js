import React from "react";

function Card(props) {
  return (
    <div
      style={{
        backgroundColor: "#afc5d2",
        borderRadius: "5px",
        width: "30%",
        height: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "10px",
        marginTop: "3.5rem",
        marginLeft: "1rem",
      }}
    >
      <card>
        <h1 style={{ fontWeight: "500", color: "rgb(244 244 251)" }}>
          {props.title}
        </h1>
        <p style={{ fontSize: "20px", color: "aliceblue" }}>
          {props.description}
        </p>
        <img src={props.image}></img>
      </card>
    </div>
  );
}

export default Card;
