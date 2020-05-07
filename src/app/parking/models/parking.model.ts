import { Entry } from './entry.model';

export interface ParkingJson {
    id: number;
    name: string;
    type: string;
    latitude: string;
    longtitude: string;
    maxCap: number;
    latestEntry: Entry;
}

export class Parking {
    constructor(
        private _id: number,
        private _name: string,
        private _type: string,
        private _latitude: string,
        private _longtitude: string,
        private _maxCap: number,
        private _latestEntry: Entry
    ){}

    static fromJSON(json: ParkingJson): Parking{
        const parking = new Parking(
            json.id,
            json.name,
            json.type,
            json.latitude,
            json.longtitude,
            json.maxCap,
            json.latestEntry
        );
        return parking;
    }

    toJSON(): ParkingJson{
        return {
            id: this._id,
            name: this._name,
            type: this._type,
            latitude: this._latitude,
            longtitude: this._longtitude,
            maxCap: this._maxCap,
            latestEntry: this._latestEntry
        };
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get type(){
        return this._type;
    }

    get latitude(){
        return this._latitude;
    }

    get longtitude(){
        return this._longtitude;
    }

    get maxcap(){
        return this._maxCap;
    }

    get latestEntry(){
        return this._latestEntry;
    }
}
