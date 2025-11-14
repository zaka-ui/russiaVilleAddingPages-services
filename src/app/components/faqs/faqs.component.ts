import { Component, Input } from '@angular/core';

export interface FAQItem {
  question: string;
  answer: string;
  isActive?: boolean;
}

export interface FAQsData {
  subtitle: string;
  title: string;
  faqs: FAQItem[];
  contactLink: string;
  contactText: string;
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  @Input() data!: FAQsData;

  toggleAccordion(item: FAQItem) {
    item.isActive = !item.isActive;
  }
}
