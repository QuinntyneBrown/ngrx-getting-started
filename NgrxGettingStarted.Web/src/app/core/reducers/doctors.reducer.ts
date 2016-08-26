import { Action } from "@ngrx/store";
import { LOAD_DOCTOR, LOAD_DOCTORS } from "../actions";
import { initialState } from "./initial-state";
import { AppState } from "./app-state";
import { addOrUpdate } from "../utilities";
import { Doctor } from "../models";

export const doctorsReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {

        case LOAD_DOCTOR:
            var newOrExistingDoctor: Doctor = action.payload;            
            var doctors = state.doctors;
            addOrUpdate({ items: doctors, item: newOrExistingDoctor });            
            return Object.assign({}, state, {
                doctors: doctors
            });

        case LOAD_DOCTORS:
            var newOrExistingDoctors: Array<Doctor> = action.payload;
            var doctors = state.doctors;
            newOrExistingDoctors.forEach(doctor => { addOrUpdate({ items: doctors, item: doctor }); });
            return Object.assign({}, state, {
                doctors: doctors
            });

        default:
            return state;
    }
}
