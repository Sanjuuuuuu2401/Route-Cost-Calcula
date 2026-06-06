const TripTable = ({ trips, deleteTrip }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Source</th>
          <th>Destination</th>
          <th>Distance</th>
          <th>Total Cost</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {trips.map((trip) => (
          <tr key={trip._id}>
            <td>{trip.source}</td>
            <td>{trip.destination}</td>
            <td>{trip.distance}</td>
            <td>₹{trip.totalCost}</td>
            <td>
              <button
                onClick={() =>
                  deleteTrip(trip._id)
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TripTable;