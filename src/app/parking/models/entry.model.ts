export interface EntryJson {
    id: number;
    timeday: any;
    available: number;
    parkingid: number;
}

export class Entry {
    constructor(
        private _id: number,
        private _timeday: any,
        private _available: number,
        private _parkingid: number
    ){}

    static fromJSON(json: EntryJson): Entry{
        const entry = new Entry(
            json.id,
            json.timeday,
            json.available,
            json.parkingid
        );
        return entry;
    }

    toJSON(): EntryJson{
        return {
            id: this._id,
            timeday: this._timeday,
            available: this._available,
            parkingid: this._parkingid
        };
    }
    get id(){
        return this._id;
    }

    get timeday(){
        return this._timeday;
    }

    get available(){
        return this._available;
    }

    get parkingid(){
        return this._available;
    }
}