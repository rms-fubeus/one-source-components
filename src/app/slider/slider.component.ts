import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() initalValue: number;
  @Input() maxValue: number;
  @Input() minValue: number;
  @Input() stepValue: number;
  @Input() disabled: boolean;
  @Input() label: string;
  currentValue: any;

  constructor() { 
    this.initalValue = 0;
    this.maxValue = 100;
    this.minValue = 0;
    this.stepValue = 1;
    this.disabled = false;
    this.label = '';
  }

  ngOnInit() {
    this.currentValue = this.initalValue;
  }

  onSliderChange($event: Event) {
    this.currentValue = ($event.target as HTMLInputElement).value;
  }

  get progress() {
    return `${(this.currentValue - this.minValue) / (this.maxValue - this.minValue) * 100}%`;
  }

  get markers() {
    let markers = [];
    for (let i = this.minValue; i <= this.maxValue; i += (this.maxValue - this.minValue)/10) {
      markers.push(i);
    }
    return markers;
  }
}
