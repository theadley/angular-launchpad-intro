import { Component } from '@angular/core';
import {SeasonsListComponent} from "../seasons-list/seasons-list.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    SeasonsListComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
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

  series = [
    'Foundation',
    'The Gentleman',
    'The Boys',
    'The Expanse',
    'The Office',
    'Brooklyn 99'
  ];
}
