import {Component, Input} from '@angular/core';
import {NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.scss'
})
export class GenreComponent {
  @Input('genreName') genre = 'Unknown';


  idNumber = Math.round(Math.random() * 56);
  count = 0

  // selectedGenre = 'asdasd';


  constructor() {
    console.log(this.genre)

    setInterval(() => {
      this.count++;
      this.count %= 60;
    }, this.idNumber * 10);

    // JS Switch
    // switch (this.selectedGenre) {
    //   case 'Action': console.log('ACTION');
    //   break;
    //   default: console.log('No genre')
    // }
  }
}
