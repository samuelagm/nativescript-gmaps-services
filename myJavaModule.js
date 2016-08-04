"use strict";
require('source-map-support').install();
var _java = require('java');
var _ = require('lodash');
var BluePromise = require('bluebird');
var path = require('path');
_java.asyncOptions = {
    syncSuffix: '',
    asyncSuffix: 'A',
    promiseSuffix: 'P',
    promisify: BluePromise.promisify
};
function beforeJvm() {
    var moduleJars = ['build/libs/google-maps-services-java-0.1.16-SNAPSHOT.jar', 'build/libs/gson-2.3.1.jar', 'build/libs/joda-time-2.4.jar'];
    moduleJars.forEach(function (jarPath) {
        var fullJarPath = path.join(__dirname, '..', jarPath);
        _java.classpath.push(fullJarPath);
    });
    return BluePromise.resolve();
}
_java.registerClientP(beforeJvm);
var Java;
(function (Java) {
    'use strict';
    function getJava() {
        return _java;
    }
    Java.getJava = getJava;
    function ensureJvm() {
        return _java.ensureJvm();
    }
    Java.ensureJvm = ensureJvm;
    function fullyQualifiedName(className) {
        var shortToLongMap = {
            'FieldNamingPolicy': 'com.google.gson.FieldNamingPolicy',
            'DirectionsApi': 'com.google.maps.DirectionsApi',
            'DirectionsApi$RouteRestriction': 'com.google.maps.DirectionsApi$RouteRestriction',
            'DirectionsApiRequest': 'com.google.maps.DirectionsApiRequest',
            'GeoApiContext': 'com.google.maps.GeoApiContext',
            'GeoApiContext$RequestHandler': 'com.google.maps.GeoApiContext$RequestHandler',
            'AddressComponent': 'com.google.maps.model.AddressComponent',
            'AddressComponentType': 'com.google.maps.model.AddressComponentType',
            'AddressType': 'com.google.maps.model.AddressType',
            'AutocompletePrediction': 'com.google.maps.model.AutocompletePrediction',
            'AutocompletePrediction$MatchedSubstring': 'com.google.maps.model.AutocompletePrediction$MatchedSubstring',
            'AutocompletePrediction$Term': 'com.google.maps.model.AutocompletePrediction$Term',
            'Bounds': 'com.google.maps.model.Bounds',
            'ComponentFilter': 'com.google.maps.model.ComponentFilter',
            'DirectionsLeg': 'com.google.maps.model.DirectionsLeg',
            'DirectionsResult': 'com.google.maps.model.DirectionsResult',
            'DirectionsRoute': 'com.google.maps.model.DirectionsRoute',
            'DirectionsStep': 'com.google.maps.model.DirectionsStep',
            'Distance': 'com.google.maps.model.Distance',
            'DistanceMatrix': 'com.google.maps.model.DistanceMatrix',
            'DistanceMatrixElement': 'com.google.maps.model.DistanceMatrixElement',
            'DistanceMatrixElementStatus': 'com.google.maps.model.DistanceMatrixElementStatus',
            'DistanceMatrixRow': 'com.google.maps.model.DistanceMatrixRow',
            'Duration': 'com.google.maps.model.Duration',
            'ElevationResult': 'com.google.maps.model.ElevationResult',
            'EncodedPolyline': 'com.google.maps.model.EncodedPolyline',
            'Fare': 'com.google.maps.model.Fare',
            'GeocodedWaypoint': 'com.google.maps.model.GeocodedWaypoint',
            'GeocodedWaypointStatus': 'com.google.maps.model.GeocodedWaypointStatus',
            'GeocodingResult': 'com.google.maps.model.GeocodingResult',
            'Geometry': 'com.google.maps.model.Geometry',
            'LatLng': 'com.google.maps.model.LatLng',
            'LocationType': 'com.google.maps.model.LocationType',
            'OpeningHours': 'com.google.maps.model.OpeningHours',
            'OpeningHours$Period': 'com.google.maps.model.OpeningHours$Period',
            'OpeningHours$Period$OpenClose': 'com.google.maps.model.OpeningHours$Period$OpenClose',
            'OpeningHours$Period$OpenClose$DayOfWeek': 'com.google.maps.model.OpeningHours$Period$OpenClose$DayOfWeek',
            'Photo': 'com.google.maps.model.Photo',
            'PhotoResult': 'com.google.maps.model.PhotoResult',
            'PlaceAutocompleteType': 'com.google.maps.model.PlaceAutocompleteType',
            'PlaceDetails': 'com.google.maps.model.PlaceDetails',
            'PlaceDetails$AlternatePlaceIds': 'com.google.maps.model.PlaceDetails$AlternatePlaceIds',
            'PlaceDetails$Review': 'com.google.maps.model.PlaceDetails$Review',
            'PlaceDetails$Review$AspectRating': 'com.google.maps.model.PlaceDetails$Review$AspectRating',
            'PlaceDetails$Review$AspectRating$RatingType': 'com.google.maps.model.PlaceDetails$Review$AspectRating$RatingType',
            'PlaceIdScope': 'com.google.maps.model.PlaceIdScope',
            'PlacesSearchResponse': 'com.google.maps.model.PlacesSearchResponse',
            'PlacesSearchResult': 'com.google.maps.model.PlacesSearchResult',
            'PlaceType': 'com.google.maps.model.PlaceType',
            'PriceLevel': 'com.google.maps.model.PriceLevel',
            'RankBy': 'com.google.maps.model.RankBy',
            'SnappedPoint': 'com.google.maps.model.SnappedPoint',
            'SnappedSpeedLimitResponse': 'com.google.maps.model.SnappedSpeedLimitResponse',
            'SpeedLimit': 'com.google.maps.model.SpeedLimit',
            'StopDetails': 'com.google.maps.model.StopDetails',
            'TrafficModel': 'com.google.maps.model.TrafficModel',
            'TransitAgency': 'com.google.maps.model.TransitAgency',
            'TransitDetails': 'com.google.maps.model.TransitDetails',
            'TransitLine': 'com.google.maps.model.TransitLine',
            'TransitMode': 'com.google.maps.model.TransitMode',
            'TransitRoutingPreference': 'com.google.maps.model.TransitRoutingPreference',
            'TravelMode': 'com.google.maps.model.TravelMode',
            'Unit': 'com.google.maps.model.Unit',
            'Vehicle': 'com.google.maps.model.Vehicle',
            'VehicleType': 'com.google.maps.model.VehicleType',
            'PendingResult': 'com.google.maps.PendingResult',
            'PendingResult$Callback': 'com.google.maps.PendingResult$Callback',
            'Object': 'java.lang.Object',
            'String': 'java.lang.String'
        };
        return shortToLongMap[className];
    }
    Java.fullyQualifiedName = fullyQualifiedName;
    function importClass(className) {
        var fullName = fullyQualifiedName(className) || className;
        return _java.import(fullName);
    }
    Java.importClass = importClass;
    function asInstanceOf(obj, className) {
        var fullName = fullyQualifiedName(className) || className;
        if (_java.instanceOf(obj, fullName)) {
            return obj;
        }
        else {
            throw new Error('asInstanceOf fails, obj is not a ' + fullName);
        }
    }
    Java.asInstanceOf = asInstanceOf;
    function instanceOf(javaObject, className) {
        var fullName = fullyQualifiedName(className) || className;
        return smellsLikeJavaObject(javaObject) && _java.instanceOf(javaObject, fullName);
    }
    Java.instanceOf = instanceOf;
    function newInstanceA(className) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fullName = fullyQualifiedName(className) || className;
        args.unshift(fullName);
        return _java.newInstance.apply(_java, args);
    }
    Java.newInstanceA = newInstanceA;
    function newInstance(className) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fullName = fullyQualifiedName(className) || className;
        args.unshift(fullName);
        return _java.newInstanceSync.apply(_java, args);
    }
    Java.newInstance = newInstance;
    function newInstanceP(className) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fullName = fullyQualifiedName(className) || className;
        args.unshift(fullName);
        return _java.newInstanceP.apply(_java, args);
    }
    Java.newInstanceP = newInstanceP;
    function newArray(className, arg) {
        var fullName = fullyQualifiedName(className) || className;
        return _java.newArray(fullName, arg);
    }
    Java.newArray = newArray;
    function smellsLikeJavaObject(e) {
        return _.isObject(e) && !_.isArray(e);
    }
    function isJavaObject(e) {
        return smellsLikeJavaObject(e) && _java.instanceOf(e, 'java.lang.Object');
    }
    Java.isJavaObject = isJavaObject;
})(Java = exports.Java || (exports.Java = {}));
