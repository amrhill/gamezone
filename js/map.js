var restaurants =   L.layerGroup();
var services =      L.layerGroup();
var boutiques =     L.layerGroup();
var pointsphotos =  L.layerGroup();
var parcs =         L.layerGroup();

var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 1
});

var overlays = {
	"Les restaurants":      restaurants,
	"Les services":         services,
	"Les boutiques":        boutiques,
    "Les points photos":    pointsphotos,
    "Les parcs":            parcs
};

var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('./img/map/00.jpg', bounds).addTo(map);
map.fitBounds(bounds);

var restau1     = L.latLng([512,309]);
var restau2     = L.latLng([448,473]);
var restau3     = L.latLng([551,743]);
var restau4     = L.latLng([837,613]);
var restau5     = L.latLng([752,787]);

var service1    = L.latLng([594,445]);
var service2    = L.latLng([695,424]);
var service3    = L.latLng([498,513]);
var service4    = L.latLng([518,702]);
var service5    = L.latLng([664,794]);

var boutique1   = L.latLng([377,359]);
var boutique2   = L.latLng([537,549]);
var boutique3   = L.latLng([689,673]);
var boutique4   = L.latLng([806,671]);
var boutique5   = L.latLng([608,859]);

var pp1         = L.latLng([516,408]);
var pp2         = L.latLng([692,527]);
var pp3         = L.latLng([740,627]);
var pp4         = L.latLng([638,727]);
var pp5         = L.latLng([710,865]);

var fighter         = L.latLng([483,323]);
var gameCenter      = L.latLng([566,281]);
var awsome          = L.latLng([615,362]);
var championsLS     = L.latLng([767,495]);
var kart            = L.latLng([429,570]);
var superFighter    = L.latLng([821,748]);
var contagion       = L.latLng([821,857]);
var heroesTeam      = L.latLng([690,881]);
var championsL      = L.latLng([477,855]);

L.marker(restau1).addTo(restaurants),
L.marker(restau2).addTo(restaurants),
L.marker(restau3).addTo(restaurants),
L.marker(restau4).addTo(restaurants),
L.marker(restau5).addTo(restaurants);

L.marker(service1).addTo(services);
L.marker(service2).addTo(services);
L.marker(service3).addTo(services);
L.marker(service4).addTo(services);
L.marker(service5).addTo(services);

L.marker(boutique1).addTo(boutiques);
L.marker(boutique2).addTo(boutiques);
L.marker(boutique3).addTo(boutiques);
L.marker(boutique4).addTo(boutiques);
L.marker(boutique5).addTo(boutiques);

L.marker(pp1).addTo(pointsphotos);
L.marker(pp2).addTo(pointsphotos);
L.marker(pp3).addTo(pointsphotos);
L.marker(pp4).addTo(pointsphotos);
L.marker(pp5).addTo(pointsphotos);

L.marker(fighter)       .bindPopup('fighter'        ).addTo(parcs),
L.marker(gameCenter)    .bindPopup('gameCenter'     ).addTo(parcs),
L.marker(awsome)        .bindPopup('awsome'         ).addTo(parcs),
L.marker(championsLS)   .bindPopup('championsLS'    ).addTo(parcs),
L.marker(kart)          .bindPopup('kart'           ).addTo(parcs);
L.marker(superFighter)  .bindPopup('superFighter'   ).addTo(parcs);
L.marker(contagion)     .bindPopup('contagion'      ).addTo(parcs);
L.marker(heroesTeam)    .bindPopup('heroesTeam'     ).addTo(parcs);
L.marker(championsL)    .bindPopup('championsL'     ).addTo(parcs);

L.control.layers(null, overlays).addTo(map);
map.setView( [500, 500]);



















// map.setView(latlng,-1);
// var blueIcon = L.icon({
//     iconUrl: './img/map/icon-bleu.png',
//     iconSize: [19.2,27.9]
// });

// var violetteIcon = L.icon({
//     iconUrl: './img/map/icon-violette.png',
//     iconSize: [19.2,27.9]
// });

// var roseIcon = L.icon({
//     iconUrl: './img/map/icon-rose.png',
//     iconSize: [19.2,27.9]
// });

// var jauneIcon = L.icon({
//     iconUrl: './img/map/icon-jaune.png',
//     iconSize: [19.2,27.9]
// });