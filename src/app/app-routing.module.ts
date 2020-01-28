import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    ],
      {
        // preloadingStrategy:PreloadAllModules,
        // Tell the router to use the HashLocationStrategy.
        useHash: true,
        // We're going to dynamically set the param-inheritance strategy based
        // on the state of the browser location. This way, the user can jump back
        // and forth between the two different modes.
        paramsInheritanceStrategy: 'always'
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
