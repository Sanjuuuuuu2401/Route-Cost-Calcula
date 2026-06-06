const Trip = require("../models/Trip");

const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find().sort({ createdAt: -1 });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTrip = async (req, res) => {
  try {
    const {
      source,
      destination,
      distance,
      tollCost,
      fuelCost,
    } = req.body;

    const totalCost =
      Number(tollCost) + Number(fuelCost);

    const trip = await Trip.create({
      source,
      destination,
      distance,
      tollCost,
      fuelCost,
      totalCost,
    });

    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTrip = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);

    res.json({
      message: "Trip Deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTrips,
  createTrip,
  deleteTrip,
};