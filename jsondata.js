var myObj = {
  latest: {
    confirmed: 154359533,
    deaths: 3227598,
    recovered: 19557848,
  },
  locations: [
    {
      id: 0,
      country: "Afghanistan",
      country_code: "AF",
      country_population: 37172386,
      province: "",
      last_updated: "2021-05-05T18:02:45.342314Z",
      coordinates: {
        latitude: "33.93911",
        longitude: "67.709953",
      },
      latest: {
        confirmed: 60563,
        deaths: 2648,
        recovered: 53694,
      },
    },
    {
      id: 1,
      country: "Albania",
      country_code: "AL",
      country_population: 2866376,
      province: "",
      last_updated: "2021-05-05T18:02:45.366450Z",
      coordinates: {
        latitude: "41.1533",
        longitude: "20.1683",
      },
      latest: {
        confirmed: 131327,
        deaths: 2402,
        recovered: 112626,
      },
    },
  ],
};

// console.log(myObj.latest.confirmed);
// console.log(myObj.latest.deaths);
// console.log(myObj.latest.recovered);
console.log(
  myObj.locations.forEach((element) => {
    // console.log(element.id + " " + element.coordinates.latitude);
    // console.log(element.coordinates.latitude);
    // console.log(element.coordinates.longitude);
    console.log(element.id, element.latest.confirmed, element.latest.deaths, element.latest.recovered);
    // console.log(element.latest.deaths);
    // console.log(element.latest.recovered);
  })
);
