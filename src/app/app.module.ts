import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ScoreBarComponent } from './score-bar/score-bar.component';
import { ScoreCircleComponent } from './score-circle/score-circle.component';
import { LiquidCircleComponent } from './liquid-circle/liquid-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ScoreBarComponent,
    ScoreCircleComponent,
    LiquidCircleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
