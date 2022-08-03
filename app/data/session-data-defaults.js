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
  "current-month-digit": "8",
  "current-month-alpha": "August",
  "current-day": "5",
  "current-date-digit": "5/8/2022",
  "current-date-alpha": "5 Aug 2022",
  "2weeks-date-digit": "28/10/2022",
  "2weeks-date-alpha": "28 Oct 2022",
  "docname": "joseph-bloggs.pdf",
  "stillserious": "",
  /*
  psu-v1
  */
  "case-ref-psu": "IEDET/0172177/22",
  "psu-internal-ref": "",
  "PSU-IE-username": "Ian Dieterman",
  "PSU-PSU-username": "Penny Shaw",
}
