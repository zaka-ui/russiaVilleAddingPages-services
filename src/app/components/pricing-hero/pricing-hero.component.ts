import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-hero',
  templateUrl: './pricing-hero.component.html',
  styleUrls: ['./pricing-hero.component.css']
})
export class PricingHeroComponent {
  @Input() title!: string ;
  @Input() backgroundImage!: string ;
  @Input() breadcrumbs!: { label: string; url?: string }[] ;
}
