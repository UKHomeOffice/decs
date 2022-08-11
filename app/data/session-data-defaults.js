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
iedetention-v1 BF and UKVI
*/
  "current-year": "2022",
  "current-month-digit": "8",
  "current-month-alpha": "August",
  "current-day": "12",
  "current-date-digit": "12/8/2022",
  "current-date-alpha": "12 Aug 2022",
  "2weeks-date-digit": "12/11/2022",
  "2weeks-date-alpha": "12 Nov 2022",
  "docname": "joseph-bloggs.pdf",
  "stillserious": "",
  "IEDET-case-reference": "IEDET/0172177/22",
  "IEDET-user1": "IEDET user 1",
  "IEDET-team": "IE Detention",
  "BF-case-reference": "BF/0172177/22",
  "BF-user1": "BF user 1",
  "BF-team": "Border Force",
  "BF-docname": "jane-smith.msg",
  "UKVI-case-reference": "COMP/0172177/22",
  "UKVI-user1": "UKVI user 1",
  "UKVI-team": "UKVI",
  "UKVI-docname": "jane-smith.msg",
  /*
  psu-v1
  */
  "serious-triage": "",
  "case-ref-psu": "IEDET/0172177/22",
  "psu-internal-ref": "",
  "PSU-IE-username": "Ian Dieterman",
  "PSU-PSU-username": "Penny Shaw",
  "PSU-origin-team": "IE Detention",
}
