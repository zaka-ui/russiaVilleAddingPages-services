import { Component, ElementRef, Input, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';


export interface AccordionData {
  title? : string ; 
  points? : string[];
  smallDesc? : string; 
}

export type AccordionDataType = AccordionData[];

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrl: './see-more.component.css'
})
export class SeeMoreComponent {
  @Input() accordionData: AccordionData[] = [
    {
      title: "",
      points: [],
      smallDesc : ""
    }
  ];

  // One isOpen per accordion
  isOpen: boolean[] = [];
  // One body element per accordion
  @ViewChildren('body') bodies!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
    // Initialize all accordions closed
    this.isOpen = this.accordionData.map(() => false);
  }

  toggle(index: number) {
    this.isOpen[index] = !this.isOpen[index];

    const body = this.bodies.toArray()[index].nativeElement;

    if (this.isOpen[index]) {
      const height = body.scrollHeight + 'px';
      this.renderer.setStyle(body, 'max-height', height);
      this.renderer.setStyle(body, 'padding', '30px');
    } else {
      this.renderer.setStyle(body, 'max-height', '0px');
      this.renderer.setStyle(body, 'padding', '0px 16px');
    }
  }
}
