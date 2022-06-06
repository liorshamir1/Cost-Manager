const router = require("express").Router();
const User = require("../models/User");
const Cost = require("../models/Cost");

//CREATE COST
router.post("/", async (req, res) => {
  const newCost = new Cost(req.body);
  try {
    const savedCost = await newCost.save();
    res.status(200).json(savedCost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE COST
router.put("/:id", async (req, res) => {
  try {
    const cost = await Cost.findById(req.params.id);
    if (cost.username === req.body.username) {
      try {
        const updatedCost = await Cost.findByIdAndUpdate(
          req.params.id, {
            $set: req.body,
          }, {
            new: true
          }
        );
        res.status(200).json(updatedCost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your cost!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE COST
router.delete("/:id", async (req, res) => {
  try {
    const cost = await Cost.findById(req.params.id);
    if (cost.username === req.body.username) {
      try {
        await cost.delete();
        res.status(200).json("cost has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your COST!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET COST
router.get("/:id", async (req, res) => {
  try {
    const cost = await Cost.findById(req.params.id);
    res.status(200).json(cost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL COSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let costs;
    if (username) {
      costs = await Cost.find({
        username
      });
    } else {
      costs = await Cost.find();
    }
    res.status(200).json(costs);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;