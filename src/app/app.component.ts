import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() value: number;
  @Input() scoreValue: number;
  @Input() scoreCircleValue: number;
  @Input() liquidValue: number;

  constructor() {
    this.value = 5;
    this.scoreValue = 75;
    this.scoreCircleValue = 50;
    this.liquidValue = 30;
  }

  title = 'optiv';

  onValChange($event: Event) {
    try {
      const value = parseInt(($event.target as HTMLInputElement).value);
      if (!Number.isInteger(value)) {
        throw new Error('Not a number');
      }
      if (value > 10) {
        this.value = 10;
      } else if (value < 0) {
        this.value = 0;
      } else {
        this.value = value;
      }
    } catch (e) {
      this.value = 0;
    }
  }
  onScoreValChange($event: Event) {
    try {
      const value = parseInt(($event.target as HTMLInputElement).value);
      if (!Number.isInteger(value)) {
        throw new Error('Not a number');
      }
      if (value > 100) {
        this.scoreValue = 100;
      } else if (value < 0) {
        this.scoreValue = 0;
      } else {
        this.scoreValue = value;
      }
    } catch (e) {
      this.scoreValue = 0;
    }
  }
  onScoreCircleValChange($event: Event) {
    try {
      const value = parseInt(($event.target as HTMLInputElement).value);
      if (!Number.isInteger(value)) {
        throw new Error('Not a number');
      }
      if (value > 100) {
        this.scoreCircleValue = 100;
      } else if (value < 0) {
        this.scoreCircleValue = 0;
      } else {
        this.scoreCircleValue = value;
      }
    } catch (e) {
      this.scoreCircleValue = 0;
    }
  }

  onLiquidValChange($event: Event) {
    try {
      const value = parseInt(($event.target as HTMLInputElement).value);
      if (!Number.isInteger(value)) {
        throw new Error('Not a number');
      }
      if (value > 100) {
        this.liquidValue = 100;
      } else if (value < 0) {
        this.liquidValue = 0;
      } else {
        this.liquidValue = value;
      }
    } catch (e) {
      this.liquidValue = 0;
    }
  }
}
