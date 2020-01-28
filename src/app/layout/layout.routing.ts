import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Home
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: '../home/home.module#HomeModule' },

    ]
  }
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
