import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  lerpColor(ratio: number, color1: any, color2: any) {
    const r = Math.round((1 - ratio) * color1.r + ratio * color2.r);
    const g = Math.round((1 - ratio) * color1.g + ratio * color2.g);
    const b = Math.round((1 - ratio) * color1.b + ratio * color2.b);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
