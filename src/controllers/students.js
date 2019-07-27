const model = require('../models/')['students']

let Students = {}

Students.getById = (req, res, next) => {
  let id = req.params.id

  return model.findOne({
    where: { id }
  })
    .then(result => res.json(result || {}))
    .catch(next)
}

Students.getAll = (req, res, next) =>
  model.findAll({})
    .then(result => res.json(({ total: (result || []).length, items: result }) || []))
    .catch(next)

Students.create = (req, res, next) => {
  let data = Object.assign({}, req.body)

  return model.create(data)
    .then(result => res.json(result))
    .catch(next)
}

module.exports = Students
