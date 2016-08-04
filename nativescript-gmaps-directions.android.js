"use strict";
var nativescript_gmaps_directions_common_1 = require('./nativescript-gmaps-directions.common');
var Directions = (function (_super) {
    __extends(Directions, _super);
    function Directions() {
        _super.call(this);
        this.context = new com.google.maps.GeoApiContext();
    }
    Directions.prototype.init = function (apiKey) {
        this.context.setApiKey(apiKey);
        console.dir(com.google.maps.GeoApiContext.class);
        console.dir(this.context);
    };
    Directions.prototype.getDirections = function (origin, destination) {
        return new com.google.maps.DirectionsApiRequest(this.context).origin(origin).destination(destination);
    };
    return Directions;
}(nativescript_gmaps_directions_common_1.Common));
exports.Directions = Directions;
exports.DirectionsApi = new Directions();
