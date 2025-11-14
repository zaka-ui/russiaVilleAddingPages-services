import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-gallery',
  templateUrl: './all-gallery.component.html',
  styleUrl: './all-gallery.component.css'
})
export class AllGalleryComponent {
  @Input() images: Array<{ id: number; src: string; alt: string }> = [];
  @Input() instagramLink: string = '';

}
