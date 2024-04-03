import { Component } from '@angular/core';
import {AverageMarkPipe} from "../../pipes/average-mark.pipe";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
    imports: [
        AverageMarkPipe,
        DecimalPipe
    ],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.scss'
})
export class CustomPipesComponent {
  marks = [123.8, 1568.4, 5.54, 123.84, 84.69, 154, 32.8];
}
