import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { CoreModule } from "./core/core.module";
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomePageComponent } from "./pages/home-page.component";

const declarables = [
    AppComponent,

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
