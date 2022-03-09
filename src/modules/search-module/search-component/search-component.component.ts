import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../../services/search.service";
import {CompanyUser} from "../../../interfaces/company.User";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {filter, tap} from "rxjs";

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  constructor(private searchService: SearchService,
              private route: ActivatedRoute) {
  }

  resultItemList: CompanyUser[] = [];

  ngOnInit(): void {
    debugger;
    const a = this.route.queryParams.subscribe(
      params => {
        debugger;
        const b = params['currentUser'];
      }
    )
    //   .pipe(
    //   filter(f => f.params),
    //   tap(d => {
    //     debugger;
    //     const b = d;
    //   })
    // );
  }

  search(searchStr: string) {
    this.searchService.search(searchStr).subscribe(
      list => {
        this.resultItemList.length = 0;
        this.resultItemList.push(...list);
      }
    );
  }
}
