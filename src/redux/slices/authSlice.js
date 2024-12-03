import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as Config from "../../config";
import axios from "axios";

export const logginAsync = createAsyncThunk(
  "auth/logginAsync",
  async (payload) => {
    let url = Config.API_URL + "Inventory/Login";
    console.log(payload);
    let response = {};
    if (payload.user_id == "admin" && payload.password == "abc") {
      console.log("d");
      response = {
        isSuccess: true,
        strMessage: "",
        returnValue: null,
        returnValue2: null,
        varOutMsg: null
      };
    } else {
      console.log("f");
      response = {
        isSuccess: false,
        strMessage: "Invalid User ID or Password",
        returnValue: null,
        returnValue2: null,
        varOutMsg: null
      };
    }
    // const response = await axios.post(url, payload);
    // console.log(response);
    return {
      isAuthOK: response.isSuccess,
      user_id: response.isSuccess === true ? payload.user_id : "",
      err: response.strMessage
    };
  }
);

export const initAsync = createAsyncThunk("auth/initAsync", async (payload) => {
  console.log(payload);
  // let url = Config.API_URL + "Inventory/initialize";
  let response = {}; // = await axios.post(url, payload);
  //  console.log(response.data)
  //  return response.data;

  // response = {
  //   isSuccess: true,
  //   strMessage: "",
  //   returnValue: null,
  //   returnValue2: null,
  //   varOutMsg: null,
  //   data: ["Mr", "Mrs", "Miss", "Ms", "Master", "Dr", 'Sir', 'Lady']
  // };
  return {
    // isAuthOK: response.isSuccess,
    // user_id: response.isSuccess === true ? payload.user_id : "",
    // err: response.strMessage,
    data:{Title: [
      {
        TitleID: 0,
        Title: "Mr."
      },
      {
        TitleID: 1,
        Title: "Miss"
      },
      {
        TitleID: 2,
        Title: "Mrs"
      },
      {
        TitleID: 3,
        Title: "Ms"
      },
      {
        TitleID: 4,
        Title: "Dr. Mr."
      },
      {
        TitleID: 5,
        Title: "Dr. Ms."
      },
      {
        TitleID: 6,
        Title: "Prof. Mr."
      },
      {
        TitleID: 7,
        Title: "Prof. Ms."
      },
      {
        TitleID: 8,
        Title: "Rev."
      },
      {
        TitleID: 9,
        Title: "Ven."
      },
      {
        TitleID: 10,
        Title: "Hon. Mr."
      },
      {
        TitleID: 11,
        Title: "Hon. Ms."
      },
      {
        TitleID: 12,
        Title: "Other"
      }
    ]
  ,Country:[
    {
      "CountryCode": 4,
      "CountryName": "Afghanistan",
      "Alpha2Code": "AF",
      "Alpha3Code": "AFG"
    },
    {
      "CountryCode": 8,
      "CountryName": "Albania",
      "Alpha2Code": "AL",
      "Alpha3Code": "ALB"
    },
    {
      "CountryCode": 12,
      "CountryName": "Algeria",
      "Alpha2Code": "DZ",
      "Alpha3Code": "DZA"
    },
    {
      "CountryCode": 16,
      "CountryName": "American Samoa",
      "Alpha2Code": "AS",
      "Alpha3Code": "ASM"
    },
    {
      "CountryCode": 20,
      "CountryName": "Andorra",
      "Alpha2Code": "AD",
      "Alpha3Code": "AND"
    },
    {
      "CountryCode": 24,
      "CountryName": "Angola",
      "Alpha2Code": "AO",
      "Alpha3Code": "AGO"
    },
    {
      "CountryCode": 660,
      "CountryName": "Anguilla",
      "Alpha2Code": "AI",
      "Alpha3Code": "AIA"
    },
    {
      "CountryCode": 10,
      "CountryName": "Antarctica",
      "Alpha2Code": "AQ",
      "Alpha3Code": "ATA"
    },
    {
      "CountryCode": 28,
      "CountryName": "Antigua and Barbuda",
      "Alpha2Code": "AG",
      "Alpha3Code": "ATG"
    },
    {
      "CountryCode": 32,
      "CountryName": "Argentina",
      "Alpha2Code": "AR",
      "Alpha3Code": "ARG"
    },
    {
      "CountryCode": 51,
      "CountryName": "Armenia",
      "Alpha2Code": "AM",
      "Alpha3Code": "ARM"
    },
    {
      "CountryCode": 533,
      "CountryName": "Aruba",
      "Alpha2Code": "AW",
      "Alpha3Code": "ABW"
    },
    {
      "CountryCode": 36,
      "CountryName": "Australia",
      "Alpha2Code": "AU",
      "Alpha3Code": "AUS"
    },
    {
      "CountryCode": 40,
      "CountryName": "Austria",
      "Alpha2Code": "AT",
      "Alpha3Code": "AUT"
    },
    {
      "CountryCode": 31,
      "CountryName": "Azerbaijan",
      "Alpha2Code": "AZ",
      "Alpha3Code": "AZE"
    },
    {
      "CountryCode": 44,
      "CountryName": "Bahamas (the)",
      "Alpha2Code": "BS",
      "Alpha3Code": "BHS"
    },
    {
      "CountryCode": 48,
      "CountryName": "Bahrain",
      "Alpha2Code": "BH",
      "Alpha3Code": "BHR"
    },
    {
      "CountryCode": 50,
      "CountryName": "Bangladesh",
      "Alpha2Code": "BD",
      "Alpha3Code": "BGD"
    },
    {
      "CountryCode": 52,
      "CountryName": "Barbados",
      "Alpha2Code": "BB",
      "Alpha3Code": "BRB"
    },
    {
      "CountryCode": 112,
      "CountryName": "Belarus",
      "Alpha2Code": "BY",
      "Alpha3Code": "BLR"
    },
    {
      "CountryCode": 56,
      "CountryName": "Belgium",
      "Alpha2Code": "BE",
      "Alpha3Code": "BEL"
    },
    {
      "CountryCode": 84,
      "CountryName": "Belize",
      "Alpha2Code": "BZ",
      "Alpha3Code": "BLZ"
    },
    {
      "CountryCode": 204,
      "CountryName": "Benin",
      "Alpha2Code": "BJ",
      "Alpha3Code": "BEN"
    },
    {
      "CountryCode": 60,
      "CountryName": "Bermuda",
      "Alpha2Code": "BM",
      "Alpha3Code": "BMU"
    },
    {
      "CountryCode": 64,
      "CountryName": "Bhutan",
      "Alpha2Code": "BT",
      "Alpha3Code": "BTN"
    },
    {
      "CountryCode": 68,
      "CountryName": "Bolivia (Plurinational State of)",
      "Alpha2Code": "BO",
      "Alpha3Code": "BOL"
    },
    {
      "CountryCode": 535,
      "CountryName": "Bonaire, Sint Eustatius and Saba",
      "Alpha2Code": "BQ",
      "Alpha3Code": "BES"
    },
    {
      "CountryCode": 70,
      "CountryName": "Bosnia and Herzegovina",
      "Alpha2Code": "BA",
      "Alpha3Code": "BIH"
    },
    {
      "CountryCode": 72,
      "CountryName": "Botswana",
      "Alpha2Code": "BW",
      "Alpha3Code": "BWA"
    },
    {
      "CountryCode": 74,
      "CountryName": "Bouvet Island",
      "Alpha2Code": "BV",
      "Alpha3Code": "BVT"
    },
    {
      "CountryCode": 76,
      "CountryName": "Brazil",
      "Alpha2Code": "BR",
      "Alpha3Code": "BRA"
    },
    {
      "CountryCode": 86,
      "CountryName": "British Indian Ocean Territory (the)",
      "Alpha2Code": "IO",
      "Alpha3Code": "IOT"
    },
    {
      "CountryCode": 96,
      "CountryName": "Brunei Darussalam",
      "Alpha2Code": "BN",
      "Alpha3Code": "BRN"
    },
    {
      "CountryCode": 100,
      "CountryName": "Bulgaria",
      "Alpha2Code": "BG",
      "Alpha3Code": "BGR"
    },
    {
      "CountryCode": 854,
      "CountryName": "Burkina Faso",
      "Alpha2Code": "BF",
      "Alpha3Code": "BFA"
    },
    {
      "CountryCode": 108,
      "CountryName": "Burundi",
      "Alpha2Code": "BI",
      "Alpha3Code": "BDI"
    },
    {
      "CountryCode": 132,
      "CountryName": "Cabo Verde",
      "Alpha2Code": "CV",
      "Alpha3Code": "CPV"
    },
    {
      "CountryCode": 116,
      "CountryName": "Cambodia",
      "Alpha2Code": "KH",
      "Alpha3Code": "KHM"
    },
    {
      "CountryCode": 120,
      "CountryName": "Cameroon",
      "Alpha2Code": "CM",
      "Alpha3Code": "CMR"
    },
    {
      "CountryCode": 124,
      "CountryName": "Canada",
      "Alpha2Code": "CA",
      "Alpha3Code": "CAN"
    },
    {
      "CountryCode": 136,
      "CountryName": "Cayman Islands (the)",
      "Alpha2Code": "KY",
      "Alpha3Code": "CYM"
    },
    {
      "CountryCode": 140,
      "CountryName": "Central African Republic (the)",
      "Alpha2Code": "CF",
      "Alpha3Code": "CAF"
    },
    {
      "CountryCode": 148,
      "CountryName": "Chad",
      "Alpha2Code": "TD",
      "Alpha3Code": "TCD"
    },
    {
      "CountryCode": 152,
      "CountryName": "Chile",
      "Alpha2Code": "CL",
      "Alpha3Code": "CHL"
    },
    {
      "CountryCode": 156,
      "CountryName": "China",
      "Alpha2Code": "CN",
      "Alpha3Code": "CHN"
    },
    {
      "CountryCode": 162,
      "CountryName": "Christmas Island",
      "Alpha2Code": "CX",
      "Alpha3Code": "CXR"
    },
    {
      "CountryCode": 166,
      "CountryName": "Cocos (Keeling) Islands (the)",
      "Alpha2Code": "CC",
      "Alpha3Code": "CCK"
    },
    {
      "CountryCode": 170,
      "CountryName": "Colombia",
      "Alpha2Code": "CO",
      "Alpha3Code": "COL"
    },
    {
      "CountryCode": 174,
      "CountryName": "Comoros (the)",
      "Alpha2Code": "KM",
      "Alpha3Code": "COM"
    },
    {
      "CountryCode": 180,
      "CountryName": "Congo (the Democratic Republic of the)",
      "Alpha2Code": "CD",
      "Alpha3Code": "COD"
    },
    {
      "CountryCode": 178,
      "CountryName": "Congo (the)",
      "Alpha2Code": "CG",
      "Alpha3Code": "COG"
    },
    {
      "CountryCode": 184,
      "CountryName": "Cook Islands (the)",
      "Alpha2Code": "CK",
      "Alpha3Code": "COK"
    },
    {
      "CountryCode": 188,
      "CountryName": "Costa Rica",
      "Alpha2Code": "CR",
      "Alpha3Code": "CRI"
    },
    {
      "CountryCode": 191,
      "CountryName": "Croatia",
      "Alpha2Code": "HR",
      "Alpha3Code": "HRV"
    },
    {
      "CountryCode": 192,
      "CountryName": "Cuba",
      "Alpha2Code": "CU",
      "Alpha3Code": "CUB"
    },
    {
      "CountryCode": 531,
      "CountryName": "Curaçao",
      "Alpha2Code": "CW",
      "Alpha3Code": "CUW"
    },
    {
      "CountryCode": 196,
      "CountryName": "Cyprus",
      "Alpha2Code": "CY",
      "Alpha3Code": "CYP"
    },
    {
      "CountryCode": 203,
      "CountryName": "Czechia",
      "Alpha2Code": "CZ",
      "Alpha3Code": "CZE"
    },
    {
      "CountryCode": 384,
      "CountryName": "Côte d'Ivoire",
      "Alpha2Code": "CI",
      "Alpha3Code": "CIV"
    },
    {
      "CountryCode": 208,
      "CountryName": "Denmark",
      "Alpha2Code": "DK",
      "Alpha3Code": "DNK"
    },
    {
      "CountryCode": 262,
      "CountryName": "Djibouti",
      "Alpha2Code": "DJ",
      "Alpha3Code": "DJI"
    },
    {
      "CountryCode": 212,
      "CountryName": "Dominica",
      "Alpha2Code": "DM",
      "Alpha3Code": "DMA"
    },
    {
      "CountryCode": 214,
      "CountryName": "Dominican Republic (the)",
      "Alpha2Code": "DO",
      "Alpha3Code": "DOM"
    },
    {
      "CountryCode": 218,
      "CountryName": "Ecuador",
      "Alpha2Code": "EC",
      "Alpha3Code": "ECU"
    },
    {
      "CountryCode": 818,
      "CountryName": "Egypt",
      "Alpha2Code": "EG",
      "Alpha3Code": "EGY"
    },
    {
      "CountryCode": 222,
      "CountryName": "El Salvador",
      "Alpha2Code": "SV",
      "Alpha3Code": "SLV"
    },
    {
      "CountryCode": 226,
      "CountryName": "Equatorial Guinea",
      "Alpha2Code": "GQ",
      "Alpha3Code": "GNQ"
    },
    {
      "CountryCode": 232,
      "CountryName": "Eritrea",
      "Alpha2Code": "ER",
      "Alpha3Code": "ERI"
    },
    {
      "CountryCode": 233,
      "CountryName": "Estonia",
      "Alpha2Code": "EE",
      "Alpha3Code": "EST"
    },
    {
      "CountryCode": 748,
      "CountryName": "Eswatini",
      "Alpha2Code": "SZ",
      "Alpha3Code": "SWZ"
    },
    {
      "CountryCode": 231,
      "CountryName": "Ethiopia",
      "Alpha2Code": "ET",
      "Alpha3Code": "ETH"
    },
    {
      "CountryCode": 238,
      "CountryName": "Falkland Islands (the) [Malvinas]",
      "Alpha2Code": "FK",
      "Alpha3Code": "FLK"
    },
    {
      "CountryCode": 234,
      "CountryName": "Faroe Islands (the)",
      "Alpha2Code": "FO",
      "Alpha3Code": "FRO"
    },
    {
      "CountryCode": 242,
      "CountryName": "Fiji",
      "Alpha2Code": "FJ",
      "Alpha3Code": "FJI"
    },
    {
      "CountryCode": 246,
      "CountryName": "Finland",
      "Alpha2Code": "FI",
      "Alpha3Code": "FIN"
    },
    {
      "CountryCode": 250,
      "CountryName": "France",
      "Alpha2Code": "FR",
      "Alpha3Code": "FRA"
    },
    {
      "CountryCode": 254,
      "CountryName": "French Guiana",
      "Alpha2Code": "GF",
      "Alpha3Code": "GUF"
    },
    {
      "CountryCode": 258,
      "CountryName": "French Polynesia",
      "Alpha2Code": "PF",
      "Alpha3Code": "PYF"
    },
    {
      "CountryCode": 260,
      "CountryName": "French Southern Territories (the)",
      "Alpha2Code": "TF",
      "Alpha3Code": "ATF"
    },
    {
      "CountryCode": 266,
      "CountryName": "Gabon",
      "Alpha2Code": "GA",
      "Alpha3Code": "GAB"
    },
    {
      "CountryCode": 270,
      "CountryName": "Gambia (the)",
      "Alpha2Code": "GM",
      "Alpha3Code": "GMB"
    },
    {
      "CountryCode": 268,
      "CountryName": "Georgia",
      "Alpha2Code": "GE",
      "Alpha3Code": "GEO"
    },
    {
      "CountryCode": 276,
      "CountryName": "Germany",
      "Alpha2Code": "DE",
      "Alpha3Code": "DEU"
    },
    {
      "CountryCode": 288,
      "CountryName": "Ghana",
      "Alpha2Code": "GH",
      "Alpha3Code": "GHA"
    },
    {
      "CountryCode": 292,
      "CountryName": "Gibraltar",
      "Alpha2Code": "GI",
      "Alpha3Code": "GIB"
    },
    {
      "CountryCode": 300,
      "CountryName": "Greece",
      "Alpha2Code": "GR",
      "Alpha3Code": "GRC"
    },
    {
      "CountryCode": 304,
      "CountryName": "Greenland",
      "Alpha2Code": "GL",
      "Alpha3Code": "GRL"
    },
    {
      "CountryCode": 308,
      "CountryName": "Grenada",
      "Alpha2Code": "GD",
      "Alpha3Code": "GRD"
    },
    {
      "CountryCode": 312,
      "CountryName": "Guadeloupe",
      "Alpha2Code": "GP",
      "Alpha3Code": "GLP"
    },
    {
      "CountryCode": 316,
      "CountryName": "Guam",
      "Alpha2Code": "GU",
      "Alpha3Code": "GUM"
    },
    {
      "CountryCode": 320,
      "CountryName": "Guatemala",
      "Alpha2Code": "GT",
      "Alpha3Code": "GTM"
    },
    {
      "CountryCode": 831,
      "CountryName": "Guernsey",
      "Alpha2Code": "GG",
      "Alpha3Code": "GGY"
    },
    {
      "CountryCode": 324,
      "CountryName": "Guinea",
      "Alpha2Code": "GN",
      "Alpha3Code": "GIN"
    },
    {
      "CountryCode": 624,
      "CountryName": "Guinea-Bissau",
      "Alpha2Code": "GW",
      "Alpha3Code": "GNB"
    },
    {
      "CountryCode": 328,
      "CountryName": "Guyana",
      "Alpha2Code": "GY",
      "Alpha3Code": "GUY"
    },
    {
      "CountryCode": 332,
      "CountryName": "Haiti",
      "Alpha2Code": "HT",
      "Alpha3Code": "HTI"
    },
    {
      "CountryCode": 334,
      "CountryName": "Heard Island and McDonald Islands",
      "Alpha2Code": "HM",
      "Alpha3Code": "HMD"
    },
    {
      "CountryCode": 336,
      "CountryName": "Holy See (the)",
      "Alpha2Code": "VA",
      "Alpha3Code": "VAT"
    },
    {
      "CountryCode": 340,
      "CountryName": "Honduras",
      "Alpha2Code": "HN",
      "Alpha3Code": "HND"
    },
    {
      "CountryCode": 344,
      "CountryName": "Hong Kong",
      "Alpha2Code": "HK",
      "Alpha3Code": "HKG"
    },
    {
      "CountryCode": 348,
      "CountryName": "Hungary",
      "Alpha2Code": "HU",
      "Alpha3Code": "HUN"
    },
    {
      "CountryCode": 352,
      "CountryName": "Iceland",
      "Alpha2Code": "IS",
      "Alpha3Code": "ISL"
    },
    {
      "CountryCode": 356,
      "CountryName": "India",
      "Alpha2Code": "IN",
      "Alpha3Code": "IND"
    },
    {
      "CountryCode": 360,
      "CountryName": "Indonesia",
      "Alpha2Code": "ID",
      "Alpha3Code": "IDN"
    },
    {
      "CountryCode": 364,
      "CountryName": "Iran (Islamic Republic of)",
      "Alpha2Code": "IR",
      "Alpha3Code": "IRN"
    },
    {
      "CountryCode": 368,
      "CountryName": "Iraq",
      "Alpha2Code": "IQ",
      "Alpha3Code": "IRQ"
    },
    {
      "CountryCode": 372,
      "CountryName": "Ireland",
      "Alpha2Code": "IE",
      "Alpha3Code": "IRL"
    },
    {
      "CountryCode": 833,
      "CountryName": "Isle of Man",
      "Alpha2Code": "IM",
      "Alpha3Code": "IMN"
    },
    {
      "CountryCode": 376,
      "CountryName": "Israel",
      "Alpha2Code": "IL",
      "Alpha3Code": "ISR"
    },
    {
      "CountryCode": 380,
      "CountryName": "Italy",
      "Alpha2Code": "IT",
      "Alpha3Code": "ITA"
    },
    {
      "CountryCode": 388,
      "CountryName": "Jamaica",
      "Alpha2Code": "JM",
      "Alpha3Code": "JAM"
    },
    {
      "CountryCode": 392,
      "CountryName": "Japan",
      "Alpha2Code": "JP",
      "Alpha3Code": "JPN"
    },
    {
      "CountryCode": 832,
      "CountryName": "Jersey",
      "Alpha2Code": "JE",
      "Alpha3Code": "JEY"
    },
    {
      "CountryCode": 400,
      "CountryName": "Jordan",
      "Alpha2Code": "JO",
      "Alpha3Code": "JOR"
    },
    {
      "CountryCode": 398,
      "CountryName": "Kazakhstan",
      "Alpha2Code": "KZ",
      "Alpha3Code": "KAZ"
    },
    {
      "CountryCode": 404,
      "CountryName": "Kenya",
      "Alpha2Code": "KE",
      "Alpha3Code": "KEN"
    },
    {
      "CountryCode": 296,
      "CountryName": "Kiribati",
      "Alpha2Code": "KI",
      "Alpha3Code": "KIR"
    },
    {
      "CountryCode": 408,
      "CountryName": "Korea (the Democratic People's Republic of)",
      "Alpha2Code": "KP",
      "Alpha3Code": "PRK"
    },
    {
      "CountryCode": 410,
      "CountryName": "Korea (the Republic of)",
      "Alpha2Code": "KR",
      "Alpha3Code": "KOR"
    },
    {
      "CountryCode": 414,
      "CountryName": "Kuwait",
      "Alpha2Code": "KW",
      "Alpha3Code": "KWT"
    },
    {
      "CountryCode": 417,
      "CountryName": "Kyrgyzstan",
      "Alpha2Code": "KG",
      "Alpha3Code": "KGZ"
    },
    {
      "CountryCode": 418,
      "CountryName": "Lao People's Democratic Republic (the)",
      "Alpha2Code": "LA",
      "Alpha3Code": "LAO"
    },
    {
      "CountryCode": 428,
      "CountryName": "Latvia",
      "Alpha2Code": "LV",
      "Alpha3Code": "LVA"
    },
    {
      "CountryCode": 422,
      "CountryName": "Lebanon",
      "Alpha2Code": "LB",
      "Alpha3Code": "LBN"
    },
    {
      "CountryCode": 426,
      "CountryName": "Lesotho",
      "Alpha2Code": "LS",
      "Alpha3Code": "LSO"
    },
    {
      "CountryCode": 430,
      "CountryName": "Liberia",
      "Alpha2Code": "LR",
      "Alpha3Code": "LBR"
    },
    {
      "CountryCode": 434,
      "CountryName": "Libya",
      "Alpha2Code": "LY",
      "Alpha3Code": "LBY"
    },
    {
      "CountryCode": 438,
      "CountryName": "Liechtenstein",
      "Alpha2Code": "LI",
      "Alpha3Code": "LIE"
    },
    {
      "CountryCode": 440,
      "CountryName": "Lithuania",
      "Alpha2Code": "LT",
      "Alpha3Code": "LTU"
    },
    {
      "CountryCode": 442,
      "CountryName": "Luxembourg",
      "Alpha2Code": "LU",
      "Alpha3Code": "LUX"
    },
    {
      "CountryCode": 446,
      "CountryName": "Macao",
      "Alpha2Code": "MO",
      "Alpha3Code": "MAC"
    },
    {
      "CountryCode": 450,
      "CountryName": "Madagascar",
      "Alpha2Code": "MG",
      "Alpha3Code": "MDG"
    },
    {
      "CountryCode": 454,
      "CountryName": "Malawi",
      "Alpha2Code": "MW",
      "Alpha3Code": "MWI"
    },
    {
      "CountryCode": 458,
      "CountryName": "Malaysia",
      "Alpha2Code": "MY",
      "Alpha3Code": "MYS"
    },
    {
      "CountryCode": 462,
      "CountryName": "Maldives",
      "Alpha2Code": "MV",
      "Alpha3Code": "MDV"
    },
    {
      "CountryCode": 466,
      "CountryName": "Mali",
      "Alpha2Code": "ML",
      "Alpha3Code": "MLI"
    },
    {
      "CountryCode": 470,
      "CountryName": "Malta",
      "Alpha2Code": "MT",
      "Alpha3Code": "MLT"
    },
    {
      "CountryCode": 584,
      "CountryName": "Marshall Islands (the)",
      "Alpha2Code": "MH",
      "Alpha3Code": "MHL"
    },
    {
      "CountryCode": 474,
      "CountryName": "Martinique",
      "Alpha2Code": "MQ",
      "Alpha3Code": "MTQ"
    },
    {
      "CountryCode": 478,
      "CountryName": "Mauritania",
      "Alpha2Code": "MR",
      "Alpha3Code": "MRT"
    },
    {
      "CountryCode": 480,
      "CountryName": "Mauritius",
      "Alpha2Code": "MU",
      "Alpha3Code": "MUS"
    },
    {
      "CountryCode": 175,
      "CountryName": "Mayotte",
      "Alpha2Code": "YT",
      "Alpha3Code": "MYT"
    },
    {
      "CountryCode": 484,
      "CountryName": "Mexico",
      "Alpha2Code": "MX",
      "Alpha3Code": "MEX"
    },
    {
      "CountryCode": 583,
      "CountryName": "Micronesia (Federated States of)",
      "Alpha2Code": "FM",
      "Alpha3Code": "FSM"
    },
    {
      "CountryCode": 498,
      "CountryName": "Moldova (the Republic of)",
      "Alpha2Code": "MD",
      "Alpha3Code": "MDA"
    },
    {
      "CountryCode": 492,
      "CountryName": "Monaco",
      "Alpha2Code": "MC",
      "Alpha3Code": "MCO"
    },
    {
      "CountryCode": 496,
      "CountryName": "Mongolia",
      "Alpha2Code": "MN",
      "Alpha3Code": "MNG"
    },
    {
      "CountryCode": 499,
      "CountryName": "Montenegro",
      "Alpha2Code": "ME",
      "Alpha3Code": "MNE"
    },
    {
      "CountryCode": 500,
      "CountryName": "Montserrat",
      "Alpha2Code": "MS",
      "Alpha3Code": "MSR"
    },
    {
      "CountryCode": 504,
      "CountryName": "Morocco",
      "Alpha2Code": "MA",
      "Alpha3Code": "MAR"
    },
    {
      "CountryCode": 508,
      "CountryName": "Mozambique",
      "Alpha2Code": "MZ",
      "Alpha3Code": "MOZ"
    },
    {
      "CountryCode": 104,
      "CountryName": "Myanmar",
      "Alpha2Code": "MM",
      "Alpha3Code": "MMR"
    },
    {
      "CountryCode": 516,
      "CountryName": "Namibia",
      "Alpha2Code": "NA",
      "Alpha3Code": "NAM"
    },
    {
      "CountryCode": 520,
      "CountryName": "Nauru",
      "Alpha2Code": "NR",
      "Alpha3Code": "NRU"
    },
    {
      "CountryCode": 524,
      "CountryName": "Nepal",
      "Alpha2Code": "NP",
      "Alpha3Code": "NPL"
    },
    {
      "CountryCode": 528,
      "CountryName": "Netherlands (Kingdom of the)",
      "Alpha2Code": "NL",
      "Alpha3Code": "NLD"
    },
    {
      "CountryCode": 540,
      "CountryName": "New Caledonia",
      "Alpha2Code": "NC",
      "Alpha3Code": "NCL"
    },
    {
      "CountryCode": 554,
      "CountryName": "New Zealand",
      "Alpha2Code": "NZ",
      "Alpha3Code": "NZL"
    },
    {
      "CountryCode": 558,
      "CountryName": "Nicaragua",
      "Alpha2Code": "NI",
      "Alpha3Code": "NIC"
    },
    {
      "CountryCode": 562,
      "CountryName": "Niger (the)",
      "Alpha2Code": "NE",
      "Alpha3Code": "NER"
    },
    {
      "CountryCode": 566,
      "CountryName": "Nigeria",
      "Alpha2Code": "NG",
      "Alpha3Code": "NGA"
    },
    {
      "CountryCode": 570,
      "CountryName": "Niue",
      "Alpha2Code": "NU",
      "Alpha3Code": "NIU"
    },
    {
      "CountryCode": 574,
      "CountryName": "Norfolk Island",
      "Alpha2Code": "NF",
      "Alpha3Code": "NFK"
    },
    {
      "CountryCode": 807,
      "CountryName": "North Macedonia",
      "Alpha2Code": "MK",
      "Alpha3Code": "MKD"
    },
    {
      "CountryCode": 580,
      "CountryName": "Northern Mariana Islands (the)",
      "Alpha2Code": "MP",
      "Alpha3Code": "MNP"
    },
    {
      "CountryCode": 578,
      "CountryName": "Norway",
      "Alpha2Code": "NO",
      "Alpha3Code": "NOR"
    },
    {
      "CountryCode": 512,
      "CountryName": "Oman",
      "Alpha2Code": "OM",
      "Alpha3Code": "OMN"
    },
    {
      "CountryCode": 586,
      "CountryName": "Pakistan",
      "Alpha2Code": "PK",
      "Alpha3Code": "PAK"
    },
    {
      "CountryCode": 585,
      "CountryName": "Palau",
      "Alpha2Code": "PW",
      "Alpha3Code": "PLW"
    },
    {
      "CountryCode": 275,
      "CountryName": "Palestine, State of",
      "Alpha2Code": "PS",
      "Alpha3Code": "PSE"
    },
    {
      "CountryCode": 591,
      "CountryName": "Panama",
      "Alpha2Code": "PA",
      "Alpha3Code": "PAN"
    },
    {
      "CountryCode": 598,
      "CountryName": "Papua New Guinea",
      "Alpha2Code": "PG",
      "Alpha3Code": "PNG"
    },
    {
      "CountryCode": 600,
      "CountryName": "Paraguay",
      "Alpha2Code": "PY",
      "Alpha3Code": "PRY"
    },
    {
      "CountryCode": 604,
      "CountryName": "Peru",
      "Alpha2Code": "PE",
      "Alpha3Code": "PER"
    },
    {
      "CountryCode": 608,
      "CountryName": "Philippines (the)",
      "Alpha2Code": "PH",
      "Alpha3Code": "PHL"
    },
    {
      "CountryCode": 612,
      "CountryName": "Pitcairn",
      "Alpha2Code": "PN",
      "Alpha3Code": "PCN"
    },
    {
      "CountryCode": 616,
      "CountryName": "Poland",
      "Alpha2Code": "PL",
      "Alpha3Code": "POL"
    },
    {
      "CountryCode": 620,
      "CountryName": "Portugal",
      "Alpha2Code": "PT",
      "Alpha3Code": "PRT"
    },
    {
      "CountryCode": 630,
      "CountryName": "Puerto Rico",
      "Alpha2Code": "PR",
      "Alpha3Code": "PRI"
    },
    {
      "CountryCode": 634,
      "CountryName": "Qatar",
      "Alpha2Code": "QA",
      "Alpha3Code": "QAT"
    },
    {
      "CountryCode": 642,
      "CountryName": "Romania",
      "Alpha2Code": "RO",
      "Alpha3Code": "ROU"
    },
    {
      "CountryCode": 643,
      "CountryName": "Russian Federation (the)",
      "Alpha2Code": "RU",
      "Alpha3Code": "RUS"
    },
    {
      "CountryCode": 646,
      "CountryName": "Rwanda",
      "Alpha2Code": "RW",
      "Alpha3Code": "RWA"
    },
    {
      "CountryCode": 638,
      "CountryName": "Réunion",
      "Alpha2Code": "RE",
      "Alpha3Code": "REU"
    },
    {
      "CountryCode": 652,
      "CountryName": "Saint Barthélemy",
      "Alpha2Code": "BL",
      "Alpha3Code": "BLM"
    },
    {
      "CountryCode": 654,
      "CountryName": "Saint Helena, Ascension and Tristan da Cunha",
      "Alpha2Code": "SH",
      "Alpha3Code": "SHN"
    },
    {
      "CountryCode": 659,
      "CountryName": "Saint Kitts and Nevis",
      "Alpha2Code": "KN",
      "Alpha3Code": "KNA"
    },
    {
      "CountryCode": 662,
      "CountryName": "Saint Lucia",
      "Alpha2Code": "LC",
      "Alpha3Code": "LCA"
    },
    {
      "CountryCode": 663,
      "CountryName": "Saint Martin (French part)",
      "Alpha2Code": "MF",
      "Alpha3Code": "MAF"
    },
    {
      "CountryCode": 666,
      "CountryName": "Saint Pierre and Miquelon",
      "Alpha2Code": "PM",
      "Alpha3Code": "SPM"
    },
    {
      "CountryCode": 670,
      "CountryName": "Saint Vincent and the Grenadines",
      "Alpha2Code": "VC",
      "Alpha3Code": "VCT"
    },
    {
      "CountryCode": 882,
      "CountryName": "Samoa",
      "Alpha2Code": "WS",
      "Alpha3Code": "WSM"
    },
    {
      "CountryCode": 674,
      "CountryName": "San Marino",
      "Alpha2Code": "SM",
      "Alpha3Code": "SMR"
    },
    {
      "CountryCode": 678,
      "CountryName": "Sao Tome and Principe",
      "Alpha2Code": "ST",
      "Alpha3Code": "STP"
    },
    {
      "CountryCode": 682,
      "CountryName": "Saudi Arabia",
      "Alpha2Code": "SA",
      "Alpha3Code": "SAU"
    },
    {
      "CountryCode": 686,
      "CountryName": "Senegal",
      "Alpha2Code": "SN",
      "Alpha3Code": "SEN"
    },
    {
      "CountryCode": 688,
      "CountryName": "Serbia",
      "Alpha2Code": "RS",
      "Alpha3Code": "SRB"
    },
    {
      "CountryCode": 690,
      "CountryName": "Seychelles",
      "Alpha2Code": "SC",
      "Alpha3Code": "SYC"
    },
    {
      "CountryCode": 694,
      "CountryName": "Sierra Leone",
      "Alpha2Code": "SL",
      "Alpha3Code": "SLE"
    },
    {
      "CountryCode": 702,
      "CountryName": "Singapore",
      "Alpha2Code": "SG",
      "Alpha3Code": "SGP"
    },
    {
      "CountryCode": 534,
      "CountryName": "Sint Maarten (Dutch part)",
      "Alpha2Code": "SX",
      "Alpha3Code": "SXM"
    },
    {
      "CountryCode": 703,
      "CountryName": "Slovakia",
      "Alpha2Code": "SK",
      "Alpha3Code": "SVK"
    },
    {
      "CountryCode": 705,
      "CountryName": "Slovenia",
      "Alpha2Code": "SI",
      "Alpha3Code": "SVN"
    },
    {
      "CountryCode": 90,
      "CountryName": "Solomon Islands",
      "Alpha2Code": "SB",
      "Alpha3Code": "SLB"
    },
    {
      "CountryCode": 706,
      "CountryName": "Somalia",
      "Alpha2Code": "SO",
      "Alpha3Code": "SOM"
    },
    {
      "CountryCode": 710,
      "CountryName": "South Africa",
      "Alpha2Code": "ZA",
      "Alpha3Code": "ZAF"
    },
    {
      "CountryCode": 239,
      "CountryName": "South Georgia and the South Sandwich Islands",
      "Alpha2Code": "GS",
      "Alpha3Code": "SGS"
    },
    {
      "CountryCode": 728,
      "CountryName": "South Sudan",
      "Alpha2Code": "SS",
      "Alpha3Code": "SSD"
    },
    {
      "CountryCode": 724,
      "CountryName": "Spain",
      "Alpha2Code": "ES",
      "Alpha3Code": "ESP"
    },
    {
      "CountryCode": 144,
      "CountryName": "Sri Lanka",
      "Alpha2Code": "LK",
      "Alpha3Code": "LKA"
    },
    {
      "CountryCode": 729,
      "CountryName": "Sudan (the)",
      "Alpha2Code": "SD",
      "Alpha3Code": "SDN"
    },
    {
      "CountryCode": 740,
      "CountryName": "Suriname",
      "Alpha2Code": "SR",
      "Alpha3Code": "SUR"
    },
    {
      "CountryCode": 744,
      "CountryName": "Svalbard and Jan Mayen",
      "Alpha2Code": "SJ",
      "Alpha3Code": "SJM"
    },
    {
      "CountryCode": 752,
      "CountryName": "Sweden",
      "Alpha2Code": "SE",
      "Alpha3Code": "SWE"
    },
    {
      "CountryCode": 756,
      "CountryName": "Switzerland",
      "Alpha2Code": "CH",
      "Alpha3Code": "CHE"
    },
    {
      "CountryCode": 760,
      "CountryName": "Syrian Arab Republic (the)",
      "Alpha2Code": "SY",
      "Alpha3Code": "SYR"
    },
    {
      "CountryCode": 158,
      "CountryName": "Taiwan (Province of China)",
      "Alpha2Code": "TW",
      "Alpha3Code": "TWN"
    },
    {
      "CountryCode": 762,
      "CountryName": "Tajikistan",
      "Alpha2Code": "TJ",
      "Alpha3Code": "TJK"
    },
    {
      "CountryCode": 834,
      "CountryName": "Tanzania, the United Republic of",
      "Alpha2Code": "TZ",
      "Alpha3Code": "TZA"
    },
    {
      "CountryCode": 764,
      "CountryName": "Thailand",
      "Alpha2Code": "TH",
      "Alpha3Code": "THA"
    },
    {
      "CountryCode": 626,
      "CountryName": "Timor-Leste",
      "Alpha2Code": "TL",
      "Alpha3Code": "TLS"
    },
    {
      "CountryCode": 768,
      "CountryName": "Togo",
      "Alpha2Code": "TG",
      "Alpha3Code": "TGO"
    },
    {
      "CountryCode": 772,
      "CountryName": "Tokelau",
      "Alpha2Code": "TK",
      "Alpha3Code": "TKL"
    },
    {
      "CountryCode": 776,
      "CountryName": "Tonga",
      "Alpha2Code": "TO",
      "Alpha3Code": "TON"
    },
    {
      "CountryCode": 780,
      "CountryName": "Trinidad and Tobago",
      "Alpha2Code": "TT",
      "Alpha3Code": "TTO"
    },
    {
      "CountryCode": 788,
      "CountryName": "Tunisia",
      "Alpha2Code": "TN",
      "Alpha3Code": "TUN"
    },
    {
      "CountryCode": 795,
      "CountryName": "Turkmenistan",
      "Alpha2Code": "TM",
      "Alpha3Code": "TKM"
    },
    {
      "CountryCode": 796,
      "CountryName": "Turks and Caicos Islands (the)",
      "Alpha2Code": "TC",
      "Alpha3Code": "TCA"
    },
    {
      "CountryCode": 798,
      "CountryName": "Tuvalu",
      "Alpha2Code": "TV",
      "Alpha3Code": "TUV"
    },
    {
      "CountryCode": 792,
      "CountryName": "Türkiye",
      "Alpha2Code": "TR",
      "Alpha3Code": "TUR"
    },
    {
      "CountryCode": 800,
      "CountryName": "Uganda",
      "Alpha2Code": "UG",
      "Alpha3Code": "UGA"
    },
    {
      "CountryCode": 804,
      "CountryName": "Ukraine",
      "Alpha2Code": "UA",
      "Alpha3Code": "UKR"
    },
    {
      "CountryCode": 784,
      "CountryName": "United Arab Emirates (the)",
      "Alpha2Code": "AE",
      "Alpha3Code": "ARE"
    },
    {
      "CountryCode": 826,
      "CountryName": "United Kingdom of Great Britain and Northern Ireland (the)",
      "Alpha2Code": "GB",
      "Alpha3Code": "GBR"
    },
    {
      "CountryCode": 581,
      "CountryName": "United States Minor Outlying Islands (the)",
      "Alpha2Code": "UM",
      "Alpha3Code": "UMI"
    },
    {
      "CountryCode": 840,
      "CountryName": "United States of America (the)",
      "Alpha2Code": "US",
      "Alpha3Code": "USA"
    },
    {
      "CountryCode": 858,
      "CountryName": "Uruguay",
      "Alpha2Code": "UY",
      "Alpha3Code": "URY"
    },
    {
      "CountryCode": 860,
      "CountryName": "Uzbekistan",
      "Alpha2Code": "UZ",
      "Alpha3Code": "UZB"
    },
    {
      "CountryCode": 548,
      "CountryName": "Vanuatu",
      "Alpha2Code": "VU",
      "Alpha3Code": "VUT"
    },
    {
      "CountryCode": 862,
      "CountryName": "Venezuela (Bolivarian Republic of)",
      "Alpha2Code": "VE",
      "Alpha3Code": "VEN"
    },
    {
      "CountryCode": 704,
      "CountryName": "Viet Nam",
      "Alpha2Code": "VN",
      "Alpha3Code": "VNM"
    },
    {
      "CountryCode": 92,
      "CountryName": "Virgin Islands (British)",
      "Alpha2Code": "VG",
      "Alpha3Code": "VGB"
    },
    {
      "CountryCode": 850,
      "CountryName": "Virgin Islands (U.S.)",
      "Alpha2Code": "VI",
      "Alpha3Code": "VIR"
    },
    {
      "CountryCode": 876,
      "CountryName": "Wallis and Futuna",
      "Alpha2Code": "WF",
      "Alpha3Code": "WLF"
    },
    {
      "CountryCode": 732,
      "CountryName": "Western Sahara*",
      "Alpha2Code": "EH",
      "Alpha3Code": "ESH"
    },
    {
      "CountryCode": 887,
      "CountryName": "Yemen",
      "Alpha2Code": "YE",
      "Alpha3Code": "YEM"
    },
    {
      "CountryCode": 894,
      "CountryName": "Zambia",
      "Alpha2Code": "ZM",
      "Alpha3Code": "ZMB"
    },
    {
      "CountryCode": 716,
      "CountryName": "Zimbabwe",
      "Alpha2Code": "ZW",
      "Alpha3Code": "ZWE"
    },
    {
      "CountryCode": 248,
      "CountryName": "Åland Islands",
      "Alpha2Code": "AX",
      "Alpha3Code": "ALA"
    }
   ]
  }
  };
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    ActiveForm: "",
    isAuthOK: false,
    isInitOK: false,
    user_id: "",
    err: "",
    route: ""
  },
  reducers: {
    setAuthStatus(state, action) {
      state.push(action.payload);
    },
    setActiveForm(state, action) {
      console.log("aa");
      return { ...state, ActiveForm: action.payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logginAsync.fulfilled, (state, action) => {
        return {
          ...state,
          isAuthOK: action.payload.isAuthOK,
          user_id: action.payload.user_id,
          err: action.payload.err,
          ActiveForm: action.payload.isAuthOK == true ? "Home" : ""
        };
      })
      .addCase(logginAsync.rejected, (state, action) => {
        return {
          ...state,
          isAuthOK: false,
          user_id: "",
          err: action.error.message
        };
      })

      .addCase(initAsync.fulfilled, (state, action) => {
        console.log(action);
        localStorage.setItem("title", JSON.stringify(action.payload.data.Title));
        localStorage.setItem("country", JSON.stringify(action.payload.data.Country));
        console.log("ok");
        return { ...state, isInitOK: true, route: action.payload.route };
      })
      .addCase(initAsync.rejected, (state, action) => {
        return { ...state, isInitOK: false };
      });
  }
});

export const { setAuthStatus, setActiveForm } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const loggin = (payload) => (dispatch) => {
  dispatch(logginAsync(payload));
};
export const init = (payload) => (dispatch) => {
  dispatch(initAsync(payload));
};
