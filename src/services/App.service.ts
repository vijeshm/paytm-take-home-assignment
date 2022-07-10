import { AppData } from "../types/types";

export function fetchAppData(): Promise<Response> {
  // CORS request
  return fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-Language": "*",
      "Content-Language": "en-US,en;q=0.5",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query:
        "{\n  countries {\n    code\n    name\n    languages {\n      code\n    }\n    continent {\n      code\n    }\n  }\n  continents {\n    code\n    name\n  }\n  languages {\n    code\n    name\n  }\n}",
    }),
  })

  // Mock data for local testing, instead of connecting to the endpoint every time and probably hitting rate limit
  /* return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve({
          "data": {
            "countries": [
              {
                "code": "AD",
                "name": "Andorra",
                "languages": [{ "code": "ca" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "AE",
                "name": "United Arab Emirates",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "AF",
                "name": "Afghanistan",
                "languages": [{ "code": "ps" }, { "code": "uz" }, { "code": "tk" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "AG",
                "name": "Antigua and Barbuda",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "AI",
                "name": "Anguilla",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "AL",
                "name": "Albania",
                "languages": [{ "code": "sq" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "AM",
                "name": "Armenia",
                "languages": [{ "code": "hy" }, { "code": "ru" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "AO",
                "name": "Angola",
                "languages": [{ "code": "pt" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "AQ",
                "name": "Antarctica",
                "languages": [],
                "continent": { "code": "AN" }
              },
              {
                "code": "AR",
                "name": "Argentina",
                "languages": [{ "code": "es" }, { "code": "gn" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "AS",
                "name": "American Samoa",
                "languages": [{ "code": "en" }, { "code": "sm" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "AT",
                "name": "Austria",
                "languages": [{ "code": "de" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "AU",
                "name": "Australia",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "AW",
                "name": "Aruba",
                "languages": [{ "code": "nl" }, { "code": "pa" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "AX",
                "name": "Åland",
                "languages": [{ "code": "sv" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "AZ",
                "name": "Azerbaijan",
                "languages": [{ "code": "az" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "BA",
                "name": "Bosnia and Herzegovina",
                "languages": [{ "code": "bs" }, { "code": "hr" }, { "code": "sr" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "BB",
                "name": "Barbados",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "BD",
                "name": "Bangladesh",
                "languages": [{ "code": "bn" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "BE",
                "name": "Belgium",
                "languages": [{ "code": "nl" }, { "code": "fr" }, { "code": "de" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "BF",
                "name": "Burkina Faso",
                "languages": [{ "code": "fr" }, { "code": "ff" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "BG",
                "name": "Bulgaria",
                "languages": [{ "code": "bg" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "BH",
                "name": "Bahrain",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "BI",
                "name": "Burundi",
                "languages": [{ "code": "fr" }, { "code": "rn" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "BJ",
                "name": "Benin",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "BL",
                "name": "Saint Barthélemy",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "BM",
                "name": "Bermuda",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "BN",
                "name": "Brunei",
                "languages": [{ "code": "ms" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "BO",
                "name": "Bolivia",
                "languages": [{ "code": "es" }, { "code": "ay" }, { "code": "qu" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "BQ",
                "name": "Bonaire",
                "languages": [{ "code": "nl" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "BR",
                "name": "Brazil",
                "languages": [{ "code": "pt" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "BS",
                "name": "Bahamas",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "BT",
                "name": "Bhutan",
                "languages": [{ "code": "dz" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "BV",
                "name": "Bouvet Island",
                "languages": [{ "code": "no" }, { "code": "nb" }, { "code": "nn" }],
                "continent": { "code": "AN" }
              },
              {
                "code": "BW",
                "name": "Botswana",
                "languages": [{ "code": "en" }, { "code": "tn" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "BY",
                "name": "Belarus",
                "languages": [{ "code": "be" }, { "code": "ru" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "BZ",
                "name": "Belize",
                "languages": [{ "code": "en" }, { "code": "es" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "CA",
                "name": "Canada",
                "languages": [{ "code": "en" }, { "code": "fr" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "CC",
                "name": "Cocos [Keeling] Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "CD",
                "name": "Democratic Republic of the Congo",
                "languages": [
                  { "code": "fr" },
                  { "code": "ln" },
                  { "code": "kg" },
                  { "code": "sw" },
                  { "code": "lu" }
                ],
                "continent": { "code": "AF" }
              },
              {
                "code": "CF",
                "name": "Central African Republic",
                "languages": [{ "code": "fr" }, { "code": "sg" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "CG",
                "name": "Republic of the Congo",
                "languages": [{ "code": "fr" }, { "code": "ln" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "CH",
                "name": "Switzerland",
                "languages": [{ "code": "de" }, { "code": "fr" }, { "code": "it" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "CI",
                "name": "Ivory Coast",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "CK",
                "name": "Cook Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "CL",
                "name": "Chile",
                "languages": [{ "code": "es" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "CM",
                "name": "Cameroon",
                "languages": [{ "code": "en" }, { "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "CN",
                "name": "China",
                "languages": [{ "code": "zh" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "CO",
                "name": "Colombia",
                "languages": [{ "code": "es" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "CR",
                "name": "Costa Rica",
                "languages": [{ "code": "es" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "CU",
                "name": "Cuba",
                "languages": [{ "code": "es" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "CV",
                "name": "Cape Verde",
                "languages": [{ "code": "pt" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "CW",
                "name": "Curacao",
                "languages": [{ "code": "nl" }, { "code": "pa" }, { "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "CX",
                "name": "Christmas Island",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "CY",
                "name": "Cyprus",
                "languages": [{ "code": "el" }, { "code": "tr" }, { "code": "hy" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "CZ",
                "name": "Czech Republic",
                "languages": [{ "code": "cs" }, { "code": "sk" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "DE",
                "name": "Germany",
                "languages": [{ "code": "de" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "DJ",
                "name": "Djibouti",
                "languages": [{ "code": "fr" }, { "code": "ar" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "DK",
                "name": "Denmark",
                "languages": [{ "code": "da" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "DM",
                "name": "Dominica",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "DO",
                "name": "Dominican Republic",
                "languages": [{ "code": "es" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "DZ",
                "name": "Algeria",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "EC",
                "name": "Ecuador",
                "languages": [{ "code": "es" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "EE",
                "name": "Estonia",
                "languages": [{ "code": "et" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "EG",
                "name": "Egypt",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "EH",
                "name": "Western Sahara",
                "languages": [{ "code": "es" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "ER",
                "name": "Eritrea",
                "languages": [{ "code": "ti" }, { "code": "ar" }, { "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "ES",
                "name": "Spain",
                "languages": [
                  { "code": "es" },
                  { "code": "eu" },
                  { "code": "ca" },
                  { "code": "gl" },
                  { "code": "oc" }
                ],
                "continent": { "code": "EU" }
              },
              {
                "code": "ET",
                "name": "Ethiopia",
                "languages": [{ "code": "am" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "FI",
                "name": "Finland",
                "languages": [{ "code": "fi" }, { "code": "sv" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "FJ",
                "name": "Fiji",
                "languages": [
                  { "code": "en" },
                  { "code": "fj" },
                  { "code": "hi" },
                  { "code": "ur" }
                ],
                "continent": { "code": "OC" }
              },
              {
                "code": "FK",
                "name": "Falkland Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "FM",
                "name": "Micronesia",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "FO",
                "name": "Faroe Islands",
                "languages": [{ "code": "fo" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "FR",
                "name": "France",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "GA",
                "name": "Gabon",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "GB",
                "name": "United Kingdom",
                "languages": [{ "code": "en" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "GD",
                "name": "Grenada",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "GE",
                "name": "Georgia",
                "languages": [{ "code": "ka" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "GF",
                "name": "French Guiana",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "GG",
                "name": "Guernsey",
                "languages": [{ "code": "en" }, { "code": "fr" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "GH",
                "name": "Ghana",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "GI",
                "name": "Gibraltar",
                "languages": [{ "code": "en" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "GL",
                "name": "Greenland",
                "languages": [{ "code": "kl" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "GM",
                "name": "Gambia",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "GN",
                "name": "Guinea",
                "languages": [{ "code": "fr" }, { "code": "ff" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "GP",
                "name": "Guadeloupe",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "GQ",
                "name": "Equatorial Guinea",
                "languages": [{ "code": "es" }, { "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "GR",
                "name": "Greece",
                "languages": [{ "code": "el" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "GS",
                "name": "South Georgia and the South Sandwich Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AN" }
              },
              {
                "code": "GT",
                "name": "Guatemala",
                "languages": [{ "code": "es" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "GU",
                "name": "Guam",
                "languages": [{ "code": "en" }, { "code": "ch" }, { "code": "es" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "GW",
                "name": "Guinea-Bissau",
                "languages": [{ "code": "pt" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "GY",
                "name": "Guyana",
                "languages": [{ "code": "en" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "HK",
                "name": "Hong Kong",
                "languages": [{ "code": "zh" }, { "code": "en" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "HM",
                "name": "Heard Island and McDonald Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AN" }
              },
              {
                "code": "HN",
                "name": "Honduras",
                "languages": [{ "code": "es" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "HR",
                "name": "Croatia",
                "languages": [{ "code": "hr" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "HT",
                "name": "Haiti",
                "languages": [{ "code": "fr" }, { "code": "ht" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "HU",
                "name": "Hungary",
                "languages": [{ "code": "hu" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "ID",
                "name": "Indonesia",
                "languages": [{ "code": "id" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "IE",
                "name": "Ireland",
                "languages": [{ "code": "ga" }, { "code": "en" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "IL",
                "name": "Israel",
                "languages": [{ "code": "he" }, { "code": "ar" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "IM",
                "name": "Isle of Man",
                "languages": [{ "code": "en" }, { "code": "gv" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "IN",
                "name": "India",
                "languages": [{ "code": "hi" }, { "code": "en" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "IO",
                "name": "British Indian Ocean Territory",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "IQ",
                "name": "Iraq",
                "languages": [{ "code": "ar" }, { "code": "ku" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "IR",
                "name": "Iran",
                "languages": [{ "code": "fa" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "IS",
                "name": "Iceland",
                "languages": [{ "code": "is" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "IT",
                "name": "Italy",
                "languages": [{ "code": "it" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "JE",
                "name": "Jersey",
                "languages": [{ "code": "en" }, { "code": "fr" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "JM",
                "name": "Jamaica",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "JO",
                "name": "Jordan",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "JP",
                "name": "Japan",
                "languages": [{ "code": "ja" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "KE",
                "name": "Kenya",
                "languages": [{ "code": "en" }, { "code": "sw" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "KG",
                "name": "Kyrgyzstan",
                "languages": [{ "code": "ky" }, { "code": "ru" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "KH",
                "name": "Cambodia",
                "languages": [{ "code": "km" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "KI",
                "name": "Kiribati",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "KM",
                "name": "Comoros",
                "languages": [{ "code": "ar" }, { "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "KN",
                "name": "Saint Kitts and Nevis",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "KP",
                "name": "North Korea",
                "languages": [{ "code": "ko" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "KR",
                "name": "South Korea",
                "languages": [{ "code": "ko" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "KW",
                "name": "Kuwait",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "KY",
                "name": "Cayman Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "KZ",
                "name": "Kazakhstan",
                "languages": [{ "code": "kk" }, { "code": "ru" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "LA",
                "name": "Laos",
                "languages": [{ "code": "lo" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "LB",
                "name": "Lebanon",
                "languages": [{ "code": "ar" }, { "code": "fr" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "LC",
                "name": "Saint Lucia",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "LI",
                "name": "Liechtenstein",
                "languages": [{ "code": "de" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "LK",
                "name": "Sri Lanka",
                "languages": [{ "code": "si" }, { "code": "ta" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "LR",
                "name": "Liberia",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "LS",
                "name": "Lesotho",
                "languages": [{ "code": "en" }, { "code": "st" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "LT",
                "name": "Lithuania",
                "languages": [{ "code": "lt" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "LU",
                "name": "Luxembourg",
                "languages": [{ "code": "fr" }, { "code": "de" }, { "code": "lb" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "LV",
                "name": "Latvia",
                "languages": [{ "code": "lv" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "LY",
                "name": "Libya",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "MA",
                "name": "Morocco",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "MC",
                "name": "Monaco",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "MD",
                "name": "Moldova",
                "languages": [{ "code": "ro" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "ME",
                "name": "Montenegro",
                "languages": [
                  { "code": "sr" },
                  { "code": "bs" },
                  { "code": "sq" },
                  { "code": "hr" }
                ],
                "continent": { "code": "EU" }
              },
              {
                "code": "MF",
                "name": "Saint Martin",
                "languages": [{ "code": "en" }, { "code": "fr" }, { "code": "nl" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "MG",
                "name": "Madagascar",
                "languages": [{ "code": "fr" }, { "code": "mg" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "MH",
                "name": "Marshall Islands",
                "languages": [{ "code": "en" }, { "code": "mh" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "MK",
                "name": "North Macedonia",
                "languages": [{ "code": "mk" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "ML",
                "name": "Mali",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "MM",
                "name": "Myanmar [Burma]",
                "languages": [{ "code": "my" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "MN",
                "name": "Mongolia",
                "languages": [{ "code": "mn" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "MO",
                "name": "Macao",
                "languages": [{ "code": "zh" }, { "code": "pt" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "MP",
                "name": "Northern Mariana Islands",
                "languages": [{ "code": "en" }, { "code": "ch" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "MQ",
                "name": "Martinique",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "MR",
                "name": "Mauritania",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "MS",
                "name": "Montserrat",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "MT",
                "name": "Malta",
                "languages": [{ "code": "mt" }, { "code": "en" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "MU",
                "name": "Mauritius",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "MV",
                "name": "Maldives",
                "languages": [{ "code": "dv" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "MW",
                "name": "Malawi",
                "languages": [{ "code": "en" }, { "code": "ny" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "MX",
                "name": "Mexico",
                "languages": [{ "code": "es" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "MY",
                "name": "Malaysia",
                "languages": [{ "code": "ms" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "MZ",
                "name": "Mozambique",
                "languages": [{ "code": "pt" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "NA",
                "name": "Namibia",
                "languages": [{ "code": "en" }, { "code": "af" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "NC",
                "name": "New Caledonia",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "NE",
                "name": "Niger",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "NF",
                "name": "Norfolk Island",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "NG",
                "name": "Nigeria",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "NI",
                "name": "Nicaragua",
                "languages": [{ "code": "es" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "NL",
                "name": "Netherlands",
                "languages": [{ "code": "nl" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "NO",
                "name": "Norway",
                "languages": [{ "code": "no" }, { "code": "nb" }, { "code": "nn" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "NP",
                "name": "Nepal",
                "languages": [{ "code": "ne" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "NR",
                "name": "Nauru",
                "languages": [{ "code": "en" }, { "code": "na" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "NU",
                "name": "Niue",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "NZ",
                "name": "New Zealand",
                "languages": [{ "code": "en" }, { "code": "mi" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "OM",
                "name": "Oman",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "PA",
                "name": "Panama",
                "languages": [{ "code": "es" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "PE",
                "name": "Peru",
                "languages": [{ "code": "es" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "PF",
                "name": "French Polynesia",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "PG",
                "name": "Papua New Guinea",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "PH",
                "name": "Philippines",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "PK",
                "name": "Pakistan",
                "languages": [{ "code": "en" }, { "code": "ur" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "PL",
                "name": "Poland",
                "languages": [{ "code": "pl" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "PM",
                "name": "Saint Pierre and Miquelon",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "PN",
                "name": "Pitcairn Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "PR",
                "name": "Puerto Rico",
                "languages": [{ "code": "es" }, { "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "PS",
                "name": "Palestine",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "PT",
                "name": "Portugal",
                "languages": [{ "code": "pt" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "PW",
                "name": "Palau",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "PY",
                "name": "Paraguay",
                "languages": [{ "code": "es" }, { "code": "gn" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "QA",
                "name": "Qatar",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "RE",
                "name": "Réunion",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "RO",
                "name": "Romania",
                "languages": [{ "code": "ro" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "RS",
                "name": "Serbia",
                "languages": [{ "code": "sr" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "RU",
                "name": "Russia",
                "languages": [{ "code": "ru" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "RW",
                "name": "Rwanda",
                "languages": [{ "code": "rw" }, { "code": "en" }, { "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "SA",
                "name": "Saudi Arabia",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "SB",
                "name": "Solomon Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "SC",
                "name": "Seychelles",
                "languages": [{ "code": "fr" }, { "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "SD",
                "name": "Sudan",
                "languages": [{ "code": "ar" }, { "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "SE",
                "name": "Sweden",
                "languages": [{ "code": "sv" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "SG",
                "name": "Singapore",
                "languages": [
                  { "code": "en" },
                  { "code": "ms" },
                  { "code": "ta" },
                  { "code": "zh" }
                ],
                "continent": { "code": "AS" }
              },
              {
                "code": "SH",
                "name": "Saint Helena",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "SI",
                "name": "Slovenia",
                "languages": [{ "code": "sl" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "SJ",
                "name": "Svalbard and Jan Mayen",
                "languages": [{ "code": "no" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "SK",
                "name": "Slovakia",
                "languages": [{ "code": "sk" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "SL",
                "name": "Sierra Leone",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "SM",
                "name": "San Marino",
                "languages": [{ "code": "it" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "SN",
                "name": "Senegal",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "SO",
                "name": "Somalia",
                "languages": [{ "code": "so" }, { "code": "ar" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "SR",
                "name": "Suriname",
                "languages": [{ "code": "nl" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "SS",
                "name": "South Sudan",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "ST",
                "name": "São Tomé and Príncipe",
                "languages": [{ "code": "pt" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "SV",
                "name": "El Salvador",
                "languages": [{ "code": "es" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "SX",
                "name": "Sint Maarten",
                "languages": [{ "code": "nl" }, { "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "SY",
                "name": "Syria",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "SZ",
                "name": "Swaziland",
                "languages": [{ "code": "en" }, { "code": "ss" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "TC",
                "name": "Turks and Caicos Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "TD",
                "name": "Chad",
                "languages": [{ "code": "fr" }, { "code": "ar" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "TF",
                "name": "French Southern Territories",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "AN" }
              },
              {
                "code": "TG",
                "name": "Togo",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "TH",
                "name": "Thailand",
                "languages": [{ "code": "th" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "TJ",
                "name": "Tajikistan",
                "languages": [{ "code": "tg" }, { "code": "ru" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "TK",
                "name": "Tokelau",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "TL",
                "name": "East Timor",
                "languages": [{ "code": "pt" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "TM",
                "name": "Turkmenistan",
                "languages": [{ "code": "tk" }, { "code": "ru" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "TN",
                "name": "Tunisia",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "TO",
                "name": "Tonga",
                "languages": [{ "code": "en" }, { "code": "to" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "TR",
                "name": "Turkey",
                "languages": [{ "code": "tr" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "TT",
                "name": "Trinidad and Tobago",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "TV",
                "name": "Tuvalu",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "TW",
                "name": "Taiwan",
                "languages": [{ "code": "zh" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "TZ",
                "name": "Tanzania",
                "languages": [{ "code": "sw" }, { "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "UA",
                "name": "Ukraine",
                "languages": [{ "code": "uk" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "UG",
                "name": "Uganda",
                "languages": [{ "code": "en" }, { "code": "sw" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "UM",
                "name": "U.S. Minor Outlying Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "US",
                "name": "United States",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "UY",
                "name": "Uruguay",
                "languages": [{ "code": "es" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "UZ",
                "name": "Uzbekistan",
                "languages": [{ "code": "uz" }, { "code": "ru" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "VA",
                "name": "Vatican City",
                "languages": [{ "code": "it" }, { "code": "la" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "VC",
                "name": "Saint Vincent and the Grenadines",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "VE",
                "name": "Venezuela",
                "languages": [{ "code": "es" }],
                "continent": { "code": "SA" }
              },
              {
                "code": "VG",
                "name": "British Virgin Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "VI",
                "name": "U.S. Virgin Islands",
                "languages": [{ "code": "en" }],
                "continent": { "code": "NA" }
              },
              {
                "code": "VN",
                "name": "Vietnam",
                "languages": [{ "code": "vi" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "VU",
                "name": "Vanuatu",
                "languages": [{ "code": "bi" }, { "code": "en" }, { "code": "fr" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "WF",
                "name": "Wallis and Futuna",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "WS",
                "name": "Samoa",
                "languages": [{ "code": "sm" }, { "code": "en" }],
                "continent": { "code": "OC" }
              },
              {
                "code": "XK",
                "name": "Kosovo",
                "languages": [{ "code": "sq" }, { "code": "sr" }],
                "continent": { "code": "EU" }
              },
              {
                "code": "YE",
                "name": "Yemen",
                "languages": [{ "code": "ar" }],
                "continent": { "code": "AS" }
              },
              {
                "code": "YT",
                "name": "Mayotte",
                "languages": [{ "code": "fr" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "ZA",
                "name": "South Africa",
                "languages": [
                  { "code": "af" },
                  { "code": "en" },
                  { "code": "nr" },
                  { "code": "st" },
                  { "code": "ss" },
                  { "code": "tn" },
                  { "code": "ts" },
                  { "code": "ve" },
                  { "code": "xh" },
                  { "code": "zu" }
                ],
                "continent": { "code": "AF" }
              },
              {
                "code": "ZM",
                "name": "Zambia",
                "languages": [{ "code": "en" }],
                "continent": { "code": "AF" }
              },
              {
                "code": "ZW",
                "name": "Zimbabwe",
                "languages": [{ "code": "en" }, { "code": "sn" }, { "code": "nd" }],
                "continent": { "code": "AF" }
              }
            ],
            "continents": [
              { "code": "AF", "name": "Africa" },
              { "code": "AN", "name": "Antarctica" },
              { "code": "AS", "name": "Asia" },
              { "code": "EU", "name": "Europe" },
              { "code": "NA", "name": "North America" },
              { "code": "OC", "name": "Oceania" },
              { "code": "SA", "name": "South America" }
            ],
            "languages": [
              { "code": "af", "name": "Afrikaans" },
              { "code": "am", "name": "Amharic" },
              { "code": "ar", "name": "Arabic" },
              { "code": "ay", "name": "Aymara" },
              { "code": "az", "name": "Azerbaijani" },
              { "code": "be", "name": "Belarusian" },
              { "code": "bg", "name": "Bulgarian" },
              { "code": "bi", "name": "Bislama" },
              { "code": "bn", "name": "Bengali" },
              { "code": "bs", "name": "Bosnian" },
              { "code": "ca", "name": "Catalan" },
              { "code": "ch", "name": "Chamorro" },
              { "code": "cs", "name": "Czech" },
              { "code": "da", "name": "Danish" },
              { "code": "de", "name": "German" },
              { "code": "dv", "name": "Divehi" },
              { "code": "dz", "name": "Dzongkha" },
              { "code": "el", "name": "Greek" },
              { "code": "en", "name": "English" },
              { "code": "es", "name": "Spanish" },
              { "code": "et", "name": "Estonian" },
              { "code": "eu", "name": "Basque" },
              { "code": "fa", "name": "Persian" },
              { "code": "ff", "name": "Peul" },
              { "code": "fi", "name": "Finnish" },
              { "code": "fj", "name": "Fijian" },
              { "code": "fo", "name": "Faroese" },
              { "code": "fr", "name": "French" },
              { "code": "ga", "name": "Irish" },
              { "code": "gl", "name": "Galician" },
              { "code": "gn", "name": "Guarani" },
              { "code": "gv", "name": "Manx" },
              { "code": "he", "name": "Hebrew" },
              { "code": "hi", "name": "Hindi" },
              { "code": "hr", "name": "Croatian" },
              { "code": "ht", "name": "Haitian" },
              { "code": "hu", "name": "Hungarian" },
              { "code": "hy", "name": "Armenian" },
              { "code": "id", "name": "Indonesian" },
              { "code": "is", "name": "Icelandic" },
              { "code": "it", "name": "Italian" },
              { "code": "ja", "name": "Japanese" },
              { "code": "ka", "name": "Georgian" },
              { "code": "kg", "name": "Kongo" },
              { "code": "kk", "name": "Kazakh" },
              { "code": "kl", "name": "Greenlandic" },
              { "code": "km", "name": "Cambodian" },
              { "code": "ko", "name": "Korean" },
              { "code": "ku", "name": "Kurdish" },
              { "code": "ky", "name": "Kirghiz" },
              { "code": "la", "name": "Latin" },
              { "code": "lb", "name": "Luxembourgish" },
              { "code": "ln", "name": "Lingala" },
              { "code": "lo", "name": "Laotian" },
              { "code": "lt", "name": "Lithuanian" },
              { "code": "lu", "name": "Luba-Katanga" },
              { "code": "lv", "name": "Latvian" },
              { "code": "mg", "name": "Malagasy" },
              { "code": "mh", "name": "Marshallese" },
              { "code": "mi", "name": "Maori" },
              { "code": "mk", "name": "Macedonian" },
              { "code": "mn", "name": "Mongolian" },
              { "code": "ms", "name": "Malay" },
              { "code": "mt", "name": "Maltese" },
              { "code": "my", "name": "Burmese" },
              { "code": "na", "name": "Nauruan" },
              { "code": "nb", "name": "Norwegian Bokmål" },
              { "code": "nd", "name": "North Ndebele" },
              { "code": "ne", "name": "Nepali" },
              { "code": "nl", "name": "Dutch" },
              { "code": "nn", "name": "Norwegian Nynorsk" },
              { "code": "no", "name": "Norwegian" },
              { "code": "nr", "name": "South Ndebele" },
              { "code": "ny", "name": "Chichewa" },
              { "code": "oc", "name": "Occitan" },
              { "code": "pa", "name": "Panjabi / Punjabi" },
              { "code": "pl", "name": "Polish" },
              { "code": "ps", "name": "Pashto" },
              { "code": "pt", "name": "Portuguese" },
              { "code": "qu", "name": "Quechua" },
              { "code": "rn", "name": "Kirundi" },
              { "code": "ro", "name": "Romanian" },
              { "code": "ru", "name": "Russian" },
              { "code": "rw", "name": "Rwandi" },
              { "code": "sg", "name": "Sango" },
              { "code": "si", "name": "Sinhalese" },
              { "code": "sk", "name": "Slovak" },
              { "code": "sl", "name": "Slovenian" },
              { "code": "sm", "name": "Samoan" },
              { "code": "sn", "name": "Shona" },
              { "code": "so", "name": "Somalia" },
              { "code": "sq", "name": "Albanian" },
              { "code": "sr", "name": "Serbian" },
              { "code": "ss", "name": "Swati" },
              { "code": "st", "name": "Southern Sotho" },
              { "code": "sv", "name": "Swedish" },
              { "code": "sw", "name": "Swahili" },
              { "code": "ta", "name": "Tamil" },
              { "code": "tg", "name": "Tajik" },
              { "code": "th", "name": "Thai" },
              { "code": "ti", "name": "Tigrinya" },
              { "code": "tk", "name": "Turkmen" },
              { "code": "tn", "name": "Tswana" },
              { "code": "to", "name": "Tonga" },
              { "code": "tr", "name": "Turkish" },
              { "code": "ts", "name": "Tsonga" },
              { "code": "uk", "name": "Ukrainian" },
              { "code": "ur", "name": "Urdu" },
              { "code": "uz", "name": "Uzbek" },
              { "code": "ve", "name": "Venda" },
              { "code": "vi", "name": "Vietnamese" },
              { "code": "xh", "name": "Xhosa" },
              { "code": "zh", "name": "Chinese" },
              { "code": "zu", "name": "Zulu" }
            ]
          }
        })
      } as Response);
    }, 1000)
  }); */
}