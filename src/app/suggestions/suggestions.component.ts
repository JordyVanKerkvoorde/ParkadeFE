import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Suggestion } from './suggestion.model';
import { SuggestionDataService } from './suggestion-data.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  public suggestion: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private _sds: SuggestionDataService) { }

  ngOnInit(): void {
    this.suggestion = this.fb.group({
      name: ['', 
        Validators.required
      ],
      longtitude: [''],
      latitude: [''],
      description: [''],
    })
    this._sds.allSuggestions$.subscribe((suggestions: Suggestion[]) => {
      console.log(suggestions)
    })
  }

  onSubmit(){
    let suggObj = new Suggestion(
      this.suggestion.value.name,
      this.suggestion.value.latitude,
      this.suggestion.value.longtitude,
      this.suggestion.value.description
    );
    this.suggestion.reset();
    this._sds.addNewSuggestion(suggObj);
    
  }
}
