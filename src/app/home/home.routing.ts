

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const HOME_ROUTING: Routes = [
    {
        path: '',
        component: HomeComponent
    },
];

export const HomeRouting = RouterModule.forChild(HOME_ROUTING);
