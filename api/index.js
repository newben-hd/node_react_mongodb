// Manage all api requests on this file

import express from 'express';

const router = express.Router();

import data from '../src/testData';

router.get('/contests', (req, res) => {
  res.send({ contests: data.contests });
});

// To enable use this router, we need to export it.

export default router;


// Prepare api router modules