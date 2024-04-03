import { Component } from '@angular/core';
import {GenreComponent} from "../genre/genre.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-genre-page',
  standalone: true,
  imports: [
    GenreComponent,
    NgForOf
  ],
  templateUrl: './genre-page.component.html',
  styleUrl: './genre-page.component.scss'
})
export class GenrePageComponent {
  genres = [
    'Action',
    'Horror',
    'Thriller',
    'Adventure',
    'Romance'
  ];
}
