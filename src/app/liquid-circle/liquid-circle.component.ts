import { Component, Input } from '@angular/core';
import { UtilityService } from '../utility.service';


@Component({
  selector: 'app-liquid-circle',
  templateUrl: './liquid-circle.component.html',
  styleUrls: ['./liquid-circle.component.css']
})
export class LiquidCircleComponent {
  @Input() value: number;
  min: number;
  max: number;

  constructor(private utilityService: UtilityService) {
    this.value = 0;
    this.min = 0;
    this.max = 100;
  }

  ngOnChanges(changes: any) {
    this.value = changes.value.currentValue;
  }

  getRatio() {
    return (this.value - this.min) / (this.max - this.min);
  }

  get progress() {
    return `${this.percent}%`;
  }

  get percent() {
    return `${(this.getRatio() * 100).toFixed(0)}`;
  }

  get color() {
    const val = this.getRatio();
    if (val >= 0.5) {
      return this.utilityService.lerpColor((val-0.5)*2, {r: 247, g: 186, b: 30}, {r: 0, g: 180, b: 42});
    }
    return this.utilityService.lerpColor(val*2, {r:245, g:63, b:63}, {r: 247, g: 186, b: 30});
  }

  get textColor() {
    return this.getRatio() >= 0.7 ? '#fff' : '#000';
  }
}
