export interface ParkingJson {
    id: number;
    name: string;
    type: string;
    latitude: string;
    longtitude: string;
    maxcap: number;
}

export class Parking {
    constructor(
        private _id: number,
        private _name: string,
        private _type: string,
        private _latitude: string,
        private _longtitude: string,
        private _maxcap: number
    ){}

    static fromJSON(json: ParkingJson): Parking{
        const parking = new Parking(
            json.id,
            json.name,
            json.type,
            json.latitude,
            json.longtitude,
            json.maxcap
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
            maxcap: this._maxcap
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
        return this._maxcap;
    }
}
