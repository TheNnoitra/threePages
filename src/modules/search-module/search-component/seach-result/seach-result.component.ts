import {Component, Input, OnInit} from '@angular/core';
import {CompanyUser} from "../../../../interfaces/company.User";

@Component({
  selector: 'app-seach-result',
  templateUrl: './seach-result.component.html',
  styleUrls: ['./seach-result.component.scss']
})
export class SeachResultComponent implements OnInit {

  @Input() searchResult?: CompanyUser[];

  constructor() { }

  ngOnInit(): void {
  }

}
