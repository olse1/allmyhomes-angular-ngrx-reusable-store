import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './store/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCounter.featureKey, fromCounter.reducer),
  ],
  declarations: [MyCounterComponent],
  exports: [MyCounterComponent],
})
export class CounterModule {}
