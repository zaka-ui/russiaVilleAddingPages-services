import { Component, Input } from '@angular/core';

export interface Review {
  stars: number;
  text: string;
  author: string;
  avatar: string;
  date?: string;
  title?: string;
}

export interface ReviewsData {
  subtitle: string;
  title: string;
  description: string;
  reviews: Review[];
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  @Input() data!: ReviewsData;

  getRating(stars: number): number[] {
    return Array(Math.floor(stars)).fill(0);
  }

  getHalfStar(stars: number): boolean {
    return stars % 1 !== 0;
  }
}
