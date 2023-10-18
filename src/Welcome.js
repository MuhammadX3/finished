import React from "react";
import Card from "./Card";

function Welcome() {
  const comment = {
    name: "Mohamed",
    age: 20,
    gender: "male",
    dream: "become the best basketball player",
  };

  return (
    <div>
      <Card
        title="Title"
        description="Description"
        image="http://placekitten.com/g/64/64"
      />
    </div>
  );
}

export default Welcome;
