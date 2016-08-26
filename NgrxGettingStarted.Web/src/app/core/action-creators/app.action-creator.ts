import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { LOAD_DOCTOR, LOAD_DOCTORS, REMOVE_DOCTOR } from "../actions";
import { DoctorService } from "../services";
import { Doctor } from "../models";

@Injectable()
export class AppActionCreator {
    constructor(
        private _doctorService: DoctorService,
        private _store: Store<any>) { }

    public getAllDoctors = () => {
        this._doctorService.getAll()
            .subscribe((data) => {
                this._store.dispatch({
                    type: LOAD_DOCTORS,
                    payload: data
                });
            }); 
    }

    public getById = (options: { id: number }) => {
        this._doctorService.getById({ id: options.id })
            .subscribe((data) => {
                this._store.dispatch({
                    type: LOAD_DOCTOR,
                    payload: data
                });
            });
    }

    public addOrUpdateDoctor = (options: { entity: Doctor}) => {
        this._doctorService.addOrUpdate({ entity: options.entity })
            .subscribe((data) => {
                this._store.dispatch({
                    type: LOAD_DOCTOR,
                    payload: data
                });
            }); 
    }

    public removeDoctor = (options: { id: number }) => {
        this._doctorService.remove({ id: options.id })
            .subscribe((data) => {
                this._store.dispatch({
                    type: REMOVE_DOCTOR,
                    payload: data
                });
            }); 
    }
}