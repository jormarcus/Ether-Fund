const router = require('express').Router()
const { Fund } = require('../db/models')
module.exports = router

//GET all funds
router.get('/', async(req, res, next) =>{
  try {
    const funds = await Fund.findAll()
    res.json(funds);
  } catch(error) {
    next(error)
  }
});

router.get('/:fundId', async (req, res, next) => {
  try {
    const fund = await Fund.findById(req.params.fundId);
    res.json(fund);
  } catch (error) { next (error) }
});

router.post('/', async (req, res, next) => {
  try {
    const newfund = await Fund.create(req.body);
    res.json(newfund);
  } catch (error) { next (error) }
});

router.put('/:fundId', async (req, res, next) => {
  try {
    const fund = await Fund.findById(req.params.fundId);
    if (!fund) {
      res.sendStatus(404);
    }
    const fundToUpdate = await fund.update(req.body);
    res.json(fundToUpdate);
  } catch (error) { next (error) }
});

router.delete('/:fundId', async (req, res, next) => {
  try {
    const id = req.params.fundId;
    await Fund.destroy( { where: {id} } )
  } catch (error) { next (error) }
});