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

// Run this code when a form is submitted to '/triage-decision-v0' form on triage.html v0
router.post('/triage-decision-v0', function (req, res) {

  // Make a variable and give it the value from 'serious' radios
  var triageDecision = req.session.data['serious-triage']

  // Check whether the variable matches a condition.
  if (triageDecision == "yes"){
    // Send user to categories page
    res.redirect('/psu-v0/is-serious-categories')
  } else if (triageDecision == "no"){
    // Send user to page that asks to recategorise
    res.redirect('/psu-v0/reclassify-nonserious-complaint-category')
  } else {
    // Send user to page that asks whether the non-DECS team needs to look at it
    res.redirect('/psu-v0/index')
  }

})

// Run this code when a form is submitted to '/psu-outcome-v0' on outcome.html
router.post('/psu-outcome-v0', function (req, res) {

  // Make a variable and give it the value from 'psu-outcome' radios
  var psuOutcome = req.session.data['psu-outcome']

  // Check whether the variable matches a condition.
  if (psuOutcome == "notserious"){
    // Send user to recatogorise screen
    res.redirect('/psu-v0/outcome-reclassify-nonserious-complaint-category')
  } else {
    // Send user to final-response.html
    res.redirect('/psu-v0/final-response')
  }

})

// Run this code when a form is submitted to '/triage-decision' form on PSU-v1 triage.html
router.post('/triage-decision', function (req, res) {

  // Make a variable and give it the value from 'serious' radios
  var triageDecision = req.session.data['serious-triage']

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

// Run this code when a form is submitted to '/triage-decision-v2' form on PSU-v2 triage.html
router.post('/triage-decision-v2', function (req, res) {

  // Make a variable and give it the value from 'serious' radios
  var triageDecision = req.session.data['stillserious']
  
  // Check whether the variable matches a condition.

  // If 'yes it's serious' - go to review categories 
  if (triageDecision == "yes"){
    res.redirect('/psu-v2/is-serious-categories')
  
  // If 'no - send back' send user back to dashboard  
  } else if (triageDecision == "sendback"){
    res.redirect('/psu-v2/')

   // If 'no - send to Team not on DECS' send user back to dashboard  
  } else {
    res.redirect('/psu-v2/index')
  }

})

// Run this code when a form is submitted to '/psu-outcome' on outcome.html
router.post('/psu-outcome', function (req, res) {

  // Make a variable and give it the value from 'psu-outcome' radios
  var psuOutcome = req.session.data['psu-outcome']

  // Check whether the variable matches a condition.
  if (psuOutcome == "notserious"){
    // Send user to recatogorise screen
    res.redirect('/psu-v1/outcome-reclassify-nonserious-complaint-category')
  } else {
    // Send user to final-response.html
    res.redirect('/psu-v1/final-response')
  }

})

// Run this code when a form is submitted to '/psu-outcome-v2' on PSU-v2 outcome.html
router.post('/psu-outcome-v2', function (req, res) {

  // Make a variable and give it the value from 'psu-outcome' radios
  var psuOutcome = req.session.data['stillserious']

  // Check whether the variable matches a condition.
  if (psuOutcome == "notserious"){
    // Send user to index
    res.redirect('/psu-v2/')
  } else {
    // Send user to final-response.html
    res.redirect('/psu-v2/final-response')
  }

})


module.exports = router
