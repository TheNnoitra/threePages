import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validator, Validators} from "@angular/forms";
import {BehaviorSubject, debounceTime, map, Observable, switchMap, tap} from "rxjs";
import {SearchService} from "../../../../services/search.service";

@Component({
  selector: 'app-seach-bar',
  templateUrl: './seach-bar.component.html',
  styleUrls: ['./seach-bar.component.scss']
})

export class SeachBarComponent {

  @Output() serachString: EventEmitter<string> = new EventEmitter<string>(true);

  searchStringControl = new FormControl('', {
    validators: [Validators.required],
    updateOn: "submit"
  });

  searchForm = this.formBuilder.group({
    searchString: this.searchStringControl
  });

  constructor(private formBuilder: FormBuilder) {
  }

  submit(searchStringControl: FormControl) {
    this.serachString.emit(searchStringControl.value);
  }

}
