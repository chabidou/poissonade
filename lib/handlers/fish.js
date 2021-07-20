"use strict";

import { getFishList } from '../models/fish.js';

const fishHandler = (req, res) => {
  try {
    const fishList = getFishList();
    // TODO : use sensResponse
    res.json({
      error: null,
      data:  fishList
    })
  } catch (error) {
    res
      .status(400)
      .json({
        error: error,
        data:  null
      })
  }
};

export default fishHandler;
