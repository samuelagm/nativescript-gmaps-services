import * as observable from 'data/observable';
import * as pages from 'ui/page';
//import {HelloWorldModel} from './main-view-model';
import {DirectionsApi} from  "nativescript-gmaps-directions"

import mapsModule = require("nativescript-google-maps-sdk");
import {MapView} from "nativescript-google-maps-sdk";
import {Polyline} from "nativescript-google-maps-sdk";
import {Position} from  "nativescript-google-maps-sdk";

// Event handler for Page "loaded" event attached in main-page.xml
declare var com;
export function pageLoaded(args:observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    //page.bindingContext = new HelloWorldModel();
    //DirectionsApi.init("AIzaSyAxi7bJ_LOnkbLIC2jFtMM7V0aSrY0El6A");
    //console.dir(DirectionsApi.context);

    //DirectionsApi.getDirections("Chicago,IL", "Los+Angeles,CA");


}

function getPostions():Polyline {
    let context = new com.google.maps.GeoApiContext();
    context.setApiKey("AIzaSyAxi7bJ_LOnkbLIC2jFtMM7V0aSrY0El6A");
    var request = com.google.maps.DirectionsApi.getDirections(context, "8, DCS Street, Off Remi Olowude Street, Lekki, Lagos", "2B, Agadez, Wuse,Abuja");
    var result = request.await();
    let pathArray:Array<number> = result.routes[0].overviewPolyline.decodePath();
    let path:Polyline = new mapsModule.Polyline();
    console.dir(pathArray);
    let len = pathArray.size();
    for (let i = 0; i < len; i++) {
        let position:Position = mapsModule.Position.positionFromLatLng(pathArray.get(i).lat, pathArray.get(i).lng);
        path.addPoint(position);
    }
    return path;

}


export function onMapReady(args) {
    var mapView = <MapView>args.object;

    console.log("Setting a marker...");
    var marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(-33.86, 151.20);
    marker.title = "Sydney";
    marker.snippet = "Australia";
    marker.userData = {index: 1};
    mapView.addMarker(marker);
    mapView.addPolyline(getPostions());
}

export function onMarkerSelect(args) {
    console.log("Clicked on " + args.marker.title);
}


export function onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera));
}
