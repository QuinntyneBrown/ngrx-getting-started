import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { CoreModule } from "./core/core.module";
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomePageComponent } from "./pages";

import { DoctorListComponent, DoctorDetailComponent } from "./components";


const declarables = [
    AppComponent,

    DoctorListComponent,
    DoctorDetailComponent,

    HomePageComponent
]

@NgModule({
    imports: [routing, BrowserModule, CoreModule],
    declarations: [declarables],
    exports: [declarables],
    bootstrap:[AppComponent]
})
export class AppModule { }

export * from "./environment";
