export interface DataWrapperJson {
    timeData: Date[];
    capacityData: number[];
}

export class DataWrapper {
    constructor(
        private _timeData: Date[],
        private _capacityData: number[],
    ){}

    static fromJSON(json: DataWrapperJson): DataWrapper{
        const datawrapper = new DataWrapper(
            json.timeData,
            json.capacityData,
        );
        return datawrapper;
    }

    toJSON(): DataWrapperJson{
        return {
            timeData: this._timeData,
            capacityData: this._capacityData,
        };
    }
    get timedata(){
        return this._timeData;
    }

    get capacitydata(){
        return this._capacityData;
    }
}