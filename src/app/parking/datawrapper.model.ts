export interface DataWrapperJson {
    timedata: Date[];
    capacitydata: number[];
}

export class DataWrapper {
    constructor(
        private _timedata: Date[],
        private _capacitydata: number[],
    ){}

    static fromJSON(json: DataWrapperJson): DataWrapper{
        const datawrapper = new DataWrapper(
            json.timedata,
            json.capacitydata,
        );
        return datawrapper;
    }

    toJSON(): DataWrapperJson{
        return {
            timedata: this._timedata,
            capacitydata: this._capacitydata,
        };
    }
    get timedata(){
        return this._timedata;
    }

    get capacitydata(){
        return this._capacitydata;
    }
}