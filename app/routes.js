const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['how-many-balls']

  // Check whether the variable matches a condition
  if (howManyBalls == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-trick')
  } else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})


// Run this code when a form is submitted to 'triage-decision'
router.post('/triage-decision', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var triageDecision = req.session.data['serious']

  // Check whether the variable matches a condition
  if (triageDecision == "yes"){
    // Send user to next page
    res.redirect('/psu-v1/outcome')
  } else {
    // Send user to ineligible page
    res.redirect('/psu-v1/reclassify')
  }

})


module.exports = router
