

import {Common} from './nativescript-gmaps-directions.common';

declare var com:any;
export class Directions extends Common {

    private context:any;

    constructor() {
        super();
        this.context = new com.google.maps.GeoApiContext();
    }

    init(apiKey:string) {
        this.context.setApiKey(apiKey);
        console.dir(com.google.maps.GeoApiContext.class);
        console.dir(this.context);
    }

    public getDirections(origin:string, destination:string) {
        return new com.google.maps.DirectionsApiRequest(this.context).origin(origin).destination(destination);
    }
}
export var DirectionsApi = new Directions();
