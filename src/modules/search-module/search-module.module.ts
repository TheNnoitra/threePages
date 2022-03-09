import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SearchComponentComponent} from './search-component/search-component.component';
import {SeachBarComponent} from './search-component/seach-bar/seach-bar.component';
import {SeachResultComponent} from './search-component/seach-result/seach-result.component';


@NgModule({
  declarations: [
    SearchComponentComponent,
    SeachBarComponent,
    SeachResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SearchModuleModule {
}
