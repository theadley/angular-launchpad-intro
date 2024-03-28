import { Component } from '@angular/core';

@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.scss'
})
export class ClothesComponent {
  index = 0;
  urls = [
    'https://pbs.twimg.com/tweet_video_thumb/Dk6XfByVAAA_i9-.jpg',
    'https://cdn.quotesgram.com/img/64/70/48315059-tumblr_lov16i6bXC1qh6fqvo2_500.jpg'
  ];
  constructor() {
    setInterval(() => {
      this.index++;
      this.index %= 2;
    }, 3000);
  }
}
