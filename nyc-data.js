let nycMap;
nycMap = L.map("map");

// create tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(nycMap);

nycMap.setView([40.7128, -74.0060], 16);

L.geoJSON(nyc).addTo(nycMap);

L.geoJSON(nyc, {
    style: function(feature) {
        return {
            color: "blue",
            fillColor: "yellow",
            fillOpacity: 0.5
        };
    }
}).addTo(nycMap);

L.geoJSON(nyc, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.borough + "</h3> <hr> <h3>" + feature.properties.neighborhood + "</h3>");
    }
}).addTo(nycMap);

$("#pan-to-flatbush").click(function() {
    // find flatbush neighborhood property in the dataset
    let flatbush = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Flatbush";
    });
//     console.log(flatbush);
// });
let coordinates = nyc.features.find(function(feature) {
    return feature.properties.neighborhood === "Flatbush";
}).geometry.coordinates;
console.log(coordinates);
nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
});

// let neighborhoods = nyc.features.map(function(feature) {
//     return feature.properties.neighborhood;
// }).filter(function(neighborhood) {
//     return neighborhood !== "";
// }).sort();
// console.log(neighborhoods);

let neighborhoods = nyc.features.map((feature)=> feature.properties.neighborhood)
.filter(neighborhood => neighborhood !== "").sort();
console.log(neighborhoods);

// neighborhoods.forEach(function(neighborhood) {
//     $("#neighborhoods").append("<a href ='#'><li>" + neighborhood + "</li></a>");
//     // display in columns
//     if (neighborhoods.indexOf(neighborhood) % 4 === 0) {
//         $("#neighborhoods").append("<br>");
//     }
// });

neighborhoods.forEach(neighborhood => {
    $("#neighborhoods").append("<a href ='#'><li>" + neighborhood + "</li></a>");
    // display in columns
    if (neighborhoods.indexOf(neighborhood) % 4 === 0) {
        $("#neighborhoods").append("<br>");
    }
});

// $("#neighborhoods").on("click", "li", function() {
//     let neighborhoodText = $(this).text(); // get the text of the neighborhood
//     let coordinates = nyc.features.find(function(feature) {
//         return feature.properties.neighborhood === neighborhoodText; //check if the text matches the neighborhood in the dataset
//     }).geometry.coordinates; // get the coordinates of the neighborhood
//     nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
//     // zoom in
//     nycMap.setZoom(16);
//     // add a marker to the neighborhood polygon
//     L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).addTo(nycMap);
//     // add a popup to the marker
//     L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).bindPopup("<h3>" + neighborhoodText + "</h3>").addTo(nycMap);
// });

$("#neighborhoods").on("click", "li", function(){
    let neighborhoodText = $(this).text(); // get the text of the neighborhood
    let coordinates = nyc.features.find(feature => 
        feature.properties.neighborhood === neighborhoodText) //check if the text matches the neighborhood in the dataset
        .geometry.coordinates; // get the coordinates of the neighborhood
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
    // zoom in
    nycMap.setZoom(16);
    // add a marker to the neighborhood polygon
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).addTo(nycMap);
    // add a popup to the marker
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).bindPopup("<h3>" + neighborhoodText + "</h3>").addTo(nycMap);
    });

    $("#pan-to-ch").click(function(){
        // let ch = nyc.features.find(feature =>
        //     feature.properties.neighborhood === "Crown Heights")
        let coordinates = nyc.features.find(feature =>
            feature.properties.neighborhood === "Crown Heights")
        .geometry.coordinates;
        console.log(coordinates);
        nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
        });

        const neighbsCoords = nyc.features.find(feature =>
            feature.properties.neighborhood === "Crown Heights").geometry.coordinates;
        

        // let coordArr = nyc.features.map(feature =>
        //     feature.geometry.coordinates);
        

        for (let i = 0; i < neighbsCoords.length; i++) {
            for(let j = 0; j < neighbsCoords[i].length; j++){
                neighbsCoords[i][j].reverse();
                // var swapElements = (array, index1, index2) => {
                    // let temp = array[index1];
                    // array[index1] = array[index2];
                    // array[index2] = temp;
            }
                };


                // var switcheroo = function (arr, from, to){    
                // let spL = element.splice(0,1)
                // console.log("here",spL);
                // element.splice(1, spL)
                // const element2 = element[i][j];
                // var moveInArray = function (arr, from, to) {           
                //     // Delete the item from it's current position
                //     let item = arr.splice(from, 1);
                
                //     // Move the item to its new position
                //     arr.splice(to, 0, item[0]);
                //     return arr
        //         // };
        // }};

        // swapElements(neighbsCoords,0,1);
        // console.log("new",neighbsCoords);
                
   
        const neighbsLine = L.polyline(neighbsCoords, {
            color: 'black'
        }).addTo(nycMap);

        L.geoJSON(nyc, {
            style: function(feature) {
                // challenge 3
                if (feature.properties.borough === "Manhattan") {
                    return {
                        color: "blue",
                        fillColor: "red",
                        fillOpacity: 0.3
                    };
                } else {
                    return {
                        color: "blue",
                        fillColor: "yellow",
                        fillOpacity: 0.3
                    };
                }
            }
        }).addTo(nycMap);
