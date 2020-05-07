export interface SuggestionJson {
    id: number;
    name: string;
    latitude: number;
    longtitude: number;
    description: string;
}

export class Suggestion {
    constructor(
        private _id: number,
        private _name: string,
        private _latitude: number,
        private _longtitude: number,
        private _description: string,
    ){}

    static fromJSON(json: SuggestionJson): Suggestion{
        const suggestion = new Suggestion(
            json.id,
            json.name,
            json.latitude,
            json.longtitude,
            json.description,
        );
        return suggestion;
    }

    toJSON(): SuggestionJson{
        return {
            id: this._id,
            name: this._name,
            latitude: this._latitude,
            longtitude: this._longtitude,
            description: this._description,
        };
    }
    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get latitude(){
        return this._latitude;
    }

    get longtitude(){
        return this._longtitude;
    }

    get description(){
        return this._description;
    }
}