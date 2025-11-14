import { Component, Input } from '@angular/core';

export interface GalleryImage {
  id: string;
  src: string;
}

export interface GalleryData {
  instagramHandle: string;
  images: GalleryImage[];
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() data!: GalleryData;
}
