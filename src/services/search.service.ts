import { Injectable } from '@angular/core';
import {filter, Observable, of} from "rxjs";
import {CompanyUsers} from "../mock-data/mock-company-data";
import {CompanyUser} from "../interfaces/company.User";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search(searchStr: string) : Observable<CompanyUser[]>{
    return of(CompanyUsers).pipe(

    )
  }
}
