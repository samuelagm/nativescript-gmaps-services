/// <reference path="typings/globals/java/index.d.ts" />
/// <reference path="typings/modules/lodash/index.d.ts" />
import _java = require('java');
export declare module Java {
    type NodeJavaAPI = typeof _java;
    function getJava(): NodeJavaAPI;
    function ensureJvm(): Promise<void>;
    function fullyQualifiedName(className: string): string;
    function importClass(className: 'FieldNamingPolicy'): Java.com.google.gson.FieldNamingPolicy.Static;
    function importClass(className: 'DirectionsApi'): Java.com.google.maps.DirectionsApi.Static;
    function importClass(className: 'DirectionsApi$RouteRestriction'): Java.com.google.maps.DirectionsApi$RouteRestriction.Static;
    function importClass(className: 'DirectionsApiRequest'): Java.com.google.maps.DirectionsApiRequest.Static;
    function importClass(className: 'GeoApiContext'): Java.com.google.maps.GeoApiContext.Static;
    function importClass(className: 'GeoApiContext$RequestHandler'): Java.com.google.maps.GeoApiContext$RequestHandler.Static;
    function importClass(className: 'AddressComponent'): Java.com.google.maps.model.AddressComponent.Static;
    function importClass(className: 'AddressComponentType'): Java.com.google.maps.model.AddressComponentType.Static;
    function importClass(className: 'AddressType'): Java.com.google.maps.model.AddressType.Static;
    function importClass(className: 'AutocompletePrediction'): Java.com.google.maps.model.AutocompletePrediction.Static;
    function importClass(className: 'AutocompletePrediction$MatchedSubstring'): Java.com.google.maps.model.AutocompletePrediction$MatchedSubstring.Static;
    function importClass(className: 'AutocompletePrediction$Term'): Java.com.google.maps.model.AutocompletePrediction$Term.Static;
    function importClass(className: 'Bounds'): Java.com.google.maps.model.Bounds.Static;
    function importClass(className: 'ComponentFilter'): Java.com.google.maps.model.ComponentFilter.Static;
    function importClass(className: 'DirectionsLeg'): Java.com.google.maps.model.DirectionsLeg.Static;
    function importClass(className: 'DirectionsResult'): Java.com.google.maps.model.DirectionsResult.Static;
    function importClass(className: 'DirectionsRoute'): Java.com.google.maps.model.DirectionsRoute.Static;
    function importClass(className: 'DirectionsStep'): Java.com.google.maps.model.DirectionsStep.Static;
    function importClass(className: 'Distance'): Java.com.google.maps.model.Distance.Static;
    function importClass(className: 'DistanceMatrix'): Java.com.google.maps.model.DistanceMatrix.Static;
    function importClass(className: 'DistanceMatrixElement'): Java.com.google.maps.model.DistanceMatrixElement.Static;
    function importClass(className: 'DistanceMatrixElementStatus'): Java.com.google.maps.model.DistanceMatrixElementStatus.Static;
    function importClass(className: 'DistanceMatrixRow'): Java.com.google.maps.model.DistanceMatrixRow.Static;
    function importClass(className: 'Duration'): Java.com.google.maps.model.Duration.Static;
    function importClass(className: 'ElevationResult'): Java.com.google.maps.model.ElevationResult.Static;
    function importClass(className: 'EncodedPolyline'): Java.com.google.maps.model.EncodedPolyline.Static;
    function importClass(className: 'Fare'): Java.com.google.maps.model.Fare.Static;
    function importClass(className: 'GeocodedWaypoint'): Java.com.google.maps.model.GeocodedWaypoint.Static;
    function importClass(className: 'GeocodedWaypointStatus'): Java.com.google.maps.model.GeocodedWaypointStatus.Static;
    function importClass(className: 'GeocodingResult'): Java.com.google.maps.model.GeocodingResult.Static;
    function importClass(className: 'Geometry'): Java.com.google.maps.model.Geometry.Static;
    function importClass(className: 'LatLng'): Java.com.google.maps.model.LatLng.Static;
    function importClass(className: 'LocationType'): Java.com.google.maps.model.LocationType.Static;
    function importClass(className: 'OpeningHours'): Java.com.google.maps.model.OpeningHours.Static;
    function importClass(className: 'OpeningHours$Period'): Java.com.google.maps.model.OpeningHours$Period.Static;
    function importClass(className: 'OpeningHours$Period$OpenClose'): Java.com.google.maps.model.OpeningHours$Period$OpenClose.Static;
    function importClass(className: 'OpeningHours$Period$OpenClose$DayOfWeek'): Java.com.google.maps.model.OpeningHours$Period$OpenClose$DayOfWeek.Static;
    function importClass(className: 'Photo'): Java.com.google.maps.model.Photo.Static;
    function importClass(className: 'PhotoResult'): Java.com.google.maps.model.PhotoResult.Static;
    function importClass(className: 'PlaceAutocompleteType'): Java.com.google.maps.model.PlaceAutocompleteType.Static;
    function importClass(className: 'PlaceDetails'): Java.com.google.maps.model.PlaceDetails.Static;
    function importClass(className: 'PlaceDetails$AlternatePlaceIds'): Java.com.google.maps.model.PlaceDetails$AlternatePlaceIds.Static;
    function importClass(className: 'PlaceDetails$Review'): Java.com.google.maps.model.PlaceDetails$Review.Static;
    function importClass(className: 'PlaceDetails$Review$AspectRating'): Java.com.google.maps.model.PlaceDetails$Review$AspectRating.Static;
    function importClass(className: 'PlaceDetails$Review$AspectRating$RatingType'): Java.com.google.maps.model.PlaceDetails$Review$AspectRating$RatingType.Static;
    function importClass(className: 'PlaceIdScope'): Java.com.google.maps.model.PlaceIdScope.Static;
    function importClass(className: 'PlacesSearchResponse'): Java.com.google.maps.model.PlacesSearchResponse.Static;
    function importClass(className: 'PlacesSearchResult'): Java.com.google.maps.model.PlacesSearchResult.Static;
    function importClass(className: 'PlaceType'): Java.com.google.maps.model.PlaceType.Static;
    function importClass(className: 'PriceLevel'): Java.com.google.maps.model.PriceLevel.Static;
    function importClass(className: 'RankBy'): Java.com.google.maps.model.RankBy.Static;
    function importClass(className: 'SnappedPoint'): Java.com.google.maps.model.SnappedPoint.Static;
    function importClass(className: 'SnappedSpeedLimitResponse'): Java.com.google.maps.model.SnappedSpeedLimitResponse.Static;
    function importClass(className: 'SpeedLimit'): Java.com.google.maps.model.SpeedLimit.Static;
    function importClass(className: 'StopDetails'): Java.com.google.maps.model.StopDetails.Static;
    function importClass(className: 'TrafficModel'): Java.com.google.maps.model.TrafficModel.Static;
    function importClass(className: 'TransitAgency'): Java.com.google.maps.model.TransitAgency.Static;
    function importClass(className: 'TransitDetails'): Java.com.google.maps.model.TransitDetails.Static;
    function importClass(className: 'TransitLine'): Java.com.google.maps.model.TransitLine.Static;
    function importClass(className: 'TransitMode'): Java.com.google.maps.model.TransitMode.Static;
    function importClass(className: 'TransitRoutingPreference'): Java.com.google.maps.model.TransitRoutingPreference.Static;
    function importClass(className: 'TravelMode'): Java.com.google.maps.model.TravelMode.Static;
    function importClass(className: 'Unit'): Java.com.google.maps.model.Unit.Static;
    function importClass(className: 'Vehicle'): Java.com.google.maps.model.Vehicle.Static;
    function importClass(className: 'VehicleType'): Java.com.google.maps.model.VehicleType.Static;
    function importClass(className: 'PendingResult'): Java.com.google.maps.PendingResult.Static;
    function importClass(className: 'PendingResult$Callback'): Java.com.google.maps.PendingResult$Callback.Static;
    function importClass(className: 'Object'): Java.java.lang.Object.Static;
    function importClass(className: 'String'): Java.java.lang.String.Static;
    function importClass(className: 'com.google.gson.FieldNamingPolicy'): Java.com.google.gson.FieldNamingPolicy.Static;
    function importClass(className: 'com.google.maps.DirectionsApi'): Java.com.google.maps.DirectionsApi.Static;
    function importClass(className: 'com.google.maps.DirectionsApi$RouteRestriction'): Java.com.google.maps.DirectionsApi$RouteRestriction.Static;
    function importClass(className: 'com.google.maps.DirectionsApiRequest'): Java.com.google.maps.DirectionsApiRequest.Static;
    function importClass(className: 'com.google.maps.GeoApiContext'): Java.com.google.maps.GeoApiContext.Static;
    function importClass(className: 'com.google.maps.GeoApiContext$RequestHandler'): Java.com.google.maps.GeoApiContext$RequestHandler.Static;
    function importClass(className: 'com.google.maps.model.AddressComponent'): Java.com.google.maps.model.AddressComponent.Static;
    function importClass(className: 'com.google.maps.model.AddressComponentType'): Java.com.google.maps.model.AddressComponentType.Static;
    function importClass(className: 'com.google.maps.model.AddressType'): Java.com.google.maps.model.AddressType.Static;
    function importClass(className: 'com.google.maps.model.AutocompletePrediction'): Java.com.google.maps.model.AutocompletePrediction.Static;
    function importClass(className: 'com.google.maps.model.AutocompletePrediction$MatchedSubstring'): Java.com.google.maps.model.AutocompletePrediction$MatchedSubstring.Static;
    function importClass(className: 'com.google.maps.model.AutocompletePrediction$Term'): Java.com.google.maps.model.AutocompletePrediction$Term.Static;
    function importClass(className: 'com.google.maps.model.Bounds'): Java.com.google.maps.model.Bounds.Static;
    function importClass(className: 'com.google.maps.model.ComponentFilter'): Java.com.google.maps.model.ComponentFilter.Static;
    function importClass(className: 'com.google.maps.model.DirectionsLeg'): Java.com.google.maps.model.DirectionsLeg.Static;
    function importClass(className: 'com.google.maps.model.DirectionsResult'): Java.com.google.maps.model.DirectionsResult.Static;
    function importClass(className: 'com.google.maps.model.DirectionsRoute'): Java.com.google.maps.model.DirectionsRoute.Static;
    function importClass(className: 'com.google.maps.model.DirectionsStep'): Java.com.google.maps.model.DirectionsStep.Static;
    function importClass(className: 'com.google.maps.model.Distance'): Java.com.google.maps.model.Distance.Static;
    function importClass(className: 'com.google.maps.model.DistanceMatrix'): Java.com.google.maps.model.DistanceMatrix.Static;
    function importClass(className: 'com.google.maps.model.DistanceMatrixElement'): Java.com.google.maps.model.DistanceMatrixElement.Static;
    function importClass(className: 'com.google.maps.model.DistanceMatrixElementStatus'): Java.com.google.maps.model.DistanceMatrixElementStatus.Static;
    function importClass(className: 'com.google.maps.model.DistanceMatrixRow'): Java.com.google.maps.model.DistanceMatrixRow.Static;
    function importClass(className: 'com.google.maps.model.Duration'): Java.com.google.maps.model.Duration.Static;
    function importClass(className: 'com.google.maps.model.ElevationResult'): Java.com.google.maps.model.ElevationResult.Static;
    function importClass(className: 'com.google.maps.model.EncodedPolyline'): Java.com.google.maps.model.EncodedPolyline.Static;
    function importClass(className: 'com.google.maps.model.Fare'): Java.com.google.maps.model.Fare.Static;
    function importClass(className: 'com.google.maps.model.GeocodedWaypoint'): Java.com.google.maps.model.GeocodedWaypoint.Static;
    function importClass(className: 'com.google.maps.model.GeocodedWaypointStatus'): Java.com.google.maps.model.GeocodedWaypointStatus.Static;
    function importClass(className: 'com.google.maps.model.GeocodingResult'): Java.com.google.maps.model.GeocodingResult.Static;
    function importClass(className: 'com.google.maps.model.Geometry'): Java.com.google.maps.model.Geometry.Static;
    function importClass(className: 'com.google.maps.model.LatLng'): Java.com.google.maps.model.LatLng.Static;
    function importClass(className: 'com.google.maps.model.LocationType'): Java.com.google.maps.model.LocationType.Static;
    function importClass(className: 'com.google.maps.model.OpeningHours'): Java.com.google.maps.model.OpeningHours.Static;
    function importClass(className: 'com.google.maps.model.OpeningHours$Period'): Java.com.google.maps.model.OpeningHours$Period.Static;
    function importClass(className: 'com.google.maps.model.OpeningHours$Period$OpenClose'): Java.com.google.maps.model.OpeningHours$Period$OpenClose.Static;
    function importClass(className: 'com.google.maps.model.OpeningHours$Period$OpenClose$DayOfWeek'): Java.com.google.maps.model.OpeningHours$Period$OpenClose$DayOfWeek.Static;
    function importClass(className: 'com.google.maps.model.Photo'): Java.com.google.maps.model.Photo.Static;
    function importClass(className: 'com.google.maps.model.PhotoResult'): Java.com.google.maps.model.PhotoResult.Static;
    function importClass(className: 'com.google.maps.model.PlaceAutocompleteType'): Java.com.google.maps.model.PlaceAutocompleteType.Static;
    function importClass(className: 'com.google.maps.model.PlaceDetails'): Java.com.google.maps.model.PlaceDetails.Static;
    function importClass(className: 'com.google.maps.model.PlaceDetails$AlternatePlaceIds'): Java.com.google.maps.model.PlaceDetails$AlternatePlaceIds.Static;
    function importClass(className: 'com.google.maps.model.PlaceDetails$Review'): Java.com.google.maps.model.PlaceDetails$Review.Static;
    function importClass(className: 'com.google.maps.model.PlaceDetails$Review$AspectRating'): Java.com.google.maps.model.PlaceDetails$Review$AspectRating.Static;
    function importClass(className: 'com.google.maps.model.PlaceDetails$Review$AspectRating$RatingType'): Java.com.google.maps.model.PlaceDetails$Review$AspectRating$RatingType.Static;
    function importClass(className: 'com.google.maps.model.PlaceIdScope'): Java.com.google.maps.model.PlaceIdScope.Static;
    function importClass(className: 'com.google.maps.model.PlacesSearchResponse'): Java.com.google.maps.model.PlacesSearchResponse.Static;
    function importClass(className: 'com.google.maps.model.PlacesSearchResult'): Java.com.google.maps.model.PlacesSearchResult.Static;
    function importClass(className: 'com.google.maps.model.PlaceType'): Java.com.google.maps.model.PlaceType.Static;
    function importClass(className: 'com.google.maps.model.PriceLevel'): Java.com.google.maps.model.PriceLevel.Static;
    function importClass(className: 'com.google.maps.model.RankBy'): Java.com.google.maps.model.RankBy.Static;
    function importClass(className: 'com.google.maps.model.SnappedPoint'): Java.com.google.maps.model.SnappedPoint.Static;
    function importClass(className: 'com.google.maps.model.SnappedSpeedLimitResponse'): Java.com.google.maps.model.SnappedSpeedLimitResponse.Static;
    function importClass(className: 'com.google.maps.model.SpeedLimit'): Java.com.google.maps.model.SpeedLimit.Static;
    function importClass(className: 'com.google.maps.model.StopDetails'): Java.com.google.maps.model.StopDetails.Static;
    function importClass(className: 'com.google.maps.model.TrafficModel'): Java.com.google.maps.model.TrafficModel.Static;
    function importClass(className: 'com.google.maps.model.TransitAgency'): Java.com.google.maps.model.TransitAgency.Static;
    function importClass(className: 'com.google.maps.model.TransitDetails'): Java.com.google.maps.model.TransitDetails.Static;
    function importClass(className: 'com.google.maps.model.TransitLine'): Java.com.google.maps.model.TransitLine.Static;
    function importClass(className: 'com.google.maps.model.TransitMode'): Java.com.google.maps.model.TransitMode.Static;
    function importClass(className: 'com.google.maps.model.TransitRoutingPreference'): Java.com.google.maps.model.TransitRoutingPreference.Static;
    function importClass(className: 'com.google.maps.model.TravelMode'): Java.com.google.maps.model.TravelMode.Static;
    function importClass(className: 'com.google.maps.model.Unit'): Java.com.google.maps.model.Unit.Static;
    function importClass(className: 'com.google.maps.model.Vehicle'): Java.com.google.maps.model.Vehicle.Static;
    function importClass(className: 'com.google.maps.model.VehicleType'): Java.com.google.maps.model.VehicleType.Static;
    function importClass(className: 'com.google.maps.PendingResult'): Java.com.google.maps.PendingResult.Static;
    function importClass(className: 'com.google.maps.PendingResult$Callback'): Java.com.google.maps.PendingResult$Callback.Static;
    function importClass(className: 'java.lang.Object'): Java.java.lang.Object.Static;
    function importClass(className: 'java.lang.String'): Java.java.lang.String.Static;
    function importClass(className: string): any;
    function asInstanceOf(obj: any, className: 'FieldNamingPolicy'): Java.com.google.gson.FieldNamingPolicy;
    function asInstanceOf(obj: any, className: 'DirectionsApi'): Java.com.google.maps.DirectionsApi;
    function asInstanceOf(obj: any, className: 'DirectionsApi$RouteRestriction'): Java.com.google.maps.DirectionsApi$RouteRestriction;
    function asInstanceOf(obj: any, className: 'DirectionsApiRequest'): Java.com.google.maps.DirectionsApiRequest;
    function asInstanceOf(obj: any, className: 'GeoApiContext'): Java.com.google.maps.GeoApiContext;
    function asInstanceOf(obj: any, className: 'GeoApiContext$RequestHandler'): Java.com.google.maps.GeoApiContext$RequestHandler;
    function asInstanceOf(obj: any, className: 'AddressComponent'): Java.com.google.maps.model.AddressComponent;
    function asInstanceOf(obj: any, className: 'AddressComponentType'): Java.com.google.maps.model.AddressComponentType;
    function asInstanceOf(obj: any, className: 'AddressType'): Java.com.google.maps.model.AddressType;
    function asInstanceOf(obj: any, className: 'AutocompletePrediction'): Java.com.google.maps.model.AutocompletePrediction;
    function asInstanceOf(obj: any, className: 'AutocompletePrediction$MatchedSubstring'): Java.com.google.maps.model.AutocompletePrediction$MatchedSubstring;
    function asInstanceOf(obj: any, className: 'AutocompletePrediction$Term'): Java.com.google.maps.model.AutocompletePrediction$Term;
    function asInstanceOf(obj: any, className: 'Bounds'): Java.com.google.maps.model.Bounds;
    function asInstanceOf(obj: any, className: 'ComponentFilter'): Java.com.google.maps.model.ComponentFilter;
    function asInstanceOf(obj: any, className: 'DirectionsLeg'): Java.com.google.maps.model.DirectionsLeg;
    function asInstanceOf(obj: any, className: 'DirectionsResult'): Java.com.google.maps.model.DirectionsResult;
    function asInstanceOf(obj: any, className: 'DirectionsRoute'): Java.com.google.maps.model.DirectionsRoute;
    function asInstanceOf(obj: any, className: 'DirectionsStep'): Java.com.google.maps.model.DirectionsStep;
    function asInstanceOf(obj: any, className: 'Distance'): Java.com.google.maps.model.Distance;
    function asInstanceOf(obj: any, className: 'DistanceMatrix'): Java.com.google.maps.model.DistanceMatrix;
    function asInstanceOf(obj: any, className: 'DistanceMatrixElement'): Java.com.google.maps.model.DistanceMatrixElement;
    function asInstanceOf(obj: any, className: 'DistanceMatrixElementStatus'): Java.com.google.maps.model.DistanceMatrixElementStatus;
    function asInstanceOf(obj: any, className: 'DistanceMatrixRow'): Java.com.google.maps.model.DistanceMatrixRow;
    function asInstanceOf(obj: any, className: 'Duration'): Java.com.google.maps.model.Duration;
    function asInstanceOf(obj: any, className: 'ElevationResult'): Java.com.google.maps.model.ElevationResult;
    function asInstanceOf(obj: any, className: 'EncodedPolyline'): Java.com.google.maps.model.EncodedPolyline;
    function asInstanceOf(obj: any, className: 'Fare'): Java.com.google.maps.model.Fare;
    function asInstanceOf(obj: any, className: 'GeocodedWaypoint'): Java.com.google.maps.model.GeocodedWaypoint;
    function asInstanceOf(obj: any, className: 'GeocodedWaypointStatus'): Java.com.google.maps.model.GeocodedWaypointStatus;
    function asInstanceOf(obj: any, className: 'GeocodingResult'): Java.com.google.maps.model.GeocodingResult;
    function asInstanceOf(obj: any, className: 'Geometry'): Java.com.google.maps.model.Geometry;
    function asInstanceOf(obj: any, className: 'LatLng'): Java.com.google.maps.model.LatLng;
    function asInstanceOf(obj: any, className: 'LocationType'): Java.com.google.maps.model.LocationType;
    function asInstanceOf(obj: any, className: 'OpeningHours'): Java.com.google.maps.model.OpeningHours;
    function asInstanceOf(obj: any, className: 'OpeningHours$Period'): Java.com.google.maps.model.OpeningHours$Period;
    function asInstanceOf(obj: any, className: 'OpeningHours$Period$OpenClose'): Java.com.google.maps.model.OpeningHours$Period$OpenClose;
    function asInstanceOf(obj: any, className: 'OpeningHours$Period$OpenClose$DayOfWeek'): Java.com.google.maps.model.OpeningHours$Period$OpenClose$DayOfWeek;
    function asInstanceOf(obj: any, className: 'Photo'): Java.com.google.maps.model.Photo;
    function asInstanceOf(obj: any, className: 'PhotoResult'): Java.com.google.maps.model.PhotoResult;
    function asInstanceOf(obj: any, className: 'PlaceAutocompleteType'): Java.com.google.maps.model.PlaceAutocompleteType;
    function asInstanceOf(obj: any, className: 'PlaceDetails'): Java.com.google.maps.model.PlaceDetails;
    function asInstanceOf(obj: any, className: 'PlaceDetails$AlternatePlaceIds'): Java.com.google.maps.model.PlaceDetails$AlternatePlaceIds;
    function asInstanceOf(obj: any, className: 'PlaceDetails$Review'): Java.com.google.maps.model.PlaceDetails$Review;
    function asInstanceOf(obj: any, className: 'PlaceDetails$Review$AspectRating'): Java.com.google.maps.model.PlaceDetails$Review$AspectRating;
    function asInstanceOf(obj: any, className: 'PlaceDetails$Review$AspectRating$RatingType'): Java.com.google.maps.model.PlaceDetails$Review$AspectRating$RatingType;
    function asInstanceOf(obj: any, className: 'PlaceIdScope'): Java.com.google.maps.model.PlaceIdScope;
    function asInstanceOf(obj: any, className: 'PlacesSearchResponse'): Java.com.google.maps.model.PlacesSearchResponse;
    function asInstanceOf(obj: any, className: 'PlacesSearchResult'): Java.com.google.maps.model.PlacesSearchResult;
    function asInstanceOf(obj: any, className: 'PlaceType'): Java.com.google.maps.model.PlaceType;
    function asInstanceOf(obj: any, className: 'PriceLevel'): Java.com.google.maps.model.PriceLevel;
    function asInstanceOf(obj: any, className: 'RankBy'): Java.com.google.maps.model.RankBy;
    function asInstanceOf(obj: any, className: 'SnappedPoint'): Java.com.google.maps.model.SnappedPoint;
    function asInstanceOf(obj: any, className: 'SnappedSpeedLimitResponse'): Java.com.google.maps.model.SnappedSpeedLimitResponse;
    function asInstanceOf(obj: any, className: 'SpeedLimit'): Java.com.google.maps.model.SpeedLimit;
    function asInstanceOf(obj: any, className: 'StopDetails'): Java.com.google.maps.model.StopDetails;
    function asInstanceOf(obj: any, className: 'TrafficModel'): Java.com.google.maps.model.TrafficModel;
    function asInstanceOf(obj: any, className: 'TransitAgency'): Java.com.google.maps.model.TransitAgency;
    function asInstanceOf(obj: any, className: 'TransitDetails'): Java.com.google.maps.model.TransitDetails;
    function asInstanceOf(obj: any, className: 'TransitLine'): Java.com.google.maps.model.TransitLine;
    function asInstanceOf(obj: any, className: 'TransitMode'): Java.com.google.maps.model.TransitMode;
    function asInstanceOf(obj: any, className: 'TransitRoutingPreference'): Java.com.google.maps.model.TransitRoutingPreference;
    function asInstanceOf(obj: any, className: 'TravelMode'): Java.com.google.maps.model.TravelMode;
    function asInstanceOf(obj: any, className: 'Unit'): Java.com.google.maps.model.Unit;
    function asInstanceOf(obj: any, className: 'Vehicle'): Java.com.google.maps.model.Vehicle;
    function asInstanceOf(obj: any, className: 'VehicleType'): Java.com.google.maps.model.VehicleType;
    function asInstanceOf(obj: any, className: 'PendingResult'): Java.com.google.maps.PendingResult;
    function asInstanceOf(obj: any, className: 'PendingResult$Callback'): Java.com.google.maps.PendingResult$Callback;
    function asInstanceOf(obj: any, className: 'Object'): Java.java.lang.Object;
    function asInstanceOf(obj: any, className: 'String'): Java.java.lang.String;
    function asInstanceOf(obj: any, className: 'com.google.gson.FieldNamingPolicy'): Java.com.google.gson.FieldNamingPolicy;
    function asInstanceOf(obj: any, className: 'com.google.maps.DirectionsApi'): Java.com.google.maps.DirectionsApi;
    function asInstanceOf(obj: any, className: 'com.google.maps.DirectionsApi$RouteRestriction'): Java.com.google.maps.DirectionsApi$RouteRestriction;
    function asInstanceOf(obj: any, className: 'com.google.maps.DirectionsApiRequest'): Java.com.google.maps.DirectionsApiRequest;
    function asInstanceOf(obj: any, className: 'com.google.maps.GeoApiContext'): Java.com.google.maps.GeoApiContext;
    function asInstanceOf(obj: any, className: 'com.google.maps.GeoApiContext$RequestHandler'): Java.com.google.maps.GeoApiContext$RequestHandler;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.AddressComponent'): Java.com.google.maps.model.AddressComponent;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.AddressComponentType'): Java.com.google.maps.model.AddressComponentType;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.AddressType'): Java.com.google.maps.model.AddressType;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.AutocompletePrediction'): Java.com.google.maps.model.AutocompletePrediction;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.AutocompletePrediction$MatchedSubstring'): Java.com.google.maps.model.AutocompletePrediction$MatchedSubstring;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.AutocompletePrediction$Term'): Java.com.google.maps.model.AutocompletePrediction$Term;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.Bounds'): Java.com.google.maps.model.Bounds;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.ComponentFilter'): Java.com.google.maps.model.ComponentFilter;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.DirectionsLeg'): Java.com.google.maps.model.DirectionsLeg;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.DirectionsResult'): Java.com.google.maps.model.DirectionsResult;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.DirectionsRoute'): Java.com.google.maps.model.DirectionsRoute;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.DirectionsStep'): Java.com.google.maps.model.DirectionsStep;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.Distance'): Java.com.google.maps.model.Distance;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.DistanceMatrix'): Java.com.google.maps.model.DistanceMatrix;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.DistanceMatrixElement'): Java.com.google.maps.model.DistanceMatrixElement;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.DistanceMatrixElementStatus'): Java.com.google.maps.model.DistanceMatrixElementStatus;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.DistanceMatrixRow'): Java.com.google.maps.model.DistanceMatrixRow;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.Duration'): Java.com.google.maps.model.Duration;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.ElevationResult'): Java.com.google.maps.model.ElevationResult;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.EncodedPolyline'): Java.com.google.maps.model.EncodedPolyline;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.Fare'): Java.com.google.maps.model.Fare;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.GeocodedWaypoint'): Java.com.google.maps.model.GeocodedWaypoint;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.GeocodedWaypointStatus'): Java.com.google.maps.model.GeocodedWaypointStatus;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.GeocodingResult'): Java.com.google.maps.model.GeocodingResult;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.Geometry'): Java.com.google.maps.model.Geometry;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.LatLng'): Java.com.google.maps.model.LatLng;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.LocationType'): Java.com.google.maps.model.LocationType;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.OpeningHours'): Java.com.google.maps.model.OpeningHours;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.OpeningHours$Period'): Java.com.google.maps.model.OpeningHours$Period;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.OpeningHours$Period$OpenClose'): Java.com.google.maps.model.OpeningHours$Period$OpenClose;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.OpeningHours$Period$OpenClose$DayOfWeek'): Java.com.google.maps.model.OpeningHours$Period$OpenClose$DayOfWeek;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.Photo'): Java.com.google.maps.model.Photo;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PhotoResult'): Java.com.google.maps.model.PhotoResult;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PlaceAutocompleteType'): Java.com.google.maps.model.PlaceAutocompleteType;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PlaceDetails'): Java.com.google.maps.model.PlaceDetails;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PlaceDetails$AlternatePlaceIds'): Java.com.google.maps.model.PlaceDetails$AlternatePlaceIds;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PlaceDetails$Review'): Java.com.google.maps.model.PlaceDetails$Review;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PlaceDetails$Review$AspectRating'): Java.com.google.maps.model.PlaceDetails$Review$AspectRating;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PlaceDetails$Review$AspectRating$RatingType'): Java.com.google.maps.model.PlaceDetails$Review$AspectRating$RatingType;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PlaceIdScope'): Java.com.google.maps.model.PlaceIdScope;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PlacesSearchResponse'): Java.com.google.maps.model.PlacesSearchResponse;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PlacesSearchResult'): Java.com.google.maps.model.PlacesSearchResult;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PlaceType'): Java.com.google.maps.model.PlaceType;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.PriceLevel'): Java.com.google.maps.model.PriceLevel;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.RankBy'): Java.com.google.maps.model.RankBy;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.SnappedPoint'): Java.com.google.maps.model.SnappedPoint;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.SnappedSpeedLimitResponse'): Java.com.google.maps.model.SnappedSpeedLimitResponse;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.SpeedLimit'): Java.com.google.maps.model.SpeedLimit;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.StopDetails'): Java.com.google.maps.model.StopDetails;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.TrafficModel'): Java.com.google.maps.model.TrafficModel;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.TransitAgency'): Java.com.google.maps.model.TransitAgency;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.TransitDetails'): Java.com.google.maps.model.TransitDetails;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.TransitLine'): Java.com.google.maps.model.TransitLine;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.TransitMode'): Java.com.google.maps.model.TransitMode;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.TransitRoutingPreference'): Java.com.google.maps.model.TransitRoutingPreference;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.TravelMode'): Java.com.google.maps.model.TravelMode;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.Unit'): Java.com.google.maps.model.Unit;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.Vehicle'): Java.com.google.maps.model.Vehicle;
    function asInstanceOf(obj: any, className: 'com.google.maps.model.VehicleType'): Java.com.google.maps.model.VehicleType;
    function asInstanceOf(obj: any, className: 'com.google.maps.PendingResult'): Java.com.google.maps.PendingResult;
    function asInstanceOf(obj: any, className: 'com.google.maps.PendingResult$Callback'): Java.com.google.maps.PendingResult$Callback;
    function asInstanceOf(obj: any, className: 'java.lang.Object'): Java.java.lang.Object;
    function asInstanceOf(obj: any, className: 'java.lang.String'): Java.java.lang.String;
    function asInstanceOf(obj: any, className: string): any;
    interface Callback<T> {
        (err?: Error, result?: T): void;
    }
    function instanceOf(javaObject: any, className: string): boolean;
    function newInstanceA(className: 'GeoApiContext', arg0: Java.GeoApiContext$RequestHandler, cb: Callback<Java.GeoApiContext>): void;
    function newInstanceA(className: 'GeoApiContext', cb: Callback<Java.GeoApiContext>): void;
    function newInstanceA(className: 'AddressComponent', cb: Callback<Java.AddressComponent>): void;
    function newInstanceA(className: 'AutocompletePrediction', cb: Callback<Java.AutocompletePrediction>): void;
    function newInstanceA(className: 'AutocompletePrediction$MatchedSubstring', cb: Callback<Java.AutocompletePrediction$MatchedSubstring>): void;
    function newInstanceA(className: 'AutocompletePrediction$Term', cb: Callback<Java.AutocompletePrediction$Term>): void;
    function newInstanceA(className: 'Bounds', cb: Callback<Java.Bounds>): void;
    function newInstanceA(className: 'DirectionsLeg', cb: Callback<Java.DirectionsLeg>): void;
    function newInstanceA(className: 'DirectionsResult', cb: Callback<Java.DirectionsResult>): void;
    function newInstanceA(className: 'DirectionsRoute', cb: Callback<Java.DirectionsRoute>): void;
    function newInstanceA(className: 'DirectionsStep', cb: Callback<Java.DirectionsStep>): void;
    function newInstanceA(className: 'Distance', cb: Callback<Java.Distance>): void;
    function newInstanceA(className: 'DistanceMatrix', arg0: array_t<string_t>, arg1: array_t<string_t>, arg2: array_t<Java.DistanceMatrixRow>, cb: Callback<Java.DistanceMatrix>): void;
    function newInstanceA(className: 'DistanceMatrixElement', cb: Callback<Java.DistanceMatrixElement>): void;
    function newInstanceA(className: 'DistanceMatrixRow', cb: Callback<Java.DistanceMatrixRow>): void;
    function newInstanceA(className: 'Duration', cb: Callback<Java.Duration>): void;
    function newInstanceA(className: 'ElevationResult', cb: Callback<Java.ElevationResult>): void;
    function newInstanceA(className: 'EncodedPolyline', arg0: string_t, cb: Callback<Java.EncodedPolyline>): void;
    function newInstanceA(className: 'EncodedPolyline', arg0: object_t, cb: Callback<Java.EncodedPolyline>): void;
    function newInstanceA(className: 'Fare', cb: Callback<Java.Fare>): void;
    function newInstanceA(className: 'GeocodedWaypoint', cb: Callback<Java.GeocodedWaypoint>): void;
    function newInstanceA(className: 'GeocodingResult', cb: Callback<Java.GeocodingResult>): void;
    function newInstanceA(className: 'Geometry', cb: Callback<Java.Geometry>): void;
    function newInstanceA(className: 'LatLng', arg0: object_t, arg1: object_t, cb: Callback<Java.LatLng>): void;
    function newInstanceA(className: 'OpeningHours', cb: Callback<Java.OpeningHours>): void;
    function newInstanceA(className: 'OpeningHours$Period', cb: Callback<Java.OpeningHours$Period>): void;
    function newInstanceA(className: 'OpeningHours$Period$OpenClose', cb: Callback<Java.OpeningHours$Period$OpenClose>): void;
    function newInstanceA(className: 'Photo', cb: Callback<Java.Photo>): void;
    function newInstanceA(className: 'PhotoResult', cb: Callback<Java.PhotoResult>): void;
    function newInstanceA(className: 'PlaceDetails', cb: Callback<Java.PlaceDetails>): void;
    function newInstanceA(className: 'PlaceDetails$AlternatePlaceIds', cb: Callback<Java.PlaceDetails$AlternatePlaceIds>): void;
    function newInstanceA(className: 'PlaceDetails$Review', cb: Callback<Java.PlaceDetails$Review>): void;
    function newInstanceA(className: 'PlaceDetails$Review$AspectRating', cb: Callback<Java.PlaceDetails$Review$AspectRating>): void;
    function newInstanceA(className: 'PlacesSearchResponse', cb: Callback<Java.PlacesSearchResponse>): void;
    function newInstanceA(className: 'PlacesSearchResult', cb: Callback<Java.PlacesSearchResult>): void;
    function newInstanceA(className: 'SnappedPoint', cb: Callback<Java.SnappedPoint>): void;
    function newInstanceA(className: 'SnappedSpeedLimitResponse', cb: Callback<Java.SnappedSpeedLimitResponse>): void;
    function newInstanceA(className: 'SpeedLimit', cb: Callback<Java.SpeedLimit>): void;
    function newInstanceA(className: 'StopDetails', cb: Callback<Java.StopDetails>): void;
    function newInstanceA(className: 'TransitAgency', cb: Callback<Java.TransitAgency>): void;
    function newInstanceA(className: 'TransitDetails', cb: Callback<Java.TransitDetails>): void;
    function newInstanceA(className: 'TransitLine', cb: Callback<Java.TransitLine>): void;
    function newInstanceA(className: 'Vehicle', cb: Callback<Java.Vehicle>): void;
    function newInstanceA(className: 'Object', cb: Callback<object_t>): void;
    function newInstanceA(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: string_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_array_t, arg1: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_array_t, arg1: string_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_array_t, arg1: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: string_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_array_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', arg0: object_array_t, cb: Callback<string>): void;
    function newInstanceA(className: 'String', cb: Callback<string>): void;
    function newInstanceA(className: 'com.google.maps.GeoApiContext', arg0: Java.GeoApiContext$RequestHandler, cb: Callback<Java.GeoApiContext>): void;
    function newInstanceA(className: 'com.google.maps.GeoApiContext', cb: Callback<Java.GeoApiContext>): void;
    function newInstanceA(className: 'com.google.maps.model.AddressComponent', cb: Callback<Java.AddressComponent>): void;
    function newInstanceA(className: 'com.google.maps.model.AutocompletePrediction', cb: Callback<Java.AutocompletePrediction>): void;
    function newInstanceA(className: 'com.google.maps.model.AutocompletePrediction$MatchedSubstring', cb: Callback<Java.AutocompletePrediction$MatchedSubstring>): void;
    function newInstanceA(className: 'com.google.maps.model.AutocompletePrediction$Term', cb: Callback<Java.AutocompletePrediction$Term>): void;
    function newInstanceA(className: 'com.google.maps.model.Bounds', cb: Callback<Java.Bounds>): void;
    function newInstanceA(className: 'com.google.maps.model.DirectionsLeg', cb: Callback<Java.DirectionsLeg>): void;
    function newInstanceA(className: 'com.google.maps.model.DirectionsResult', cb: Callback<Java.DirectionsResult>): void;
    function newInstanceA(className: 'com.google.maps.model.DirectionsRoute', cb: Callback<Java.DirectionsRoute>): void;
    function newInstanceA(className: 'com.google.maps.model.DirectionsStep', cb: Callback<Java.DirectionsStep>): void;
    function newInstanceA(className: 'com.google.maps.model.Distance', cb: Callback<Java.Distance>): void;
    function newInstanceA(className: 'com.google.maps.model.DistanceMatrix', arg0: array_t<string_t>, arg1: array_t<string_t>, arg2: array_t<Java.DistanceMatrixRow>, cb: Callback<Java.DistanceMatrix>): void;
    function newInstanceA(className: 'com.google.maps.model.DistanceMatrixElement', cb: Callback<Java.DistanceMatrixElement>): void;
    function newInstanceA(className: 'com.google.maps.model.DistanceMatrixRow', cb: Callback<Java.DistanceMatrixRow>): void;
    function newInstanceA(className: 'com.google.maps.model.Duration', cb: Callback<Java.Duration>): void;
    function newInstanceA(className: 'com.google.maps.model.ElevationResult', cb: Callback<Java.ElevationResult>): void;
    function newInstanceA(className: 'com.google.maps.model.EncodedPolyline', arg0: string_t, cb: Callback<Java.EncodedPolyline>): void;
    function newInstanceA(className: 'com.google.maps.model.EncodedPolyline', arg0: object_t, cb: Callback<Java.EncodedPolyline>): void;
    function newInstanceA(className: 'com.google.maps.model.Fare', cb: Callback<Java.Fare>): void;
    function newInstanceA(className: 'com.google.maps.model.GeocodedWaypoint', cb: Callback<Java.GeocodedWaypoint>): void;
    function newInstanceA(className: 'com.google.maps.model.GeocodingResult', cb: Callback<Java.GeocodingResult>): void;
    function newInstanceA(className: 'com.google.maps.model.Geometry', cb: Callback<Java.Geometry>): void;
    function newInstanceA(className: 'com.google.maps.model.LatLng', arg0: object_t, arg1: object_t, cb: Callback<Java.LatLng>): void;
    function newInstanceA(className: 'com.google.maps.model.OpeningHours', cb: Callback<Java.OpeningHours>): void;
    function newInstanceA(className: 'com.google.maps.model.OpeningHours$Period', cb: Callback<Java.OpeningHours$Period>): void;
    function newInstanceA(className: 'com.google.maps.model.OpeningHours$Period$OpenClose', cb: Callback<Java.OpeningHours$Period$OpenClose>): void;
    function newInstanceA(className: 'com.google.maps.model.Photo', cb: Callback<Java.Photo>): void;
    function newInstanceA(className: 'com.google.maps.model.PhotoResult', cb: Callback<Java.PhotoResult>): void;
    function newInstanceA(className: 'com.google.maps.model.PlaceDetails', cb: Callback<Java.PlaceDetails>): void;
    function newInstanceA(className: 'com.google.maps.model.PlaceDetails$AlternatePlaceIds', cb: Callback<Java.PlaceDetails$AlternatePlaceIds>): void;
    function newInstanceA(className: 'com.google.maps.model.PlaceDetails$Review', cb: Callback<Java.PlaceDetails$Review>): void;
    function newInstanceA(className: 'com.google.maps.model.PlaceDetails$Review$AspectRating', cb: Callback<Java.PlaceDetails$Review$AspectRating>): void;
    function newInstanceA(className: 'com.google.maps.model.PlacesSearchResponse', cb: Callback<Java.PlacesSearchResponse>): void;
    function newInstanceA(className: 'com.google.maps.model.PlacesSearchResult', cb: Callback<Java.PlacesSearchResult>): void;
    function newInstanceA(className: 'com.google.maps.model.SnappedPoint', cb: Callback<Java.SnappedPoint>): void;
    function newInstanceA(className: 'com.google.maps.model.SnappedSpeedLimitResponse', cb: Callback<Java.SnappedSpeedLimitResponse>): void;
    function newInstanceA(className: 'com.google.maps.model.SpeedLimit', cb: Callback<Java.SpeedLimit>): void;
    function newInstanceA(className: 'com.google.maps.model.StopDetails', cb: Callback<Java.StopDetails>): void;
    function newInstanceA(className: 'com.google.maps.model.TransitAgency', cb: Callback<Java.TransitAgency>): void;
    function newInstanceA(className: 'com.google.maps.model.TransitDetails', cb: Callback<Java.TransitDetails>): void;
    function newInstanceA(className: 'com.google.maps.model.TransitLine', cb: Callback<Java.TransitLine>): void;
    function newInstanceA(className: 'com.google.maps.model.Vehicle', cb: Callback<Java.Vehicle>): void;
    function newInstanceA(className: 'java.lang.Object', cb: Callback<object_t>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: string_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_array_t, arg1: string_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: string_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_array_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', arg0: object_array_t, cb: Callback<string>): void;
    function newInstanceA(className: 'java.lang.String', cb: Callback<string>): void;
    function newInstanceA(className: string, ...args: any[]): void;
    function newInstance(className: 'GeoApiContext', arg0: Java.GeoApiContext$RequestHandler): Java.GeoApiContext;
    function newInstance(className: 'GeoApiContext'): Java.GeoApiContext;
    function newInstance(className: 'AddressComponent'): Java.AddressComponent;
    function newInstance(className: 'AutocompletePrediction'): Java.AutocompletePrediction;
    function newInstance(className: 'AutocompletePrediction$MatchedSubstring'): Java.AutocompletePrediction$MatchedSubstring;
    function newInstance(className: 'AutocompletePrediction$Term'): Java.AutocompletePrediction$Term;
    function newInstance(className: 'Bounds'): Java.Bounds;
    function newInstance(className: 'DirectionsLeg'): Java.DirectionsLeg;
    function newInstance(className: 'DirectionsResult'): Java.DirectionsResult;
    function newInstance(className: 'DirectionsRoute'): Java.DirectionsRoute;
    function newInstance(className: 'DirectionsStep'): Java.DirectionsStep;
    function newInstance(className: 'Distance'): Java.Distance;
    function newInstance(className: 'DistanceMatrix', arg0: array_t<string_t>, arg1: array_t<string_t>, arg2: array_t<Java.DistanceMatrixRow>): Java.DistanceMatrix;
    function newInstance(className: 'DistanceMatrixElement'): Java.DistanceMatrixElement;
    function newInstance(className: 'DistanceMatrixRow'): Java.DistanceMatrixRow;
    function newInstance(className: 'Duration'): Java.Duration;
    function newInstance(className: 'ElevationResult'): Java.ElevationResult;
    function newInstance(className: 'EncodedPolyline', arg0: string_t): Java.EncodedPolyline;
    function newInstance(className: 'EncodedPolyline', arg0: object_t): Java.EncodedPolyline;
    function newInstance(className: 'Fare'): Java.Fare;
    function newInstance(className: 'GeocodedWaypoint'): Java.GeocodedWaypoint;
    function newInstance(className: 'GeocodingResult'): Java.GeocodingResult;
    function newInstance(className: 'Geometry'): Java.Geometry;
    function newInstance(className: 'LatLng', arg0: object_t, arg1: object_t): Java.LatLng;
    function newInstance(className: 'OpeningHours'): Java.OpeningHours;
    function newInstance(className: 'OpeningHours$Period'): Java.OpeningHours$Period;
    function newInstance(className: 'OpeningHours$Period$OpenClose'): Java.OpeningHours$Period$OpenClose;
    function newInstance(className: 'Photo'): Java.Photo;
    function newInstance(className: 'PhotoResult'): Java.PhotoResult;
    function newInstance(className: 'PlaceDetails'): Java.PlaceDetails;
    function newInstance(className: 'PlaceDetails$AlternatePlaceIds'): Java.PlaceDetails$AlternatePlaceIds;
    function newInstance(className: 'PlaceDetails$Review'): Java.PlaceDetails$Review;
    function newInstance(className: 'PlaceDetails$Review$AspectRating'): Java.PlaceDetails$Review$AspectRating;
    function newInstance(className: 'PlacesSearchResponse'): Java.PlacesSearchResponse;
    function newInstance(className: 'PlacesSearchResult'): Java.PlacesSearchResult;
    function newInstance(className: 'SnappedPoint'): Java.SnappedPoint;
    function newInstance(className: 'SnappedSpeedLimitResponse'): Java.SnappedSpeedLimitResponse;
    function newInstance(className: 'SpeedLimit'): Java.SpeedLimit;
    function newInstance(className: 'StopDetails'): Java.StopDetails;
    function newInstance(className: 'TransitAgency'): Java.TransitAgency;
    function newInstance(className: 'TransitDetails'): Java.TransitDetails;
    function newInstance(className: 'TransitLine'): Java.TransitLine;
    function newInstance(className: 'Vehicle'): Java.Vehicle;
    function newInstance(className: 'Object'): object_t;
    function newInstance(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): string;
    function newInstance(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: string_t): string;
    function newInstance(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): string;
    function newInstance(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t): string;
    function newInstance(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t): string;
    function newInstance(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t): string;
    function newInstance(className: 'String', arg0: object_array_t, arg1: object_t): string;
    function newInstance(className: 'String', arg0: object_array_t, arg1: string_t): string;
    function newInstance(className: 'String', arg0: object_array_t, arg1: object_t): string;
    function newInstance(className: 'String', arg0: object_t): string;
    function newInstance(className: 'String', arg0: object_t): string;
    function newInstance(className: 'String', arg0: string_t): string;
    function newInstance(className: 'String', arg0: object_array_t): string;
    function newInstance(className: 'String', arg0: object_array_t): string;
    function newInstance(className: 'String'): string;
    function newInstance(className: 'com.google.maps.GeoApiContext', arg0: Java.GeoApiContext$RequestHandler): Java.GeoApiContext;
    function newInstance(className: 'com.google.maps.GeoApiContext'): Java.GeoApiContext;
    function newInstance(className: 'com.google.maps.model.AddressComponent'): Java.AddressComponent;
    function newInstance(className: 'com.google.maps.model.AutocompletePrediction'): Java.AutocompletePrediction;
    function newInstance(className: 'com.google.maps.model.AutocompletePrediction$MatchedSubstring'): Java.AutocompletePrediction$MatchedSubstring;
    function newInstance(className: 'com.google.maps.model.AutocompletePrediction$Term'): Java.AutocompletePrediction$Term;
    function newInstance(className: 'com.google.maps.model.Bounds'): Java.Bounds;
    function newInstance(className: 'com.google.maps.model.DirectionsLeg'): Java.DirectionsLeg;
    function newInstance(className: 'com.google.maps.model.DirectionsResult'): Java.DirectionsResult;
    function newInstance(className: 'com.google.maps.model.DirectionsRoute'): Java.DirectionsRoute;
    function newInstance(className: 'com.google.maps.model.DirectionsStep'): Java.DirectionsStep;
    function newInstance(className: 'com.google.maps.model.Distance'): Java.Distance;
    function newInstance(className: 'com.google.maps.model.DistanceMatrix', arg0: array_t<string_t>, arg1: array_t<string_t>, arg2: array_t<Java.DistanceMatrixRow>): Java.DistanceMatrix;
    function newInstance(className: 'com.google.maps.model.DistanceMatrixElement'): Java.DistanceMatrixElement;
    function newInstance(className: 'com.google.maps.model.DistanceMatrixRow'): Java.DistanceMatrixRow;
    function newInstance(className: 'com.google.maps.model.Duration'): Java.Duration;
    function newInstance(className: 'com.google.maps.model.ElevationResult'): Java.ElevationResult;
    function newInstance(className: 'com.google.maps.model.EncodedPolyline', arg0: string_t): Java.EncodedPolyline;
    function newInstance(className: 'com.google.maps.model.EncodedPolyline', arg0: object_t): Java.EncodedPolyline;
    function newInstance(className: 'com.google.maps.model.Fare'): Java.Fare;
    function newInstance(className: 'com.google.maps.model.GeocodedWaypoint'): Java.GeocodedWaypoint;
    function newInstance(className: 'com.google.maps.model.GeocodingResult'): Java.GeocodingResult;
    function newInstance(className: 'com.google.maps.model.Geometry'): Java.Geometry;
    function newInstance(className: 'com.google.maps.model.LatLng', arg0: object_t, arg1: object_t): Java.LatLng;
    function newInstance(className: 'com.google.maps.model.OpeningHours'): Java.OpeningHours;
    function newInstance(className: 'com.google.maps.model.OpeningHours$Period'): Java.OpeningHours$Period;
    function newInstance(className: 'com.google.maps.model.OpeningHours$Period$OpenClose'): Java.OpeningHours$Period$OpenClose;
    function newInstance(className: 'com.google.maps.model.Photo'): Java.Photo;
    function newInstance(className: 'com.google.maps.model.PhotoResult'): Java.PhotoResult;
    function newInstance(className: 'com.google.maps.model.PlaceDetails'): Java.PlaceDetails;
    function newInstance(className: 'com.google.maps.model.PlaceDetails$AlternatePlaceIds'): Java.PlaceDetails$AlternatePlaceIds;
    function newInstance(className: 'com.google.maps.model.PlaceDetails$Review'): Java.PlaceDetails$Review;
    function newInstance(className: 'com.google.maps.model.PlaceDetails$Review$AspectRating'): Java.PlaceDetails$Review$AspectRating;
    function newInstance(className: 'com.google.maps.model.PlacesSearchResponse'): Java.PlacesSearchResponse;
    function newInstance(className: 'com.google.maps.model.PlacesSearchResult'): Java.PlacesSearchResult;
    function newInstance(className: 'com.google.maps.model.SnappedPoint'): Java.SnappedPoint;
    function newInstance(className: 'com.google.maps.model.SnappedSpeedLimitResponse'): Java.SnappedSpeedLimitResponse;
    function newInstance(className: 'com.google.maps.model.SpeedLimit'): Java.SpeedLimit;
    function newInstance(className: 'com.google.maps.model.StopDetails'): Java.StopDetails;
    function newInstance(className: 'com.google.maps.model.TransitAgency'): Java.TransitAgency;
    function newInstance(className: 'com.google.maps.model.TransitDetails'): Java.TransitDetails;
    function newInstance(className: 'com.google.maps.model.TransitLine'): Java.TransitLine;
    function newInstance(className: 'com.google.maps.model.Vehicle'): Java.Vehicle;
    function newInstance(className: 'java.lang.Object'): object_t;
    function newInstance(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: string_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_array_t, arg1: object_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_array_t, arg1: string_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_array_t, arg1: object_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_t): string;
    function newInstance(className: 'java.lang.String', arg0: string_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_array_t): string;
    function newInstance(className: 'java.lang.String', arg0: object_array_t): string;
    function newInstance(className: 'java.lang.String'): string;
    function newInstance(className: string, ...args: any[]): any;
    function newInstanceP(className: 'GeoApiContext', arg0: Java.GeoApiContext$RequestHandler): Promise<Java.GeoApiContext>;
    function newInstanceP(className: 'GeoApiContext'): Promise<Java.GeoApiContext>;
    function newInstanceP(className: 'AddressComponent'): Promise<Java.AddressComponent>;
    function newInstanceP(className: 'AutocompletePrediction'): Promise<Java.AutocompletePrediction>;
    function newInstanceP(className: 'AutocompletePrediction$MatchedSubstring'): Promise<Java.AutocompletePrediction$MatchedSubstring>;
    function newInstanceP(className: 'AutocompletePrediction$Term'): Promise<Java.AutocompletePrediction$Term>;
    function newInstanceP(className: 'Bounds'): Promise<Java.Bounds>;
    function newInstanceP(className: 'DirectionsLeg'): Promise<Java.DirectionsLeg>;
    function newInstanceP(className: 'DirectionsResult'): Promise<Java.DirectionsResult>;
    function newInstanceP(className: 'DirectionsRoute'): Promise<Java.DirectionsRoute>;
    function newInstanceP(className: 'DirectionsStep'): Promise<Java.DirectionsStep>;
    function newInstanceP(className: 'Distance'): Promise<Java.Distance>;
    function newInstanceP(className: 'DistanceMatrix', arg0: array_t<string_t>, arg1: array_t<string_t>, arg2: array_t<Java.DistanceMatrixRow>): Promise<Java.DistanceMatrix>;
    function newInstanceP(className: 'DistanceMatrixElement'): Promise<Java.DistanceMatrixElement>;
    function newInstanceP(className: 'DistanceMatrixRow'): Promise<Java.DistanceMatrixRow>;
    function newInstanceP(className: 'Duration'): Promise<Java.Duration>;
    function newInstanceP(className: 'ElevationResult'): Promise<Java.ElevationResult>;
    function newInstanceP(className: 'EncodedPolyline', arg0: string_t): Promise<Java.EncodedPolyline>;
    function newInstanceP(className: 'EncodedPolyline', arg0: object_t): Promise<Java.EncodedPolyline>;
    function newInstanceP(className: 'Fare'): Promise<Java.Fare>;
    function newInstanceP(className: 'GeocodedWaypoint'): Promise<Java.GeocodedWaypoint>;
    function newInstanceP(className: 'GeocodingResult'): Promise<Java.GeocodingResult>;
    function newInstanceP(className: 'Geometry'): Promise<Java.Geometry>;
    function newInstanceP(className: 'LatLng', arg0: object_t, arg1: object_t): Promise<Java.LatLng>;
    function newInstanceP(className: 'OpeningHours'): Promise<Java.OpeningHours>;
    function newInstanceP(className: 'OpeningHours$Period'): Promise<Java.OpeningHours$Period>;
    function newInstanceP(className: 'OpeningHours$Period$OpenClose'): Promise<Java.OpeningHours$Period$OpenClose>;
    function newInstanceP(className: 'Photo'): Promise<Java.Photo>;
    function newInstanceP(className: 'PhotoResult'): Promise<Java.PhotoResult>;
    function newInstanceP(className: 'PlaceDetails'): Promise<Java.PlaceDetails>;
    function newInstanceP(className: 'PlaceDetails$AlternatePlaceIds'): Promise<Java.PlaceDetails$AlternatePlaceIds>;
    function newInstanceP(className: 'PlaceDetails$Review'): Promise<Java.PlaceDetails$Review>;
    function newInstanceP(className: 'PlaceDetails$Review$AspectRating'): Promise<Java.PlaceDetails$Review$AspectRating>;
    function newInstanceP(className: 'PlacesSearchResponse'): Promise<Java.PlacesSearchResponse>;
    function newInstanceP(className: 'PlacesSearchResult'): Promise<Java.PlacesSearchResult>;
    function newInstanceP(className: 'SnappedPoint'): Promise<Java.SnappedPoint>;
    function newInstanceP(className: 'SnappedSpeedLimitResponse'): Promise<Java.SnappedSpeedLimitResponse>;
    function newInstanceP(className: 'SpeedLimit'): Promise<Java.SpeedLimit>;
    function newInstanceP(className: 'StopDetails'): Promise<Java.StopDetails>;
    function newInstanceP(className: 'TransitAgency'): Promise<Java.TransitAgency>;
    function newInstanceP(className: 'TransitDetails'): Promise<Java.TransitDetails>;
    function newInstanceP(className: 'TransitLine'): Promise<Java.TransitLine>;
    function newInstanceP(className: 'Vehicle'): Promise<Java.Vehicle>;
    function newInstanceP(className: 'Object'): Promise<object_t>;
    function newInstanceP(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: string_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_array_t, arg1: object_t, arg2: object_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_array_t, arg1: object_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_array_t, arg1: string_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_array_t, arg1: object_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: string_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_array_t): Promise<string>;
    function newInstanceP(className: 'String', arg0: object_array_t): Promise<string>;
    function newInstanceP(className: 'String'): Promise<string>;
    function newInstanceP(className: 'com.google.maps.GeoApiContext', arg0: Java.GeoApiContext$RequestHandler): Promise<Java.GeoApiContext>;
    function newInstanceP(className: 'com.google.maps.GeoApiContext'): Promise<Java.GeoApiContext>;
    function newInstanceP(className: 'com.google.maps.model.AddressComponent'): Promise<Java.AddressComponent>;
    function newInstanceP(className: 'com.google.maps.model.AutocompletePrediction'): Promise<Java.AutocompletePrediction>;
    function newInstanceP(className: 'com.google.maps.model.AutocompletePrediction$MatchedSubstring'): Promise<Java.AutocompletePrediction$MatchedSubstring>;
    function newInstanceP(className: 'com.google.maps.model.AutocompletePrediction$Term'): Promise<Java.AutocompletePrediction$Term>;
    function newInstanceP(className: 'com.google.maps.model.Bounds'): Promise<Java.Bounds>;
    function newInstanceP(className: 'com.google.maps.model.DirectionsLeg'): Promise<Java.DirectionsLeg>;
    function newInstanceP(className: 'com.google.maps.model.DirectionsResult'): Promise<Java.DirectionsResult>;
    function newInstanceP(className: 'com.google.maps.model.DirectionsRoute'): Promise<Java.DirectionsRoute>;
    function newInstanceP(className: 'com.google.maps.model.DirectionsStep'): Promise<Java.DirectionsStep>;
    function newInstanceP(className: 'com.google.maps.model.Distance'): Promise<Java.Distance>;
    function newInstanceP(className: 'com.google.maps.model.DistanceMatrix', arg0: array_t<string_t>, arg1: array_t<string_t>, arg2: array_t<Java.DistanceMatrixRow>): Promise<Java.DistanceMatrix>;
    function newInstanceP(className: 'com.google.maps.model.DistanceMatrixElement'): Promise<Java.DistanceMatrixElement>;
    function newInstanceP(className: 'com.google.maps.model.DistanceMatrixRow'): Promise<Java.DistanceMatrixRow>;
    function newInstanceP(className: 'com.google.maps.model.Duration'): Promise<Java.Duration>;
    function newInstanceP(className: 'com.google.maps.model.ElevationResult'): Promise<Java.ElevationResult>;
    function newInstanceP(className: 'com.google.maps.model.EncodedPolyline', arg0: string_t): Promise<Java.EncodedPolyline>;
    function newInstanceP(className: 'com.google.maps.model.EncodedPolyline', arg0: object_t): Promise<Java.EncodedPolyline>;
    function newInstanceP(className: 'com.google.maps.model.Fare'): Promise<Java.Fare>;
    function newInstanceP(className: 'com.google.maps.model.GeocodedWaypoint'): Promise<Java.GeocodedWaypoint>;
    function newInstanceP(className: 'com.google.maps.model.GeocodingResult'): Promise<Java.GeocodingResult>;
    function newInstanceP(className: 'com.google.maps.model.Geometry'): Promise<Java.Geometry>;
    function newInstanceP(className: 'com.google.maps.model.LatLng', arg0: object_t, arg1: object_t): Promise<Java.LatLng>;
    function newInstanceP(className: 'com.google.maps.model.OpeningHours'): Promise<Java.OpeningHours>;
    function newInstanceP(className: 'com.google.maps.model.OpeningHours$Period'): Promise<Java.OpeningHours$Period>;
    function newInstanceP(className: 'com.google.maps.model.OpeningHours$Period$OpenClose'): Promise<Java.OpeningHours$Period$OpenClose>;
    function newInstanceP(className: 'com.google.maps.model.Photo'): Promise<Java.Photo>;
    function newInstanceP(className: 'com.google.maps.model.PhotoResult'): Promise<Java.PhotoResult>;
    function newInstanceP(className: 'com.google.maps.model.PlaceDetails'): Promise<Java.PlaceDetails>;
    function newInstanceP(className: 'com.google.maps.model.PlaceDetails$AlternatePlaceIds'): Promise<Java.PlaceDetails$AlternatePlaceIds>;
    function newInstanceP(className: 'com.google.maps.model.PlaceDetails$Review'): Promise<Java.PlaceDetails$Review>;
    function newInstanceP(className: 'com.google.maps.model.PlaceDetails$Review$AspectRating'): Promise<Java.PlaceDetails$Review$AspectRating>;
    function newInstanceP(className: 'com.google.maps.model.PlacesSearchResponse'): Promise<Java.PlacesSearchResponse>;
    function newInstanceP(className: 'com.google.maps.model.PlacesSearchResult'): Promise<Java.PlacesSearchResult>;
    function newInstanceP(className: 'com.google.maps.model.SnappedPoint'): Promise<Java.SnappedPoint>;
    function newInstanceP(className: 'com.google.maps.model.SnappedSpeedLimitResponse'): Promise<Java.SnappedSpeedLimitResponse>;
    function newInstanceP(className: 'com.google.maps.model.SpeedLimit'): Promise<Java.SpeedLimit>;
    function newInstanceP(className: 'com.google.maps.model.StopDetails'): Promise<Java.StopDetails>;
    function newInstanceP(className: 'com.google.maps.model.TransitAgency'): Promise<Java.TransitAgency>;
    function newInstanceP(className: 'com.google.maps.model.TransitDetails'): Promise<Java.TransitDetails>;
    function newInstanceP(className: 'com.google.maps.model.TransitLine'): Promise<Java.TransitLine>;
    function newInstanceP(className: 'com.google.maps.model.Vehicle'): Promise<Java.Vehicle>;
    function newInstanceP(className: 'java.lang.Object'): Promise<object_t>;
    function newInstanceP(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: string_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_array_t, arg1: object_t, arg2: object_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_array_t, arg1: object_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_array_t, arg1: string_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_array_t, arg1: object_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: string_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_array_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String', arg0: object_array_t): Promise<string>;
    function newInstanceP(className: 'java.lang.String'): Promise<string>;
    function newInstanceP(className: string, ...args: any[]): Promise<any>;
    function newArray(className: 'FieldNamingPolicy', arg: Java.FieldNamingPolicy[]): array_t<com.google.gson.FieldNamingPolicy>;
    function newArray(className: 'DirectionsApi', arg: Java.DirectionsApi[]): array_t<com.google.maps.DirectionsApi>;
    function newArray(className: 'DirectionsApi$RouteRestriction', arg: Java.DirectionsApi$RouteRestriction[]): array_t<com.google.maps.DirectionsApi$RouteRestriction>;
    function newArray(className: 'DirectionsApiRequest', arg: Java.DirectionsApiRequest[]): array_t<com.google.maps.DirectionsApiRequest>;
    function newArray(className: 'GeoApiContext', arg: Java.GeoApiContext[]): array_t<com.google.maps.GeoApiContext>;
    function newArray(className: 'GeoApiContext$RequestHandler', arg: Java.GeoApiContext$RequestHandler[]): array_t<com.google.maps.GeoApiContext$RequestHandler>;
    function newArray(className: 'AddressComponent', arg: Java.AddressComponent[]): array_t<com.google.maps.model.AddressComponent>;
    function newArray(className: 'AddressComponentType', arg: Java.AddressComponentType[]): array_t<com.google.maps.model.AddressComponentType>;
    function newArray(className: 'AddressType', arg: Java.AddressType[]): array_t<com.google.maps.model.AddressType>;
    function newArray(className: 'AutocompletePrediction', arg: Java.AutocompletePrediction[]): array_t<com.google.maps.model.AutocompletePrediction>;
    function newArray(className: 'AutocompletePrediction$MatchedSubstring', arg: Java.AutocompletePrediction$MatchedSubstring[]): array_t<com.google.maps.model.AutocompletePrediction$MatchedSubstring>;
    function newArray(className: 'AutocompletePrediction$Term', arg: Java.AutocompletePrediction$Term[]): array_t<com.google.maps.model.AutocompletePrediction$Term>;
    function newArray(className: 'Bounds', arg: Java.Bounds[]): array_t<com.google.maps.model.Bounds>;
    function newArray(className: 'ComponentFilter', arg: Java.ComponentFilter[]): array_t<com.google.maps.model.ComponentFilter>;
    function newArray(className: 'DirectionsLeg', arg: Java.DirectionsLeg[]): array_t<com.google.maps.model.DirectionsLeg>;
    function newArray(className: 'DirectionsResult', arg: Java.DirectionsResult[]): array_t<com.google.maps.model.DirectionsResult>;
    function newArray(className: 'DirectionsRoute', arg: Java.DirectionsRoute[]): array_t<com.google.maps.model.DirectionsRoute>;
    function newArray(className: 'DirectionsStep', arg: Java.DirectionsStep[]): array_t<com.google.maps.model.DirectionsStep>;
    function newArray(className: 'Distance', arg: Java.Distance[]): array_t<com.google.maps.model.Distance>;
    function newArray(className: 'DistanceMatrix', arg: Java.DistanceMatrix[]): array_t<com.google.maps.model.DistanceMatrix>;
    function newArray(className: 'DistanceMatrixElement', arg: Java.DistanceMatrixElement[]): array_t<com.google.maps.model.DistanceMatrixElement>;
    function newArray(className: 'DistanceMatrixElementStatus', arg: Java.DistanceMatrixElementStatus[]): array_t<com.google.maps.model.DistanceMatrixElementStatus>;
    function newArray(className: 'DistanceMatrixRow', arg: Java.DistanceMatrixRow[]): array_t<com.google.maps.model.DistanceMatrixRow>;
    function newArray(className: 'Duration', arg: Java.Duration[]): array_t<com.google.maps.model.Duration>;
    function newArray(className: 'ElevationResult', arg: Java.ElevationResult[]): array_t<com.google.maps.model.ElevationResult>;
    function newArray(className: 'EncodedPolyline', arg: Java.EncodedPolyline[]): array_t<com.google.maps.model.EncodedPolyline>;
    function newArray(className: 'Fare', arg: Java.Fare[]): array_t<com.google.maps.model.Fare>;
    function newArray(className: 'GeocodedWaypoint', arg: Java.GeocodedWaypoint[]): array_t<com.google.maps.model.GeocodedWaypoint>;
    function newArray(className: 'GeocodedWaypointStatus', arg: Java.GeocodedWaypointStatus[]): array_t<com.google.maps.model.GeocodedWaypointStatus>;
    function newArray(className: 'GeocodingResult', arg: Java.GeocodingResult[]): array_t<com.google.maps.model.GeocodingResult>;
    function newArray(className: 'Geometry', arg: Java.Geometry[]): array_t<com.google.maps.model.Geometry>;
    function newArray(className: 'LatLng', arg: Java.LatLng[]): array_t<com.google.maps.model.LatLng>;
    function newArray(className: 'LocationType', arg: Java.LocationType[]): array_t<com.google.maps.model.LocationType>;
    function newArray(className: 'OpeningHours', arg: Java.OpeningHours[]): array_t<com.google.maps.model.OpeningHours>;
    function newArray(className: 'OpeningHours$Period', arg: Java.OpeningHours$Period[]): array_t<com.google.maps.model.OpeningHours$Period>;
    function newArray(className: 'OpeningHours$Period$OpenClose', arg: Java.OpeningHours$Period$OpenClose[]): array_t<com.google.maps.model.OpeningHours$Period$OpenClose>;
    function newArray(className: 'OpeningHours$Period$OpenClose$DayOfWeek', arg: Java.OpeningHours$Period$OpenClose$DayOfWeek[]): array_t<com.google.maps.model.OpeningHours$Period$OpenClose$DayOfWeek>;
    function newArray(className: 'Photo', arg: Java.Photo[]): array_t<com.google.maps.model.Photo>;
    function newArray(className: 'PhotoResult', arg: Java.PhotoResult[]): array_t<com.google.maps.model.PhotoResult>;
    function newArray(className: 'PlaceAutocompleteType', arg: Java.PlaceAutocompleteType[]): array_t<com.google.maps.model.PlaceAutocompleteType>;
    function newArray(className: 'PlaceDetails', arg: Java.PlaceDetails[]): array_t<com.google.maps.model.PlaceDetails>;
    function newArray(className: 'PlaceDetails$AlternatePlaceIds', arg: Java.PlaceDetails$AlternatePlaceIds[]): array_t<com.google.maps.model.PlaceDetails$AlternatePlaceIds>;
    function newArray(className: 'PlaceDetails$Review', arg: Java.PlaceDetails$Review[]): array_t<com.google.maps.model.PlaceDetails$Review>;
    function newArray(className: 'PlaceDetails$Review$AspectRating', arg: Java.PlaceDetails$Review$AspectRating[]): array_t<com.google.maps.model.PlaceDetails$Review$AspectRating>;
    function newArray(className: 'PlaceDetails$Review$AspectRating$RatingType', arg: Java.PlaceDetails$Review$AspectRating$RatingType[]): array_t<com.google.maps.model.PlaceDetails$Review$AspectRating$RatingType>;
    function newArray(className: 'PlaceIdScope', arg: Java.PlaceIdScope[]): array_t<com.google.maps.model.PlaceIdScope>;
    function newArray(className: 'PlacesSearchResponse', arg: Java.PlacesSearchResponse[]): array_t<com.google.maps.model.PlacesSearchResponse>;
    function newArray(className: 'PlacesSearchResult', arg: Java.PlacesSearchResult[]): array_t<com.google.maps.model.PlacesSearchResult>;
    function newArray(className: 'PlaceType', arg: Java.PlaceType[]): array_t<com.google.maps.model.PlaceType>;
    function newArray(className: 'PriceLevel', arg: Java.PriceLevel[]): array_t<com.google.maps.model.PriceLevel>;
    function newArray(className: 'RankBy', arg: Java.RankBy[]): array_t<com.google.maps.model.RankBy>;
    function newArray(className: 'SnappedPoint', arg: Java.SnappedPoint[]): array_t<com.google.maps.model.SnappedPoint>;
    function newArray(className: 'SnappedSpeedLimitResponse', arg: Java.SnappedSpeedLimitResponse[]): array_t<com.google.maps.model.SnappedSpeedLimitResponse>;
    function newArray(className: 'SpeedLimit', arg: Java.SpeedLimit[]): array_t<com.google.maps.model.SpeedLimit>;
    function newArray(className: 'StopDetails', arg: Java.StopDetails[]): array_t<com.google.maps.model.StopDetails>;
    function newArray(className: 'TrafficModel', arg: Java.TrafficModel[]): array_t<com.google.maps.model.TrafficModel>;
    function newArray(className: 'TransitAgency', arg: Java.TransitAgency[]): array_t<com.google.maps.model.TransitAgency>;
    function newArray(className: 'TransitDetails', arg: Java.TransitDetails[]): array_t<com.google.maps.model.TransitDetails>;
    function newArray(className: 'TransitLine', arg: Java.TransitLine[]): array_t<com.google.maps.model.TransitLine>;
    function newArray(className: 'TransitMode', arg: Java.TransitMode[]): array_t<com.google.maps.model.TransitMode>;
    function newArray(className: 'TransitRoutingPreference', arg: Java.TransitRoutingPreference[]): array_t<com.google.maps.model.TransitRoutingPreference>;
    function newArray(className: 'TravelMode', arg: Java.TravelMode[]): array_t<com.google.maps.model.TravelMode>;
    function newArray(className: 'Unit', arg: Java.Unit[]): array_t<com.google.maps.model.Unit>;
    function newArray(className: 'Vehicle', arg: Java.Vehicle[]): array_t<com.google.maps.model.Vehicle>;
    function newArray(className: 'VehicleType', arg: Java.VehicleType[]): array_t<com.google.maps.model.VehicleType>;
    function newArray(className: 'PendingResult', arg: Java.PendingResult[]): array_t<com.google.maps.PendingResult>;
    function newArray(className: 'PendingResult$Callback', arg: Java.PendingResult$Callback[]): array_t<com.google.maps.PendingResult$Callback>;
    function newArray(className: 'Object', arg: object_t[]): array_t<java.lang.Object>;
    function newArray(className: 'String', arg: string_t[]): array_t<java.lang.String>;
    function newArray(className: 'com.google.gson.FieldNamingPolicy', arg: Java.FieldNamingPolicy[]): array_t<com.google.gson.FieldNamingPolicy>;
    function newArray(className: 'com.google.maps.DirectionsApi', arg: Java.DirectionsApi[]): array_t<com.google.maps.DirectionsApi>;
    function newArray(className: 'com.google.maps.DirectionsApi$RouteRestriction', arg: Java.DirectionsApi$RouteRestriction[]): array_t<com.google.maps.DirectionsApi$RouteRestriction>;
    function newArray(className: 'com.google.maps.DirectionsApiRequest', arg: Java.DirectionsApiRequest[]): array_t<com.google.maps.DirectionsApiRequest>;
    function newArray(className: 'com.google.maps.GeoApiContext', arg: Java.GeoApiContext[]): array_t<com.google.maps.GeoApiContext>;
    function newArray(className: 'com.google.maps.GeoApiContext$RequestHandler', arg: Java.GeoApiContext$RequestHandler[]): array_t<com.google.maps.GeoApiContext$RequestHandler>;
    function newArray(className: 'com.google.maps.model.AddressComponent', arg: Java.AddressComponent[]): array_t<com.google.maps.model.AddressComponent>;
    function newArray(className: 'com.google.maps.model.AddressComponentType', arg: Java.AddressComponentType[]): array_t<com.google.maps.model.AddressComponentType>;
    function newArray(className: 'com.google.maps.model.AddressType', arg: Java.AddressType[]): array_t<com.google.maps.model.AddressType>;
    function newArray(className: 'com.google.maps.model.AutocompletePrediction', arg: Java.AutocompletePrediction[]): array_t<com.google.maps.model.AutocompletePrediction>;
    function newArray(className: 'com.google.maps.model.AutocompletePrediction$MatchedSubstring', arg: Java.AutocompletePrediction$MatchedSubstring[]): array_t<com.google.maps.model.AutocompletePrediction$MatchedSubstring>;
    function newArray(className: 'com.google.maps.model.AutocompletePrediction$Term', arg: Java.AutocompletePrediction$Term[]): array_t<com.google.maps.model.AutocompletePrediction$Term>;
    function newArray(className: 'com.google.maps.model.Bounds', arg: Java.Bounds[]): array_t<com.google.maps.model.Bounds>;
    function newArray(className: 'com.google.maps.model.ComponentFilter', arg: Java.ComponentFilter[]): array_t<com.google.maps.model.ComponentFilter>;
    function newArray(className: 'com.google.maps.model.DirectionsLeg', arg: Java.DirectionsLeg[]): array_t<com.google.maps.model.DirectionsLeg>;
    function newArray(className: 'com.google.maps.model.DirectionsResult', arg: Java.DirectionsResult[]): array_t<com.google.maps.model.DirectionsResult>;
    function newArray(className: 'com.google.maps.model.DirectionsRoute', arg: Java.DirectionsRoute[]): array_t<com.google.maps.model.DirectionsRoute>;
    function newArray(className: 'com.google.maps.model.DirectionsStep', arg: Java.DirectionsStep[]): array_t<com.google.maps.model.DirectionsStep>;
    function newArray(className: 'com.google.maps.model.Distance', arg: Java.Distance[]): array_t<com.google.maps.model.Distance>;
    function newArray(className: 'com.google.maps.model.DistanceMatrix', arg: Java.DistanceMatrix[]): array_t<com.google.maps.model.DistanceMatrix>;
    function newArray(className: 'com.google.maps.model.DistanceMatrixElement', arg: Java.DistanceMatrixElement[]): array_t<com.google.maps.model.DistanceMatrixElement>;
    function newArray(className: 'com.google.maps.model.DistanceMatrixElementStatus', arg: Java.DistanceMatrixElementStatus[]): array_t<com.google.maps.model.DistanceMatrixElementStatus>;
    function newArray(className: 'com.google.maps.model.DistanceMatrixRow', arg: Java.DistanceMatrixRow[]): array_t<com.google.maps.model.DistanceMatrixRow>;
    function newArray(className: 'com.google.maps.model.Duration', arg: Java.Duration[]): array_t<com.google.maps.model.Duration>;
    function newArray(className: 'com.google.maps.model.ElevationResult', arg: Java.ElevationResult[]): array_t<com.google.maps.model.ElevationResult>;
    function newArray(className: 'com.google.maps.model.EncodedPolyline', arg: Java.EncodedPolyline[]): array_t<com.google.maps.model.EncodedPolyline>;
    function newArray(className: 'com.google.maps.model.Fare', arg: Java.Fare[]): array_t<com.google.maps.model.Fare>;
    function newArray(className: 'com.google.maps.model.GeocodedWaypoint', arg: Java.GeocodedWaypoint[]): array_t<com.google.maps.model.GeocodedWaypoint>;
    function newArray(className: 'com.google.maps.model.GeocodedWaypointStatus', arg: Java.GeocodedWaypointStatus[]): array_t<com.google.maps.model.GeocodedWaypointStatus>;
    function newArray(className: 'com.google.maps.model.GeocodingResult', arg: Java.GeocodingResult[]): array_t<com.google.maps.model.GeocodingResult>;
    function newArray(className: 'com.google.maps.model.Geometry', arg: Java.Geometry[]): array_t<com.google.maps.model.Geometry>;
    function newArray(className: 'com.google.maps.model.LatLng', arg: Java.LatLng[]): array_t<com.google.maps.model.LatLng>;
    function newArray(className: 'com.google.maps.model.LocationType', arg: Java.LocationType[]): array_t<com.google.maps.model.LocationType>;
    function newArray(className: 'com.google.maps.model.OpeningHours', arg: Java.OpeningHours[]): array_t<com.google.maps.model.OpeningHours>;
    function newArray(className: 'com.google.maps.model.OpeningHours$Period', arg: Java.OpeningHours$Period[]): array_t<com.google.maps.model.OpeningHours$Period>;
    function newArray(className: 'com.google.maps.model.OpeningHours$Period$OpenClose', arg: Java.OpeningHours$Period$OpenClose[]): array_t<com.google.maps.model.OpeningHours$Period$OpenClose>;
    function newArray(className: 'com.google.maps.model.OpeningHours$Period$OpenClose$DayOfWeek', arg: Java.OpeningHours$Period$OpenClose$DayOfWeek[]): array_t<com.google.maps.model.OpeningHours$Period$OpenClose$DayOfWeek>;
    function newArray(className: 'com.google.maps.model.Photo', arg: Java.Photo[]): array_t<com.google.maps.model.Photo>;
    function newArray(className: 'com.google.maps.model.PhotoResult', arg: Java.PhotoResult[]): array_t<com.google.maps.model.PhotoResult>;
    function newArray(className: 'com.google.maps.model.PlaceAutocompleteType', arg: Java.PlaceAutocompleteType[]): array_t<com.google.maps.model.PlaceAutocompleteType>;
    function newArray(className: 'com.google.maps.model.PlaceDetails', arg: Java.PlaceDetails[]): array_t<com.google.maps.model.PlaceDetails>;
    function newArray(className: 'com.google.maps.model.PlaceDetails$AlternatePlaceIds', arg: Java.PlaceDetails$AlternatePlaceIds[]): array_t<com.google.maps.model.PlaceDetails$AlternatePlaceIds>;
    function newArray(className: 'com.google.maps.model.PlaceDetails$Review', arg: Java.PlaceDetails$Review[]): array_t<com.google.maps.model.PlaceDetails$Review>;
    function newArray(className: 'com.google.maps.model.PlaceDetails$Review$AspectRating', arg: Java.PlaceDetails$Review$AspectRating[]): array_t<com.google.maps.model.PlaceDetails$Review$AspectRating>;
    function newArray(className: 'com.google.maps.model.PlaceDetails$Review$AspectRating$RatingType', arg: Java.PlaceDetails$Review$AspectRating$RatingType[]): array_t<com.google.maps.model.PlaceDetails$Review$AspectRating$RatingType>;
    function newArray(className: 'com.google.maps.model.PlaceIdScope', arg: Java.PlaceIdScope[]): array_t<com.google.maps.model.PlaceIdScope>;
    function newArray(className: 'com.google.maps.model.PlacesSearchResponse', arg: Java.PlacesSearchResponse[]): array_t<com.google.maps.model.PlacesSearchResponse>;
    function newArray(className: 'com.google.maps.model.PlacesSearchResult', arg: Java.PlacesSearchResult[]): array_t<com.google.maps.model.PlacesSearchResult>;
    function newArray(className: 'com.google.maps.model.PlaceType', arg: Java.PlaceType[]): array_t<com.google.maps.model.PlaceType>;
    function newArray(className: 'com.google.maps.model.PriceLevel', arg: Java.PriceLevel[]): array_t<com.google.maps.model.PriceLevel>;
    function newArray(className: 'com.google.maps.model.RankBy', arg: Java.RankBy[]): array_t<com.google.maps.model.RankBy>;
    function newArray(className: 'com.google.maps.model.SnappedPoint', arg: Java.SnappedPoint[]): array_t<com.google.maps.model.SnappedPoint>;
    function newArray(className: 'com.google.maps.model.SnappedSpeedLimitResponse', arg: Java.SnappedSpeedLimitResponse[]): array_t<com.google.maps.model.SnappedSpeedLimitResponse>;
    function newArray(className: 'com.google.maps.model.SpeedLimit', arg: Java.SpeedLimit[]): array_t<com.google.maps.model.SpeedLimit>;
    function newArray(className: 'com.google.maps.model.StopDetails', arg: Java.StopDetails[]): array_t<com.google.maps.model.StopDetails>;
    function newArray(className: 'com.google.maps.model.TrafficModel', arg: Java.TrafficModel[]): array_t<com.google.maps.model.TrafficModel>;
    function newArray(className: 'com.google.maps.model.TransitAgency', arg: Java.TransitAgency[]): array_t<com.google.maps.model.TransitAgency>;
    function newArray(className: 'com.google.maps.model.TransitDetails', arg: Java.TransitDetails[]): array_t<com.google.maps.model.TransitDetails>;
    function newArray(className: 'com.google.maps.model.TransitLine', arg: Java.TransitLine[]): array_t<com.google.maps.model.TransitLine>;
    function newArray(className: 'com.google.maps.model.TransitMode', arg: Java.TransitMode[]): array_t<com.google.maps.model.TransitMode>;
    function newArray(className: 'com.google.maps.model.TransitRoutingPreference', arg: Java.TransitRoutingPreference[]): array_t<com.google.maps.model.TransitRoutingPreference>;
    function newArray(className: 'com.google.maps.model.TravelMode', arg: Java.TravelMode[]): array_t<com.google.maps.model.TravelMode>;
    function newArray(className: 'com.google.maps.model.Unit', arg: Java.Unit[]): array_t<com.google.maps.model.Unit>;
    function newArray(className: 'com.google.maps.model.Vehicle', arg: Java.Vehicle[]): array_t<com.google.maps.model.Vehicle>;
    function newArray(className: 'com.google.maps.model.VehicleType', arg: Java.VehicleType[]): array_t<com.google.maps.model.VehicleType>;
    function newArray(className: 'com.google.maps.PendingResult', arg: Java.PendingResult[]): array_t<com.google.maps.PendingResult>;
    function newArray(className: 'com.google.maps.PendingResult$Callback', arg: Java.PendingResult$Callback[]): array_t<com.google.maps.PendingResult$Callback>;
    function newArray(className: 'java.lang.Object', arg: object_t[]): array_t<java.lang.Object>;
    function newArray(className: 'java.lang.String', arg: string_t[]): array_t<java.lang.String>;
    function newArray<T>(className: string, arg: any[]): array_t<T>;
    interface longValue_t extends Number {
        longValue: string;
    }
    type string_t = string | Java.java.lang.String;
    type object_t = Java.java.lang.Object | string | boolean | number | longValue_t;
    type long_t = number | longValue_t;
    type boolean_t = boolean;
    type short_t = number;
    type integer_t = number;
    type double_t = number;
    type float_t = number;
    type number_t = number;
    interface array_t<T> extends Java.java.lang.Object {
        __dummy: T;
    }
    type object_array_t = array_t<Java.java.lang.Object> | object_t[];
    export import FieldNamingPolicy = com.google.gson.FieldNamingPolicy;
    export import DirectionsApi = com.google.maps.DirectionsApi;
    export import DirectionsApi$RouteRestriction = com.google.maps.DirectionsApi$RouteRestriction;
    export import DirectionsApiRequest = com.google.maps.DirectionsApiRequest;
    export import GeoApiContext = com.google.maps.GeoApiContext;
    export import GeoApiContext$RequestHandler = com.google.maps.GeoApiContext$RequestHandler;
    export import AddressComponent = com.google.maps.model.AddressComponent;
    export import AddressComponentType = com.google.maps.model.AddressComponentType;
    export import AddressType = com.google.maps.model.AddressType;
    export import AutocompletePrediction = com.google.maps.model.AutocompletePrediction;
    export import AutocompletePrediction$MatchedSubstring = com.google.maps.model.AutocompletePrediction$MatchedSubstring;
    export import AutocompletePrediction$Term = com.google.maps.model.AutocompletePrediction$Term;
    export import Bounds = com.google.maps.model.Bounds;
    export import ComponentFilter = com.google.maps.model.ComponentFilter;
    export import DirectionsLeg = com.google.maps.model.DirectionsLeg;
    export import DirectionsResult = com.google.maps.model.DirectionsResult;
    export import DirectionsRoute = com.google.maps.model.DirectionsRoute;
    export import DirectionsStep = com.google.maps.model.DirectionsStep;
    export import Distance = com.google.maps.model.Distance;
    export import DistanceMatrix = com.google.maps.model.DistanceMatrix;
    export import DistanceMatrixElement = com.google.maps.model.DistanceMatrixElement;
    export import DistanceMatrixElementStatus = com.google.maps.model.DistanceMatrixElementStatus;
    export import DistanceMatrixRow = com.google.maps.model.DistanceMatrixRow;
    export import Duration = com.google.maps.model.Duration;
    export import ElevationResult = com.google.maps.model.ElevationResult;
    export import EncodedPolyline = com.google.maps.model.EncodedPolyline;
    export import Fare = com.google.maps.model.Fare;
    export import GeocodedWaypoint = com.google.maps.model.GeocodedWaypoint;
    export import GeocodedWaypointStatus = com.google.maps.model.GeocodedWaypointStatus;
    export import GeocodingResult = com.google.maps.model.GeocodingResult;
    export import Geometry = com.google.maps.model.Geometry;
    export import LatLng = com.google.maps.model.LatLng;
    export import LocationType = com.google.maps.model.LocationType;
    export import OpeningHours = com.google.maps.model.OpeningHours;
    export import OpeningHours$Period = com.google.maps.model.OpeningHours$Period;
    export import OpeningHours$Period$OpenClose = com.google.maps.model.OpeningHours$Period$OpenClose;
    export import OpeningHours$Period$OpenClose$DayOfWeek = com.google.maps.model.OpeningHours$Period$OpenClose$DayOfWeek;
    export import Photo = com.google.maps.model.Photo;
    export import PhotoResult = com.google.maps.model.PhotoResult;
    export import PlaceAutocompleteType = com.google.maps.model.PlaceAutocompleteType;
    export import PlaceDetails = com.google.maps.model.PlaceDetails;
    export import PlaceDetails$AlternatePlaceIds = com.google.maps.model.PlaceDetails$AlternatePlaceIds;
    export import PlaceDetails$Review = com.google.maps.model.PlaceDetails$Review;
    export import PlaceDetails$Review$AspectRating = com.google.maps.model.PlaceDetails$Review$AspectRating;
    export import PlaceDetails$Review$AspectRating$RatingType = com.google.maps.model.PlaceDetails$Review$AspectRating$RatingType;
    export import PlaceIdScope = com.google.maps.model.PlaceIdScope;
    export import PlacesSearchResponse = com.google.maps.model.PlacesSearchResponse;
    export import PlacesSearchResult = com.google.maps.model.PlacesSearchResult;
    export import PlaceType = com.google.maps.model.PlaceType;
    export import PriceLevel = com.google.maps.model.PriceLevel;
    export import RankBy = com.google.maps.model.RankBy;
    export import SnappedPoint = com.google.maps.model.SnappedPoint;
    export import SnappedSpeedLimitResponse = com.google.maps.model.SnappedSpeedLimitResponse;
    export import SpeedLimit = com.google.maps.model.SpeedLimit;
    export import StopDetails = com.google.maps.model.StopDetails;
    export import TrafficModel = com.google.maps.model.TrafficModel;
    export import TransitAgency = com.google.maps.model.TransitAgency;
    export import TransitDetails = com.google.maps.model.TransitDetails;
    export import TransitLine = com.google.maps.model.TransitLine;
    export import TransitMode = com.google.maps.model.TransitMode;
    export import TransitRoutingPreference = com.google.maps.model.TransitRoutingPreference;
    export import TravelMode = com.google.maps.model.TravelMode;
    export import Unit = com.google.maps.model.Unit;
    export import Vehicle = com.google.maps.model.Vehicle;
    export import VehicleType = com.google.maps.model.VehicleType;
    export import PendingResult = com.google.maps.PendingResult;
    export import PendingResult$Callback = com.google.maps.PendingResult$Callback;
    export import Object = java.lang.Object;
    export import String = java.lang.String;
    module com.google.gson {
        interface FieldNamingPolicy extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            translateNameA(arg0: object_t, cb: Callback<string>): void;
            translateName(arg0: object_t): string;
            translateNameP(arg0: object_t): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module FieldNamingPolicy {
            interface Static {
                IDENTITY: Java.FieldNamingPolicy;
                UPPER_CAMEL_CASE: Java.FieldNamingPolicy;
                UPPER_CAMEL_CASE_WITH_SPACES: Java.FieldNamingPolicy;
                LOWER_CASE_WITH_UNDERSCORES: Java.FieldNamingPolicy;
                LOWER_CASE_WITH_DASHES: Java.FieldNamingPolicy;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.FieldNamingPolicy>): void;
                valueOf(arg0: string_t): Java.FieldNamingPolicy;
                valueOfP(arg0: string_t): Promise<Java.FieldNamingPolicy>;
                valuesA(cb: Callback<Java.FieldNamingPolicy[]>): void;
                values(): Java.FieldNamingPolicy[];
                valuesP(): Promise<Java.FieldNamingPolicy[]>;
            }
        }
    }
    module com.google.maps {
        interface DirectionsApi extends Java.java.lang.Object {
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module DirectionsApi {
            interface Static {
                class: Java.Object;
                getDirectionsA(arg0: Java.GeoApiContext, arg1: string_t, arg2: string_t, cb: Callback<Java.DirectionsApiRequest>): void;
                getDirections(arg0: Java.GeoApiContext, arg1: string_t, arg2: string_t): Java.DirectionsApiRequest;
                getDirectionsP(arg0: Java.GeoApiContext, arg1: string_t, arg2: string_t): Promise<Java.DirectionsApiRequest>;
                newRequestA(arg0: Java.GeoApiContext, cb: Callback<Java.DirectionsApiRequest>): void;
                newRequest(arg0: Java.GeoApiContext): Java.DirectionsApiRequest;
                newRequestP(arg0: Java.GeoApiContext): Promise<Java.DirectionsApiRequest>;
            }
        }
    }
    module com.google.maps {
        interface DirectionsApi$RouteRestriction extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module DirectionsApi$RouteRestriction {
            interface Static {
                TOLLS: Java.DirectionsApi$RouteRestriction;
                HIGHWAYS: Java.DirectionsApi$RouteRestriction;
                FERRIES: Java.DirectionsApi$RouteRestriction;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.DirectionsApi$RouteRestriction>): void;
                valueOf(arg0: string_t): Java.DirectionsApi$RouteRestriction;
                valueOfP(arg0: string_t): Promise<Java.DirectionsApi$RouteRestriction>;
                valuesA(cb: Callback<Java.DirectionsApi$RouteRestriction[]>): void;
                values(): Java.DirectionsApi$RouteRestriction[];
                valuesP(): Promise<Java.DirectionsApi$RouteRestriction[]>;
            }
        }
    }
    module com.google.maps {
        interface DirectionsApiRequest extends Java.java.lang.Object {
            alternativesA(arg0: object_t, cb: Callback<Java.DirectionsApiRequest>): void;
            alternatives(arg0: object_t): Java.DirectionsApiRequest;
            alternativesP(arg0: object_t): Promise<Java.DirectionsApiRequest>;
            arrivalTimeA(arg0: object_t, cb: Callback<Java.DirectionsApiRequest>): void;
            arrivalTime(arg0: object_t): Java.DirectionsApiRequest;
            arrivalTimeP(arg0: object_t): Promise<Java.DirectionsApiRequest>;
            avoidA(arg0: array_t<Java.DirectionsApi$RouteRestriction>, cb: Callback<Java.DirectionsApiRequest>): void;
            avoid(...arg0: Java.DirectionsApi$RouteRestriction[]): Java.DirectionsApiRequest;
            avoid(arg0: array_t<Java.DirectionsApi$RouteRestriction>): Java.DirectionsApiRequest;
            avoidP(...arg0: Java.DirectionsApi$RouteRestriction[]): Promise<Java.DirectionsApiRequest>;
            avoidP(arg0: array_t<Java.DirectionsApi$RouteRestriction>): Promise<Java.DirectionsApiRequest>;
            awaitA(cb: Callback<object_t>): void;
            await(): object_t;
            awaitP(): Promise<object_t>;
            awaitIgnoreErrorA(cb: Callback<object_t>): void;
            awaitIgnoreError(): object_t;
            awaitIgnoreErrorP(): Promise<object_t>;
            cancelA(cb: Callback<void>): void;
            cancel(): void;
            cancelP(): Promise<void>;
            channelA(arg0: string_t, cb: Callback<object_t>): void;
            channel(arg0: string_t): object_t;
            channelP(arg0: string_t): Promise<object_t>;
            departureTimeA(arg0: object_t, cb: Callback<Java.DirectionsApiRequest>): void;
            departureTime(arg0: object_t): Java.DirectionsApiRequest;
            departureTimeP(arg0: object_t): Promise<Java.DirectionsApiRequest>;
            destinationA(arg0: Java.LatLng, cb: Callback<Java.DirectionsApiRequest>): void;
            destination(arg0: Java.LatLng): Java.DirectionsApiRequest;
            destinationP(arg0: Java.LatLng): Promise<Java.DirectionsApiRequest>;
            destinationA(arg0: string_t, cb: Callback<Java.DirectionsApiRequest>): void;
            destination(arg0: string_t): Java.DirectionsApiRequest;
            destinationP(arg0: string_t): Promise<Java.DirectionsApiRequest>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            languageA(arg0: string_t, cb: Callback<object_t>): void;
            language(arg0: string_t): object_t;
            languageP(arg0: string_t): Promise<object_t>;
            modeA(arg0: Java.TravelMode, cb: Callback<Java.DirectionsApiRequest>): void;
            mode(arg0: Java.TravelMode): Java.DirectionsApiRequest;
            modeP(arg0: Java.TravelMode): Promise<Java.DirectionsApiRequest>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            optimizeWaypointsA(arg0: object_t, cb: Callback<Java.DirectionsApiRequest>): void;
            optimizeWaypoints(arg0: object_t): Java.DirectionsApiRequest;
            optimizeWaypointsP(arg0: object_t): Promise<Java.DirectionsApiRequest>;
            originA(arg0: Java.LatLng, cb: Callback<Java.DirectionsApiRequest>): void;
            origin(arg0: Java.LatLng): Java.DirectionsApiRequest;
            originP(arg0: Java.LatLng): Promise<Java.DirectionsApiRequest>;
            originA(arg0: string_t, cb: Callback<Java.DirectionsApiRequest>): void;
            origin(arg0: string_t): Java.DirectionsApiRequest;
            originP(arg0: string_t): Promise<Java.DirectionsApiRequest>;
            regionA(arg0: string_t, cb: Callback<Java.DirectionsApiRequest>): void;
            region(arg0: string_t): Java.DirectionsApiRequest;
            regionP(arg0: string_t): Promise<Java.DirectionsApiRequest>;
            setCallbackA(arg0: Java.PendingResult$Callback, cb: Callback<void>): void;
            setCallback(arg0: Java.PendingResult$Callback): void;
            setCallbackP(arg0: Java.PendingResult$Callback): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            trafficModelA(arg0: Java.TrafficModel, cb: Callback<Java.DirectionsApiRequest>): void;
            trafficModel(arg0: Java.TrafficModel): Java.DirectionsApiRequest;
            trafficModelP(arg0: Java.TrafficModel): Promise<Java.DirectionsApiRequest>;
            transitModeA(arg0: array_t<Java.TransitMode>, cb: Callback<Java.DirectionsApiRequest>): void;
            transitMode(...arg0: Java.TransitMode[]): Java.DirectionsApiRequest;
            transitMode(arg0: array_t<Java.TransitMode>): Java.DirectionsApiRequest;
            transitModeP(...arg0: Java.TransitMode[]): Promise<Java.DirectionsApiRequest>;
            transitModeP(arg0: array_t<Java.TransitMode>): Promise<Java.DirectionsApiRequest>;
            transitRoutingPreferenceA(arg0: Java.TransitRoutingPreference, cb: Callback<Java.DirectionsApiRequest>): void;
            transitRoutingPreference(arg0: Java.TransitRoutingPreference): Java.DirectionsApiRequest;
            transitRoutingPreferenceP(arg0: Java.TransitRoutingPreference): Promise<Java.DirectionsApiRequest>;
            unitsA(arg0: Java.Unit, cb: Callback<Java.DirectionsApiRequest>): void;
            units(arg0: Java.Unit): Java.DirectionsApiRequest;
            unitsP(arg0: Java.Unit): Promise<Java.DirectionsApiRequest>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
            waypointsA(arg0: array_t<string_t>, cb: Callback<Java.DirectionsApiRequest>): void;
            waypoints(...arg0: string_t[]): Java.DirectionsApiRequest;
            waypoints(arg0: array_t<string_t>): Java.DirectionsApiRequest;
            waypointsP(...arg0: string_t[]): Promise<Java.DirectionsApiRequest>;
            waypointsP(arg0: array_t<string_t>): Promise<Java.DirectionsApiRequest>;
        }
        module DirectionsApiRequest {
            interface Static {
                class: Java.Object;
            }
        }
    }
    module com.google.maps {
        interface GeoApiContext extends Java.java.lang.Object {
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            setApiKeyA(arg0: string_t, cb: Callback<Java.GeoApiContext>): void;
            setApiKey(arg0: string_t): Java.GeoApiContext;
            setApiKeyP(arg0: string_t): Promise<Java.GeoApiContext>;
            setChannelA(arg0: string_t, cb: Callback<Java.GeoApiContext>): void;
            setChannel(arg0: string_t): Java.GeoApiContext;
            setChannelP(arg0: string_t): Promise<Java.GeoApiContext>;
            setConnectTimeoutA(arg0: object_t, arg1: object_t, cb: Callback<Java.GeoApiContext>): void;
            setConnectTimeout(arg0: object_t, arg1: object_t): Java.GeoApiContext;
            setConnectTimeoutP(arg0: object_t, arg1: object_t): Promise<Java.GeoApiContext>;
            setEnterpriseCredentialsA(arg0: string_t, arg1: string_t, cb: Callback<Java.GeoApiContext>): void;
            setEnterpriseCredentials(arg0: string_t, arg1: string_t): Java.GeoApiContext;
            setEnterpriseCredentialsP(arg0: string_t, arg1: string_t): Promise<Java.GeoApiContext>;
            setProxyA(arg0: object_t, cb: Callback<Java.GeoApiContext>): void;
            setProxy(arg0: object_t): Java.GeoApiContext;
            setProxyP(arg0: object_t): Promise<Java.GeoApiContext>;
            setQueryRateLimitA(arg0: object_t, arg1: object_t, cb: Callback<Java.GeoApiContext>): void;
            setQueryRateLimit(arg0: object_t, arg1: object_t): Java.GeoApiContext;
            setQueryRateLimitP(arg0: object_t, arg1: object_t): Promise<Java.GeoApiContext>;
            setQueryRateLimitA(arg0: object_t, cb: Callback<Java.GeoApiContext>): void;
            setQueryRateLimit(arg0: object_t): Java.GeoApiContext;
            setQueryRateLimitP(arg0: object_t): Promise<Java.GeoApiContext>;
            setReadTimeoutA(arg0: object_t, arg1: object_t, cb: Callback<Java.GeoApiContext>): void;
            setReadTimeout(arg0: object_t, arg1: object_t): Java.GeoApiContext;
            setReadTimeoutP(arg0: object_t, arg1: object_t): Promise<Java.GeoApiContext>;
            setRetryTimeoutA(arg0: object_t, arg1: object_t, cb: Callback<Java.GeoApiContext>): void;
            setRetryTimeout(arg0: object_t, arg1: object_t): Java.GeoApiContext;
            setRetryTimeoutP(arg0: object_t, arg1: object_t): Promise<Java.GeoApiContext>;
            setWriteTimeoutA(arg0: object_t, arg1: object_t, cb: Callback<Java.GeoApiContext>): void;
            setWriteTimeout(arg0: object_t, arg1: object_t): Java.GeoApiContext;
            setWriteTimeoutP(arg0: object_t, arg1: object_t): Promise<Java.GeoApiContext>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module GeoApiContext {
            interface Static {
                class: Java.Object;
                new (arg0: Java.GeoApiContext$RequestHandler): com.google.maps.GeoApiContext;
                new (): com.google.maps.GeoApiContext;
            }
        }
    }
    module com.google.maps {
        interface GeoApiContext$RequestHandler extends Java.java.lang.Object {
            handleA(arg0: string_t, arg1: string_t, arg2: string_t, arg3: object_t, arg4: Java.FieldNamingPolicy, arg5: object_t, cb: Callback<Java.PendingResult>): void;
            handle(arg0: string_t, arg1: string_t, arg2: string_t, arg3: object_t, arg4: Java.FieldNamingPolicy, arg5: object_t): Java.PendingResult;
            handleP(arg0: string_t, arg1: string_t, arg2: string_t, arg3: object_t, arg4: Java.FieldNamingPolicy, arg5: object_t): Promise<Java.PendingResult>;
            setConnectTimeoutA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            setConnectTimeout(arg0: object_t, arg1: object_t): void;
            setConnectTimeoutP(arg0: object_t, arg1: object_t): Promise<void>;
            setProxyA(arg0: object_t, cb: Callback<void>): void;
            setProxy(arg0: object_t): void;
            setProxyP(arg0: object_t): Promise<void>;
            setQueriesPerSecondA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            setQueriesPerSecond(arg0: object_t, arg1: object_t): void;
            setQueriesPerSecondP(arg0: object_t, arg1: object_t): Promise<void>;
            setQueriesPerSecondA(arg0: object_t, cb: Callback<void>): void;
            setQueriesPerSecond(arg0: object_t): void;
            setQueriesPerSecondP(arg0: object_t): Promise<void>;
            setReadTimeoutA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            setReadTimeout(arg0: object_t, arg1: object_t): void;
            setReadTimeoutP(arg0: object_t, arg1: object_t): Promise<void>;
            setWriteTimeoutA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            setWriteTimeout(arg0: object_t, arg1: object_t): void;
            setWriteTimeoutP(arg0: object_t, arg1: object_t): Promise<void>;
        }
        module GeoApiContext$RequestHandler {
            interface Static {
                class: Java.Object;
            }
        }
    }
    module com.google.maps.model {
        interface AddressComponent extends Java.java.lang.Object {
            longName: string;
            shortName: string;
            types: Java.AddressComponentType[];
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module AddressComponent {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.AddressComponent;
            }
        }
    }
    module com.google.maps.model {
        interface AddressComponentType extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toCanonicalLiteralA(cb: Callback<string>): void;
            toCanonicalLiteral(): string;
            toCanonicalLiteralP(): Promise<string>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module AddressComponentType {
            interface Static {
                STREET_ADDRESS: Java.AddressComponentType;
                ROUTE: Java.AddressComponentType;
                INTERSECTION: Java.AddressComponentType;
                POLITICAL: Java.AddressComponentType;
                COUNTRY: Java.AddressComponentType;
                ADMINISTRATIVE_AREA_LEVEL_1: Java.AddressComponentType;
                ADMINISTRATIVE_AREA_LEVEL_2: Java.AddressComponentType;
                ADMINISTRATIVE_AREA_LEVEL_3: Java.AddressComponentType;
                ADMINISTRATIVE_AREA_LEVEL_4: Java.AddressComponentType;
                ADMINISTRATIVE_AREA_LEVEL_5: Java.AddressComponentType;
                COLLOQUIAL_AREA: Java.AddressComponentType;
                LOCALITY: Java.AddressComponentType;
                SUBLOCALITY: Java.AddressComponentType;
                SUBLOCALITY_LEVEL_1: Java.AddressComponentType;
                SUBLOCALITY_LEVEL_2: Java.AddressComponentType;
                SUBLOCALITY_LEVEL_3: Java.AddressComponentType;
                SUBLOCALITY_LEVEL_4: Java.AddressComponentType;
                SUBLOCALITY_LEVEL_5: Java.AddressComponentType;
                NEIGHBORHOOD: Java.AddressComponentType;
                PREMISE: Java.AddressComponentType;
                SUBPREMISE: Java.AddressComponentType;
                POSTAL_CODE: Java.AddressComponentType;
                POSTAL_CODE_PREFIX: Java.AddressComponentType;
                POSTAL_CODE_SUFFIX: Java.AddressComponentType;
                NATURAL_FEATURE: Java.AddressComponentType;
                AIRPORT: Java.AddressComponentType;
                PARK: Java.AddressComponentType;
                POINT_OF_INTEREST: Java.AddressComponentType;
                FLOOR: Java.AddressComponentType;
                ESTABLISHMENT: Java.AddressComponentType;
                PARKING: Java.AddressComponentType;
                POST_BOX: Java.AddressComponentType;
                POSTAL_TOWN: Java.AddressComponentType;
                ROOM: Java.AddressComponentType;
                STREET_NUMBER: Java.AddressComponentType;
                BUS_STATION: Java.AddressComponentType;
                TRAIN_STATION: Java.AddressComponentType;
                SUBWAY_STATION: Java.AddressComponentType;
                TRANSIT_STATION: Java.AddressComponentType;
                WARD: Java.AddressComponentType;
                UNKNOWN: Java.AddressComponentType;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.AddressComponentType>): void;
                valueOf(arg0: string_t): Java.AddressComponentType;
                valueOfP(arg0: string_t): Promise<Java.AddressComponentType>;
                valuesA(cb: Callback<Java.AddressComponentType[]>): void;
                values(): Java.AddressComponentType[];
                valuesP(): Promise<Java.AddressComponentType[]>;
            }
        }
    }
    module com.google.maps.model {
        interface AddressType extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toCanonicalLiteralA(cb: Callback<string>): void;
            toCanonicalLiteral(): string;
            toCanonicalLiteralP(): Promise<string>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module AddressType {
            interface Static {
                STREET_ADDRESS: Java.AddressType;
                ROUTE: Java.AddressType;
                INTERSECTION: Java.AddressType;
                POLITICAL: Java.AddressType;
                COUNTRY: Java.AddressType;
                ADMINISTRATIVE_AREA_LEVEL_1: Java.AddressType;
                ADMINISTRATIVE_AREA_LEVEL_2: Java.AddressType;
                ADMINISTRATIVE_AREA_LEVEL_3: Java.AddressType;
                ADMINISTRATIVE_AREA_LEVEL_4: Java.AddressType;
                ADMINISTRATIVE_AREA_LEVEL_5: Java.AddressType;
                COLLOQUIAL_AREA: Java.AddressType;
                LOCALITY: Java.AddressType;
                SUBLOCALITY: Java.AddressType;
                SUBLOCALITY_LEVEL_1: Java.AddressType;
                SUBLOCALITY_LEVEL_2: Java.AddressType;
                SUBLOCALITY_LEVEL_3: Java.AddressType;
                SUBLOCALITY_LEVEL_4: Java.AddressType;
                SUBLOCALITY_LEVEL_5: Java.AddressType;
                NEIGHBORHOOD: Java.AddressType;
                PREMISE: Java.AddressType;
                SUBPREMISE: Java.AddressType;
                POSTAL_CODE: Java.AddressType;
                NATURAL_FEATURE: Java.AddressType;
                AIRPORT: Java.AddressType;
                UNIVERSITY: Java.AddressType;
                PARK: Java.AddressType;
                POINT_OF_INTEREST: Java.AddressType;
                ESTABLISHMENT: Java.AddressType;
                BUS_STATION: Java.AddressType;
                TRAIN_STATION: Java.AddressType;
                SUBWAY_STATION: Java.AddressType;
                TRANSIT_STATION: Java.AddressType;
                CHURCH: Java.AddressType;
                FINANCE: Java.AddressType;
                POST_OFFICE: Java.AddressType;
                PLACE_OF_WORSHIP: Java.AddressType;
                WARD: Java.AddressType;
                POSTAL_TOWN: Java.AddressType;
                UNKNOWN: Java.AddressType;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.AddressType>): void;
                valueOf(arg0: string_t): Java.AddressType;
                valueOfP(arg0: string_t): Promise<Java.AddressType>;
                valuesA(cb: Callback<Java.AddressType[]>): void;
                values(): Java.AddressType[];
                valuesP(): Promise<Java.AddressType[]>;
            }
        }
    }
    module com.google.maps.model {
        interface AutocompletePrediction extends Java.java.lang.Object {
            description: string;
            placeId: string;
            types: string[];
            terms: Java.AutocompletePrediction$Term[];
            matchedSubstrings: Java.AutocompletePrediction$MatchedSubstring[];
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module AutocompletePrediction {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.AutocompletePrediction;
            }
        }
    }
    module com.google.maps.model {
        interface AutocompletePrediction$MatchedSubstring extends Java.java.lang.Object {
            length: object_t;
            offset: object_t;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module AutocompletePrediction$MatchedSubstring {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.AutocompletePrediction$MatchedSubstring;
            }
        }
    }
    module com.google.maps.model {
        interface AutocompletePrediction$Term extends Java.java.lang.Object {
            offset: object_t;
            value: string;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module AutocompletePrediction$Term {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.AutocompletePrediction$Term;
            }
        }
    }
    module com.google.maps.model {
        interface Bounds extends Java.java.lang.Object {
            northeast: Java.LatLng;
            southwest: Java.LatLng;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module Bounds {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.Bounds;
            }
        }
    }
    module com.google.maps.model {
        interface ComponentFilter extends Java.java.lang.Object {
            component: string;
            value: string;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module ComponentFilter {
            interface Static {
                class: Java.Object;
                administrativeAreaA(arg0: string_t, cb: Callback<Java.ComponentFilter>): void;
                administrativeArea(arg0: string_t): Java.ComponentFilter;
                administrativeAreaP(arg0: string_t): Promise<Java.ComponentFilter>;
                countryA(arg0: string_t, cb: Callback<Java.ComponentFilter>): void;
                country(arg0: string_t): Java.ComponentFilter;
                countryP(arg0: string_t): Promise<Java.ComponentFilter>;
                localityA(arg0: string_t, cb: Callback<Java.ComponentFilter>): void;
                locality(arg0: string_t): Java.ComponentFilter;
                localityP(arg0: string_t): Promise<Java.ComponentFilter>;
                postalCodeA(arg0: string_t, cb: Callback<Java.ComponentFilter>): void;
                postalCode(arg0: string_t): Java.ComponentFilter;
                postalCodeP(arg0: string_t): Promise<Java.ComponentFilter>;
                routeA(arg0: string_t, cb: Callback<Java.ComponentFilter>): void;
                route(arg0: string_t): Java.ComponentFilter;
                routeP(arg0: string_t): Promise<Java.ComponentFilter>;
            }
        }
    }
    module com.google.maps.model {
        interface DirectionsLeg extends Java.java.lang.Object {
            steps: Java.DirectionsStep[];
            distance: Java.Distance;
            duration: Java.Duration;
            durationInTraffic: Java.Duration;
            arrivalTime: object_t;
            departureTime: object_t;
            startLocation: Java.LatLng;
            endLocation: Java.LatLng;
            startAddress: string;
            endAddress: string;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module DirectionsLeg {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.DirectionsLeg;
            }
        }
    }
    module com.google.maps.model {
        interface DirectionsResult extends Java.java.lang.Object {
            geocodedWaypoints: Java.GeocodedWaypoint[];
            routes: Java.DirectionsRoute[];
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module DirectionsResult {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.DirectionsResult;
            }
        }
    }
    module com.google.maps.model {
        interface DirectionsRoute extends Java.java.lang.Object {
            summary: string;
            legs: Java.DirectionsLeg[];
            waypointOrder: object_t[];
            overviewPolyline: Java.EncodedPolyline;
            bounds: Java.Bounds;
            copyrights: string;
            fare: Java.Fare;
            warnings: string[];
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module DirectionsRoute {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.DirectionsRoute;
            }
        }
    }
    module com.google.maps.model {
        interface DirectionsStep extends Java.java.lang.Object {
            htmlInstructions: string;
            distance: Java.Distance;
            duration: Java.Duration;
            startLocation: Java.LatLng;
            endLocation: Java.LatLng;
            steps: Java.DirectionsStep[];
            polyline: Java.EncodedPolyline;
            travelMode: Java.TravelMode;
            transitDetails: Java.TransitDetails;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module DirectionsStep {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.DirectionsStep;
            }
        }
    }
    module com.google.maps.model {
        interface Distance extends Java.java.lang.Object {
            inMeters: object_t;
            humanReadable: string;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module Distance {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.Distance;
            }
        }
    }
    module com.google.maps.model {
        interface DistanceMatrix extends Java.java.lang.Object {
            originAddresses: string[];
            destinationAddresses: string[];
            rows: Java.DistanceMatrixRow[];
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module DistanceMatrix {
            interface Static {
                class: Java.Object;
                new (arg0: array_t<string_t>, arg1: array_t<string_t>, arg2: array_t<Java.DistanceMatrixRow>): com.google.maps.model.DistanceMatrix;
            }
        }
    }
    module com.google.maps.model {
        interface DistanceMatrixElement extends Java.java.lang.Object {
            status: Java.DistanceMatrixElementStatus;
            duration: Java.Duration;
            durationInTraffic: Java.Duration;
            distance: Java.Distance;
            fare: Java.Fare;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module DistanceMatrixElement {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.DistanceMatrixElement;
            }
        }
    }
    module com.google.maps.model {
        interface DistanceMatrixElementStatus extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module DistanceMatrixElementStatus {
            interface Static {
                OK: Java.DistanceMatrixElementStatus;
                NOT_FOUND: Java.DistanceMatrixElementStatus;
                ZERO_RESULTS: Java.DistanceMatrixElementStatus;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.DistanceMatrixElementStatus>): void;
                valueOf(arg0: string_t): Java.DistanceMatrixElementStatus;
                valueOfP(arg0: string_t): Promise<Java.DistanceMatrixElementStatus>;
                valuesA(cb: Callback<Java.DistanceMatrixElementStatus[]>): void;
                values(): Java.DistanceMatrixElementStatus[];
                valuesP(): Promise<Java.DistanceMatrixElementStatus[]>;
            }
        }
    }
    module com.google.maps.model {
        interface DistanceMatrixRow extends Java.java.lang.Object {
            elements: Java.DistanceMatrixElement[];
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module DistanceMatrixRow {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.DistanceMatrixRow;
            }
        }
    }
    module com.google.maps.model {
        interface Duration extends Java.java.lang.Object {
            inSeconds: object_t;
            humanReadable: string;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module Duration {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.Duration;
            }
        }
    }
    module com.google.maps.model {
        interface ElevationResult extends Java.java.lang.Object {
            elevation: object_t;
            location: Java.LatLng;
            resolution: object_t;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module ElevationResult {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.ElevationResult;
            }
        }
    }
    module com.google.maps.model {
        interface EncodedPolyline extends Java.java.lang.Object {
            decodePathA(cb: Callback<object_t>): void;
            decodePath(): object_t;
            decodePathP(): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getEncodedPathA(cb: Callback<string>): void;
            getEncodedPath(): string;
            getEncodedPathP(): Promise<string>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module EncodedPolyline {
            interface Static {
                class: Java.Object;
                new (arg0: string_t): com.google.maps.model.EncodedPolyline;
                new (arg0: object_t): com.google.maps.model.EncodedPolyline;
            }
        }
    }
    module com.google.maps.model {
        interface Fare extends Java.java.lang.Object {
            currency: object_t;
            value: object_t;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module Fare {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.Fare;
            }
        }
    }
    module com.google.maps.model {
        interface GeocodedWaypoint extends Java.java.lang.Object {
            geocoderStatus: Java.GeocodedWaypointStatus;
            partialMatch: object_t;
            placeId: string;
            types: Java.AddressType[];
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module GeocodedWaypoint {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.GeocodedWaypoint;
            }
        }
    }
    module com.google.maps.model {
        interface GeocodedWaypointStatus extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module GeocodedWaypointStatus {
            interface Static {
                OK: Java.GeocodedWaypointStatus;
                ZERO_RESULTS: Java.GeocodedWaypointStatus;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.GeocodedWaypointStatus>): void;
                valueOf(arg0: string_t): Java.GeocodedWaypointStatus;
                valueOfP(arg0: string_t): Promise<Java.GeocodedWaypointStatus>;
                valuesA(cb: Callback<Java.GeocodedWaypointStatus[]>): void;
                values(): Java.GeocodedWaypointStatus[];
                valuesP(): Promise<Java.GeocodedWaypointStatus[]>;
            }
        }
    }
    module com.google.maps.model {
        interface GeocodingResult extends Java.java.lang.Object {
            addressComponents: Java.AddressComponent[];
            formattedAddress: string;
            postcodeLocalities: string[];
            geometry: Java.Geometry;
            types: Java.AddressType[];
            partialMatch: object_t;
            placeId: string;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module GeocodingResult {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.GeocodingResult;
            }
        }
    }
    module com.google.maps.model {
        interface Geometry extends Java.java.lang.Object {
            bounds: Java.Bounds;
            location: Java.LatLng;
            locationType: Java.LocationType;
            viewport: Java.Bounds;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module Geometry {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.Geometry;
            }
        }
    }
    module com.google.maps.model {
        interface LatLng extends Java.java.lang.Object {
            lat: object_t;
            lng: object_t;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module LatLng {
            interface Static {
                class: Java.Object;
                new (arg0: object_t, arg1: object_t): com.google.maps.model.LatLng;
            }
        }
    }
    module com.google.maps.model {
        interface LocationType extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module LocationType {
            interface Static {
                ROOFTOP: Java.LocationType;
                RANGE_INTERPOLATED: Java.LocationType;
                GEOMETRIC_CENTER: Java.LocationType;
                APPROXIMATE: Java.LocationType;
                UNKNOWN: Java.LocationType;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.LocationType>): void;
                valueOf(arg0: string_t): Java.LocationType;
                valueOfP(arg0: string_t): Promise<Java.LocationType>;
                valuesA(cb: Callback<Java.LocationType[]>): void;
                values(): Java.LocationType[];
                valuesP(): Promise<Java.LocationType[]>;
            }
        }
    }
    module com.google.maps.model {
        interface OpeningHours extends Java.java.lang.Object {
            openNow: object_t;
            periods: Java.OpeningHours$Period[];
            weekdayText: string[];
            permanentlyClosed: object_t;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module OpeningHours {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.OpeningHours;
            }
        }
    }
    module com.google.maps.model {
        interface OpeningHours$Period extends Java.java.lang.Object {
            open: Java.OpeningHours$Period$OpenClose;
            close: Java.OpeningHours$Period$OpenClose;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module OpeningHours$Period {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.OpeningHours$Period;
            }
        }
    }
    module com.google.maps.model {
        interface OpeningHours$Period$OpenClose extends Java.java.lang.Object {
            day: Java.OpeningHours$Period$OpenClose$DayOfWeek;
            time: object_t;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module OpeningHours$Period$OpenClose {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.OpeningHours$Period$OpenClose;
            }
        }
    }
    module com.google.maps.model {
        interface OpeningHours$Period$OpenClose$DayOfWeek extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module OpeningHours$Period$OpenClose$DayOfWeek {
            interface Static {
                SUNDAY: Java.OpeningHours$Period$OpenClose$DayOfWeek;
                MONDAY: Java.OpeningHours$Period$OpenClose$DayOfWeek;
                TUESDAY: Java.OpeningHours$Period$OpenClose$DayOfWeek;
                WEDNESDAY: Java.OpeningHours$Period$OpenClose$DayOfWeek;
                THURSDAY: Java.OpeningHours$Period$OpenClose$DayOfWeek;
                FRIDAY: Java.OpeningHours$Period$OpenClose$DayOfWeek;
                SATURDAY: Java.OpeningHours$Period$OpenClose$DayOfWeek;
                UNKNOWN: Java.OpeningHours$Period$OpenClose$DayOfWeek;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.OpeningHours$Period$OpenClose$DayOfWeek>): void;
                valueOf(arg0: string_t): Java.OpeningHours$Period$OpenClose$DayOfWeek;
                valueOfP(arg0: string_t): Promise<Java.OpeningHours$Period$OpenClose$DayOfWeek>;
                valuesA(cb: Callback<Java.OpeningHours$Period$OpenClose$DayOfWeek[]>): void;
                values(): Java.OpeningHours$Period$OpenClose$DayOfWeek[];
                valuesP(): Promise<Java.OpeningHours$Period$OpenClose$DayOfWeek[]>;
            }
        }
    }
    module com.google.maps.model {
        interface Photo extends Java.java.lang.Object {
            photoReference: string;
            height: object_t;
            width: object_t;
            htmlAttributions: string[];
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module Photo {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.Photo;
            }
        }
    }
    module com.google.maps.model {
        interface PhotoResult extends Java.java.lang.Object {
            imageData: object_t[];
            contentType: string;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PhotoResult {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.PhotoResult;
            }
        }
    }
    module com.google.maps.model {
        interface PlaceAutocompleteType extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PlaceAutocompleteType {
            interface Static {
                GEOCODE: Java.PlaceAutocompleteType;
                ADDRESS: Java.PlaceAutocompleteType;
                ESTABLISHMENT: Java.PlaceAutocompleteType;
                REGIONS: Java.PlaceAutocompleteType;
                CITIES: Java.PlaceAutocompleteType;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.PlaceAutocompleteType>): void;
                valueOf(arg0: string_t): Java.PlaceAutocompleteType;
                valueOfP(arg0: string_t): Promise<Java.PlaceAutocompleteType>;
                valuesA(cb: Callback<Java.PlaceAutocompleteType[]>): void;
                values(): Java.PlaceAutocompleteType[];
                valuesP(): Promise<Java.PlaceAutocompleteType[]>;
            }
        }
    }
    module com.google.maps.model {
        interface PlaceDetails extends Java.java.lang.Object {
            addressComponents: Java.AddressComponent[];
            formattedAddress: string;
            formattedPhoneNumber: string;
            geometry: Java.Geometry;
            icon: object_t;
            internationalPhoneNumber: string;
            name: string;
            openingHours: Java.OpeningHours;
            photos: Java.Photo[];
            placeId: string;
            scope: Java.PlaceIdScope;
            altIds: Java.PlaceDetails$AlternatePlaceIds[];
            priceLevel: Java.PriceLevel;
            rating: object_t;
            reviews: Java.PlaceDetails$Review[];
            types: string[];
            url: object_t;
            utcOffset: object_t;
            vicinity: string;
            website: object_t;
            htmlAttributions: string[];
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PlaceDetails {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.PlaceDetails;
            }
        }
    }
    module com.google.maps.model {
        interface PlaceDetails$AlternatePlaceIds extends Java.java.lang.Object {
            placeId: string;
            scope: Java.PlaceIdScope;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PlaceDetails$AlternatePlaceIds {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.PlaceDetails$AlternatePlaceIds;
            }
        }
    }
    module com.google.maps.model {
        interface PlaceDetails$Review extends Java.java.lang.Object {
            aspects: Java.PlaceDetails$Review$AspectRating[];
            authorName: string;
            authorUrl: object_t;
            language: string;
            rating: object_t;
            text: string;
            time: object_t;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PlaceDetails$Review {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.PlaceDetails$Review;
            }
        }
    }
    module com.google.maps.model {
        interface PlaceDetails$Review$AspectRating extends Java.java.lang.Object {
            type: Java.PlaceDetails$Review$AspectRating$RatingType;
            rating: object_t;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PlaceDetails$Review$AspectRating {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.PlaceDetails$Review$AspectRating;
            }
        }
    }
    module com.google.maps.model {
        interface PlaceDetails$Review$AspectRating$RatingType extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PlaceDetails$Review$AspectRating$RatingType {
            interface Static {
                APPEAL: Java.PlaceDetails$Review$AspectRating$RatingType;
                ATMOSPHERE: Java.PlaceDetails$Review$AspectRating$RatingType;
                DECOR: Java.PlaceDetails$Review$AspectRating$RatingType;
                FACILITIES: Java.PlaceDetails$Review$AspectRating$RatingType;
                FOOD: Java.PlaceDetails$Review$AspectRating$RatingType;
                OVERALL: Java.PlaceDetails$Review$AspectRating$RatingType;
                QUALITY: Java.PlaceDetails$Review$AspectRating$RatingType;
                SERVICE: Java.PlaceDetails$Review$AspectRating$RatingType;
                UNKNOWN: Java.PlaceDetails$Review$AspectRating$RatingType;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.PlaceDetails$Review$AspectRating$RatingType>): void;
                valueOf(arg0: string_t): Java.PlaceDetails$Review$AspectRating$RatingType;
                valueOfP(arg0: string_t): Promise<Java.PlaceDetails$Review$AspectRating$RatingType>;
                valuesA(cb: Callback<Java.PlaceDetails$Review$AspectRating$RatingType[]>): void;
                values(): Java.PlaceDetails$Review$AspectRating$RatingType[];
                valuesP(): Promise<Java.PlaceDetails$Review$AspectRating$RatingType[]>;
            }
        }
    }
    module com.google.maps.model {
        interface PlaceIdScope extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PlaceIdScope {
            interface Static {
                APP: Java.PlaceIdScope;
                GOOGLE: Java.PlaceIdScope;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.PlaceIdScope>): void;
                valueOf(arg0: string_t): Java.PlaceIdScope;
                valueOfP(arg0: string_t): Promise<Java.PlaceIdScope>;
                valuesA(cb: Callback<Java.PlaceIdScope[]>): void;
                values(): Java.PlaceIdScope[];
                valuesP(): Promise<Java.PlaceIdScope[]>;
            }
        }
    }
    module com.google.maps.model {
        interface PlacesSearchResponse extends Java.java.lang.Object {
            results: Java.PlacesSearchResult[];
            htmlAttributions: string[];
            nextPageToken: string;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PlacesSearchResponse {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.PlacesSearchResponse;
            }
        }
    }
    module com.google.maps.model {
        interface PlacesSearchResult extends Java.java.lang.Object {
            formattedAddress: string;
            geometry: Java.Geometry;
            name: string;
            icon: object_t;
            placeId: string;
            scope: Java.PlaceIdScope;
            rating: object_t;
            types: string[];
            openingHours: Java.OpeningHours;
            photos: Java.Photo[];
            vicinity: string;
            permanentlyClosed: object_t;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PlacesSearchResult {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.PlacesSearchResult;
            }
        }
    }
    module com.google.maps.model {
        interface PlaceType extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PlaceType {
            interface Static {
                ACCOUNTING: Java.PlaceType;
                AIRPORT: Java.PlaceType;
                AMUSEMENT_PARK: Java.PlaceType;
                AQUARIUM: Java.PlaceType;
                ART_GALLERY: Java.PlaceType;
                ATM: Java.PlaceType;
                BAKERY: Java.PlaceType;
                BANK: Java.PlaceType;
                BAR: Java.PlaceType;
                BEAUTY_SALON: Java.PlaceType;
                BICYCLE_STORE: Java.PlaceType;
                BOOK_STORE: Java.PlaceType;
                BOWLING_ALLEY: Java.PlaceType;
                BUS_STATION: Java.PlaceType;
                CAFE: Java.PlaceType;
                CAMPGROUND: Java.PlaceType;
                CAR_DEALER: Java.PlaceType;
                CAR_RENTAL: Java.PlaceType;
                CAR_REPAIR: Java.PlaceType;
                CAR_WASH: Java.PlaceType;
                CASINO: Java.PlaceType;
                CEMETERY: Java.PlaceType;
                CHURCH: Java.PlaceType;
                CITY_HALL: Java.PlaceType;
                CLOTHING_STORE: Java.PlaceType;
                CONVENIENCE_STORE: Java.PlaceType;
                COURTHOUSE: Java.PlaceType;
                DENTIST: Java.PlaceType;
                DEPARTMENT_STORE: Java.PlaceType;
                DOCTOR: Java.PlaceType;
                ELECTRICIAN: Java.PlaceType;
                ELECTRONICS_STORE: Java.PlaceType;
                EMBASSY: Java.PlaceType;
                ESTABLISHMENT: Java.PlaceType;
                FINANCE: Java.PlaceType;
                FIRE_STATION: Java.PlaceType;
                FLORIST: Java.PlaceType;
                FOOD: Java.PlaceType;
                FUNERAL_HOME: Java.PlaceType;
                FURNITURE_STORE: Java.PlaceType;
                GAS_STATION: Java.PlaceType;
                GENERAL_CONTRACTOR: Java.PlaceType;
                GROCERY_OR_SUPERMARKET: Java.PlaceType;
                GYM: Java.PlaceType;
                HAIR_CARE: Java.PlaceType;
                HARDWARE_STORE: Java.PlaceType;
                HEALTH: Java.PlaceType;
                HINDU_TEMPLE: Java.PlaceType;
                HOME_GOODS_STORE: Java.PlaceType;
                HOSPITAL: Java.PlaceType;
                INSURANCE_AGENCY: Java.PlaceType;
                JEWELRY_STORE: Java.PlaceType;
                LAUNDRY: Java.PlaceType;
                LAWYER: Java.PlaceType;
                LIBRARY: Java.PlaceType;
                LIQUOR_STORE: Java.PlaceType;
                LOCAL_GOVERNMENT_OFFICE: Java.PlaceType;
                LOCKSMITH: Java.PlaceType;
                LODGING: Java.PlaceType;
                MEAL_DELIVERY: Java.PlaceType;
                MEAL_TAKEAWAY: Java.PlaceType;
                MOSQUE: Java.PlaceType;
                MOVIE_RENTAL: Java.PlaceType;
                MOVIE_THEATER: Java.PlaceType;
                MOVING_COMPANY: Java.PlaceType;
                MUSEUM: Java.PlaceType;
                NIGHT_CLUB: Java.PlaceType;
                PAINTER: Java.PlaceType;
                PARK: Java.PlaceType;
                PARKING: Java.PlaceType;
                PET_STORE: Java.PlaceType;
                PHARMACY: Java.PlaceType;
                PHYSIOTHERAPIST: Java.PlaceType;
                PLACE_OF_WORSHIP: Java.PlaceType;
                PLUMBER: Java.PlaceType;
                POLICE: Java.PlaceType;
                POST_OFFICE: Java.PlaceType;
                REAL_ESTATE_AGENCY: Java.PlaceType;
                RESTAURANT: Java.PlaceType;
                ROOFING_CONTRACTOR: Java.PlaceType;
                RV_PARK: Java.PlaceType;
                SCHOOL: Java.PlaceType;
                SHOE_STORE: Java.PlaceType;
                SHOPPING_MALL: Java.PlaceType;
                SPA: Java.PlaceType;
                STADIUM: Java.PlaceType;
                STORAGE: Java.PlaceType;
                STORE: Java.PlaceType;
                SUBWAY_STATION: Java.PlaceType;
                SYNAGOGUE: Java.PlaceType;
                TAXI_STAND: Java.PlaceType;
                TRAIN_STATION: Java.PlaceType;
                TRAVEL_AGENCY: Java.PlaceType;
                UNIVERSITY: Java.PlaceType;
                VETERINARY_CARE: Java.PlaceType;
                ZOO: Java.PlaceType;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.PlaceType>): void;
                valueOf(arg0: string_t): Java.PlaceType;
                valueOfP(arg0: string_t): Promise<Java.PlaceType>;
                valuesA(cb: Callback<Java.PlaceType[]>): void;
                values(): Java.PlaceType[];
                valuesP(): Promise<Java.PlaceType[]>;
            }
        }
    }
    module com.google.maps.model {
        interface PriceLevel extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module PriceLevel {
            interface Static {
                FREE: Java.PriceLevel;
                INEXPENSIVE: Java.PriceLevel;
                MODERATE: Java.PriceLevel;
                EXPENSIVE: Java.PriceLevel;
                VERY_EXPENSIVE: Java.PriceLevel;
                UNKNOWN: Java.PriceLevel;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.PriceLevel>): void;
                valueOf(arg0: string_t): Java.PriceLevel;
                valueOfP(arg0: string_t): Promise<Java.PriceLevel>;
                valuesA(cb: Callback<Java.PriceLevel[]>): void;
                values(): Java.PriceLevel[];
                valuesP(): Promise<Java.PriceLevel[]>;
            }
        }
    }
    module com.google.maps.model {
        interface RankBy extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module RankBy {
            interface Static {
                PROMINENCE: Java.RankBy;
                DISTANCE: Java.RankBy;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.RankBy>): void;
                valueOf(arg0: string_t): Java.RankBy;
                valueOfP(arg0: string_t): Promise<Java.RankBy>;
                valuesA(cb: Callback<Java.RankBy[]>): void;
                values(): Java.RankBy[];
                valuesP(): Promise<Java.RankBy[]>;
            }
        }
    }
    module com.google.maps.model {
        interface SnappedPoint extends Java.java.lang.Object {
            location: Java.LatLng;
            originalIndex: object_t;
            placeId: string;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module SnappedPoint {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.SnappedPoint;
            }
        }
    }
    module com.google.maps.model {
        interface SnappedSpeedLimitResponse extends Java.java.lang.Object {
            speedLimits: Java.SpeedLimit[];
            snappedPoints: Java.SnappedPoint[];
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module SnappedSpeedLimitResponse {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.SnappedSpeedLimitResponse;
            }
        }
    }
    module com.google.maps.model {
        interface SpeedLimit extends Java.java.lang.Object {
            placeId: string;
            speedLimit: object_t;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            speedLimitMphA(cb: Callback<object_t>): void;
            speedLimitMph(): object_t;
            speedLimitMphP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module SpeedLimit {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.SpeedLimit;
            }
        }
    }
    module com.google.maps.model {
        interface StopDetails extends Java.java.lang.Object {
            name: string;
            location: Java.LatLng;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module StopDetails {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.StopDetails;
            }
        }
    }
    module com.google.maps.model {
        interface TrafficModel extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module TrafficModel {
            interface Static {
                BEST_GUESS: Java.TrafficModel;
                OPTIMISTIC: Java.TrafficModel;
                PESSIMISTIC: Java.TrafficModel;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.TrafficModel>): void;
                valueOf(arg0: string_t): Java.TrafficModel;
                valueOfP(arg0: string_t): Promise<Java.TrafficModel>;
                valuesA(cb: Callback<Java.TrafficModel[]>): void;
                values(): Java.TrafficModel[];
                valuesP(): Promise<Java.TrafficModel[]>;
            }
        }
    }
    module com.google.maps.model {
        interface TransitAgency extends Java.java.lang.Object {
            name: string;
            url: string;
            phone: string;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module TransitAgency {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.TransitAgency;
            }
        }
    }
    module com.google.maps.model {
        interface TransitDetails extends Java.java.lang.Object {
            arrivalStop: Java.StopDetails;
            departureStop: Java.StopDetails;
            arrivalTime: object_t;
            departureTime: object_t;
            headsign: string;
            headway: object_t;
            numStops: object_t;
            line: Java.TransitLine;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module TransitDetails {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.TransitDetails;
            }
        }
    }
    module com.google.maps.model {
        interface TransitLine extends Java.java.lang.Object {
            name: string;
            shortName: string;
            color: string;
            agencies: Java.TransitAgency[];
            url: string;
            icon: string;
            textColor: string;
            vehicle: Java.Vehicle;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module TransitLine {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.TransitLine;
            }
        }
    }
    module com.google.maps.model {
        interface TransitMode extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module TransitMode {
            interface Static {
                BUS: Java.TransitMode;
                SUBWAY: Java.TransitMode;
                TRAIN: Java.TransitMode;
                TRAM: Java.TransitMode;
                RAIL: Java.TransitMode;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.TransitMode>): void;
                valueOf(arg0: string_t): Java.TransitMode;
                valueOfP(arg0: string_t): Promise<Java.TransitMode>;
                valuesA(cb: Callback<Java.TransitMode[]>): void;
                values(): Java.TransitMode[];
                valuesP(): Promise<Java.TransitMode[]>;
            }
        }
    }
    module com.google.maps.model {
        interface TransitRoutingPreference extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module TransitRoutingPreference {
            interface Static {
                LESS_WALKING: Java.TransitRoutingPreference;
                FEWER_TRANSFERS: Java.TransitRoutingPreference;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.TransitRoutingPreference>): void;
                valueOf(arg0: string_t): Java.TransitRoutingPreference;
                valueOfP(arg0: string_t): Promise<Java.TransitRoutingPreference>;
                valuesA(cb: Callback<Java.TransitRoutingPreference[]>): void;
                values(): Java.TransitRoutingPreference[];
                valuesP(): Promise<Java.TransitRoutingPreference[]>;
            }
        }
    }
    module com.google.maps.model {
        interface TravelMode extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module TravelMode {
            interface Static {
                DRIVING: Java.TravelMode;
                WALKING: Java.TravelMode;
                BICYCLING: Java.TravelMode;
                TRANSIT: Java.TravelMode;
                UNKNOWN: Java.TravelMode;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.TravelMode>): void;
                valueOf(arg0: string_t): Java.TravelMode;
                valueOfP(arg0: string_t): Promise<Java.TravelMode>;
                valuesA(cb: Callback<Java.TravelMode[]>): void;
                values(): Java.TravelMode[];
                valuesP(): Promise<Java.TravelMode[]>;
            }
        }
    }
    module com.google.maps.model {
        interface Unit extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUrlValueA(cb: Callback<string>): void;
            toUrlValue(): string;
            toUrlValueP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module Unit {
            interface Static {
                METRIC: Java.Unit;
                IMPERIAL: Java.Unit;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.Unit>): void;
                valueOf(arg0: string_t): Java.Unit;
                valueOfP(arg0: string_t): Promise<Java.Unit>;
                valuesA(cb: Callback<Java.Unit[]>): void;
                values(): Java.Unit[];
                valuesP(): Promise<Java.Unit[]>;
            }
        }
    }
    module com.google.maps.model {
        interface Vehicle extends Java.java.lang.Object {
            name: string;
            type: Java.VehicleType;
            icon: string;
            localIcon: string;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module Vehicle {
            interface Static {
                class: Java.Object;
                new (): com.google.maps.model.Vehicle;
            }
        }
    }
    module com.google.maps.model {
        interface VehicleType extends Java.java.lang.Object {
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            getDeclaringClassA(cb: Callback<object_t>): void;
            getDeclaringClass(): object_t;
            getDeclaringClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            nameA(cb: Callback<string>): void;
            name(): string;
            nameP(): Promise<string>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            ordinalA(cb: Callback<object_t>): void;
            ordinal(): object_t;
            ordinalP(): Promise<object_t>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module VehicleType {
            interface Static {
                RAIL: Java.VehicleType;
                METRO_RAIL: Java.VehicleType;
                SUBWAY: Java.VehicleType;
                TRAM: Java.VehicleType;
                MONORAIL: Java.VehicleType;
                HEAVY_RAIL: Java.VehicleType;
                COMMUTER_TRAIN: Java.VehicleType;
                HIGH_SPEED_TRAIN: Java.VehicleType;
                BUS: Java.VehicleType;
                INTERCITY_BUS: Java.VehicleType;
                TROLLEYBUS: Java.VehicleType;
                SHARE_TAXI: Java.VehicleType;
                FERRY: Java.VehicleType;
                CABLE_CAR: Java.VehicleType;
                GONDOLA_LIFT: Java.VehicleType;
                FUNICULAR: Java.VehicleType;
                OTHER: Java.VehicleType;
                class: Java.Object;
                valueOfA(arg0: object_t, arg1: string_t, cb: Callback<object_t>): void;
                valueOf(arg0: object_t, arg1: string_t): object_t;
                valueOfP(arg0: object_t, arg1: string_t): Promise<object_t>;
                valueOfA(arg0: string_t, cb: Callback<Java.VehicleType>): void;
                valueOf(arg0: string_t): Java.VehicleType;
                valueOfP(arg0: string_t): Promise<Java.VehicleType>;
                valuesA(cb: Callback<Java.VehicleType[]>): void;
                values(): Java.VehicleType[];
                valuesP(): Promise<Java.VehicleType[]>;
            }
        }
    }
    module com.google.maps {
        interface PendingResult extends Java.java.lang.Object {
            awaitA(cb: Callback<object_t>): void;
            await(): object_t;
            awaitP(): Promise<object_t>;
            awaitIgnoreErrorA(cb: Callback<object_t>): void;
            awaitIgnoreError(): object_t;
            awaitIgnoreErrorP(): Promise<object_t>;
            cancelA(cb: Callback<void>): void;
            cancel(): void;
            cancelP(): Promise<void>;
            setCallbackA(arg0: Java.PendingResult$Callback, cb: Callback<void>): void;
            setCallback(arg0: Java.PendingResult$Callback): void;
            setCallbackP(arg0: Java.PendingResult$Callback): Promise<void>;
        }
        module PendingResult {
            interface Static {
                class: Java.Object;
            }
        }
    }
    module com.google.maps {
        interface PendingResult$Callback extends Java.java.lang.Object {
            onFailureA(arg0: object_t, cb: Callback<void>): void;
            onFailure(arg0: object_t): void;
            onFailureP(arg0: object_t): Promise<void>;
            onResultA(arg0: object_t, cb: Callback<void>): void;
            onResult(arg0: object_t): void;
            onResultP(arg0: object_t): Promise<void>;
        }
        module PendingResult$Callback {
            interface Static {
                class: Java.Object;
            }
        }
    }
    module java.lang {
        interface Object {
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module Object {
            interface Static {
                class: Java.Object;
                new (): java.lang.Object;
            }
        }
    }
    module java.lang {
        interface String extends Java.java.lang.Object {
            charAtA(arg0: object_t, cb: Callback<object_t>): void;
            charAt(arg0: object_t): object_t;
            charAtP(arg0: object_t): Promise<object_t>;
            charsA(cb: Callback<object_t>): void;
            chars(): object_t;
            charsP(): Promise<object_t>;
            codePointAtA(arg0: object_t, cb: Callback<object_t>): void;
            codePointAt(arg0: object_t): object_t;
            codePointAtP(arg0: object_t): Promise<object_t>;
            codePointBeforeA(arg0: object_t, cb: Callback<object_t>): void;
            codePointBefore(arg0: object_t): object_t;
            codePointBeforeP(arg0: object_t): Promise<object_t>;
            codePointCountA(arg0: object_t, arg1: object_t, cb: Callback<object_t>): void;
            codePointCount(arg0: object_t, arg1: object_t): object_t;
            codePointCountP(arg0: object_t, arg1: object_t): Promise<object_t>;
            codePointsA(cb: Callback<object_t>): void;
            codePoints(): object_t;
            codePointsP(): Promise<object_t>;
            compareToA(arg0: string_t, cb: Callback<object_t>): void;
            compareTo(arg0: string_t): object_t;
            compareToP(arg0: string_t): Promise<object_t>;
            compareToA(arg0: object_t, cb: Callback<object_t>): void;
            compareTo(arg0: object_t): object_t;
            compareToP(arg0: object_t): Promise<object_t>;
            compareToIgnoreCaseA(arg0: string_t, cb: Callback<object_t>): void;
            compareToIgnoreCase(arg0: string_t): object_t;
            compareToIgnoreCaseP(arg0: string_t): Promise<object_t>;
            concatA(arg0: string_t, cb: Callback<string>): void;
            concat(arg0: string_t): string;
            concatP(arg0: string_t): Promise<string>;
            containsA(arg0: object_t, cb: Callback<object_t>): void;
            contains(arg0: object_t): object_t;
            containsP(arg0: object_t): Promise<object_t>;
            contentEqualsA(arg0: object_t, cb: Callback<object_t>): void;
            contentEquals(arg0: object_t): object_t;
            contentEqualsP(arg0: object_t): Promise<object_t>;
            contentEqualsA(arg0: object_t, cb: Callback<object_t>): void;
            contentEquals(arg0: object_t): object_t;
            contentEqualsP(arg0: object_t): Promise<object_t>;
            endsWithA(arg0: string_t, cb: Callback<object_t>): void;
            endsWith(arg0: string_t): object_t;
            endsWithP(arg0: string_t): Promise<object_t>;
            equalsA(arg0: object_t, cb: Callback<object_t>): void;
            equals(arg0: object_t): object_t;
            equalsP(arg0: object_t): Promise<object_t>;
            equalsIgnoreCaseA(arg0: string_t, cb: Callback<object_t>): void;
            equalsIgnoreCase(arg0: string_t): object_t;
            equalsIgnoreCaseP(arg0: string_t): Promise<object_t>;
            getBytesA(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t, cb: Callback<void>): void;
            getBytes(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t): void;
            getBytesP(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t): Promise<void>;
            getBytesA(arg0: object_t, cb: Callback<object_t[]>): void;
            getBytes(arg0: object_t): object_t[];
            getBytesP(arg0: object_t): Promise<object_t[]>;
            getBytesA(arg0: string_t, cb: Callback<object_t[]>): void;
            getBytes(arg0: string_t): object_t[];
            getBytesP(arg0: string_t): Promise<object_t[]>;
            getBytesA(cb: Callback<object_t[]>): void;
            getBytes(): object_t[];
            getBytesP(): Promise<object_t[]>;
            getCharsA(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t, cb: Callback<void>): void;
            getChars(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t): void;
            getCharsP(arg0: object_t, arg1: object_t, arg2: object_array_t, arg3: object_t): Promise<void>;
            getClassA(cb: Callback<object_t>): void;
            getClass(): object_t;
            getClassP(): Promise<object_t>;
            hashCodeA(cb: Callback<object_t>): void;
            hashCode(): object_t;
            hashCodeP(): Promise<object_t>;
            indexOfA(arg0: string_t, arg1: object_t, cb: Callback<object_t>): void;
            indexOf(arg0: string_t, arg1: object_t): object_t;
            indexOfP(arg0: string_t, arg1: object_t): Promise<object_t>;
            indexOfA(arg0: object_t, arg1: object_t, cb: Callback<object_t>): void;
            indexOf(arg0: object_t, arg1: object_t): object_t;
            indexOfP(arg0: object_t, arg1: object_t): Promise<object_t>;
            indexOfA(arg0: string_t, cb: Callback<object_t>): void;
            indexOf(arg0: string_t): object_t;
            indexOfP(arg0: string_t): Promise<object_t>;
            indexOfA(arg0: object_t, cb: Callback<object_t>): void;
            indexOf(arg0: object_t): object_t;
            indexOfP(arg0: object_t): Promise<object_t>;
            internA(cb: Callback<string>): void;
            intern(): string;
            internP(): Promise<string>;
            isEmptyA(cb: Callback<object_t>): void;
            isEmpty(): object_t;
            isEmptyP(): Promise<object_t>;
            lastIndexOfA(arg0: string_t, arg1: object_t, cb: Callback<object_t>): void;
            lastIndexOf(arg0: string_t, arg1: object_t): object_t;
            lastIndexOfP(arg0: string_t, arg1: object_t): Promise<object_t>;
            lastIndexOfA(arg0: object_t, arg1: object_t, cb: Callback<object_t>): void;
            lastIndexOf(arg0: object_t, arg1: object_t): object_t;
            lastIndexOfP(arg0: object_t, arg1: object_t): Promise<object_t>;
            lastIndexOfA(arg0: string_t, cb: Callback<object_t>): void;
            lastIndexOf(arg0: string_t): object_t;
            lastIndexOfP(arg0: string_t): Promise<object_t>;
            lastIndexOfA(arg0: object_t, cb: Callback<object_t>): void;
            lastIndexOf(arg0: object_t): object_t;
            lastIndexOfP(arg0: object_t): Promise<object_t>;
            lengthA(cb: Callback<object_t>): void;
            length(): object_t;
            lengthP(): Promise<object_t>;
            matchesA(arg0: string_t, cb: Callback<object_t>): void;
            matches(arg0: string_t): object_t;
            matchesP(arg0: string_t): Promise<object_t>;
            notifyA(cb: Callback<void>): void;
            notify(): void;
            notifyP(): Promise<void>;
            notifyAllA(cb: Callback<void>): void;
            notifyAll(): void;
            notifyAllP(): Promise<void>;
            offsetByCodePointsA(arg0: object_t, arg1: object_t, cb: Callback<object_t>): void;
            offsetByCodePoints(arg0: object_t, arg1: object_t): object_t;
            offsetByCodePointsP(arg0: object_t, arg1: object_t): Promise<object_t>;
            regionMatchesA(arg0: object_t, arg1: object_t, arg2: string_t, arg3: object_t, arg4: object_t, cb: Callback<object_t>): void;
            regionMatches(arg0: object_t, arg1: object_t, arg2: string_t, arg3: object_t, arg4: object_t): object_t;
            regionMatchesP(arg0: object_t, arg1: object_t, arg2: string_t, arg3: object_t, arg4: object_t): Promise<object_t>;
            regionMatchesA(arg0: object_t, arg1: string_t, arg2: object_t, arg3: object_t, cb: Callback<object_t>): void;
            regionMatches(arg0: object_t, arg1: string_t, arg2: object_t, arg3: object_t): object_t;
            regionMatchesP(arg0: object_t, arg1: string_t, arg2: object_t, arg3: object_t): Promise<object_t>;
            replaceA(arg0: object_t, arg1: object_t, cb: Callback<string>): void;
            replace(arg0: object_t, arg1: object_t): string;
            replaceP(arg0: object_t, arg1: object_t): Promise<string>;
            replaceA(arg0: object_t, arg1: object_t, cb: Callback<string>): void;
            replace(arg0: object_t, arg1: object_t): string;
            replaceP(arg0: object_t, arg1: object_t): Promise<string>;
            replaceAllA(arg0: string_t, arg1: string_t, cb: Callback<string>): void;
            replaceAll(arg0: string_t, arg1: string_t): string;
            replaceAllP(arg0: string_t, arg1: string_t): Promise<string>;
            replaceFirstA(arg0: string_t, arg1: string_t, cb: Callback<string>): void;
            replaceFirst(arg0: string_t, arg1: string_t): string;
            replaceFirstP(arg0: string_t, arg1: string_t): Promise<string>;
            splitA(arg0: string_t, arg1: object_t, cb: Callback<string[]>): void;
            split(arg0: string_t, arg1: object_t): string[];
            splitP(arg0: string_t, arg1: object_t): Promise<string[]>;
            splitA(arg0: string_t, cb: Callback<string[]>): void;
            split(arg0: string_t): string[];
            splitP(arg0: string_t): Promise<string[]>;
            startsWithA(arg0: string_t, arg1: object_t, cb: Callback<object_t>): void;
            startsWith(arg0: string_t, arg1: object_t): object_t;
            startsWithP(arg0: string_t, arg1: object_t): Promise<object_t>;
            startsWithA(arg0: string_t, cb: Callback<object_t>): void;
            startsWith(arg0: string_t): object_t;
            startsWithP(arg0: string_t): Promise<object_t>;
            subSequenceA(arg0: object_t, arg1: object_t, cb: Callback<object_t>): void;
            subSequence(arg0: object_t, arg1: object_t): object_t;
            subSequenceP(arg0: object_t, arg1: object_t): Promise<object_t>;
            substringA(arg0: object_t, arg1: object_t, cb: Callback<string>): void;
            substring(arg0: object_t, arg1: object_t): string;
            substringP(arg0: object_t, arg1: object_t): Promise<string>;
            substringA(arg0: object_t, cb: Callback<string>): void;
            substring(arg0: object_t): string;
            substringP(arg0: object_t): Promise<string>;
            toCharArrayA(cb: Callback<object_t[]>): void;
            toCharArray(): object_t[];
            toCharArrayP(): Promise<object_t[]>;
            toLowerCaseA(arg0: object_t, cb: Callback<string>): void;
            toLowerCase(arg0: object_t): string;
            toLowerCaseP(arg0: object_t): Promise<string>;
            toLowerCaseA(cb: Callback<string>): void;
            toLowerCase(): string;
            toLowerCaseP(): Promise<string>;
            toStringA(cb: Callback<string>): void;
            toString(): string;
            toStringP(): Promise<string>;
            toUpperCaseA(arg0: object_t, cb: Callback<string>): void;
            toUpperCase(arg0: object_t): string;
            toUpperCaseP(arg0: object_t): Promise<string>;
            toUpperCaseA(cb: Callback<string>): void;
            toUpperCase(): string;
            toUpperCaseP(): Promise<string>;
            trimA(cb: Callback<string>): void;
            trim(): string;
            trimP(): Promise<string>;
            waitA(arg0: object_t, arg1: object_t, cb: Callback<void>): void;
            wait(arg0: object_t, arg1: object_t): void;
            waitP(arg0: object_t, arg1: object_t): Promise<void>;
            waitA(arg0: object_t, cb: Callback<void>): void;
            wait(arg0: object_t): void;
            waitP(arg0: object_t): Promise<void>;
            waitA(cb: Callback<void>): void;
            wait(): void;
            waitP(): Promise<void>;
        }
        module String {
            interface Static {
                CASE_INSENSITIVE_ORDER: object_t;
                class: Java.Object;
                new (arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): java.lang.String;
                new (arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: string_t): java.lang.String;
                new (arg0: object_array_t, arg1: object_t, arg2: object_t, arg3: object_t): java.lang.String;
                new (arg0: object_array_t, arg1: object_t, arg2: object_t): java.lang.String;
                new (arg0: object_array_t, arg1: object_t, arg2: object_t): java.lang.String;
                new (arg0: object_array_t, arg1: object_t, arg2: object_t): java.lang.String;
                new (arg0: object_array_t, arg1: object_t): java.lang.String;
                new (arg0: object_array_t, arg1: string_t): java.lang.String;
                new (arg0: object_array_t, arg1: object_t): java.lang.String;
                new (arg0: object_t): java.lang.String;
                new (arg0: object_t): java.lang.String;
                new (arg0: string_t): java.lang.String;
                new (arg0: object_array_t): java.lang.String;
                new (arg0: object_array_t): java.lang.String;
                new (): java.lang.String;
                copyValueOfA(arg0: object_array_t, arg1: object_t, arg2: object_t, cb: Callback<string>): void;
                copyValueOf(arg0: object_array_t, arg1: object_t, arg2: object_t): string;
                copyValueOfP(arg0: object_array_t, arg1: object_t, arg2: object_t): Promise<string>;
                copyValueOfA(arg0: object_array_t, cb: Callback<string>): void;
                copyValueOf(arg0: object_array_t): string;
                copyValueOfP(arg0: object_array_t): Promise<string>;
                formatA(arg0: object_t, arg1: string_t, arg2: object_array_t, cb: Callback<string>): void;
                format(arg0: object_t, arg1: string_t, ...arg2: object_t[]): string;
                format(arg0: object_t, arg1: string_t, arg2: object_array_t): string;
                formatP(arg0: object_t, arg1: string_t, ...arg2: object_t[]): Promise<string>;
                formatP(arg0: object_t, arg1: string_t, arg2: object_array_t): Promise<string>;
                formatA(arg0: string_t, arg1: object_array_t, cb: Callback<string>): void;
                format(arg0: string_t, ...arg1: object_t[]): string;
                format(arg0: string_t, arg1: object_array_t): string;
                formatP(arg0: string_t, ...arg1: object_t[]): Promise<string>;
                formatP(arg0: string_t, arg1: object_array_t): Promise<string>;
                joinA(arg0: object_t, arg1: object_array_t, cb: Callback<string>): void;
                join(arg0: object_t, ...arg1: object_t[]): string;
                join(arg0: object_t, arg1: object_array_t): string;
                joinP(arg0: object_t, ...arg1: object_t[]): Promise<string>;
                joinP(arg0: object_t, arg1: object_array_t): Promise<string>;
                joinA(arg0: object_t, arg1: object_t, cb: Callback<string>): void;
                join(arg0: object_t, arg1: object_t): string;
                joinP(arg0: object_t, arg1: object_t): Promise<string>;
                valueOfA(arg0: object_array_t, arg1: object_t, arg2: object_t, cb: Callback<string>): void;
                valueOf(arg0: object_array_t, arg1: object_t, arg2: object_t): string;
                valueOfP(arg0: object_array_t, arg1: object_t, arg2: object_t): Promise<string>;
                valueOfA(arg0: object_t, cb: Callback<string>): void;
                valueOf(arg0: object_t): string;
                valueOfP(arg0: object_t): Promise<string>;
                valueOfA(arg0: object_array_t, cb: Callback<string>): void;
                valueOf(arg0: object_array_t): string;
                valueOfP(arg0: object_array_t): Promise<string>;
                valueOfA(arg0: object_t, cb: Callback<string>): void;
                valueOf(arg0: object_t): string;
                valueOfP(arg0: object_t): Promise<string>;
                valueOfA(arg0: object_t, cb: Callback<string>): void;
                valueOf(arg0: object_t): string;
                valueOfP(arg0: object_t): Promise<string>;
                valueOfA(arg0: object_t, cb: Callback<string>): void;
                valueOf(arg0: object_t): string;
                valueOfP(arg0: object_t): Promise<string>;
                valueOfA(arg0: object_t, cb: Callback<string>): void;
                valueOf(arg0: object_t): string;
                valueOfP(arg0: object_t): Promise<string>;
                valueOfA(arg0: object_t, cb: Callback<string>): void;
                valueOf(arg0: object_t): string;
                valueOfP(arg0: object_t): Promise<string>;
                valueOfA(arg0: object_t, cb: Callback<string>): void;
                valueOf(arg0: object_t): string;
                valueOfP(arg0: object_t): Promise<string>;
            }
        }
    }
    function isJavaObject(e: any): boolean;
}
