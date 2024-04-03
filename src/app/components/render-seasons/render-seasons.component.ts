import {Component, inject} from '@angular/core';
import {F1Service} from "../../services/f1.service";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-render-seasons',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './render-seasons.component.html',
  styleUrl: './render-seasons.component.scss'
})
export class RenderSeasonsComponent {
  seasons$ = inject(F1Service).getSeasonsObservable();
}
