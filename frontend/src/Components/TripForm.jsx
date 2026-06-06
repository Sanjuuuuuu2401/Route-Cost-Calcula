import { useState } from "react";

const TripForm = ({ addTrip }) => {
  const [form, setForm] = useState({
    source: "",
    destination: "",
    distance: "",
    tollCost: "",
    fuelCost: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTrip({
      ...form,
      totalCost:
        Number(form.tollCost) + Number(form.fuelCost),
    });

    setForm({
      source: "",
      destination: "",
      distance: "",
      tollCost: "",
      fuelCost: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="source"
        placeholder="Source"
        value={form.source}
        onChange={handleChange}
      />

      <input
        name="destination"
        placeholder="Destination"
        value={form.destination}
        onChange={handleChange}
      />

      <input
        name="distance"
        placeholder="Distance"
        value={form.distance}
        onChange={handleChange}
      />

      <input
        name="tollCost"
        placeholder="Toll Cost"
        value={form.tollCost}
        onChange={handleChange}
      />

      <input
        name="fuelCost"
        placeholder="Fuel Cost"
        value={form.fuelCost}
        onChange={handleChange}
      />

      <button type="submit">Add Trip</button>
    </form>
  );
};

export default TripForm;