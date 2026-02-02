import React from "react";
import Card from "./components/Card.jsx";

const App = () => {
  return (
    <div>
      <User
        img="https://tse1.mm.bing.net/th/id/OIP.OFMlQdJWRGUjT2PNEWN00AHaEK?pid=Api&P=0&h=220"
        name="Gaurav"
        age={22}
        isMarried={false}
        hobbies={["Codding", "Reading", "Sleeping"]}
      />
      <br />
      <Card>
        <h1> My Card </h1>
        <p> This is some content for my card 1</p>
      </Card>
    </div>
  );
};
const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.name} width={200} />
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Hobbies: {props.hobbies}</h3>
      <h4>Is Married: {props.isMarried} </h4>
    </section>
  );
};

export default App;
