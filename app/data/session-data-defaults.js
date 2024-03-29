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
  "current-month-digit": "9",
  "current-month-alpha": "September",
  "current-day": "27",
  "current-date-digit": "27/9/2022",
  "current-date-alpha": "27 Sep 2022",
  "2weeks-date-digit": "27/12/2022",
  "2weeks-date-alpha": "27 Dec 2022",
  "docname": "joseph-bloggs.pdf",
  "IEDET-case-reference": "IEDET/0172177/22",
  "IEDET-user1": "IEDET username 1",
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
  "case-ref-psu-new": "BF/0172177/22",
  "psu-internal-ref": "",
  "PSU-IE-username": "IEDET username 1",
  "PSU-PSU-username": "PSU username 1",
  "PSU-origin-team": "IE Detention",
  
  "stillserious": "",
  "allocated-to-me": "no",
  "finished": "no",
  "allocated-investigation": "no",

  "MPAM-case-reference": "MPAM/0123456/23",
}
