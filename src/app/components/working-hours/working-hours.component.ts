import { Component, Input } from '@angular/core';

export interface WorkingHours {
  day: string;
  time: string;
}

export interface WorkingHoursData {
  title: string;
  hours: WorkingHours[];
  buttonText: string;
  buttonLink: string;
  leftImage: string;
  rightImage: string;
}

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.css']
})
export class WorkingHoursComponent {
  @Input() data!: WorkingHoursData;
}
