import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// import { effects, reducers } from '../store';
import { HomeComponent } from "./home.component";
import { HomeRouting } from "./home.routing";
import { HeaderComponent } from "./header/header.component";
import { WorkCardComponent } from "./work-card/work-card.component";

@NgModule({
  declarations: [HomeComponent, HeaderComponent, WorkCardComponent],
  imports: [CommonModule, HomeRouting],
  providers: []
})
export class HomeModule {}
