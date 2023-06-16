import { Component, Input } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-score-circle',
  templateUrl: './score-circle.component.html',
  styleUrls: ['./score-circle.component.css']
})
export class ScoreCircleComponent {
  @Input() value: number;
  @Input() min: number;
  @Input() max: number;

  constructor(private utilityService: UtilityService) {
    this.value = 5;
    this.min = 0;
    this.max = 10;
  }

  ngOnChanges(changes: any) {
    this.value = changes.value.currentValue;
  }

  getRatio() {
    return (this.value - this.min) / (this.max - this.min);
  }

  get progress() {
    return `${(this.getRatio() * 100).toFixed(0)}%`;
  }

  get color() {
    const val = this.getRatio();
    if (val >= 0.5) {
      return this.utilityService.lerpColor((val-0.5)*2, {r: 247, g: 186, b: 30}, {r: 0, g: 180, b: 42});
    }
    return this.utilityService.lerpColor(val*2, {r:245, g:63, b:63}, {r: 247, g: 186, b: 30});
  }

  get dash() {
    return 2 * Math.PI * this.getRatio() * 100;
  }

  get gradient() {
    if (this.getRatio() >= 0.5) {
      const midPoint = (0.5/this.getRatio()) * 100;
      return `conic-gradient(#f53f3f 0%, #f7ba1e ${midPoint}%, ${this.color} 100%, #0056b820)`;
    }
    return `conic-gradient(#f53f3f 0%, ${this.color} 100%, #0056b820)`;
  }
}
