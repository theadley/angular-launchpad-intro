import {Component} from '@angular/core';
import {GenreComponent} from "./components/genre/genre.component";
import {DecimalPipe, NgFor, NgIf, PercentPipe} from "@angular/common";
import {ComicComponent} from "./components/comic/comic.component";
import {ClothesComponent} from "./components/clothes/clothes.component";
import {SeasonsListComponent} from "./components/seasons-list/seasons-list.component";
import {AverageMarkPipe} from "./pipes/average-mark.pipe";
import {RenderSeasonsComponent} from "./components/render-seasons/render-seasons.component";
import {SearchComponent} from "./components/search/search.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [GenreComponent, NgFor, NgIf, ComicComponent, ClothesComponent, SeasonsListComponent, AverageMarkPipe, DecimalPipe, PercentPipe, RenderSeasonsComponent, SearchComponent, FormsModule]
})
export class AppComponent {
  searchText = '';
  isSeasonListShown = true;
  isUserAdmin = true;
  userNames = [
    'Tim',
    'Abu',
    'Alexis',
    'Anas',
    'Ashleigh',
    'Ayaaz'
  ];

  genres = [
    'Action',
    'Horror',
    'Thriller',
    'Adventure',
    'Romance'
  ];

  series = [
    'Foundation',
    'The Gentleman',
    'The Boys',
    'The Expanse',
    'The Office',
    'Brooklyn 99'
  ];

  marks = [123.8, 1568.4, 5.54, 123.84, 84.69, 154, 32.8];
}
