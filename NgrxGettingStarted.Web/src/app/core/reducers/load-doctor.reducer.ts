import { Action } from "@ngrx/store";
import { LOAD_DOCTOR } from "../actions";
import { initialState } from "./initial-state";

export const loadDoctor = (state = initialState, action: Action) => {
    switch (action.type) {

        case LOAD_DOCTOR:
            break;

        default:
            return state;
    }
}
