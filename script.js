var map = L.map('mapid').setView([38.65621, -98.79404], 11);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "Restaurant": "Waterman",
        "Review": "5 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27328491210938,
          38.649053322140226
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Vandy",
        "Review": "4 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.25800704956053,
          38.62143058055104
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Enright",
        "Review": "3.5 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.23500442504881,
          38.642751983402675
        ]
      }
    }
  ]
};

var feat = L.geoJSON(geojsonFeature).addTo(map);

feat.bindPopup("<b>Hello world! I'm marker 1</b><br>I am a popup.").openPopup();

var myLines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#4bd1ec",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "Name": "Mississippi"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -91.40625,
            40.37793612222415
          ],
          [
            -91.44229888916016,
            40.36564266334165
          ],
          [
            -91.48109436035156,
            40.299952398627596
          ],
          [
            -91.49654388427734,
            40.221354266755185
          ],
          [
            -91.49654388427734,
            40.18464389441142
          ],
          [
            -91.51199340820312,
            40.113789191575236
          ],
          [
            -91.42822265625,
            39.940277770390324
          ],
          [
            -91.42822265625,
            39.91394967016644
          ],
          [
            -91.44058227539062,
            39.87812720644829
          ],
          [
            -91.4117431640625,
            39.83490462943255
          ],
          [
            -91.36917114257811,
            39.805371130943854
          ],
          [
            -91.36505126953125,
            39.78637860850151
          ],
          [
            -91.37466430664062,
            39.73676229957947
          ],
          [
            -91.31011962890625,
            39.679712203159745
          ],
          [
            -91.13021850585938,
            39.544293973019904
          ],
          [
            -91.09451293945312,
            39.54111693181781
          ],
          [
            -91.0711669921875,
            39.51781418588603
          ],
          [
            -91.06155395507812,
            39.47118523471246
          ],
          [
            -91.03408813476561,
            39.449979918847724
          ],
          [
            -90.82672119140625,
            39.33642177141801
          ],
          [
            -90.7470703125,
            39.26628442213066
          ],
          [
            -90.72784423828125,
            39.223742741391305
          ],
          [
            -90.71273803710938,
            39.16520580694288
          ],
          [
            -90.66879272460938,
            39.101291727840604
          ],
          [
            -90.703125,
            39.059716474034666
          ],
          [
            -90.69625854492188,
            39.011714588834074
          ],
          [
            -90.6646728515625,
            38.91240739487225
          ],
          [
            -90.62484741210938,
            38.887826086271176
          ],
          [
            -90.582275390625,
            38.87072102699576
          ],
          [
            -90.54107666015625,
            38.87179021382536
          ],
          [
            -90.51910400390624,
            38.89530825492018
          ],
          [
            -90.47103881835938,
            38.94125285438687
          ],
          [
            -90.44906616210936,
            38.96474788913435
          ],
          [
            -90.36392211914062,
            38.94445718138944
          ],
          [
            -90.29251098632812,
            38.929502416386605
          ],
          [
            -90.25405883789061,
            38.9177500315307
          ],
          [
            -90.19363403320312,
            38.88141217155417
          ],
          [
            -90.14007568359375,
            38.85682013474361
          ],
          [
            -90.11123657226562,
            38.839707613545144
          ],
          [
            -90.11947631835938,
            38.810820900566135
          ],
          [
            -90.13046264648438,
            38.79476766282312
          ],
          [
            -90.15380859375,
            38.78192246873938
          ],
          [
            -90.1812744140625,
            38.758366935612784
          ],
          [
            -90.19912719726561,
            38.7283759182398
          ],
          [
            -90.2032470703125,
            38.70587438959806
          ],
          [
            -90.18814086914062,
            38.6833657775237
          ],
          [
            -90.17715454101562,
            38.64369051578083
          ],
          [
            -90.18264770507812,
            38.61257832462118
          ],
          [
            -90.20462036132812,
            38.59540719940386
          ],
          [
            -90.22933959960938,
            38.56212645363985
          ],
          [
            -90.26092529296875,
            38.53527591154413
          ],
          [
            -90.27328491210938,
            38.49014443285755
          ],
          [
            -90.28427124023438,
            38.438530965643004
          ],
          [
            -90.31036376953125,
            38.41378642476067
          ],
          [
            -90.36392211914062,
            38.36750215395045
          ],
          [
            -90.37078857421874,
            38.315801006824984
          ],
          [
            -90.37628173828125,
            38.26298470036051
          ],
          [
            -90.3515625,
            38.211209018340156
          ],
          [
            -90.32958984375,
            38.18854556604565
          ],
          [
            -90.2801513671875,
            38.17019379541814
          ],
          [
            -90.25680541992188,
            38.124834313825076
          ],
          [
            -90.21697998046875,
            38.095659755295614
          ],
          [
            -90.17166137695312,
            38.06971703320484
          ],
          [
            -90.1483154296875,
            38.06863588670429
          ],
          [
            -90.12908935546874,
            38.05890484918669
          ],
          [
            -90.11810302734375,
            38.028622234587964
          ],
          [
            -90.04257202148438,
            38.00157360367438
          ],
          [
            -89.9945068359375,
            37.96260604160774
          ],
          [
            -89.945068359375,
            37.966936792535144
          ],
          [
            -89.91897583007811,
            37.96801944035648
          ],
          [
            -89.87228393554686,
            37.92578434712101
          ],
          [
            -89.82696533203125,
            37.89544674639969
          ],
          [
            -89.74594116210938,
            37.85208561975298
          ],
          [
            -89.71435546875,
            37.820632846207864
          ],
          [
            -89.66903686523436,
            37.79676317682161
          ],
          [
            -89.66079711914062,
            37.7761422535397
          ],
          [
            -89.66217041015625,
            37.75442980295571
          ],
          [
            -89.62921142578125,
            37.73705525336632
          ],
          [
            -89.58251953125,
            37.71315858834301
          ],
          [
            -89.52346801757812,
            37.6968609874419
          ],
          [
            -89.51522827148438,
            37.68273350145476
          ],
          [
            -89.50973510742188,
            37.59682400108367
          ],
          [
            -89.527587890625,
            37.56635122499224
          ],
          [
            -89.49874877929688,
            37.514083168101116
          ],
          [
            -89.42596435546875,
            37.400710068740565
          ],
          [
            -89.43145751953125,
            37.36360851770406
          ],
          [
            -89.45068359374999,
            37.34177550214858
          ],
          [
            -89.48089599609375,
            37.33413244661209
          ],
          [
            -89.52072143554688,
            37.31775185163688
          ],
          [
            -89.52896118164061,
            37.286072577028555
          ],
          [
            -89.51248168945312,
            37.2587521486561
          ],
          [
            -89.47540283203125,
            37.25547303105431
          ],
          [
            -89.44244384765625,
            37.231421807404715
          ],
          [
            -89.45480346679688,
            37.209550398893846
          ],
          [
            -89.43695068359375,
            37.16797725379289
          ],
          [
            -89.39300537109375,
            37.106669860700045
          ],
          [
            -89.37515258789062,
            37.077093191754436
          ],
          [
            -89.384765625,
            37.05736900011469
          ],
          [
            -89.3463134765625,
            37.020098201368114
          ],
          [
            -89.28863525390625,
            36.99048777141413
          ],
          [
            -89.25979614257812,
            37.004746084814784
          ],
          [
            -89.26391601562499,
            37.02886944696474
          ],
          [
            -89.28863525390625,
            37.05079312980657
          ],
          [
            -89.30374145507812,
            37.08257122355467
          ],
          [
            -89.29275512695312,
            37.09462150015557
          ],
          [
            -89.25704956054688,
            37.07161476414343
          ],
          [
            -89.2144775390625,
            37.02448395075965
          ],
          [
            -89.17190551757812,
            36.98500309285596
          ],
          [
            -89.12796020507812,
            36.98171209590483
          ]
        ]
      }
    }
  ]
}


var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

var states = [{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "ICAO": "KSTL"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.41679382324219,
              38.761914146788826
            ],
            [
              -90.4115581512451,
              38.75937088119337
            ],
            [
              -90.4119873046875,
              38.75850079583952
            ],
            [
              -90.41104316711426,
              38.75783149219509
            ],
            [
              -90.40881156921387,
              38.7569613880735
            ],
            [
              -90.406494140625,
              38.756894456547826
            ],
            [
              -90.40494918823242,
              38.755221148007024
            ],
            [
              -90.38589477539062,
              38.74497964505743
            ],
            [
              -90.37911415100098,
              38.743239112884744
            ],
            [
              -90.37696838378906,
              38.74350688982668
            ],
            [
              -90.37405014038086,
              38.745247415472136
            ],
            [
              -90.35396575927734,
              38.73560704791617
            ],
            [
              -90.35284996032715,
              38.73587485347638
            ],
            [
              -90.34915924072266,
              38.73433495779266
            ],
            [
              -90.3471851348877,
              38.73426800505333
            ],
            [
              -90.34375190734863,
              38.73460276812244
            ],
            [
              -90.34117698669434,
              38.73433495779266
            ],
            [
              -90.33834457397461,
              38.733799334120796
            ],
            [
              -90.33594131469725,
              38.737548615478
            ],
            [
              -90.33688545227051,
              38.73888759683804
            ],
            [
              -90.34512519836426,
              38.74277050082011
            ],
            [
              -90.34624099731445,
              38.7486614002349
            ],
            [
              -90.34907341003418,
              38.75033486255203
            ],
            [
              -90.34950256347656,
              38.757496838019065
            ],
            [
              -90.37413597106934,
              38.75903623423573
            ],
            [
              -90.37714004516602,
              38.75642593411076
            ],
            [
              -90.38280487060547,
              38.7570952509365
            ],
            [
              -90.38769721984863,
              38.75910316375279
            ],
            [
              -90.39087295532225,
              38.759705526581776
            ],
            [
              -90.3940486907959,
              38.75783149219509
            ],
            [
              -90.39464950561523,
              38.75669366159426
            ],
            [
              -90.3998851776123,
              38.759705526581776
            ],
            [
              -90.40306091308594,
              38.76117794764828
            ],
            [
              -90.406494140625,
              38.76311881990844
            ],
            [
              -90.41104316711426,
              38.76619733659274
            ],
            [
              -90.41370391845703,
              38.76505963937829
            ],
            [
              -90.41696548461914,
              38.763988848957624
            ],
            [
              -90.41799545288086,
              38.76331959678442
            ],
            [
              -90.41782379150389,
              38.76238263319644
            ],
            [
              -90.41679382324219,
              38.761914146788826
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ICAO": "KCPS"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.17067432403564,
              38.57397106696357
            ],
            [
              -90.17084598541258,
              38.57296451851769
            ],
            [
              -90.17080307006836,
              38.57179019417367
            ],
            [
              -90.16878604888916,
              38.57078361517274
            ],
            [
              -90.16758441925047,
              38.571152695777165
            ],
            [
              -90.1644515991211,
              38.57276320713625
            ],
            [
              -90.14398097991943,
              38.56259624885668
            ],
            [
              -90.1408052444458,
              38.5667907128895
            ],
            [
              -90.15904426574706,
              38.5764538261671
            ],
            [
              -90.16003131866454,
              38.57739322619211
            ],
            [
              -90.16247749328613,
              38.57886940141027
            ],
            [
              -90.17067432403564,
              38.57397106696357
            ]
          ]
        ]
      }
    }
  ]
}];

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties["ICAO"]) {
            case 'KSTL': return {color: "#990000"};
            case 'KCPS':   return {color: "#003DA5"};
        }
    }
}).addTo(map);
