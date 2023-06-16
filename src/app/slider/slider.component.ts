import { Component, Input, OnChanges } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnChanges {
  @Input() initalValue: number;
  @Input() maxValue: number;
  @Input() minValue: number;
  @Input() stepValue: number;
  @Input() disabled: boolean;
  @Input() label: string;
  currentValue: any;

  constructor(private utilityService: UtilityService) { 
    this.initalValue = 0;
    this.maxValue = 100;
    this.minValue = 0;
    this.stepValue = 1;
    this.disabled = false;
    this.label = '';
  }

  ngOnChanges(changes: any) {
    this.currentValue = changes.initalValue.currentValue;
  }

  ngOnInit() {
    this.currentValue = this.initalValue;
  }

  onSliderChange($event: Event) {
    this.currentValue = ($event.target as HTMLInputElement).value;
  }

  get progress() {
    return `${this.getRatio() * 100}%`;
  }

  getRatio() {
    return (this.currentValue - this.minValue) / (this.maxValue - this.minValue);
  }

  get markers() {
    let markers = [];
    for (let i = this.minValue; i <= this.maxValue; i += (this.maxValue - this.minValue)/10) {
      markers.push(i);
    }
    return markers;
  }

  get color() {
    const val = this.getRatio();
    if (val >= 0.5) {
      return this.utilityService.lerpColor((val-0.5)*2, {r: 247, g: 186, b: 30}, {r: 0, g: 180, b: 42});
    }
    return this.utilityService.lerpColor(val*2, {r:245, g:63, b:63}, {r: 247, g: 186, b: 30});
  }

  get gradient() {
    if (this.getRatio() >= 0.5) {
      const midPoint = (0.5/this.getRatio()) * 100;
      return `linear-gradient(90deg, #f53f3f 0%, #f7ba1e ${midPoint}%, ${this.color} 100%), #0056b820`;
    }
    return `linear-gradient(90deg, #f53f3f 0%, ${this.color} 100%), #0056b820`;
  }
}
