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
  const category = req.query.category;
  const year = req.query.year;
  const month = req.query.month;
  try {
    let costsObj;
    let costs = []
    costsObj = await Cost.find({
      username
    })
    for (let index = 0; index < costsObj.length; index++) {
      costs.push(costsObj[index])
    }
    if (category) {
      costs = costs.filter((cost) => cost._doc.category === category)
    }
    if (year) {
      costs = costs.filter((cost) => cost._doc.createdAt.toString().split(' ')[3] === year)
    }
    if (month) {
      costs = costs.filter((cost) => cost._doc.createdAt.toString().split(' ')[1] === month)
    }
    let sum = 0
    costs.forEach(element => {

      sum += (+element._doc.sum)
    });
        res.status(200).json({
        "costs": costs,
        "sum": sum
      }

    );

  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;