import {Component, Input, OnInit} from '@angular/core';
import {CompanyUser} from "../../../../interfaces/company-user";
import {BehaviorSubject, Observable, of, switchMap} from "rxjs";

@Component({
  selector: 'app-seach-result',
  templateUrl: './seach-result.component.html',
  styleUrls: ['./seach-result.component.scss']
})
export class SeachResultComponent implements OnInit{

  @Input() searchResult$?: Observable<CompanyUser[]>;

  noElementsToShow?: Observable<boolean> = new BehaviorSubject(false);

  constructor() { }

  ngOnInit(): void {
    this.noElementsToShow = this.searchResult$?.pipe(
      switchMap(listArray => of(listArray.length > 0))
    );
  }

}
