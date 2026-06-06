import { useEffect, useState } from "react";
import API from "../services/api";
import TripForm from "../components/TripForm";
import TripTable from "../Components/Triptable";

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [search, setSearch] = useState("");

  const fetchTrips = async () => {
    const res = await API.get("/");
    setTrips(res.data);
  };

  useEffect(() => {
    const loadTrips = async () => {
      const res = await API.get("/");
      setTrips(res.data);
    };

    loadTrips();
  }, []);

  const addTrip = async (trip) => {
    await API.post("/", trip);
    fetchTrips();
  };

  const deleteTrip = async (id) => {
    await API.delete(`/${id}`);
    fetchTrips();
  };

  const filteredTrips = trips.filter(
    (trip) =>
      trip.source
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      trip.destination
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const totalDistance = trips.reduce(
    (sum, trip) => sum + Number(trip.distance),
    0
  );

  const totalCost = trips.reduce(
    (sum, trip) => sum + Number(trip.totalCost),
    0
  );

  return (
    <div className="container">
      <h1>Route Cost Calculator</h1>

      <div className="stats">
        <div>Total Trips: {trips.length}</div>
        <div>Total Distance: {totalDistance} KM</div>
        <div>Total Cost: ₹{totalCost}</div>
      </div>

      <TripForm addTrip={addTrip} />

      <input
        placeholder="Search Trips"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <TripTable
        trips={filteredTrips}
        deleteTrip={deleteTrip}
      />
    </div>
  );
};

export default Dashboard;