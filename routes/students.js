const express = require("express")

const Student = require("../models/students")
const Educator = require("../models/educators")

const router = express.Router()

router
  .route("/")
  .get((req, res) => {
    Student.where(req.query)
      .fetchAll({ withRelated: ["educators"] })
      .then(students => res.status(200).json(students))
  })

module.exports = router