/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
/*
iedetention-v1
*/
  "current-year": "2022",
  "current-month-digit": "07",
  "current-month-alpha": "July",
  "current-day": "20",
  "current-date-digit": "20/07/2022",
  "current-date-alpha": "20 July 2022",
  "2weeks-date-digit": "28/07/2022",
  "docname": "joe-bloggs.pdf",

  /*
  psu-v1
  */
  "case-ref-psu": "IEDET/0000000/22"
}
