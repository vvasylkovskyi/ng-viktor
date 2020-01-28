
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { effects, reducers } from '../store';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRouting
  ],
  providers: [
  ]
})

export class HomeModule {

}
