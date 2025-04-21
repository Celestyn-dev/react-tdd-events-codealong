import { useState } from "react";

function App() {
  const [toppings, setToppings] = useState({
    pepperoni: false,
    mushrooms: false,
    onions: false
  });

  // Cheese is always included
  const baseToppings = ["Cheese"];
  const additionalToppings = Object.entries(toppings)
    .filter(([_, isChecked]) => isChecked)
    .map(([name]) => capitalize(name));

  const finalToppings = [...baseToppings, ...additionalToppings];

  function handleChange(e) {
    const { name, checked } = e.target;
    setToppings((prev) => ({
      ...prev,
      [name]: checked
    }));
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <h1>Select Your Pizza Toppings</h1>

      <form>
        <div>
          <input
            type="checkbox"
            id="pepperoni"
            name="pepperoni"
            checked={toppings.pepperoni}
            aria-checked={toppings.pepperoni}
            onChange={handleChange}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="mushrooms"
            name="mushrooms"
            checked={toppings.mushrooms}
            aria-checked={toppings.mushrooms}
            onChange={handleChange}
          />
          <label htmlFor="mushrooms">Add mushrooms</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="onions"
            name="onions"
            checked={toppings.onions}
            aria-checked={toppings.onions}
            onChange={handleChange}
          />
          <label htmlFor="onions">Add onions</label>
        </div>
      </form>

      <h2>Your Toppings:</h2>
      <ul>
        {finalToppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
