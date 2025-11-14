import { Component, Input } from '@angular/core';
import { ReviewsData } from '../reviews/reviews.component';

@Component({
  selector: 'app-reviews-bgs',
  templateUrl: './reviews-bgs.component.html',
  styleUrl: './reviews-bgs.component.css'
})
export class ReviewsBgsComponent {
  @Input() data!: ReviewsData;

  getRating(stars: number): number[] {
    return Array(Math.floor(stars)).fill(0);
  }

  getHalfStar(stars: number): boolean {
    return stars % 1 !== 0;
  }
}
