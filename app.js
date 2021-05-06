// const mapbox_token = "pk.eyJ1IjoieWFzaHNhaGF5MjAxNCIsImEiOiJja29iZmYxNmMwMDUzMzB0ZGk5emFkcG9zIn0.ps7eb3cAnZO4L_DG8P00eg";

// console.log("Making coronavirus cases map");
function updateMap() {
  fetch("http://coronavirus-tracker-api.herokuapp.com/v2/locations")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data.locations);
      worldTotalCases = data.latest.confirmed;

      data.locations.forEach((element) => {
        latitude = element.coordinates.latitude;
        longitude = element.coordinates.longitude;
        // console.log(latitude,longitude);
        country = element.country;
        // console.log(country, latitude, longitude);
        cases = element.latest.confirmed;
        percentCases = (cases * 100 * 255) / worldTotalCases;

        // if (cases > 25500) {
        //   setcolor = "rgb(255,0,0)";
        // } else {
        //   setcolor = `rgb(${cases}/2550,0,0)`;
        // }
        setcolor = `rgb(${percentCases},0,0)`;
        //Mark on map
        new mapboxgl.Marker({
          color: setcolor,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
let interval = 300000;
setInterval(updateMap(), interval);
