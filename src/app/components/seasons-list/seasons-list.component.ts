import {Component, inject} from '@angular/core';
import {F1Service} from "../../services/f1.service";

@Component({
  selector: 'app-seasons-list',
  standalone: true,
  imports: [],
  templateUrl: './seasons-list.component.html',
  styleUrl: './seasons-list.component.scss'
})
export class SeasonsListComponent {
  f1Service = inject(F1Service);
  seasons: string[] = [];

  constructor() {
    this.f1Service.seasons$.subscribe(seasons => this.seasons = seasons);
  }

  handleGetSeasonsButtonPress(event: MouseEvent) {
    console.log(event);
    this.f1Service.getSeasons();
  }
}
