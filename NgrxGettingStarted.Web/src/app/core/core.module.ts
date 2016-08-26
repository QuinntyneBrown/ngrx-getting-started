import { NgModule } from '@angular/core';
import { provideStore } from '@ngrx/store';

import { loadDoctor } from "./reducers";


import { DoctorService } from "./services";

import { AppActionCreator } from "./action-creators";

const declarables = [];

const providers = [
    provideStore(loadDoctor),
    DoctorService,
    AppActionCreator
];

@NgModule({
    imports: [],
    declarations: [declarables],
    exports: [declarables],
    providers: providers
})
export class CoreModule { }
