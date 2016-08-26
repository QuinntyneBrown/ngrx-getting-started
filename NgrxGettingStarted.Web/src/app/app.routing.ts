import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from "./pages/home-page.component";

import { CanActivateHomePageGuard } from "./guards";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomePageComponent,
        canActivate: [CanActivateHomePageGuard]
    }];

export const routing = RouterModule.forRoot([...routes, ...routes]);
