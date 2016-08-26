import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from "./pages/home-page.component";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomePageComponent
    }];

export const routing = RouterModule.forRoot([...routes, ...routes]);
