import {Component, Input, OnInit} from '@angular/core';
import {CompanyUser} from "../../../../interfaces/company.User";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Component({
  selector: 'app-seach-result',
  templateUrl: './seach-result.component.html',
  styleUrls: ['./seach-result.component.scss']
})
export class SeachResultComponent implements OnInit {

  @Input() searchResult$?: BehaviorSubject<CompanyUser[]>;
  public noElementsToShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.searchResult$?.subscribe(
      array => this.noElementsToShow = array.length > 0
    )
  }

}
