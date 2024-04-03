import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    FormsModule,
    SearchComponent
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  searchText = '';
}
