import {Component, Input, OnInit} from '@angular/core';
import {CompanyUser} from "../../../../interfaces/company-user";
import {BehaviorSubject, Observable, of, switchMap} from "rxjs";

@Component({
  selector: 'app-seach-result',
  templateUrl: './seach-result.component.html',
  styleUrls: ['./seach-result.component.scss']
})
export class SeachResultComponent {

  @Input() searchResult$?: Observable<CompanyUser[]>;

  constructor() {
  }

}
