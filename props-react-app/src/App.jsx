import React from "react";

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
