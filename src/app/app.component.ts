import { Component } from '@angular/core';
import { GenreComponent } from "./components/genre/genre.component";
import {NgFor, NgIf} from "@angular/common";
import {ComicComponent} from "./components/comic/comic.component";
import {ClothesComponent} from "./components/clothes/clothes.component";
import {SeasonsListComponent} from "./components/seasons-list/seasons-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [GenreComponent, NgFor, NgIf, ComicComponent, ClothesComponent, SeasonsListComponent]
})
export class AppComponent {
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
}
