import { Component, Input } from '@angular/core';

export interface StatisticBlock {
  number: string;
  suffix?: string;
  label: string;
}

export interface StatisticsData {
  blocks: StatisticBlock[];
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Input() data!: StatisticsData;
}
