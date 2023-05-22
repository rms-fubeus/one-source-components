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
  
  lerpColor(ratio: number, color1: any, color2: any) {
    
    const r = Math.round((1 - ratio) * color1.r + ratio * color2.r);
    const g = Math.round((1 - ratio) * color1.g + ratio * color2.g);
    const b = Math.round((1 - ratio) * color1.b + ratio * color2.b);
    return `rgb(${r}, ${g}, ${b})`;
  }

  get color() {
    const val = this.getRatio();
    if (val >= 0.5) {
      return this.lerpColor((val-0.5)*2, {r: 247, g: 186, b: 30}, {r: 0, g: 180, b: 42});
    }
    return this.lerpColor(val*2, {r:245, g:63, b:63}, {r: 247, g: 186, b: 30});
  }

  get gradient() {
    if (this.getRatio() >= 0.5) {
      const midPoint = (0.5/this.getRatio()) * 100;
      return `linear-gradient(90deg, #f53f3f 0%, #f7ba1e ${midPoint}%, ${this.color} 100%), #0056b820`;
    }
    return `linear-gradient(90deg, #f53f3f 0%, ${this.color} 100%), #0056b820`;
  }
}
