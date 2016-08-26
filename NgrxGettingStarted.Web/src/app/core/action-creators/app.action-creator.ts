import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { LOAD_DOCTOR, LOAD_DOCTORS, REMOVE_DOCTOR } from "../actions";
import { DoctorService } from "../services";
import { Doctor } from "../models";
import { Observable } from "rxjs";

@Injectable()
export class AppActionCreator {
    constructor(
        private _doctorService: DoctorService,
        private _store: Store<any>) { }

    public getAllDoctors(): Observable<boolean> {
        return this._doctorService
            .getAll()
            .map((data) => {
                this._store.dispatch({
                    type: LOAD_DOCTORS,
                    payload: data
                });
                return true;
            });
    }

    public getById (options: { id: number }): Observable<boolean> {
        return this._doctorService.getById({ id: options.id })
            .map((data) => {
                this._store.dispatch({
                    type: LOAD_DOCTOR,
                    payload: data
                });
                return true;
            });
    }

    public addOrUpdateDoctor (options: { entity: Doctor}): Observable<boolean> {
        return this._doctorService.addOrUpdate({ entity: options.entity })
            .map((data) => {
                this._store.dispatch({
                    type: LOAD_DOCTOR,
                    payload: data
                });
                return true;
            }); 

    }

    public removeDoctor(options: { id: number }): Observable<boolean> {
        return this._doctorService.remove({ id: options.id })
            .map((data) => {
                this._store.dispatch({
                    type: REMOVE_DOCTOR,
                    payload: data
                });
                return true;
            }); 
    }
}