import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validator, Validators} from "@angular/forms";
import {BehaviorSubject, debounceTime, from, map, Observable, of, switchMap, tap} from "rxjs";
import {SearchService} from "../../../../services/search.service";
import {CompanyUsers} from "../../../../mock-data/mock-company-data";

@Component({
  selector: 'app-seach-bar',
  templateUrl: './seach-bar.component.html',
  styleUrls: ['./seach-bar.component.scss']
})

export class SeachBarComponent {

  @Output() serachString: EventEmitter<string> = new EventEmitter<string>(true);

  searchStringControl = new FormControl('', Validators.required);
  searchStringControlHelper = this.searchStringControl.valueChanges
    .pipe(
      debounceTime(500),
      switchMap(m => of(CompanyUsers))
      // switchMap(m => this.searchService.search(m))
    );

  searchForm = this.formBuilder.group({
      searchString: this.searchStringControl
    }
  );

  constructor(private formBuilder: FormBuilder,
              private searchService: SearchService) {
  }

  submit() {
    if (this.searchStringControl.valid) {
      this.serachString.emit(this.searchStringControl.value);
    }
  }

}
