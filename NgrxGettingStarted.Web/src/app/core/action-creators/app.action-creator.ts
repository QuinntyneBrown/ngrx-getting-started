import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { LOAD_DOCTOR } from "../actions";
import { DoctorService } from "../services";

@Injectable()
export class AppActionCreator {
    constructor(
        private _doctorService: DoctorService,
        private _store: Store<any>) { }

    public getAllDoctors = () => {
        this._doctorService.getAll()
            .subscribe((data) => {
                this._store.dispatch({
                    type: LOAD_DOCTOR,
                    payload: data
                });
            }); 
    }
}