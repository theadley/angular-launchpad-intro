import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {F1Service} from "../../services/f1.service";
import { Subscription } from 'rxjs';
import {UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FilterSeasonsPipe} from "../../pipes/filter-seasons.pipe";

@Component({
  selector: 'app-seasons-list',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    FilterSeasonsPipe
  ],
  templateUrl: './seasons-list.component.html',
  styleUrl: './seasons-list.component.scss'
})
export class SeasonsListComponent implements OnInit, OnDestroy {
  f1Service = inject(F1Service);
  seasons: string[] = [];
  searchTerm = '';
  seasonsSubscription: Subscription | undefined;

  ngOnInit() {
    // Setup code
    console.log('Setup ran')
    this.seasonsSubscription = this.f1Service.seasons$.subscribe(seasons => this.seasons = seasons);
  }

  handleGetSeasonsButtonPress(event: MouseEvent) {
    console.log(event);
    this.f1Service.getSeasons();
  }

  ngOnDestroy() {
    // Cleanup code
    console.log('Cleanup ran')
    this.seasonsSubscription?.unsubscribe();
  }
}
