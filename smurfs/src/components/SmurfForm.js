import React, { useState } from "react";
import axios from "axios";

const SmurfForm = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.id]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log("Submit Response", res);
      })
      .catch(err => {
        console.log("Submit Error", err);
      });
  };

  return (
    <form>
      <label>
        Smurf Name:
        <input
          required
          id="name"
          type="text"
          name="name"
          autoComplete="off"
          onChange={handleChange}
          value={smurf.name}
          placeholder="Name"
        />
      </label>
      <label>
        Smurf Age:
        <input
          required
          id="age"
          type="number"
          name="age"
          autoComplete="off"
          onChange={handleChange}
          value={smurf.age}
          placeholder="Age"
        />
      </label>
      <label>
        Smurf Height:
        <input
          required
          id="height"
          type="text"
          name="height"
          autoComplete="off"
          onChange={handleChange}
          value={smurf.height}
          placeholder="Height(cm)"
        />
      </label>
      <button type="submit" onClick={submitForm}>
        Submit Smurf
      </button>
    </form>
  );
};

export default SmurfForm;
