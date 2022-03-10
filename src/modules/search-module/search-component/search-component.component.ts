import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../../services/search.service";
import {CompanyUser} from "../../../interfaces/company.User";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent {

  constructor(private searchService: SearchService) {
  }

  resultItemList$: BehaviorSubject<CompanyUser[]> = new BehaviorSubject<CompanyUser[]>([]);

  search(searchStr: string) {
    this.searchService.search(searchStr)
      .subscribe(
        list => this.resultItemList$.next(list)
      );
  }
}
