// controllers/dataController.js
const Data = require('../models/Data');

// Function to get data
const getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Function to add new data
const addData = async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add data' });
  }
};

module.exports = { getData, addData };
