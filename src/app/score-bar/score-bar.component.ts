import { Component, Input } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-score-bar',
  templateUrl: './score-bar.component.html',
  styleUrls: ['./score-bar.component.css']
})
export class ScoreBarComponent {
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

}
