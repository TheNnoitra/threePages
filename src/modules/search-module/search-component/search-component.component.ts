import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../../services/search.service";
import {CompanyUser} from "../../../interfaces/company-user";
import {BehaviorSubject, Observable, Subject, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent {

  constructor(private searchService: SearchService) {
  }

  searchStr$: Subject<string> = new Subject<string>();
  resultItemList$: Observable<CompanyUser[]> = this.searchStr$
    .pipe(
      switchMap(searchStr => this.searchService.search(searchStr))
    );

  search(searchStr: string) {
    this.searchStr$.next(searchStr);
  }
}
