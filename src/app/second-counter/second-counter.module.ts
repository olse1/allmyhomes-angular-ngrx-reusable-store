import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';
import * as fromCounter from './store/second-counter.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCounter.featureKey, fromCounter.reducer),
  ],
  declarations: [MySecondCounterComponent],
  exports: [MySecondCounterComponent],
})
export class SecondCounterModule {}