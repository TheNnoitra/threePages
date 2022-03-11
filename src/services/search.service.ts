import {Injectable} from '@angular/core';
import {filter, from, map, Observable, of} from "rxjs";
import {CompanyUsers} from "../mock-data/mock-company-data";
import {CompanyUser} from "../interfaces/company.User";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() {
  }

  search(searchStr: string): Observable<CompanyUser[]> {
    return of(CompanyUsers).pipe(
      map(m => m.filter(f => this.filterFunction(searchStr, f)))
    )
  }

  private filterFunction(searchStr: string, currentUser: CompanyUser): boolean {
    const word = searchStr.trim().toLowerCase();
    return currentUser.MiddleName.toLowerCase() === word
      || currentUser.LastName.toLowerCase() === word
      || currentUser.FirstName.toLowerCase() === word
  }
}
