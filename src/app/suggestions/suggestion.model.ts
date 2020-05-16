export interface SuggestionJson {
    id: number;
    name: string;
    latitude: number;
    longtitude: number;
    description: string;
}

export class Suggestion {
    private _id: number
    constructor(
        private _name: string,
        private _latitude: number,
        private _longtitude: number,
        private _description: string,
    ){}

    static fromJSON(json: SuggestionJson): Suggestion{
        const suggestion = new Suggestion(
            json.name,
            json.longtitude,
            json.latitude,
            json.description,
        );
        suggestion._id = json.id;
        return suggestion;
    }

    toJSON(): SuggestionJson{
        return <SuggestionJson>{
            name: this._name,
            longtitude: this._longtitude,
            latitude: this._latitude,
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