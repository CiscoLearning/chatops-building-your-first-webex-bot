import express from 'express'

const router = express.Router();

router.post('/', async function(req, res) {
  console.log(`Received a POST`, req.body);
  res.statusCode = 201;
  res.end();
});

export default router;
