const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    console.log(`Fetched trips from DB: ${trips.length}`);
    res.json(trips);
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ message: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const {
      source,
      destination,
      distance,
      tollCost,
      fuelCost,
    } = req.body;

    const trip = new Trip({
      source,
      destination,
      distance,
      tollCost,
      fuelCost,
      totalCost: tollCost + fuelCost,
    });

    const savedTrip = await trip.save();
    console.log("Saved trip:", savedTrip._id);
    res.status(201).json(savedTrip);
  } catch (error) {
    console.error("Error saving trip:", error);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Trip.findByIdAndDelete(req.params.id);
    console.log(`Deleted trip id: ${req.params.id}`, deleted ? "found" : "not found");
    res.json({ message: "Trip deleted" });
  } catch (error) {
    console.error("Error deleting trip:", error);
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;