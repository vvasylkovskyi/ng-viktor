import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { LayoutRouting } from './layout.routing';


@NgModule({
  imports: [
    CommonModule,
    LayoutRouting,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
  ],
  providers: [
  ],
})

export class LayoutModule { }
