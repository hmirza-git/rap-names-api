const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21Savage": {
    realName: "Shéyaa Bin Abraham-Joseph",
    age: 29,
    starSign: "Libra",
    birthDate: "October 22, 1992",
    birthPlace: "London, England",
    passedAway: false,
    deathNote: "alive",
  },
  asapRocky: {
    realName: "Rakim Athelaston Mayers",
    age: 33,
    starSign: "Libra",
    passedAway: false,
    deathNote: "alive",
  },
  bigL: {
    realName: "Lamont Coleman",
    age: 24,
    starSign: "Taurus",
    birthDate: "May 30, 1974",
    birthPlace: "Harlem, New York, USA",
    passedAway: true,
    deathNote: "Big L passed away on February 15, 1999",
  },
  biggieSmalls: {
    realName: "Christopher George Latore Wallace",
    age: 24,
    starSign: "Taurus",
    birthDate: "May 21, 1972",
    birthPlace: "Brooklyn, New York, USA",
    passedAway: true,
    deathNote: "The Notorious B.I.G. passed away on March 9, 1997",
  },
  cardiB: {
    realName: "Belcalis Marlenis Almánzar",
    age: 29,
    starSign: "Libra",
    birthDate: "October 11, 1992",
    birthPlace: "Washington Heights, New York, USA",
    passedAway: false,
    deathNote: "alive",
  },
  chanceTheRapper: {
    realName: "Chancelor Johnathan Bennett",
    age: 29,
    starSign: "Aries",
    birthDate: "April 16, 1993",
    birthPlace: "Chicago, Illinois, USA",
    passedAway: false,
    deathNote: "alive",
  },
  drake: {
    realName: "Aubrey Drake Graham",
    age: 35,
    starSign: "Scorpio",
    birthDate: "October 24, 1986",
    birthPlace: "Toronto, Ontario, Canada",
    passedAway: false,
    deathNote: "alive",
  },
  eazye: {
    realName: "Eric Lynn Wright",
    age: 30,
    starSign: "Virgo",
    birthDate: "September 7, 1963",
    birthPlace: "Compton, California, USA",
    passedAway: true,
    deathNote: "Eazy-E passed away on March 26, 1995",
  },
  eminem: {
    realName: "Marshall Bruce Mathers III",
    age: 49,
    starSign: "Libra",
    birthDate: "October 17, 1972",
    birthPlace: "Saint Joseph, Missouri, USA",
    passedAway: false,
    deathNote: "alive",
  },
  jCole: {
    realName: "Jermaine Lamarr Cole",
    age: 37,
    starSign: "Capricorn",
    birthDate: "January 28, 1985",
    birthPlace: "Frankfurt, Hesse, Germany",
    passedAway: false,
    deathNote: "alive",
  },
  juiceWrld: {
    realName: "Jarad Anthony Higgins",
    age: 21,
    starSign: "Sagittarius",
    birthDate: "December 2, 1998",
    birthPlace: "Chicago, Illinois, USA",
    passedAway: true,
    deathNote: "Juice WRLD passed away on December 8, 2019",
  },
  kanyeWest: {
    realName: "Kanye Omari West",
    age: 44,
    starSign: "Gemini",
    birthDate: "June 8, 1977",
    birthPlace: "Atlanta, Georgia, USA",
    passedAway: false,
    deathNote: "alive",
  },
  kendrickLamar: {
    realName: "Kendrick Lamar Duckworth",
    age: 35,
    starSign: "Gemini",
    birthDate: "June 17, 1987",
    birthPlace: "Compton, California, USA",
    passedAway: false,
    deathNote: "alive",
  },
  lilBaby: {
    realName: "Dominique Armani Jones",
    age: 27,
    starSign: "Sagittarius",
    birthDate: "December 3, 1994",
    birthPlace: "Atlanta, Georgia, USA",
    passedAway: false,
    deathNote: "alive",
  },
  lilUziVert: {
    realName: "Symere Woods",
    age: 27,
    starSign: "Leo",
    birthDate: "July 31, 1994",
    birthPlace: "Philadelphia, Pennsylvania, USA",
    passedAway: false,
    deathNote: "alive",
  },
  macMiller: {
    realName: "Malcolm James McCormick",
    age: 26,
    starSign: "Capricorn",
    birthDate: "January 19, 1992",
    birthPlace: "Pittsburgh, Pennsylvania, USA",
    passedAway: true,
    deathNote: "Mac Miller passed away on September 7, 2018",
  },
  meekMill: {
    realName: "Robert Rihmeek Williams",
    age: 35,
    starSign: "Taurus",
    birthDate: "May 6, 1987",
    birthPlace: "Philadelphia, Pennsylvania, USA",
    passedAway: false,
    deathNote: "alive",
  },
  meganTheeStallion: {
    realName: "Megan Jovon Ruth Pete",
    age: 27,
    starSign: "Aquarius",
    birthDate: "February 15, 1995",
    birthPlace: "San Antonio, Texas, USA",
    passedAway: false,
    deathNote: "alive",
  },
  nas: {
    realName: "Nasir Jones",
    age: 48,
    starSign: "Virgo",
    birthDate: "September 14, 1973",
    birthPlace: "Brooklyn, New York, USA",
    passedAway: false,
    deathNote: "alive",
  },
  nickiMinaj: {
    realName: "Onika Tanya Maraj",
    age: 39,
    starSign: "Sagittarius",
    birthDate: "December 8, 1982",
    birthPlace: "Port of Spain, Trinidad and Tobago",
    passedAway: false,
    deathNote: "alive",
  },
  nipseyHussle: {
    realName: "Ermias Joseph Asghedom",
    age: 33,
    starSign: "Leo",
    birthDate: "August 15, 1985",
    birthPlace: "Los Angeles, California, USA",
    passedAway: true,
    deathNote: "Nipsey Hussle passed away on March 31, 2019",
  },
  notoriousBig: {
    realName: "Christopher George Latore Wallace",
    age: 24,
    starSign: "Taurus",
    birthDate: "May 21, 1972",
    birthPlace: "Brooklyn, New York, USA",
    passedAway: true,
    deathNote: "The Notorious B.I.G. passed away on March 9, 1997",
  },
  popSmoke: {
    realName: "Bashar Barakah Jackson",
    age: 20,
    starSign: "Cancer",
    birthDate: "July 20, 1999",
    birthPlace: "Brooklyn, New York, USA",
    passedAway: true,
    deathNote: "Pop Smoke passed away on February 19, 2020",
  },
  travisScott: {
    realName: "Jacques Webster II",
    age: 30,
    starSign: "Taurus",
    birthDate: "April 30, 1992",
    birthPlace: "Houston, Texas, USA",
    passedAway: false,
    deathNote: "alive",
  },
  trippieRedd: {
    realName: "Michael Lamar White IV",
    age: 23,
    starSign: "Gemini",
    birthDate: "June 18, 1999",
    birthPlace: "Canton, Ohio, USA",
    passedAway: false,
    deathNote: "alive",
  },
  tylerTheCreator: {
    realName: "Tyler Gregory Okonma",
    age: 30,
    starSign: "Pisces",
    birthDate: "March 6, 1991",
    birthPlace: "Ladera Heights, California, USA",
    passedAway: false,
    deathNote: "alive",
  },
  wizKhalifa: {
    realName: "Cameron Jibril Thomaz",
    age: 34,
    starSign: "Virgo",
    birthDate: "September 8, 1987",
    birthPlace: "Minot, North Dakota, USA",
    passedAway: false,
    deathNote: "alive",
  },
  xxxtentacion: {
    realName: "Jahseh Dwayne Ricardo Onfroy",
    age: 20,
    starSign: "Aquarius",
    birthDate: "January 23, 1998",
    birthPlace: "Plantation, Florida, USA",
    passedAway: true,
    deathNote: "XXXTentacion passed away on June 18, 2018",
  },
  yg: {
    realName: "Keenon Daequan Ray Jackson",
    age: 32,
    starSign: "Pisces",
    birthDate: "March 9, 1990",
    birthPlace: "Compton, California, USA",
    passedAway: false,
    deathNote: "alive",
  },
  unKnown: {
    realName: "unKnown",
    age: "unKnown",
    starSign: "unKnown",
    birthDate: "unKnown",
    birthPlace: "unKnown",
    passedAway: "unKnown",
    deathNote: "unKnown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api", (request, response) => {
  response.json(rappers);
});

app.get("/api/:rapperName", (request, response) => {
  const rapperNameParam = request.params.rapperName.toLowerCase();
  if (rappers[rapperNameParam]) {
    response.json(rappers[rapperNameParam]);
  } else {
    response.json(rappers["unKnown"]);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
