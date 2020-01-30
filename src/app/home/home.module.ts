
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { effects, reducers } from '../store';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
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
