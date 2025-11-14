import { Component, Input } from '@angular/core';

export interface PricingItem {
  name: string;
  note?: string;
  price: string;
}

export interface PricingCategory {
  category?: string;
  items: PricingItem[];
}

export interface PricingColumn {
  title?: string;
  categories?: PricingCategory[];
  items?: PricingItem[];
}

export interface PricingData {
  subtitle: string;
  title: string;
  description: string;
  leftColumn: PricingColumn;
  rightColumn: PricingColumn;
  blockInfo: string;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  @Input() data!: PricingData;
}
