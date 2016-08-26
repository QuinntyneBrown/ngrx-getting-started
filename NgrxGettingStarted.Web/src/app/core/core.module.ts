import { NgModule } from '@angular/core';

import { ActionReducer, Action, combineReducers, provideStore } from '@ngrx/store';
import { compose } from "@ngrx/core/compose";
import { localStorageSync } from "ngrx-store-localstorage";

import { loadDoctor } from "./reducers";

import { DoctorService } from "./services";

import { AppActionCreator } from "./action-creators";

const declarables = [];

const providers = [
    provideStore(
        compose(
            localStorageSync(['doctors']),
            combineReducers
        )({ loadDoctor })
    ),
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
