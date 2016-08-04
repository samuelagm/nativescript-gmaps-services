import { Common } from './nativescript-gmaps-directions.common';
export declare class Directions extends Common {
    private context;
    constructor();
    init(apiKey: string): void;
    getDirections(origin: string, destination: string): any;
}
export declare var DirectionsApi: Directions;
