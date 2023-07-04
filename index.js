let map, popup, Popup;

const mapData = {
  northcoteData: {
    northcoteCoordinates: { lat: -36.79864, lng: 174.74447 },
    contentString: "<h3 style='color:#49b758'>Northcote</h3><p>For questions about civil works, contact us on:</p><h4>0508 74748244 (ext 1)</h4><h4>Northcote@piritahi.nz</h4></br> Northcote Information Cube, Northcote town centre.</br>Open hours: Wednesday - Saturday 10am - 4pm",
  },
  roskillSouthData: {
    roskillSouthCoordinates: { lat: -36.91524, lng: 174.73542 },
    contentString: "<h3 style='color:#49b758'>Roskill South</h3><p>For questions about civil works, contact us on:</p><h4>0508 74748244 (ext 2)</h4><h4>roskillsouth@leadalliance.nz</h4></br>Roskill South Information Centre at 142 May Road (corner of May Road and Glynn Street).</br>Open hours: Wednesday to Saturday, 10am to 4pm",
  },
  owairakaData: {
    owairakaCoordinates: { lat: -36.89212, lng: 174.72037 },
    contentString: "<h3 style='color:#49b758'>Ōwairaka</h3><p>For questions about civil works, contact us on:</p><h4>0508 74748244 (ext 3)</h4><h4>owairaka@leadalliance.nz</h4></br> Owairaka Information Cube at 93 Richardson Road.</br>Open hours: Thursday and Saturday 10.00 am – 4.00 pm",
  },
  waikowhaiData: {
    waikowhaiCoordinates: { lat: -36.92616, lng: 174.74048 },
    contentString: "<h3 style='color:#49b758'>Waikōwhai</h3><p>For questions about civil works, contact us on:</p><h4>0508 74748244 (ext 2)</h4><h4>waikowhai@leadalliance.nz</h4></br><Roskill South Information Centre at 142 May Road (corner of May Road and Glynn Street).</br>Open hours: Wednesday to Saturday, 10am to 4pm",
  },
  orangaData: {
    orangaCoordinates: { lat: -36.91142, lng: 174.80049 },
    contentString: "<h3 style='color:#49b758'>Oranga</h3><p>For questions about civil works, contact us on:</p><h4>0508 74748244 (ext 4)</h4><h4>oranga@leadalliance.nz</h4></br>Oranga Information Centre at 34 Oranga Avenue.</br>Open hours: Thursday to Saturday 10am to 4pm",
  },
  catalinaBayData: {
    catalinaBayCoordinates: { lat: -36.78879, lng: 174.67151 },
    contentString: "<h3 style='color:#49b758'>Catalina Bay</h3><p>For questions about civil works, contact us on:</p><h4>0508 74748244 (ext 6)</h4><h4>hobsonville@leadalliance.nz</h4>",
  },
  mangereWestData: {
    mangereWestCoordinates: { lat: -36.96161, lng: 174.79355 },
    contentString: "<h3 style='color:#49b758'>Māngere West</h3><p>For questions about civil works, contact us on:</p><h4>0508 74748244 (ext 5)</h4><h4>mangerewest@leadalliance.nz</h4></br> Māngere Information Centre, 12 Waddon Place.</br>Open hours: Wednesday to Saturday 10am - 4pm",
  },
  aorereData: {
    aorereCoordinates: { lat: -36.97418, lng: 174.82487 },
    contentString: "<h3 style='color:#49b758'>Aorere</h3><p>For questions about civil works, contact us on:</p><h4>0508 74748244 (ext 5)</h4><h4>aorere@leadalliance.nz</h4></br> Māngere Information Centre, 12 Waddon Place.</br>Open hours: Wednesday to Saturday 10am - 4pm",
  },
};

function initialize() {
  var MY_MAPTYPE_ID = "custom_style";
  //var MY_MAPTYPE_ID = google.maps.MapTypeId.ROADMAP;
  var featureOpts = [
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#444444",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#c7eef4",
        },
        {
          visibility: "simplified",
        },
      ],
    },
  ];

  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(0, -180),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.TERRAIN, MY_MAPTYPE_ID],
    },
    mapTypeId: MY_MAPTYPE_ID,
    zoom: 11.8,
    center: { lat: -36.90, lng: 174.75 },
    disableDefaultUI: true,
  };

  var map = new google.maps.Map(
    document.getElementById("map-canvas"),
    mapOptions
  );

  var styledMapOptions = {
    name: "Custom Style",
  };

  var flightPlanCoordinates = [];
  var flightPlanCoordinates1 = [];

  var flightArray = [];
  flightArray.push(flightPlanCoordinates);
  flightArray.push(flightPlanCoordinates1);

  var colorArray = [];
  colorArray.push("#FF0000");
  colorArray.push("#00FF00");

  // Code for displaying the polylines in the browser
  for (var i = 0; i < flightArray.length; i++) {
    var flightPath = new google.maps.Polyline({
      path: flightArray[i],
      geodesic: true,
      strokeColor: colorArray[i],
      strokeOpacity: 1.0,
      strokeWeight: 1,
    });
    var customMapType = new google.maps.StyledMapType(
      featureOpts,
      styledMapOptions
    );
    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    flightPath.setMap(map);
  }
  var citiesJSON = {
    geonames: [
      {
        lat: -36.91524,
        lng: 174.73542,
        name: "Roskill South",
      },
      {
        lat: -36.79864,
        lng: 174.74447,
        name: "Northcote",
      },
      {
        lat: -36.89212,
        lng: 174.72037,
        name: "&#332wairaka",
      },
      {
        lat: -36.92616,
        lng: 174.74048,
        name: "Waikōwhai",
      },
      {
        lat: -36.91142,
        lng: 174.80049,
        name: "Oranga",
      },
      {
        lat: -36.78879,
        lng: 174.67151,
        name: "Catalina Bay",
      },
      {
        lat: -36.96161,
        lng: 174.79355,
        name: "Māngere West",
      },
      {
        lat: -36.97418,
        lng: 174.82487,
        name: "Aorere",
      },
    ],
  };
  var mapLabels = [];
  for (var i = 0; i < citiesJSON.geonames.length; i++) {
    var myOptions = {
      content: citiesJSON.geonames[i].name,
      boxStyle: {
        border: "none",
        textAlign: "center",
        fontSize: "12pt",
        fontFamily: "fieldwork-hum, arial",
        fontWeight: "600",
        width: "100px",
      },
      disableAutoPan: true,
      pixelOffset: new google.maps.Size(-50, 0),
      position: new google.maps.LatLng(
        citiesJSON.geonames[i].lat,
        citiesJSON.geonames[i].lng
      ),
      closeBoxURL: "",
      isHidden: false,
      pane: "mapPane",
      enableEventPropagation: true,
    };

    var ibLabel = new InfoBox(myOptions);
    ibLabel.open(map);
    mapLabels.push(ibLabel);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(
        citiesJSON.geonames[i].lat,
        citiesJSON.geonames[i].lng
      ),
      map: map,
      animation: google.maps.Animation.DROP,

    });
  }

  const northcoteWindow = new google.maps.InfoWindow({
    content: mapData.northcoteData.contentString,
    
  });
  const northcote = new google.maps.Marker({
    position: mapData.northcoteData.northcoteCoordinates,
    map,
    animation: google.maps.Animation.DROP,
  });
  northcote.addListener("click", () => {
    northcoteWindow.open({
      anchor: northcote,
      map,
      shouldFocus: false,
    });
    for (let i = 0; i < InfoWindows.length; i++) {
      if (InfoWindows[i] != northcoteWindow) {
        InfoWindows[i].close()
      }
    }
  });

  const roskillSouthWindow = new google.maps.InfoWindow({
    content: mapData.roskillSouthData.contentString,
    
  });
  const roskillSouth = new google.maps.Marker({
    position: mapData.roskillSouthData.roskillSouthCoordinates,
    map,
    animation: google.maps.Animation.DROP,
  });
  roskillSouth.addListener("click", () => {
    roskillSouthWindow.open({
      anchor: roskillSouth,
      map,
      shouldFocus: false,
    });
    for (let i = 0; i < InfoWindows.length; i++) {
      if (InfoWindows[i] != roskillSouthWindow) {
        InfoWindows[i].close()
      }
    }
  });

  const owairakaWindow = new google.maps.InfoWindow({
    content: mapData.owairakaData.contentString,
    
  });
  const owairaka = new google.maps.Marker({
    position: mapData.owairakaData.owairakaCoordinates,
    map,
    animation: google.maps.Animation.DROP,
  });
  owairaka.addListener("click", () => {
    owairakaWindow.open({
      anchor: owairaka,
      map,
      shouldFocus: false,
    });
    for (let i = 0; i < InfoWindows.length; i++) {
      if (InfoWindows[i] != owairakaWindow) {
        InfoWindows[i].close()
      }
    }
  });

  const waikowhaiWindow = new google.maps.InfoWindow({
    content: mapData.waikowhaiData.contentString,
    
  });
  const waikowhai = new google.maps.Marker({
    position: mapData.waikowhaiData.waikowhaiCoordinates,
    map,
    animation: google.maps.Animation.DROP,
  });
  waikowhai.addListener("click", () => {
    waikowhaiWindow.open({
      anchor: waikowhai,
      map,
      shouldFocus: false,
    });
    for (let i = 0; i < InfoWindows.length; i++) {
      if (InfoWindows[i] != waikowhaiWindow) {
        InfoWindows[i].close()
      }
    }
  });

  const orangaWindow = new google.maps.InfoWindow({
    content: mapData.orangaData.contentString,
  });
  const oranga = new google.maps.Marker({
    position: mapData.orangaData.orangaCoordinates,
    map,
    animation: google.maps.Animation.DROP,
  });
  oranga.addListener("click", () => {
    orangaWindow.open({
      anchor: oranga,
      map,
      shouldFocus: false,
    });
    for (let i = 0; i < InfoWindows.length; i++) {
      if (InfoWindows[i] != orangaWindow) {
        InfoWindows[i].close()
      }
    }
  });

  const catalinaBayWindow = new google.maps.InfoWindow({
    content: mapData.catalinaBayData.contentString,
    
  });
  const catalinaBay = new google.maps.Marker({
    position: mapData.catalinaBayData.catalinaBayCoordinates,
    map,
    animation: google.maps.Animation.DROP,
  });
  catalinaBay.addListener("click", () => {
    catalinaBayWindow.open({
      anchor: catalinaBay,
      map,
      shouldFocus: false,
    });
    for (let i = 0; i < InfoWindows.length; i++) {
      if (InfoWindows[i] != catalinaBayWindow) {
        InfoWindows[i].close()
      }
    }
  });

  const mangereWestWindow = new google.maps.InfoWindow({
    content: mapData.mangereWestData.contentString,
    
  });
  const mangereWest = new google.maps.Marker({
    position: mapData.mangereWestData.mangereWestCoordinates,
    map,
    animation: google.maps.Animation.DROP,
  });
  mangereWest.addListener("click", () => {
    mangereWestWindow.open({
      anchor: mangereWest,
      map,
      shouldFocus: false,
    });
    for (let i = 0; i < InfoWindows.length; i++) {
      if (InfoWindows[i] != mangereWestWindow) {
        InfoWindows[i].close()
      }
    }
  });

  const aorereWindow = new google.maps.InfoWindow({
    content: mapData.aorereData.contentString,
    
  });
  const aorere = new google.maps.Marker({
    position: mapData.aorereData.aorereCoordinates,
    map,
    animation: google.maps.Animation.DROP,
  });
  aorere.addListener("click", () => {
    aorereWindow.open({
      anchor: aorere,
      map,
      shouldFocus: false,
    });
    for (let i = 0; i < InfoWindows.length; i++) {
      if (InfoWindows[i] != aorereWindow) {
        InfoWindows[i].close()
      }
    }
  });

  const InfoWindows = [
    mangereWestWindow,
    aorereWindow,
    northcoteWindow,
    catalinaBayWindow,
    owairakaWindow,
    roskillSouthWindow,
    waikowhaiWindow,
    orangaWindow
  ]
  map.addListener("click", () => {
    InfoWindows.forEach(element => {
      element.close()
    });
  })
}


function initMap() {
  const map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 1,
    center: { lat: -33, lng: 151 },
    disableDefaultUI: true,
  });
}

google.maps.event.addDomListener(window, "load", initialize);


function makeRequest(a) {
  return new Promise((resolve, reject)=> {
    console.log(`making request to ${url}`)
  })
}