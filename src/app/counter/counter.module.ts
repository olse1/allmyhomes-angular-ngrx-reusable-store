import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './store/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { CounterEffects } from './store/counter.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCounter.featureKey, fromCounter.reducer),
    EffectsModule.forFeature([CounterEffects]),
  ],
  declarations: [MyCounterComponent],
  exports: [MyCounterComponent],
})
export class CounterModule {}
