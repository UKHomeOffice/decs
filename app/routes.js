const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Logs saved data in the terminal
router.use((req, res, next) => {
      const log = {
        method: req.method,
        url: req.originalUrl,
        data: req.session.data
      }
      console.log(JSON.stringify(log, null, 2))
    next()
  })

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


// Run this code when a form is submitted to '/triage-decision' form on triage.html
router.post('/triage-decision', function (req, res) {

  // Make a variable and give it the value from 'serious' radios
  var triageDecision = req.session.data['serious']

  // Check whether the variable matches a condition.
  if (triageDecision == "yes"){
    // Send user to categories page
    res.redirect('/psu-v1/is-serious-categories')
  } else if (triageDecision == "no"){
    // Send user to page that asks to recategorise
    res.redirect('/psu-v1/reclassify-nonserious-complaint-category')
  } else {
    // Send user to page that asks whether the non-DECS team needs to look at it
    res.redirect('/psu-v1/index')
  }

})

// Run this code when a form is submitted to '/team-not-on-decs' on non-decs.html
router.post('/team-not-on-decs', function (req, res) {

  // Make a variable and give it the value from 'non-decs-team' radios
  var nonDecs = req.session.data['non-decs-team']

  // Check whether the variable matches a condition.
  if (nonDecs == "yes"){
    // Send user to dashboard??
    res.redirect('/psu-v1/index')
  } else {
    // Send user to complaint type page
    res.redirect('/psu-v1/reclassify-nonserious-complaint-type')
  }

})

// Run this code when a form is submitted to '/is-serious-recategorise' on is-serious-categories.html
router.post('/is-serious-recategorise', function (req, res) {

  // Make a variable and give it the value from 'non-decs-team' radios
  var recategoriseSerious = req.session.data['recategorise-serious']

  // Check whether the variable matches a condition.
  if (recategoriseSerious == "yes"){
    // Send user to dashboard??
    res.redirect('/psu-v1/reclassify-serious-complaint-type')
  } else {
    // Send user to complaint type page
    res.redirect('/psu-v1/index')
  }

})

module.exports = router
